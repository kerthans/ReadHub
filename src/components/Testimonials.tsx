'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "张成竹",
      role: "科技博主",
      avatar: "👨‍💻",
      content: "使用ReadHub后，我每天只需要20分钟就能了解所有重要资讯，效率提升了很多。",
      rating: 5
    },
    {
      name: "贾子昕",
      role: "创业者",
      avatar: "👨‍💼",
      content: "AI总结功能非常棒，让我能快速把握文章重点，再也不用担心错过重要信息。",
      rating: 5
    },
    {
      name: "王五",
      role: "投资分析师",
      avatar: "👨‍💻",
      content: "信息的分类和整理很智能，对我的工作帮助很大。强烈推荐！",
      rating: 5
    }
  ]

  const stats = [
    { label: "注册用户", value: "50,000+" },
    { label: "每日阅读量", value: "1,000,000+" },
    { label: "累计节省时间", value: "100,000+" },
    { label: "用户满意度", value: "98%" }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            用户的声音
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            听听他们怎么说
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl"
            >
              <Quote className="w-8 h-8 text-gray-400 mb-4" />
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-center"
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials