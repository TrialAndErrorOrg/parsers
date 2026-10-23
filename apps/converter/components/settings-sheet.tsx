import { Settings } from 'lucide-react'
import { useApiKeyStore } from '../lib/store'
import { useOjsAccess } from '../lib/ojs'
import { ApiKeyHelp } from './credentials-prompt'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export function SettingsSheet() {
  const access = useOjsAccess()
  const { apiKey, setApiKey } = useApiKeyStore()

  if (!access) return null

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="OJS settings">
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>OJS Settings</SheetTitle>
          <SheetDescription>
            Your own OJS API key, saved in this browser only. Clear it to disconnect.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ojs-api-key">API Key</Label>
            <Input
              id="ojs-api-key"
              type="password"
              autoComplete="off"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          <ApiKeyHelp url={access.url} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
