import { useState } from "react";

export const Nav = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">
              Cargo<span className="text-yellow-500">TON</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "Pages", "Tracking", "Services", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-yellow-500"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold py-2 px-4 cursor-pointer">
              Get a Quote
            </button>
            <button className="bg-black hover:bg-gray-800 text-white text-sm font-bold py-2 px-4 cursor-pointer">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {["Home", "Pages", "Tracking", "Services", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-sm font-semibold text-gray-700 hover:text-yellow-500"
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold py-2 rounded">
            Get a Quote
          </button>
          <button className="w-full bg-black hover:bg-gray-800 text-white text-sm font-bold py-2 rounded">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}