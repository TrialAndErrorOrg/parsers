'use client'

import { useState } from 'react'
import { useCredentialsStore } from '../lib/store'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export function CredentialsPrompt({ onSkip }: { onSkip: () => void }) {
  const { setToken, setEndpoint } = useCredentialsStore()
  const [localToken, setLocalToken] = useState('')
  const [localEndpoint, setLocalEndpoint] = useState('')

  const handleSave = () => {
    setToken(localToken)
    setEndpoint(localEndpoint)
  }

  const isValid = localToken.length > 0 && /^https:\/\/.*\/api\/v1$/.test(localEndpoint)

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Connect to OJS</CardTitle>
        <CardDescription>
          Enter your OJS API credentials to search submissions and auto-populate metadata.
          You can also skip this and upload a .docx file directly.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="setup-token">API Token</Label>
          <Input
            id="setup-token"
            type="password"
            placeholder="Your OJS API token"
            value={localToken}
            onChange={(e) => setLocalToken(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="setup-endpoint">API Endpoint</Label>
          <Input
            id="setup-endpoint"
            placeholder="https://your-journal.com/api/v1"
            value={localEndpoint}
            onChange={(e) => setLocalEndpoint(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Must end with /api/v1
          </p>
        </div>
        <div className="flex gap-2 pt-2">
          <Button onClick={handleSave} disabled={!isValid} className="flex-1">
            Save &amp; Connect
          </Button>
          <Button variant="outline" onClick={onSkip}>
            Skip
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
