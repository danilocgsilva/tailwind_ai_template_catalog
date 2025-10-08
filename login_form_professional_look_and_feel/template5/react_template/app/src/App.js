import { useState } from 'react';
import { Menu, X, Lock, Mail } from 'lucide-react';

export default function LoginPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    alert('Login form submitted! (Demo only)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900 border-b border-slate-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">Enterprise<span className="text-blue-500">Hub</span></h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Products</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Solutions</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Products</a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Solutions</a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">About</a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-slate-800 rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-white rounded-full p-3">
                  <Lock className="text-blue-600" size={28} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white text-center">Sign In</h2>
              <p className="text-blue-100 text-center text-sm mt-1">Access your account</p>
            </div>

            {/* Card Body */}
            <div className="px-8 py-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="text-gray-500" size={18} />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="text-gray-500" size={18} />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-slate-800 text-gray-400">Don't have an account?</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Create a new account
                </a>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-400 text-sm mt-8">
            © 2025 EnterpriseHub. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}