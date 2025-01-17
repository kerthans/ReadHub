'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Plus, ArrowRight, Wand2 } from 'lucide-react'

const steps = [
  {
    title: '添加信息源',
    description: '输入RSS链接或选择你喜欢的公众号，一键导入到ReadHub',
    icon: Plus,
  },
  {
    title: '智能处理',
    description: 'AI自动分析内容，生成摘要，提取关键信息和知识点',
    icon: Wand2,
  },
  {
    title: '个性推送',
    description: '根据你的阅读习惯和偏好，智能推送最相关的内容',
    icon: ArrowRight,
  }
]

export function HowItWorks() {
  return (
    <section className="relative py-20 bg-black">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            简单三步，开启智能阅读
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            快速上手，轻松体验全新的信息获取方式
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="relative bg-gray-900/50 border-white/10 overflow-hidden group">
                <CardContent className="pt-8">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 
                                to-purple-500/20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                                  flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </CardContent>

                {/* 装饰性数字 */}
                <div className="absolute right-4 bottom-4 text-8xl font-bold text-white/5">
                  {index + 1}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 连接线(仅在大屏显示) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}