import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, MapPin, DollarSign, Heart, Star, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 lg:px-6 py-4 bg-white border-b">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold logo-font">
            <span className="text-black">remote</span>
            <span className="text-remoteok-red">OK</span>
          </h1>
        </div>
        <div className="flex items-center space-x-2 lg:space-x-4">
          <Button variant="outline" className="hidden md:inline-flex bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
            Health Insurance
          </Button>
          <Button className="bg-remoteok-red text-white hover:bg-red-600 text-sm lg:text-base">
            <span className="hidden md:inline">Post a remote job →</span>
            <span className="md:hidden">Post Job</span>
          </Button>
          <Button variant="outline" className="text-sm lg:text-base">Log In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-64 lg:h-80 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/1803094165/821851113.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 text-center hero-title">
            find a <span className="font-black">remote job</span><br />
            work from <span className="font-black">anywhere</span>
          </h2>
          <div className="flex items-center bg-white rounded-full px-4 py-3 w-full max-w-md lg:max-w-lg">
            <Search className="text-gray-400 mr-3" size={20} />
            <Input
              placeholder="senior"
              className="border-0 text-base lg:text-lg text-gray-900 placeholder:text-gray-500 focus-visible:ring-0"
            />
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gray-100 px-6 py-4 text-center">
        <p className="text-gray-800">
          📢 Hiring remotely? Reach <span className="font-bold underline">3,900,000+</span> remote workers on the
          <span className="font-bold"> 📍 #1 Remote Job Board</span>
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Button className="bg-remoteok-red text-white hover:bg-red-600">
            Post a remote job →
          </Button>
          <Button variant="outline">Hide this</Button>
        </div>
        <div className="flex justify-center items-center mt-4 space-x-6 text-gray-500">
          <span className="text-sm">trusted by</span>
          <img src="https://ext.same-assets.com/1803094165/2636456894.webp" alt="Microsoft" className="h-6" />
          <img src="https://ext.same-assets.com/1803094165/1863955948.webp" alt="Amazon" className="h-6" />
          <img src="https://ext.same-assets.com/1803094165/1750519746.webp" alt="Shopify" className="h-6" />
          <img src="https://ext.same-assets.com/1803094165/63518253.webp" alt="Intercom" className="h-6" />
          <img src="https://ext.same-assets.com/1803094165/2529836459.webp" alt="IBM" className="h-6" />
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-remoteok-teal px-6 py-4 text-white">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-remoteok-teal font-bold">📧</span>
            </div>
            <span>Nomad Insurance by SafetyWing</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Get new remote jobs sent to</span>
            <Input
              placeholder="Type your email..."
              className="bg-white text-gray-900 w-64"
            />
            <Button className="bg-red-500 hover:bg-red-600">Subscribe</Button>
            <Button variant="ghost" size="sm">✕</Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-50 px-4 lg:px-6 py-4 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3 lg:space-x-6 overflow-x-auto pb-2">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🔧</span>
              </div>
              <Button variant="ghost" className="text-gray-700 text-sm lg:text-base whitespace-nowrap">
                Search ▼
              </Button>
            </div>
            <Button variant="ghost" className="text-gray-700 text-sm lg:text-base flex-shrink-0 whitespace-nowrap">
              📍 Location ▼
            </Button>
            <Button variant="ghost" className="text-gray-700 text-sm lg:text-base flex-shrink-0 whitespace-nowrap">
              💰 Salary ▼
            </Button>
            <Button variant="ghost" className="text-gray-700 text-sm lg:text-base flex-shrink-0 whitespace-nowrap">
              🎁 Benefits ▼
            </Button>
            <div className="ml-auto flex-shrink-0">
              <Button variant="ghost" className="text-gray-700 text-sm lg:text-base whitespace-nowrap">
                📊 Sort by
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="outline" className="text-xs lg:text-sm">👨‍💻 Engineer</Badge>
            <Badge variant="outline" className="text-xs lg:text-sm">👨‍💼 Executive</Badge>
            <Badge variant="outline" className="text-xs lg:text-sm">👨‍🎓 Senior</Badge>
            <Badge variant="outline" className="text-xs lg:text-sm">👨‍💻 Developer</Badge>
            <Badge variant="outline" className="text-xs lg:text-sm">💰 Finance</Badge>
            <Badge variant="outline" className="text-xs lg:text-sm">⚙️ Sys Admin</Badge>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6">
        {/* Nomad Insurance Ad */}
        <div className="bg-remoteok-teal rounded-lg p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-remoteok-teal">🛡️</span>
              </div>
              <div>
                <h3 className="font-bold">Nomad Insurance by SafetyWing</h3>
                <p className="text-white/80">Global health coverage for remote workers and nomads</p>
              </div>
            </div>
            <Button className="bg-white text-remoteok-teal hover:bg-gray-100">
              Sign up today
            </Button>
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {/* Featured Job */}
          <div className="bg-remoteok-red rounded-lg p-6 text-white job-card cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-red-500 text-2xl">📱</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold">Product Engineer</h3>
                    <Badge className="bg-green-500 text-white">VERIFIED</Badge>
                  </div>
                  <p className="text-red-100">Tolt</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm">
                    <span>🌍 Worldwide</span>
                    <span>💰 $40k - $80k</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Badge variant="outline" className="bg-white text-red-500 border-white">JavaScript</Badge>
                    <Badge variant="outline" className="bg-white text-red-500 border-white">Typescript</Badge>
                    <Badge variant="outline" className="bg-white text-red-500 border-white">React</Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-red-100">2d</span>
              </div>
            </div>
          </div>

          {/* Regular Job */}
          <div className="bg-yellow-100 rounded-lg p-6 job-card cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-sm">ON</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">$30 Hourly Virtual Assistant USA Residents Only</h3>
                  <p className="text-gray-700">HOLDON NOW</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <span>🇺🇸 United States</span>
                    <span>💰 $80k - $90k</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Badge variant="outline">Admin</Badge>
                    <Badge variant="outline">Customer Support</Badge>
                    <Badge variant="outline">Data Entry</Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-gray-500">28d</span>
              </div>
            </div>
          </div>

          {/* More jobs */}
          <div className="bg-white border rounded-lg p-6 job-card cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-sm">AB</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Developer Relations Engineer</h3>
                  <p className="text-gray-700">Arbitrum Foundation</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <span>🌍 Europe</span>
                    <span>💰 $60k - $130k+</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Badge variant="outline">Developer</Badge>
                    <Badge variant="outline">Web3</Badge>
                    <Badge variant="outline">Cryptocurrency</Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-gray-500">19h</span>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 job-card cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-500 text-lg">🏥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Customer Experience Associate</h3>
                  <p className="text-gray-700">Koala Health</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <span>🌍 Worldwide</span>
                    <span>💰 $60k - $120k</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Badge variant="outline">Technical</Badge>
                    <Badge variant="outline">Support</Badge>
                    <Badge variant="outline">Web</Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-gray-500">20h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
