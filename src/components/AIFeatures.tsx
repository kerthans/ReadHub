'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, PieChart, RefreshCw } from 'lucide-react'
import { useRef, useState } from 'react'

const AIFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  

  const features = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: "智能文章总结",
      description: "使用先进的AI模型，自动提取文章核心观点和关键信息，节省阅读时间。",
      color: "from-blue-500 to-cyan-500",
      borderColor: "group-hover:border-blue-500/50"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "实时信息分析",
      description: "对订阅源进行实时监控和分析，第一时间发现重要信息。",
      color: "from-purple-500 to-pink-500",
      borderColor: "group-hover:border-purple-500/50"
    },
    {
      icon: <PieChart className="w-7 h-7" />,
      title: "个性化推荐",
      description: "基于阅读历史和兴趣偏好，智能推荐相关内容。",
      color: "from-orange-500 to-red-500",
      borderColor: "group-hover:border-orange-500/50"
    },
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: "持续学习优化",
      description: "系统不断学习用户反馈，持续优化总结质量和推荐准确度。",
      color: "from-green-500 to-emerald-500",
      borderColor: "group-hover:border-green-500/50"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* 优化的背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 增强的标题区域 */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r text-gradient-northern">
              AI驱动的智能体验
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              利用最新的人工智能技术，为您提供
              <span className="text-white font-medium">智能、高效</span>
              的信息处理服务
            </p>
          </motion.div>
        </div>

        {/* 优化的特性卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative h-[300px]"
            >
              <motion.div
                animate={{
                  scale: hoveredCard === index ? 1.03 : 1,
                  y: hoveredCard === index ? -5 : 0,
                }}
                transition={{ duration: 0.2 }}
                className={`
                  relative h-full p-8 
                  backdrop-blur-xl bg-white/5 
                  border border-white/10 rounded-xl
                  transition-all duration-300
                  ${feature.borderColor}
                  hover:bg-white/10
                  hover:shadow-lg
                `}
              >
                <motion.div 
                  className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 inline-block`}
                  animate={{
                    scale: hoveredCard === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-4"
                  animate={{
                    color: hoveredCard === index ? '#fff' : '#e5e7eb'
                  }}
                >
                  {feature.title}
                </motion.h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 优化的交互演示区域 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent  text-gradient-purple-dream bg-gradient-to-r ">
                立即体验AI总结效果
              </h3>
              <p className="text-xl text-gray-400">
                粘贴任意文章链接，体验AI智能总结的强大功能
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="输入文章链接..."
                  className="flex-1 px-6 py-4 bg-black/50 border border-white/10 rounded-xl 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                    placeholder:text-gray-500"
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl 
                    font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 
                    transition-all duration-300"
                >
                  开始总结
                </motion.button>
              </div>
            </div>
            <div className="flex-1">
              <div className="p-8 bg-black/30 border border-white/10 rounded-xl">
                <div className="h-40 flex items-center justify-center text-gray-400">
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [0.98, 1, 0.98]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    AI 总结结果将在这里显示
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIFeatures