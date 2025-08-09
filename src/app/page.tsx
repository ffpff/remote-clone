import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, MapPin, DollarSign, Heart, Star, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between container py-4 bg-background border-b border-border">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold logo-font">
            <span className="text-foreground">remote</span>
            <span className="text-remoteok-red">OK</span>
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="outline" className="hidden md:inline-flex bg-blue-600 text-white border-blue-600 hover:bg-blue-700 text-sm">
            Health Insurance
          </Button>
          <Button className="bg-remoteok-red text-remoteok-red-foreground hover:bg-remoteok-red-600 text-sm md:text-base">
            <span className="hidden md:inline">Post a remote job →</span>
            <span className="md:hidden">Post Job</span>
          </Button>
          <Button variant="outline" className="text-sm md:text-base">Log In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-64 md:h-72 lg:h-80 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/1803094165/821851113.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center hero-title animate-fade-in">
            find a <span className="font-black">remote job</span><br />
            work from <span className="font-black">anywhere</span>
          </h2>
          <div className="flex items-center bg-white rounded-full px-4 py-3 w-full max-w-md lg:max-w-lg shadow-lg animate-slide-up">
            <Search className="text-muted-foreground mr-3" size={20} />
            <Input
              placeholder="senior"
              className="border-0 text-base lg:text-lg text-foreground placeholder:text-muted-foreground focus-visible:ring-0 bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-banner container py-6 text-center">
        <p className="text-foreground mb-4">
          📢 Hiring remotely? Reach <span className="font-bold underline">3,900,000+</span> remote workers on the
          <span className="font-bold"> 📍 #1 Remote Job Board</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Button className="bg-remoteok-red text-remoteok-red-foreground hover:bg-remoteok-red-600">
            Post a remote job →
          </Button>
          <Button variant="outline">Hide this</Button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-muted-foreground">
          <span className="text-sm font-medium">trusted by</span>
          <img src="https://ext.same-assets.com/1803094165/2636456894.webp" alt="Microsoft" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://ext.same-assets.com/1803094165/1863955948.webp" alt="Amazon" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://ext.same-assets.com/1803094165/1750519746.webp" alt="Shopify" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://ext.same-assets.com/1803094165/63518253.webp" alt="Intercom" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://ext.same-assets.com/1803094165/2529836459.webp" alt="IBM" className="h-6 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter-banner">
        <div className="container py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-remoteok-teal font-bold">📧</span>
              </div>
              <span className="text-white font-medium">Nomad Insurance by SafetyWing</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-white text-sm lg:text-base">Get new remote jobs sent to</span>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Type your email..."
                  className="bg-white text-foreground w-64"
                />
                <Button className="bg-remoteok-red text-remoteok-red-foreground hover:bg-remoteok-red-600">Subscribe</Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">✕</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container py-4">
          <div className="flex items-center gap-3 md:gap-6 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                <span className="text-background text-sm">🔧</span>
              </div>
              <Button variant="ghost" className="text-foreground text-sm md:text-base whitespace-nowrap">
                Search ▼
              </Button>
            </div>
            <Button variant="ghost" className="text-foreground text-sm md:text-base flex-shrink-0 whitespace-nowrap">
              📍 Location ▼
            </Button>
            <Button variant="ghost" className="text-foreground text-sm md:text-base flex-shrink-0 whitespace-nowrap">
              💰 Salary ▼
            </Button>
            <Button variant="ghost" className="text-foreground text-sm md:text-base flex-shrink-0 whitespace-nowrap">
              🎁 Benefits ▼
            </Button>
            <div className="ml-auto flex-shrink-0">
              <Button variant="ghost" className="text-foreground text-sm md:text-base whitespace-nowrap">
                📊 Sort by
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">👨‍💻 Engineer</Badge>
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">👨‍💼 Executive</Badge>
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">👨‍🎓 Senior</Badge>
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">👨‍💻 Developer</Badge>
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">💰 Finance</Badge>
            <Badge variant="outline" className="text-xs md:text-sm hover:bg-primary hover:text-primary-foreground transition-colors">⚙️ Sys Admin</Badge>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container py-6">
        {/* Nomad Insurance Ad */}
        <div className="bg-remoteok-teal rounded-lg p-6 mb-6 text-remoteok-teal-foreground shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-remoteok-teal text-xl">🛡️</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Nomad Insurance by SafetyWing</h3>
                <p className="text-white/90 text-sm">Global health coverage for remote workers and nomads</p>
              </div>
            </div>
            <Button className="bg-white text-remoteok-teal hover:bg-white/90 whitespace-nowrap">
              Sign up today
            </Button>
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {/* Featured Job */}
          <div className="bg-remoteok-red rounded-lg p-6 text-remoteok-red-foreground job-card cursor-pointer shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-remoteok-red text-2xl">📱</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">Product Engineer</h3>
                    <Badge className="bg-green-500 text-white text-xs">VERIFIED</Badge>
                  </div>
                  <p className="text-white/90 mb-2">Tolt</p>
                  <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-white/80">
                    <span>🌍 Worldwide</span>
                    <span>💰 $40k - $80k</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-white text-remoteok-red border-white text-xs">JavaScript</Badge>
                    <Badge variant="outline" className="bg-white text-remoteok-red border-white text-xs">Typescript</Badge>
                    <Badge variant="outline" className="bg-white text-remoteok-red border-white text-xs">React</Badge>
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-white/70 text-sm">2d</span>
              </div>
            </div>
          </div>

          {/* Regular Job */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 job-card cursor-pointer hover:shadow-md transition-all duration-200">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-700 text-sm font-bold">ON</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">$30 Hourly Virtual Assistant USA Residents Only</h3>
                  <p className="text-muted-foreground mb-2">HOLDON NOW</p>
                  <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span>🇺🇸 United States</span>
                    <span>💰 $80k - $90k</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Admin</Badge>
                    <Badge variant="outline" className="text-xs">Customer Support</Badge>
                    <Badge variant="outline" className="text-xs">Data Entry</Badge>
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-muted-foreground text-sm">28d</span>
              </div>
            </div>
          </div>

          {/* More jobs */}
          <div className="bg-card border border-border rounded-lg p-6 job-card cursor-pointer hover:shadow-md transition-all duration-200">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-muted-foreground text-sm font-bold">AB</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-2">Developer Relations Engineer</h3>
                  <p className="text-muted-foreground mb-2">Arbitrum Foundation</p>
                  <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span>🌍 Europe</span>
                    <span>💰 $60k - $130k+</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Developer</Badge>
                    <Badge variant="outline" className="text-xs">Web3</Badge>
                    <Badge variant="outline" className="text-xs">Cryptocurrency</Badge>
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-muted-foreground text-sm">19h</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 job-card cursor-pointer hover:shadow-md transition-all duration-200">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 text-lg">🏥</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-2">Customer Experience Associate</h3>
                  <p className="text-muted-foreground mb-2">Koala Health</p>
                  <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span>🌍 Worldwide</span>
                    <span>💰 $60k - $120k</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Technical</Badge>
                    <Badge variant="outline" className="text-xs">Support</Badge>
                    <Badge variant="outline" className="text-xs">Web</Badge>
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-muted-foreground text-sm">20h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
