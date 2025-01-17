'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-black py-12 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">产品</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">视频教程</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">公司介绍</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">团队文化</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">加入我们</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">联系方式</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">反馈建议</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">商务合作</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">媒体咨询</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">隐私政策</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
            </div>

            <p className="text-gray-400 text-sm text-center">
              © 2025 ReadHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* 装饰性网格背景 */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
    </footer>
  )
}