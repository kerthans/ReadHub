'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Book, Newspaper } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-150" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-300" />
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />

      {/* Refined grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16 pt-16 md:pt-10"
        >
          {/* Enhanced badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl hover:bg-white/10 transition-all duration-300"
          >
            <Sparkles className="w-6 h-6 text-yellow-400 mt-0.5" />
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{
                fontSize: '1rem',
                fontWeight: '500',
                background: 'linear-gradient(to right, white, rgba(255, 255, 255, 0.8))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="hover:text-white transition-colors duration-300"
            >
              AI驱动的下一代信息聚合平台
            </motion.span>
          </motion.div>

          {/* Enhanced headline */}
          <div className="space-y-6">
            <h1 style={{
              fontSize: '3.75rem',
              fontWeight: '700',
              letterSpacing: '-0.025em'
            }}>
              <motion.span
                className="block text-gradient-white hover:scale-105 transition-transform duration-300"
              >
                重新定义你的
              </motion.span>
              <motion.span
                className="block mt-2 text-gradient-cosmic hover:scale-105 transition-transform duration-300"
              >
                信息食谱
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col items-center space-y-8"
            >
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
                通过 AI 智能引擎，为你提供个性化的阅读体验，
                <span className="text-white/90">让信息获取更高效、更智能、更有价值。</span>
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <FeatureTag icon={<Zap className="w-4 h-4" />} text="AI 智能总结" />
                <FeatureTag icon={<Book className="w-4 h-4" />} text="RSS 聚合" />
                <FeatureTag icon={<Newspaper className="w-4 h-4" />} text="公众号整合" />
              </div>
            </motion.div>
          </div>

          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
              <span className="flex items-center space-x-2">
                立即开始体验
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300 hover:border-white/20">
              查看功能演示
            </button>
          </motion.div>

          {/* Enhanced stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
          >
            {[
              ['10K+', '活跃用户', '持续增长的用户基数'],
              ['100K+', 'AI文章总结', '智能解析与归纳'],
              ['5K+', 'RSS源', '优质内容源'],
              ['1000+', '公众号接入', '多平台内容聚合']
            ].map(([stat, label, desc]) => (
              <motion.div 
                key={label} 
                className="text-center space-y-2 p-4 rounded-2xl hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-white/90 drop-shadow-sm text-gradient-white">
                  {stat}
                </div>
                <div className="text-lg font-medium text-white/80">{label}</div>
                <div className="text-sm text-gray-400">{desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced floating cards */}
      <FloatingCards />
    </div>
  )
}

const FeatureTag = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
  >
    {icon}
    <span>{text}</span>
  </motion.div>
)

const FloatingCards = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 100, x: -100, rotate: -10 }}
        animate={{ 
          opacity: 0.4,
          y: [100, 50, 100],
          x: [-100, -50, -100],
          rotate: [-10, 0, -10]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-20 left-20 w-72 h-44 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl shadow-blue-500/10"
      />
      
      <motion.div
        initial={{ opacity: 0, y: -100, x: 100, rotate: 10 }}
        animate={{ 
          opacity: 0.4,
          y: [-100, -50, -100],
          x: [100, 50, 100],
          rotate: [10, 0, 10]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-20 right-20 w-72 h-44 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl shadow-purple-500/10"
      />

      <motion.div
        initial={{ opacity: 0, y: 50, x: 150, rotate: -5 }}
        animate={{ 
          opacity: 0.3,
          y: [50, 0, 50],
          x: [150, 100, 150],
          rotate: [-5, 0, -5]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/2 right-40 w-64 h-40 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl shadow-pink-500/10"
      />
    </div>
  )
}

export default Hero