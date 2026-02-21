'use client'

import { Settings } from 'lucide-react'
import { useCredentialsStore } from '../lib/store'
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
  const { token, endpoint, setToken, setEndpoint } = useCredentialsStore()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>OJS Settings</SheetTitle>
          <SheetDescription>
            Configure your OJS API credentials. These are saved locally in your browser.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ojs-token">API Token</Label>
            <Input
              id="ojs-token"
              type="password"
              placeholder="Your OJS API token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ojs-endpoint">API Endpoint</Label>
            <Input
              id="ojs-endpoint"
              placeholder="https://your-journal.com/api/v1"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Must end with /api/v1
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
