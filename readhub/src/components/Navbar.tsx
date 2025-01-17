'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Bell, Search } from 'lucide-react'


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                ReadHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">特性</NavLink>
            <NavLink href="#ai">AI 总结</NavLink>
            <NavLink href="#rss">订阅管理</NavLink>
            <NavLink href="#comparison">对比</NavLink>
            <NavLink href="#pricing">价格</NavLink>
            
            <div className="flex items-center space-x-4">
              <button aria-label="搜索" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button aria-label="通知" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
                开始使用
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#features">特性</MobileNavLink>
              <MobileNavLink href="#ai">AI 总结</MobileNavLink>
              <MobileNavLink href="#rss">订阅管理</MobileNavLink>
              <MobileNavLink href="#comparison">对比</MobileNavLink>
              <MobileNavLink href="#pricing">价格</MobileNavLink>
              <button className="w-full mt-4 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
                开始使用
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    {children}
  </Link>
)

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
  >
    {children}
  </Link>
)

export default Navbar