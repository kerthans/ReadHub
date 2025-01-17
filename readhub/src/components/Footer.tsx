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
  Globe
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
    { name: "AI 智能总结", href: "#ai" },
    { name: "RSS 订阅", href: "#rss" },
    { name: "公众号聚合", href: "#wechat" },
    { name: "Newsletter", href: "#newsletter" },
    { name: "数据分析", href: "#analysis" }
  ]

//   const resources = [
//     { name: "使用文档", href: "#docs" },
//     { name: "API 接口", href: "#api" },
//     { name: "快速上手", href: "#quickstart" },
//     { name: "常见问题", href: "#faq" },
//     { name: "更新日志", href: "#changelog" }
//   ]

  const contact = [
    { 
      icon: <Phone className="w-5 h-5" />,
      text: "+86 123 4567 8900",
      href: "tel:+8612345678900"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "contact@readhub.com",
      href: "mailto:contact@readhub.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "北京市朝阳区xxx街xxx号",
      href: "#"
    }
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ReadHub</span>
            </Link>
            <p className="text-gray-400 max-w-md">
              AI驱动的下一代信息聚合平台，让信息获取更智能、更高效。
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
                { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                { icon: <Globe className="w-5 h-5" />, href: "#", label: "Website" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
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
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">快速导航</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">核心功能</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index}>
                  <Link
                    href={feature.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                    {feature.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">联系我们</h3>
            <ul className="space-y-4">
              {contact.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-2">订阅我们的 Newsletter</h3>
              <p className="text-gray-400">获取最新的产品更新和行业动态</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                订阅
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 ReadHub.</span>
              <span>保留所有权利</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                隐私政策
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                服务条款
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie 设置
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-yellow-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer