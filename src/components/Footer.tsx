'use client'

import { motion } from 'framer-motion'
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Heart,
  ArrowRight,
  Phone,
  MapPin,
  Coffee,
  Sparkles,
  Globe,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const quickLinks = [
    { name: "首页", href: "/" },
    { name: "功能", href: "#features" },
    { name: "价格", href: "#pricing" },
    { name: "博客", href: "#blog" },
    { name: "关于我们", href: "#about" }
  ]

  const features = [
    { name: "AI 智能总结", href: "#ai", description: "智能提炼核心观点" },
    { name: "RSS 订阅", href: "#rss", description: "一站式信息聚合" },
    { name: "公众号聚合", href: "#wechat", description: "热门内容速览" },
    { name: "数据分析", href: "#analysis", description: "深度洞察趋势" }
  ]

  const contact = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+86 123 4567 8900",
      href: "tel:+8612345678900",
      description: "7x24小时服务支持"
    },
    {
      icon: <Mail className="w-5 h-5" />, 
      text: "contact@readhub.com",
      href: "mailto:contact@readhub.com",
      description: "期待您的建议反馈"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "北京市朝阳区xxx街xxx号",
      href: "#",
      description: "欢迎前来交流"
    }
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Large END text in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          className="text-[20vw] font-black text-white tracking-tighter"
        >
          END
        </motion.div>
      </div>

      {/* Spotlight effects */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link href="/" className="group flex items-center space-x-3">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>
              <span className="text-3xl font-bold text-white/90 drop-shadow-sm group-hover:text-white transition-colors duration-300">
                ReadHub
              </span>
            </Link>

            <p className="text-gray-400 text-lg leading-relaxed">
              AI驱动的下一代信息聚合平台，打造全新阅读体验，让信息获取更智能、更高效。
            </p>

            <div className="flex space-x-5">
              {[
                { icon: <Github className="w-6 h-6" />, href: "#", label: "GitHub", color: "hover:text-github" },
                { icon: <Twitter className="w-6 h-6" />, href: "#", label: "Twitter", color: "hover:text-twitter" },
                { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn", color: "hover:text-linkedin" },
                { icon: <Globe className="w-6 h-6" />, href: "#", label: "Website", color: "hover:text-blue-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg hover:bg-white/10 transition-all ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">快速导航</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">核心功能</h3>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={feature.href}
                    className="group"
                  >
                    <div className="flex items-center text-gray-400 group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                      <span className="font-medium">{feature.name}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-400 transition-colors pl-6">
                      {feature.description}
                    </p>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">联系我们</h3>
            <ul className="space-y-6">
              {contact.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={item.href}
                    className="group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-gray-300 group-hover:text-white transition-colors flex items-center">
                          <span>{item.text}</span>
                          <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 ReadHub.</span>
              <span>保留所有权利</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              {["隐私政策", "服务条款", "Cookie 设置"].map((item, index) => (
                <Link 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
            <motion.div 
              className="flex items-center space-x-2 text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
              </motion.div>
              <span>and</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Coffee className="w-5 h-5 text-yellow-500" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


