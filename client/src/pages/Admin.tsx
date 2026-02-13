import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock, Settings, Layout, MessageSquare, LogOut, Save, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function AdminPanel() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  // Content state (persisted in localStorage for this demo)
  const [siteData, setSiteData] = useState(() => {
    const saved = localStorage.getItem("site_content");
    return saved ? JSON.parse(saved) : {
      hero: {
        title: "Hello, I'm Tausur",
        tagline: "Exploring the digital frontier through ethical hacking..."
      },
      about: {
        college: "Notre Dame College",
        school: "Comilla Zilla School"
      }
    };
  });

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (auth === "true") setIsAuthorized(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_ADMIN_PASSKEY) {
      setIsAuthorized(true);
      localStorage.setItem("admin_auth", "true");
      toast({ title: "Access Granted", description: "Welcome to the control center." });
    } else {
      toast({ title: "Access Denied", description: "Invalid credentials.", variant: "destructive" });
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    localStorage.removeItem("admin_auth");
    setLocation("/");
  };

  const saveContent = () => {
    localStorage.setItem("site_content", JSON.stringify(siteData));
    toast({ title: "Changes Saved", description: "Site content has been updated successfully." });
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-primary/20 bg-secondary/10 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="text-primary w-6 h-6" />
            </div>
            <CardTitle className="font-mono text-2xl tracking-tighter">System Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Encryption Key"
                  className="bg-background/50 border-primary/20 font-mono"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full font-mono font-bold">Authenticate</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 font-mono">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex justify-between items-center border-b border-primary/10 pb-6">
          <div className="flex items-center gap-3">
            <Settings className="text-primary w-8 h-8" />
            <h1 className="text-3xl font-bold tracking-tighter">Admin Control</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2" onClick={saveContent}>
              <Save className="w-4 h-4" /> Save Changes
            </Button>
            <Button variant="ghost" size="icon" onClick={handleLogout} className="hover:text-destructive">
              <LogOut className="w-6 h-6" />
            </Button>
          </div>
        </header>

        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="bg-secondary/20 border border-primary/10">
            <TabsTrigger value="content" className="gap-2"><Layout className="w-4 h-4" /> Content</TabsTrigger>
            <TabsTrigger value="messages" className="gap-2"><MessageSquare className="w-4 h-4" /> Messages</TabsTrigger>
            <TabsTrigger value="security" className="gap-2"><Lock className="w-4 h-4" /> Security</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/10 bg-secondary/5">
                <CardHeader><CardTitle className="text-lg">Hero Section</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground uppercase">Main Title</label>
                    <Input 
                      value={siteData.hero.title} 
                      onChange={e => setSiteData({...siteData, hero: {...siteData.hero, title: e.target.value}})}
                      className="bg-background/50 border-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground uppercase">Tagline</label>
                    <Textarea 
                      value={siteData.hero.tagline} 
                      onChange={e => setSiteData({...siteData, hero: {...siteData.hero, tagline: e.target.value}})}
                      className="bg-background/50 border-primary/20 min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/10 bg-secondary/5">
                <CardHeader><CardTitle className="text-lg">Education Details</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground uppercase">Current College</label>
                    <Input 
                      value={siteData.about.college} 
                      onChange={e => setSiteData({...siteData, about: {...siteData.about, college: e.target.value}})}
                      className="bg-background/50 border-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground uppercase">Previous School</label>
                    <Input 
                      value={siteData.about.school} 
                      onChange={e => setSiteData({...siteData, about: {...siteData.about, school: e.target.value}})}
                      className="bg-background/50 border-primary/20"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="border-primary/10 bg-secondary/5">
              <CardHeader>
                <CardTitle className="text-lg">Received Transmissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground border-2 border-dashed border-primary/10 rounded-lg">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  {/* <p>Monitoring secure channels. No new messages detected.</p> */}
                  <a href="https://console.neon.tech/app/projects/damp-bird-19413831/branches/br-shy-bread-a1nkixue/tables?database=neondb" target="_blank">click to see db</a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="border-primary/10 bg-secondary/5 max-w-xl">
              <CardHeader>
                <CardTitle className="text-lg">System Credentials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                  Warning: Changing system credentials may affect availability.
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground uppercase">Admin Password</label>
                  <Input 
                    type="password" 
                    value="********" 
                    disabled 
                    className="bg-background/50 border-primary/20"
                  />
                </div>
                <Button variant="outline" className="w-full opacity-50 cursor-not-allowed">Reset Key</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
