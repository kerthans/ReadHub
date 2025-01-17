'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Rss, Bot, Newspaper, Sparkles, Clock, Share2 } from 'lucide-react'

const features = [
  {
    title: 'RSS聚合',
    description: '支持各类RSS源，将分散的信息统一管理，一站式获取你关注的所有内容更新。',
    icon: Rss,
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: '公众号订阅',
    description: '无缝对接微信公众号，第一时间获取作者更新，支持历史文章查看和搜索。',
    icon: Newspaper,
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'AI智能总结',
    description: '使用先进的AI技术，自动生成文章摘要和关键点，让你快速把握核心内容。',
    icon: Bot,
    color: 'from-green-500 to-green-600'
  },
  {
    title: '智能推荐',
    description: '基于你的阅读历史和兴趣，智能推荐相关优质内容，发现更多有价值信息。',
    icon: Sparkles,
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    title: '稍后阅读',
    description: '便捷的文章收藏和归档功能，随时整理你的阅读清单，不错过任何重要内容。',
    icon: Clock,
    color: 'from-red-500 to-red-600'
  },
  {
    title: '一键分享',
    description: '轻松将精彩内容分享给好友，支持多平台分享，打造你的知识影响力。',
    icon: Share2,
    color: 'from-indigo-500 to-indigo-600'
  }
]

export function Features() {
  return (
    <section id="features" className="relative py-20 overflow-hidden bg-black">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            强大功能，简单使用
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            集成丰富的功能，打造个性化的信息获取体验
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-white/10 hover:border-white/20 transition-colors">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} 
                    flex items-center justify-center mb-4 shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 装饰性光效 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
}