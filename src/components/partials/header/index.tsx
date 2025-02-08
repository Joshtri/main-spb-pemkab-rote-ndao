import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, User, LogOut } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Beasiswa Berprestasi
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="hover:text-blue-200">
              Home
            </Link>
            <Link to="/information" className="hover:text-blue-200">
              Information
            </Link>
            <Link to="/register" className="hover:text-blue-200">
              Register
            </Link>
            <Link to="/dashboard" className="hover:text-blue-200">
              Dashboard
            </Link>
            <div className="relative">
              <button
                className="flex items-center space-x-2 hover:text-blue-200"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User size={24} />
                <span>Profile</span>
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-blue-100">
                    View Profile
                  </Link>
                  <button className="block w-full text-left px-4 py-2 hover:bg-blue-100">
                    <LogOut size={16} className="inline mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block hover:text-blue-200">
              Home
            </Link>
            <Link to="/information" className="block hover:text-blue-200">
              Information
            </Link>
            <Link to="/register" className="block hover:text-blue-200">
              Register
            </Link>
            <Link to="/dashboard" className="block hover:text-blue-200">
              Dashboard
            </Link>
            <div className="relative">
              <button
                className="flex items-center space-x-2 hover:text-blue-200"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User size={24} />
                <span>Profile</span>
              </button>
              {isProfileOpen && (
                <div className="mt-2 w-full bg-white text-black rounded-lg shadow-lg py-2">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-blue-100">
                    View Profile
                  </Link>
                  <button className="block w-full text-left px-4 py-2 hover:bg-blue-100">
                    <LogOut size={16} className="inline mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header