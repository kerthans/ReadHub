'use client'

import { motion } from 'framer-motion'
import { Book, Bookmark, Share2, ThumbsUp, Zap, Clock, Newspaper } from 'lucide-react'
import { useState } from 'react'

const RSSPreview = () => {
  const [activeCategory, setActiveCategory] = useState('全部文章')
  const [hoveredArticle, setHoveredArticle] = useState(null)

  const categories = [
    { name: '全部文章', icon: <Newspaper className="w-4 h-4" /> },
    { name: '科技', icon: <Zap className="w-4 h-4" /> },
    { name: '商业', icon: <Book className="w-4 h-4" /> },
    { name: '文化', icon: <Book className="w-4 h-4" /> },
    { name: '生活', icon: <Book className="w-4 h-4" /> }
  ]

  const sampleArticles = [
    {
      title: "人工智能发展新突破：大模型在多模态理解上取得重要进展",
      source: "AI科技评论",
      time: "2小时前",
      summary: "研究团队开发出新型算法，显著提升了AI在图像识别和自然语言处理方面的表现，为下一代人工智能应用奠定基础...",
      tags: ["AI", "技术创新"]
    },
    {
      title: "解读2025年全球科技发展趋势：元宇宙与Web3.0的融合",
      source: "未来科技",
      time: "4小时前",
      summary: "专家预测未来五年内，元宇宙技术将与Web3.0深度融合，创造新的数字经济形态，带来全新的用户体验与商业模式...",
      tags: ["元宇宙", "Web3"]
    },
    {
      title: "可持续发展：新能源技术突破与应用前景分析",
      source: "绿色科技",
      time: "6小时前",
      summary: "新型太阳能电池转换效率突破30%，为可再生能源发展带来新机遇，有望加速全球能源结构转型...",
      tags: ["新能源", "可持续发展"]
    }
  ]

  const smartTags = ['AI', '科技创新', '创业', '投资', '生活方式', '效率工具', '前沿科技']

  return (
    <section className="relative py-32 overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* 动态光效背景 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r text-gradient-white-warm bg-clip-text text-transparent">
            优雅的阅读体验
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            打造
            <span className="text-white font-medium mx-2">极致简约</span>
            的信息获取体验，让阅读回归本质
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 侧边栏 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 space-y-8">
              <div className="p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6">订阅源</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.name}
                      whileHover={{ x: 4 }}
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full px-4 py-3 flex items-center gap-3 rounded-xl text-left transition-all
                        ${activeCategory === category.name 
                          ? 'bg-white/10 text-white' 
                          : 'text-gray-400 hover:bg-white/5'}`}
                    >
                      {category.icon}
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6">智能分类</h3>
                <div className="flex flex-wrap gap-2">
                  {smartTags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-xl bg-white/5 text-sm hover:bg-white/10 cursor-pointer transition-all"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 主内容区 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <div className="space-y-6">
              {sampleArticles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.01,
                    backgroundColor: 'rgba(255, 255, 255, 0.03)'
                  }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: 'easeInOut'
                  }}
                  onHoverStart={() => setHoveredArticle(index)}
                  onHoverEnd={() => setHoveredArticle(null)}
                  className="group relative p-8 backdrop-blur-xl border border-white/5 rounded-2xl 
                    transition-all duration-300 hover:border-white/20 hover:shadow-lg 
                    hover:shadow-white/5 bg-black/20"
                >
                  {/* 优雅的光效 */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/[0.03] 
                    to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="space-y-3">
                        <motion.h3 
                          className="text-2xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-300"
                          animate={{
                            color: hoveredArticle === index ? '#fff' : '#e5e7eb'
                          }}
                        >
                          {article.title}
                        </motion.h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Newspaper className="w-4 h-4" />
                            {article.source}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {article.time}
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <Bookmark className="w-5 h-5" />
                      </motion.button>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 
                      transition-colors duration-300">{article.summary}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {article.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1.5 text-sm bg-white/[0.03] rounded-lg 
                              hover:bg-white/10 transition-all duration-300 cursor-pointer 
                              border border-white/5 hover:border-white/20"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        {[ThumbsUp, Share2, Book].map((Icon, i) => (
                          <motion.button
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
                          >
                            <Icon className="w-5 h-5" />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RSSPreview