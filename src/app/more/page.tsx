'use client'

import { motion } from 'framer-motion'
import {
  Construction,
  Hammer,
  Clock,
  AlertCircle,
  Mail,
  ArrowRight,
  Heart
} from 'lucide-react'

const ComingSoon = () => {
  const features = [
    {
      title: "AI 个性化推荐",
      description: "基于您的阅读习惯，智能推荐感兴趣的内容",
      status: "预计2月上线",
      progress: 85
    },
    {
      title: "多语言翻译",
      description: "一键翻译多国语言，无障碍阅读全球资讯",
      status: "开发中",
      progress: 60
    },
    {
      title: "语音朗读",
      description: "通过AI语音技术，将文字转换为自然语音",
      status: "即将开始",
      progress: 30
    },
    {
      title: "社区互动",
      description: "与志同道合的读者交流讨论，分享见解",
      status: "规划中",
      progress: 15
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5" />
      
      {/* Construction pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-6 inline-block"
          >
            <Construction className="w-20 h-20 text-yellow-500 mx-auto" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            更多精彩功能开发中 🚧
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            抱歉让您久等了 🙇‍♂️ 我们的开发团队正在加紧建设更多令人激动的功能。
            感谢您的理解与支持！
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <span className="px-3 py-1 rounded-full text-sm bg-white/10 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {feature.status}
                </span>
              </div>
              
              <p className="text-gray-400 mb-6">{feature.description}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>开发进度</span>
                  <span>{feature.progress}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${feature.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
            <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              想第一时间体验新功能？ ✨
            </h3>
            <p className="text-gray-400 mb-8">
              订阅我们的更新通知，抢先体验最新功能！
            </p>
            
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span>订阅通知</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <span>我们承诺不会向您发送垃圾邮件 </span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-20 text-gray-400"
        >
          <p className="flex items-center justify-center gap-2">
            <Hammer className="w-5 h-5 animate-bounce" />
            <span>开发进行中，敬请期待...</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ComingSoon