"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Mail, Lock, Eye, EyeOff, FlaskConical, Rocket, Check } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [selectedEnv, setSelectedEnv] = useState<"mvp" | "core">("core")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to dashboard without backend auth
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-white relative overflow-hidden flex-col justify-between p-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image 
              src="/logo.png" 
              alt="1000 Bananas Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-semibold text-gray-900">1000 Bananas</span>
        </div>

        {/* Abstract Shapes */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Large purple blob */}
          <div 
            className="absolute w-32 h-32 bg-violet-500 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-float opacity-90"
            style={{ top: '20%', left: '25%' }}
          />
          
          {/* Orange blob */}
          <div 
            className="absolute w-24 h-16 bg-orange-400 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-float-delayed opacity-90"
            style={{ top: '15%', right: '30%' }}
          />
          
          {/* Small purple blob */}
          <div 
            className="absolute w-16 h-16 bg-violet-400 rounded-[50%_50%_20%_80%/25%_80%_20%_75%] animate-float-slow opacity-80"
            style={{ bottom: '35%', left: '20%' }}
          />
          
          {/* Orange capsule */}
          <div 
            className="absolute w-20 h-12 bg-orange-500 rounded-full animate-float opacity-90"
            style={{ top: '45%', left: '15%', transform: 'rotate(-15deg)' }}
          />
          
          {/* Another orange blob */}
          <div 
            className="absolute w-20 h-20 bg-orange-400 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-float-delayed opacity-85"
            style={{ bottom: '30%', right: '25%' }}
          />

          {/* Headline Content */}
          <div className="relative z-10 max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              Manage your product<br />
              lifecycle with <span className="gradient-text">precision.</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Join over 10,000 product managers who are<br />
              shipping faster and smarter every day.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-md">
          {/* Star Rating */}
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
            ))}
          </div>
          
          <p className="text-gray-700 mb-4">
            "The ability to switch between MVP and Production<br />
            environments seamlessly has been a game changer for our<br />
            QA process."
          </p>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
                alt="Sarah Jenkins" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Sarah Jenkins</p>
              <p className="text-sm text-gray-500">Head of Product @ TechFlow</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 relative">
              <Image 
                src="/logo.png" 
                alt="1000 Bananas Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-semibold text-gray-900">1000 Bananas</span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-500">Please enter your details to sign in.</p>
          </div>

          {/* Environment Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Select Environment</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSelectedEnv("mvp")}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                  selectedEnv === "mvp"
                    ? "border-violet-500 bg-violet-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  selectedEnv === "mvp" ? "bg-violet-500" : "bg-gray-100"
                }`}>
                  <FlaskConical className={`w-5 h-5 ${selectedEnv === "mvp" ? "text-white" : "text-gray-500"}`} />
                </div>
                <span className={`text-sm font-medium ${selectedEnv === "mvp" ? "text-violet-700" : "text-gray-700"}`}>
                  MVP Beta
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedEnv("core")}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all relative ${
                  selectedEnv === "core"
                    ? "border-violet-500 bg-violet-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {selectedEnv === "core" && (
                  <div className="absolute top-2 right-2">
                    <Check className="w-4 h-4 text-violet-500" />
                  </div>
                )}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  selectedEnv === "core" ? "bg-violet-500" : "bg-gray-100"
                }`}>
                  <Rocket className={`w-5 h-5 ${selectedEnv === "core" ? "text-white" : "text-gray-500"}`} />
                </div>
                <span className={`text-sm font-medium ${selectedEnv === "core" ? "text-violet-700" : "text-gray-700"}`}>
                  Core Product
                </span>
              </button>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="email"
                  placeholder="name@company.com"
                  className="pl-10 h-11 border-gray-200 focus:border-violet-500 focus:ring-violet-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-11 border-gray-200 focus:border-violet-500 focus:ring-violet-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-violet-600 hover:text-violet-700 font-medium">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-violet-600 to-orange-500 hover:opacity-90 text-white font-medium"
            >
              Sign in to Workspace
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 h-10 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>

            <button className="flex items-center justify-center gap-2 h-10 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">GitHub</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-violet-600 hover:text-violet-700 font-medium">
              Sign up for free
            </a>
          </p>

          {/* Footer Links */}
          <div className="mt-8 flex justify-center gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-600">Help Center</a>
          </div>
        </div>
      </div>
    </div>
  )
}
