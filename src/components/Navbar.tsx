'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X ,Sparkles,} from 'lucide-react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed w-full z-50 px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`
          mx-auto
          max-w-6xl
          rounded-2xl
          border
          shadow-lg
          transition-all
          duration-300
          ${
            scrolled
              ? 'bg-white/10 backdrop-blur-xl backdrop-saturate-150 border-white/10 shadow-black/10'
              : 'bg-white/5 backdrop-blur-sm border-white/5 shadow-black/5'
          }
        `}
      >
        <div className="px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center space-x-3">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>
              <span className="text-3xl font-bold text-gradient-white-warm group-hover:text-white transition-colors duration-300">
                ReadHub
              </span>
            </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center space-x-1">
              <NavLink href="#ai">AI 总结</NavLink>
              <NavLink href="#rss">订阅管理</NavLink>
                <NavLink href="#features">特性</NavLink>
                <NavLink href="#comparison">对比</NavLink>
                <NavLink href="#pricing">价格</NavLink>
              </div>
              
              <div className="pl-4 ml-4 border-l border-white/10">
                <button 
                onClick={() => router.push('/login')}
                className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all duration-300">
                  开始使用
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl hover:bg-white/10 active:bg-white/5 transition-colors"
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
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
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/10 mt-2"
            >
              <div className="px-4 py-4 space-y-1">
                <MobileNavLink href="#features">特性</MobileNavLink>
                <MobileNavLink href="#ai">AI 总结</MobileNavLink>
                <MobileNavLink href="#rss">订阅管理</MobileNavLink>
                <MobileNavLink href="#comparison">对比</MobileNavLink>
                <MobileNavLink href="#pricing">价格</MobileNavLink>
                
                <div className="pt-4 mt-4 border-t border-white/10">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300">
                    开始使用
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-200 inline-block"
  >
    {children}
  </Link>
)

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
  >
    {children}
  </Link>
)

export default Navbar