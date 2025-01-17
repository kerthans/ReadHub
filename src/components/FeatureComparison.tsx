'use client'

import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'

const FeatureComparison = () => {
  const features = [
    {
      category: "内容聚合",
      items: [
        { name: "RSS订阅", readhub: true, other: true, highlight: false },
        { name: "公众号聚合", readhub: true, other: false, highlight: true },
        { name: "Newsletter整合", readhub: true, other: false, highlight: true },
        { name: "自定义源", readhub: true, other: true, highlight: false },
      ]
    },
    {
      category: "AI 能力",
      items: [
        { name: "智能摘要", readhub: true, other: false, highlight: true },
        { name: "关键信息提取", readhub: true, other: false, highlight: true },
        { name: "多语言翻译", readhub: true, other: false, highlight: true },
        { name: "观点分析", readhub: true, other: false, highlight: true },
      ]
    },
    {
      category: "阅读体验",
      items: [
        { name: "深色模式", readhub: true, other: true, highlight: false },
        { name: "自定义分类", readhub: true, other: true, highlight: false },
        { name: "稍后读", readhub: true, other: true, highlight: false },
        { name: "跨平台同步", readhub: true, other: false, highlight: true },
      ]
    },
    {
      category: "智能推荐",
      items: [
        { name: "个性化推荐", readhub: true, other: false, highlight: true },
        { name: "兴趣标签", readhub: true, other: false, highlight: true },
        { name: "阅读习惯分析", readhub: true, other: false, highlight: true },
        { name: "热点追踪", readhub: true, other: true, highlight: false },
      ]
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            功能对比
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            全方位的功能对比，帮助您做出最佳选择
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="min-w-max">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  {category.category}
                </h3>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="px-6 py-4 text-left text-gray-400 font-medium w-1/2">功能</th>
                        <th className="px-6 py-4 text-center text-gray-400 font-medium w-1/4">ReadHub</th>
                        <th className="px-6 py-4 text-center text-gray-400 font-medium w-1/4">其他平台</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((feature, index) => (
                        <tr
                          key={index}
                          className={`${
                            feature.highlight ? 'bg-blue-500/5' : ''
                          } border-b border-white/5 last:border-0`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <span className={feature.highlight ? 'text-blue-400' : ''}>
                                {feature.name}
                              </span>
                              {feature.highlight && (
                                <span className="ml-2 px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">
                                  独家
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            {feature.readhub ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <Minus className="w-5 h-5 text-gray-500 mx-auto" />
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {feature.other ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <Minus className="w-5 h-5 text-gray-500 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "功能全面",
              description: "提供最完整的信息聚合和AI分析能力"
            },
            {
              title: "持续创新",
              description: "不断推出新功能，引领行业发展"
            },
            {
              title: "用户至上",
              description: "根据用户反馈持续优化产品体验"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureComparison