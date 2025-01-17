'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, Zap, PieChart, RefreshCw } from 'lucide-react'
import { useRef } from 'react'

const AIFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "智能文章总结",
      description: "使用先进的AI模型，自动提取文章核心观点和关键信息，节省阅读时间。",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "实时信息分析",
      description: "对订阅源进行实时监控和分析，第一时间发现重要信息。",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "个性化推荐",
      description: "基于阅读历史和兴趣偏好，智能推荐相关内容。",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "持续学习优化",
      description: "系统不断学习用户反馈，持续优化总结质量和推荐准确度。",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI驱动的智能体验
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            利用最新的人工智能技术，为您提供智能、高效的信息处理服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4 inline-block`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">体验AI总结效果</h3>
              <p className="text-gray-400 mb-6">
                粘贴任意文章链接，立即体验AI智能总结功能
              </p>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="输入文章链接..."
                  className="flex-1 px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  开始总结
                </button>
              </div>
            </div>
            <div className="flex-1">
              {/* Add a sample summary result display here */}
              <div className="p-4 bg-black/30 border border-white/10 rounded-lg">
                <div className="h-32 flex items-center justify-center text-gray-400">
                  AI 总结结果将在这里显示
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AIFeatures