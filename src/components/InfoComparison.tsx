'use client'

import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'
import React, { useRef } from 'react'

const InfoComparison = () => {
  const containerRef = useRef(null)

  const comparisons = [
    {
      traditional: {
        title: "传统阅读方式",
        points: [
          { text: "信息分散，需要打开多个平台", negative: true },
          { text: "内容冗长，浪费时间", negative: true },
          { text: "无法快速提取核心信息", negative: true },
          { text: "信息更新不及时", negative: true }
        ],
        gradient: "from-red-500/10 to-orange-500/10",
        iconColor: "text-red-500"
      },
      readhub: {
        title: "ReadHub 智能聚合",
        points: [
          { text: "一站式聚合所有信息源", negative: false },
          { text: "AI智能总结，提炼重点", negative: false },
          { text: "实时更新，及时推送", negative: false },
          { text: "个性化推荐，精准投放", negative: false }
        ],
        gradient: "from-blue-500/10 to-purple-500/10",
        iconColor: "text-green-500"
      }
    }
  ]

  const features = [
    {
      title: "节省80%阅读时间",
      description: "AI智能总结，快速获取核心信息",
      gradient: "text-gradient-ocean"
    },
    {
      title: "提高信息获取效率",
      description: "一站式聚合，告别信息分散",
      gradient: "text-gradient-purple-dream"
    },
    {
      title: "个性化信息推送",
      description: "基于兴趣的智能推荐系统",
      gradient: "text-gradient-emerald"
    }
  ]

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* 动态光效背景 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r text-gradient-fire bg-clip-text text-transparent">
            为什么选择 ReadHub
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            对比传统的信息获取方式，ReadHub 为您带来
            <span className="text-white font-medium mx-2">全方位升级</span>
            的阅读体验
          </p>
        </motion.div>

        {/* 对比卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {comparisons.map((comparison, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group p-8 backdrop-blur-xl bg-gradient-to-br border border-white/10 rounded-2xl overflow-hidden"
              >
                <h3 className="text-2xl font-semibold mb-8 text-gray-400">
                  {comparison.traditional.title}
                </h3>
                <div className="space-y-6">
                  {comparison.traditional.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: pointIndex * 0.1 }}
                      className="flex items-center space-x-4 text-gray-400"
                    >
                      <XCircle className="w-6 h-6 text-red-500/80 group-hover:text-red-500 flex-shrink-0" />
                      <span className="text-lg">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* 光效扫过动画 */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group p-8 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl overflow-hidden"
              >
                <h3 className="text-2xl font-semibold mb-8 text-white">
                  {comparison.readhub.title}
                </h3>
                <div className="space-y-6">
                  {comparison.readhub.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: pointIndex * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 group-hover:text-green-300 flex-shrink-0" />
                      <span className="text-lg text-white">{point.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* 光效扫过动画 */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        {/* 特性亮点 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
          <div className="relative p-12 backdrop-blur-xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center space-y-4"
                >
                  <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.title.split(' ')[0]}
                  </div>
                  <h4 className="text-xl font-semibold text-white">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InfoComparison