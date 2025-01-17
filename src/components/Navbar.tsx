'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  Rss, 
  Bot,
  Menu,
  X,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

const CONFIG = {
  branding: {
    name: 'ReadHub',
    slogan: '下一代信息食谱'
  },
  
  navigation: {
    links: [
      { name: '关于我们', href: '#about', icon: BookOpen },
      { name: 'RSS聚合', href: '#rss', icon: Rss },
      { name: 'AI总结', href: '#ai', icon: Bot },
      { name: '使用指南', href: '#guide', icon: ChevronRight },
      { name: '定价', href: '#pricing', icon: Sparkles }
    ],
    cta: {
      text: '开始体验',
      href: '/signup'
    }
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.8)']
  )

  return (
    <motion.nav
      style={{ background: navBackground }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo区域 */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {CONFIG.branding.name}
            </span>
            <span className="hidden sm:block text-sm text-white/60">
              {CONFIG.branding.slogan}
            </span>
          </div>

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
            {CONFIG.navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white flex items-center space-x-2
                          transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
              >
                <link.icon size={16} className="opacity-60" />
                <span>{link.name}</span>
              </a>
            ))}
            
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 
                             hover:to-purple-700 text-white shadow-lg hover:shadow-xl
                             transition-all duration-200">
              {CONFIG.navigation.cta.text}
            </Button>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-white/10"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-xl">
            {CONFIG.navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                {CONFIG.navigation.cta.text}
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  )
}