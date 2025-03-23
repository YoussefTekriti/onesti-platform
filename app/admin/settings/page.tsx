"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, RefreshCw, AlertTriangle } from "lucide-react"
import AdminHeader from "@/components/admin/admin-header"
import { useToast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("general")
  const [isLoading, setIsLoading] = useState(false)

  // General settings
  const [siteName, setSiteName] = useState("Onesti Platform")
  const [siteDescription, setSiteDescription] = useState("Child development assessment and support platform")
  const [contactEmail, setContactEmail] = useState("contact@onesti.com")
  const [supportPhone, setSupportPhone] = useState("+1 (555) 123-4567")
  const [maintenanceMode, setMaintenanceMode] = useState(false)

  // Email settings
  const [emailProvider, setEmailProvider] = useState("smtp")
  const [smtpHost, setSmtpHost] = useState("smtp.onesti.com")
  const [smtpPort, setSmtpPort] = useState("587")
  const [smtpUsername, setSmtpUsername] = useState("noreply@onesti.com")
  const [smtpPassword, setSmtpPassword] = useState("••••••••••••")
  const [defaultSenderName, setDefaultSenderName] = useState("Onesti Support")
  const [defaultSenderEmail, setDefaultSenderEmail] = useState("support@onesti.com")

  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [appointmentReminders, setAppointmentReminders] = useState(true)
  const [assessmentResults, setAssessmentResults] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)
  const [newsUpdates, setNewsUpdates] = useState(true)
  const [reminderTime, setReminderTime] = useState("24")

  // Security settings
  const [requireMfa, setRequireMfa] = useState(false)
  const [sessionTimeout, setSessionTimeout] = useState("30")
  const [passwordPolicy, setPasswordPolicy] = useState("medium")
  const [loginAttempts, setLoginAttempts] = useState("5")

  const handleSaveSettings = () => {
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Settings saved",
        description: "Your changes have been successfully saved",
      })
    }, 1500)
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Settings" description="Configure platform settings and preferences" />

      <main className="p-6">
        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="site-name">Site Name</Label>
                    <Input 
                      id="site-name" 
                      value={siteName} 
                      onChange={(e) => setSiteName(e.target.value)} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input 
                      id="contact-email" 
                      type="email" 
                      value={contactEmail} 
                      onChange={(e) => setContactEmail(e.target.value)} 
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="site-description">Site Description</Label>
                    <Textarea 
                      id="site-description" 
                      value={siteDescription} 
                      onChange={(e) => setSiteDescription(e.target.value)} 
                      rows={3} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="support-phone">Support Phone</Label>
                    <Input 
                      id="support-phone" 
                      value={supportPhone} 
                      onChange={(e) => setSupportPhone(e.target.value)} 
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                      <Switch 
                        id="maintenance-mode" 
                        checked={maintenanceMode} 
                        onCheckedChange={setMaintenanceMode} 
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      When enabled, the site will display a maintenance message to visitors
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="email" className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Email Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-provider">Email Provider</Label>
                  <Select value={emailProvider} onValueChange={setEmailProvider}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smtp">SMTP Server</SelectItem>
                      <SelectItem value="mailgun">Mailgun</SelectItem>
                      <SelectItem value="sendgrid">SendGrid</SelectItem>
                      <SelectItem value="ses">Amazon SES</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="smtp-host">SMTP Host</Label>
                    <Input 
                      id="smtp-host" 
                      value={smtpHost} 
                      onChange={(e) => setSmtpHost(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-port">SMTP Port</Label>
                    <Input 
                      id="smtp-port" 
                      value={smtpPort} 
                      onChange={(e) => setSmtpPort(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-username">SMTP Username</Label>
                    <Input 
                      id="smtp-username" 
                      value={smtpUsername} 
                      onChange={(e) => setSmtpUsername(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smtp-password">SMTP Password</Label>
                    <Input 
                      id="smtp-password" 
                      type="password"
                      value={smtpPassword} 
                      onChange={(e) => setSmtpPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="default-sender-name">Default Sender Name</Label>
                    <Input 
                      id="default-sender-name" 
                      value={defaultSenderName} 
                      onChange={(e) => setDefaultSenderName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="default-sender-email">Default Sender Email</Label>
                    <Input 
                      id="default-sender-email" 
                      type="email"
                      value={defaultSenderEmail} 
                      onChange={(e) => setDefaultSenderEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="mr-2">
                    <RefreshCw className="mr-2 h-4 w-4" /> Test Connection
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <Switch 
                        id="email-notifications" 
                        checked={emailNotifications} 
                        onCheckedChange={setEmailNotifications} 
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enable or disable all email notifications
                    </p>
                  </div>

                  <div className="pl-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="appointment-reminders">Appointment Reminders</Label>
                        <Switch 
                          id="appointment-reminders" 
                          checked={appointmentReminders} 
                          onCheckedChange={setAppointmentReminders}
                          disabled={!emailNotifications}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="assessment-results">Assessment Results</Label>
                        <Switch 
                          id="assessment-results" 
                          checked={assessmentResults} 
                          onCheckedChange={setAssessmentResults}
                          disabled={!emailNotifications}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="marketing-emails">Marketing Emails</Label>
                        <Switch 
                          id="marketing-emails" 
                          checked={marketingEmails} 
                          onCheckedChange={setMarketingEmails}
                          disabled={!emailNotifications}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="news-updates">News & Updates</Label>
                        <Switch 
                          id="news-updates" 
                          checked={newsUpdates} 
                          onCheckedChange={setNewsUpdates}
                          disabled={!emailNotifications}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Label htmlFor="reminder-time">Appointment Reminder Time (hours)</Label>
                    <Select value={reminderTime} onValueChange={setReminderTime} disabled={!emailNotifications || !appointmentReminders}>
                      <SelectTrigger id="reminder-time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hour before</SelectItem>
                        <SelectItem value="2">2 hours before</SelectItem>
                        <SelectItem value="6">6 hours before</SelectItem>
                        <SelectItem value="12">12 hours before</SelectItem>
                        <SelectItem value="24">24 hours before</SelectItem>
                        <SelectItem value="48">48 hours before</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="require-mfa">Require Multi-Factor Authentication</Label>
                    <Switch 
                      id="require-mfa" 
                      checked={requireMfa} 
                      onCheckedChange={setRequireMfa} 
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Require staff and administrators to use MFA when logging in
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Select value={sessionTimeout} onValueChange={setSessionTimeout}>
                    <SelectTrigger id="session-timeout">
                      <SelectValue placeholder="Select timeout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                      <SelectItem value="240">4 hours</SelectItem>
                      <SelectItem value="480">8 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password-policy">Password Complexity</Label>
                  <Select value={passwordPolicy} onValueChange={setPasswordPolicy}>
                    <SelectTrigger id="password-policy">
                      <SelectValue placeholder="Select policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Basic (8+ characters)</SelectItem>
                      <SelectItem value="medium">Medium (8+ chars, upper/lowercase, numbers)</SelectItem>
                      <SelectItem value="high">High (12+ chars, upper/lowercase, numbers, symbols)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-attempts">Failed Login Attempts Before Lockout</Label>
                  <Select value={loginAttempts} onValueChange={setLoginAttempts}>
                    <SelectTrigger id="login-attempts">
                      <SelectValue placeholder="Select attempts" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 attempts</SelectItem>
                      <SelectItem value="5">5 attempts</SelectItem>
                      <SelectItem value="10">10 attempts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Security Notice</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Changes to security settings will be logged and may require users to re-authenticate.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end">
          <Button onClick={handleSaveSettings} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Settings"}
          </Button>
        </div>
      </main>
    </div>
  )
} 