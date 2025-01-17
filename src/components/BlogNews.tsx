'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User, Bookmark, Share2, MessageCircle } from 'lucide-react'
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
      image: "gradient-1",
      likes: 128,
      comments: 32
    },
    {
      title: "构建个人知识管理系统的最佳实践",
      excerpt: "详细介绍如何利用现代工具构建适合自己的知识管理体系...",
      author: "李四",
      date: "2024-01-12",
      readTime: "8 min", 
      category: "最佳实践",
      image: "gradient-2",
      likes: 89,
      comments: 24
    },
    {
      title: "信息过载时代的专注力管理",
      excerpt: "在信息爆炸的时代，如何保持专注并提高信息处理效率...",
      author: "王五",
      date: "2024-01-10",
      readTime: "6 min",
      category: "生产力",
      image: "gradient-3",
      likes: 156,
      comments: 45
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Ambient Light Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
            探索知识的海洋
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r text-gradient-coral-reef">
            新闻 & 博客
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            探索最新的产品更新、使用技巧和行业洞察，让知识为您的成长助力
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-[400px] lg:h-full rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-xl transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
              <motion.div 
                className="absolute inset-0 p-10 flex flex-col justify-end"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded-full w-fit mb-6 font-medium">
                  最新发布
                </span>
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  ReadHub 2.0 重磅更新：引入全新 AI 助手
                </h3>
                <p className="text-gray-200 text-lg mb-6 line-clamp-2">
                  探索全新的 AI 辅助功能，让您的阅读体验更上一层楼。从今天开始，让 AI 成为您最得力的学习助手...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-300 space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1.5" />
                      <span>产品团队</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      <span>2024-01-16</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" />
                      <span>10 min</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <button aria-label="button" className="hover:text-blue-400 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button aria-label="button" className="hover:text-blue-400 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Recent Posts Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              {posts.map((post, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="group relative p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1.5" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1.5" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <Link
                        href="#"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        <span className="mr-2">阅读更多</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {['产品更新', '使用技巧', '行业动态', '用户故事'].map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <span className="text-lg font-medium">{category}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl text-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
              保持联系
            </span>
            <h3 className="text-3xl font-bold mb-4">订阅我们的周刊</h3>
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              获取最新的产品更新、使用技巧和行业洞察，每周精选内容直达您的邮箱
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="w-full sm:w-auto px-6 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
              />
              <button className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300 font-medium">
                立即订阅
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogNews