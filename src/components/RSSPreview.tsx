'use client'

import { motion } from 'framer-motion'
import { Book, Bookmark, Share2, ThumbsUp } from 'lucide-react'

const RSSPreview = () => {
  const sampleArticles = [
    {
      title: "人工智能发展新突破：大模型在多模态理解上取得重要进展",
      source: "AI科技评论",
      time: "2小时前",
      summary: "研究团队开发出新型算法，显著提升了AI在图像识别和自然语言处理方面的表现...",
      tags: ["AI", "技术创新"]
    },
    {
      title: "解读2025年全球科技发展趋势：元宇宙与Web3.0的融合",
      source: "未来科技",
      time: "4小时前",
      summary: "专家预测未来五年内，元宇宙技术将与Web3.0深度融合，创造新的数字经济形态...",
      tags: ["元宇宙", "Web3"]
    },
    {
      title: "可持续发展：新能源技术突破与应用前景分析",
      source: "绿色科技",
      time: "6小时前",
      summary: "新型太阳能电池转换效率突破30%，为可再生能源发展带来新机遇...",
      tags: ["新能源", "可持续发展"]
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            优雅的阅读体验
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            简洁而强大的RSS阅读器界面，让信息获取变得轻松愉悦
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">订阅源</h3>
              <div className="space-y-3">
                {['全部文章', '科技', '商业', '文化', '生活'].map((category) => (
                  <button
                    key={category}
                    className="w-full px-4 py-2 text-left rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="text-xl font-semibold mb-4">智能分类</h3>
                <div className="flex flex-wrap gap-2">
                  {['AI', '科技', '创业', '投资', '生活方式'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 text-sm hover:bg-white/10 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {sampleArticles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl group hover:bg-white/10 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{article.source}</span>
                        <span>{article.time}</span>
                      </div>
                    </div>
                    <button aria-label="button" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-gray-400 mb-4">{article.summary}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-sm bg-white/5 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button aria-label="button" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <ThumbsUp className="w-5 h-5" />
                      </button>
                      <button aria-label="button" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                      <button aria-label="button" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <Book className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default RSSPreview