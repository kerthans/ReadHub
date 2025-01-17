'use client'

import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'
import React from 'react'

const InfoComparison = () => {
  const comparisons = [
    {
      traditional: {
        title: "传统阅读方式",
        points: [
          { text: "信息分散，需要打开多个平台", negative: true },
          { text: "内容冗长，浪费时间", negative: true },
          { text: "无法快速提取核心信息", negative: true },
          { text: "信息更新不及时", negative: true }
        ]
      },
      readhub: {
        title: "ReadHub 智能聚合",
        points: [
          { text: "一站式聚合所有信息源", negative: false },
          { text: "AI智能总结，提炼重点", negative: false },
          { text: "实时更新，及时推送", negative: false },
          { text: "个性化推荐，精准投放", negative: false }
        ]
      }
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            为什么选择 ReadHub
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            对比传统的信息获取方式，ReadHub 为您带来全新的阅读体验
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((comparison, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-400">
                  {comparison.traditional.title}
                </h3>
                <div className="space-y-4">
                  {comparison.traditional.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-center space-x-3 text-gray-400"
                    >
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>{point.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-6">
                  {comparison.readhub.title}
                </h3>
                <div className="space-y-4">
                  {comparison.readhub.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{point.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "节省80%阅读时间",
                description: "AI智能总结，快速获取核心信息"
              },
              {
                title: "提高信息获取效率",
                description: "一站式聚合，告别信息分散"
              },
              {
                title: "个性化信息推送",
                description: "基于兴趣的智能推荐系统"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InfoComparison