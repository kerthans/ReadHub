'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Bell, Bookmark, TrendingUp, ArrowRight, Users, Sparkles } from 'lucide-react'

const WeChatHub = () => {
  const accounts = [
    {
      name: "科技前沿",
      avatar: "🚀",
      followers: "100k+",
      description: "关注全球最新科技动态",
      categories: ["科技", "创新"],
      engagement: "98%好评"
    },
    {
      name: "商业洞察",
      avatar: "💼",
      followers: "80k+",
      description: "深度解读商业趋势",
      categories: ["商业", "经济"],
      engagement: "95%好评"
    },
    {
      name: "创投视角",
      avatar: "💡",
      followers: "50k+",
      description: "聚焦创业投资领域",
      categories: ["创投", "创业"],
      engagement: "96%好评"
    }
  ]

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "智能聚合",
      description: "自动整合多个公众号内容，提供一站式阅读体验",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "实时推送",
      description: "第一时间获取更新提醒，不错过重要信息",
    },
    {
      icon: <Bookmark className="w-6 h-6" />,
      title: "智能分类",
      description: "AI自动对文章进行主题分类，轻松找到感兴趣内容",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "热点追踪",
      description: "实时跟踪热门话题动态，把握行业脉搏",
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden" id="features">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Diagonal Design */}
        <div className="relative mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r text-gradient-white-cloud bg-clip-text text-transparent">
                公众号内容
              </span>
              <br />
              <span className="bg-gradient-to-r text-gradient-purple-royal bg-clip-text text-transparent">
                智能聚合
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 leading-relaxed">
              汇聚优质公众号，AI智能分类整理，让您轻松获取有价值的信息
            </p>
          </motion.div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent -skew-x-12 transform origin-top-right" />
        </div>

        {/* Features Section with Timeline Style */}
        <div className="mb-32">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50" />
            
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-24 mb-16 group"
              >
                {/* Timeline Node */}
                <div className="absolute left-6 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 group-hover:scale-150 transition-transform">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-25" />
                </div>
                
                <div className="group-hover:translate-x-2 transition-transform">
                  <div className="flex items-center mb-4 text-blue-400">
                    {feature.icon}
                    <h3 className="ml-4 text-2xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Popular Accounts with Horizontal Scroll */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r text-gradient-white-cloud bg-clip-text text-transparent">
            精选公众号
          </h2>
          <div className="flex space-x-8 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
            {accounts.map((account, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-none w-80 group"
              >
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    {account.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {account.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{account.followers}</span>
                    </div>
                  </div>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-blue-500/50 to-purple-500/50 mb-6" />
                <p className="text-gray-400 mb-4">
                  {account.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {account.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="text-sm text-blue-400"
                      >
                        #{category}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-green-400 text-sm">
                    <Sparkles className="w-4 h-4 mr-1" />
                    {account.engagement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section with Diagonal Split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform -skew-y-6" />
          <div className="relative py-16 text-center">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r text-gradient-white-cloud bg-clip-text text-transparent">
              开启智能阅读新体验
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              立即订阅，享受AI智能聚合带来的效率提升
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium
                inline-flex items-center space-x-2 hover:from-blue-600 hover:to-purple-600 transition-all
                shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <span>由此开始</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WeChatHub