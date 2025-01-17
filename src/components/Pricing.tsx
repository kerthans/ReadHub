'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Check } from 'lucide-react'

const plans = [
  {
    name: '基础版',
    price: '0',
    description: '适合个人轻度使用',
    features: [
      '最多添加5个RSS源',
      '基础AI摘要生成',
      '每日50篇文章阅读额度',
      '基础数据分析',
      '手机端访问'
    ]
  },
  {
    name: 'Pro版',
    price: '29',
    description: '适合重度用户',
    popular: true,
    features: [
      '无限RSS源',
      '高级AI摘要和关键点提取',
      '无限文章阅读',
      '高级数据分析和可视化',
      '所有平台访问',
      '7*24小时客服支持',
      'API访问'
    ]
  },
  {
    name: '团队版',
    price: '99',
    description: '适合团队使用',
    features: [
      '所有Pro版功能',
      '多人协作',
      '团队文章共享',
      '团队数据分析',
      '自定义域名',
      '专属客户经理',
      '培训支持'
    ]
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            选择适合你的方案
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            灵活的价格方案，满足不同用户的需求
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`relative h-full bg-gray-900/50 border-white/10 backdrop-blur-xl
                ${plan.popular ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm 
                                  py-1 px-3 rounded-full">
                      最受欢迎
                    </div>
                  </div>
                )}

                <CardHeader>
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">¥{plan.price}</span>
                    <span className="text-gray-400">/月</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    开始使用
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 装饰性背景 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}