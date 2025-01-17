'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import Link from 'next/link'

const BlogNews = () => {
  const posts = [
    {
      title: "AI 如何改变我们的信息获取方式",
      excerpt: "探讨人工智能技术在信息处理和知识获取方面带来的革命性变化...",
      author: "张三",
      date: "2024-01-15",
      readTime: "5 min",
      category: "技术趋势",
      image: "gradient-1"
    },
    {
      title: "构建个人知识管理系统的最佳实践",
      excerpt: "详细介绍如何利用现代工具构建适合自己的知识管理体系...",
      author: "李四",
      date: "2024-01-12",
      readTime: "8 min",
      category: "最佳实践",
      image: "gradient-2"
    },
    {
      title: "信息过载时代的专注力管理",
      excerpt: "在信息爆炸的时代，如何保持专注并提高信息处理效率...",
      author: "王五",
      date: "2024-01-10",
      readTime: "6 min",
      category: "生产力",
      image: "gradient-3"
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            新闻 & 博客
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            探索最新的产品更新、使用技巧和行业洞察
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full w-fit mb-4">
                  最新发布
                </span>
                <h3 className="text-2xl font-bold mb-2">
                  ReadHub 2.0 重磅更新：引入全新 AI 助手
                </h3>
                <p className="text-gray-200 mb-4">
                  探索全新的 AI 辅助功能，让您的阅读体验更上一层楼...
                </p>
                <div className="flex items-center text-sm text-gray-300">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">产品团队</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">2024-01-16</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>10 min</span>
                </div>
              </div>
            </div>

            {/* Recent Posts Grid */}
            <div className="grid grid-cols-1 gap-6">
              {posts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  <div className="relative">
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-blue-400">{post.category}</span>
                      <span className="mx-2 text-gray-600">•</span>
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        href="#"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        阅读更多
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['产品更新', '使用技巧', '行业动态', '用户故事'].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              {category}
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">订阅我们的周刊</h3>
          <p className="text-gray-400 mb-6">
            获取最新的产品更新、使用技巧和行业洞察
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="输入您的邮箱"
              className="w-full sm:w-auto px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              订阅
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogNews