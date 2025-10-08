import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-semibold text-gray-800">MyCompany</div>
          <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-gray-900">Home</a>
            <a href="#" className="hover:text-gray-900">About</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-gray-50 border-t border-gray-200">
            <ul className="flex flex-col p-4 space-y-2 text-gray-700 font-medium">
              <li><a href="#" className="block hover:text-gray-900">Home</a></li>
              <li><a href="#" className="block hover:text-gray-900">About</a></li>
              <li><a href="#" className="block hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="flex items-center mb-6 space-x-2">
            <LogIn className="text-gray-700" size={26} />
            <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 p-2 bg-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 p-2 bg-white"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-gray-600 focus:ring-gray-500" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-gray-600 hover:text-gray-900">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white font-semibold rounded-lg py-2 hover:bg-gray-900 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>

      <footer className="bg-white text-center text-gray-500 text-sm py-4 border-t">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </footer>
    </div>
  );
}
