'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Bell, Bookmark, TrendingUp } from 'lucide-react'

const WeChatHub = () => {
  const accounts = [
    {
      name: "科技前沿",
      avatar: "🚀",
      followers: "100k+",
      description: "关注全球最新科技动态",
      categories: ["科技", "创新"]
    },
    {
      name: "商业洞察",
      avatar: "💼",
      followers: "80k+",
      description: "深度解读商业趋势",
      categories: ["商业", "经济"]
    },
    {
      name: "创投视角",
      avatar: "💡",
      followers: "50k+",
      description: "聚焦创业投资领域",
      categories: ["创投", "创业"]
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
            公众号内容智能聚合
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            汇聚优质公众号，智能分类整理，让您不错过任何重要信息
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <MessageSquare className="w-6 h-6" />,
              title: "智能聚合",
              description: "自动整合多个公众号内容"
            },
            {
              icon: <Bell className="w-6 h-6" />,
              title: "实时推送",
              description: "第一时间获取更新提醒"
            },
            {
              icon: <Bookmark className="w-6 h-6" />,
              title: "智能分类",
              description: "自动对文章进行主题分类"
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "热点追踪",
              description: "实时跟踪热门话题动态"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl"
            >
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Popular Accounts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {accounts.map((account, index) => (
            <div
              key={index}
              className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{account.avatar}</div>
                <div>
                  <h3 className="text-xl font-semibold">{account.name}</h3>
                  <p className="text-gray-400">{account.followers} 关注</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{account.description}</p>
              <div className="flex space-x-2">
                {account.categories.map((category, catIndex) => (
                  <span
                    key={catIndex}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
            开始订阅
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default WeChatHub