import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { useApiKeyStore } from '../lib/store'
import { useOjsAccess } from '../lib/ojs'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

/** Where an editor finds their OJS API key */
export function ApiKeyHelp({ url }: { url: string }) {
  return (
    <ol className="list-decimal space-y-1 pl-5 text-xs text-muted-foreground">
      <li>
        Log in to{' '}
        <a href={url} target="_blank" rel="noreferrer" className="underline">
          OJS
        </a>{' '}
        with your own account.
      </li>
      <li>
        Open{' '}
        <a href={`${url}/user/profile`} target="_blank" rel="noreferrer" className="underline">
          your profile
        </a>{' '}
        (your name, top right, then View Profile) and go to the <strong>API Key</strong> tab.
      </li>
      <li>
        Tick <em>Enable external applications with the API key to access this account</em> and{' '}
        <em>Generate new API key</em>, then click <strong>Save</strong>.
      </li>
      <li>Copy the key that appears and paste it here.</li>
    </ol>
  )
}

export function CredentialsPrompt({ onSkip }: { onSkip: () => void }) {
  const access = useOjsAccess()
  const { setApiKey } = useApiKeyStore()
  const [localKey, setLocalKey] = useState('')
  const [signingIn, setSigningIn] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!access) return null

  const handleSignIn = async () => {
    setSigningIn(true)
    setError(null)
    try {
      await access.signIn()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Sign-in failed')
    } finally {
      setSigningIn(false)
    }
  }

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Connect to OJS</CardTitle>
        <CardDescription>
          Search submissions and fill in their metadata from OJS. You can also skip this and upload
          a .docx file directly.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!access.signedIn ? (
          <>
            <p className="text-sm">First sign in with your Center of Trial &amp; Error account.</p>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <div className="flex gap-2 pt-2">
              <Button onClick={handleSignIn} disabled={signingIn} className="flex-1">
                {signingIn && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign in with Microsoft
              </Button>
              <Button variant="outline" onClick={onSkip}>
                Skip
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <Label htmlFor="setup-api-key">Your OJS API key</Label>
              <Input
                id="setup-api-key"
                type="password"
                autoComplete="off"
                value={localKey}
                onChange={(e) => setLocalKey(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                It stays in this browser. OJS records what you do with it under your name.
              </p>
            </div>
            <ApiKeyHelp url={access.url} />
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => setApiKey(localKey)}
                disabled={!localKey.trim()}
                className="flex-1"
              >
                Save &amp; Connect
              </Button>
              <Button variant="outline" onClick={onSkip}>
                Skip
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
