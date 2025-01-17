'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-100" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm">AI驱动的下一代信息聚合平台</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          <span className="block" style={{
              backgroundImage: 'linear-gradient(to right, #fff, #fff, rgba(255,255,255,0.7))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              重新定义你的
            </span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              信息获取方式
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            集成AI智能总结、RSS订阅和公众号内容聚合，
            <br />
            让信息获取更高效、更智能、更有价值。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              <span className="flex items-center space-x-2">
                立即开始
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
            
            <button className="px-8 py-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
              查看演示视频
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              ['10K+', '活跃用户'],
              ['100K+', '文章总结'],
              ['5K+', 'RSS源'],
              ['1000+', '公众号接入']
            ].map(([stat, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {stat}
                </div>
                <div className="text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 3D floating cards effect */}
      <FloatingCards />
    </div>
  )
}

const FloatingCards = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sample cards that float in the background */}
      <motion.div
        initial={{ opacity: 0, y: 100, x: -100, rotate: -10 }}
        animate={{ 
          opacity: 0.3,
          y: [100, 50, 100],
          x: [-100, -50, -100],
          rotate: [-10, 0, -10]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-20 left-20 w-64 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm border border-white/10"
      />
      
      <motion.div
        initial={{ opacity: 0, y: -100, x: 100, rotate: 10 }}
        animate={{ 
          opacity: 0.3,
          y: [-100, -50, -100],
          x: [100, 50, 100],
          rotate: [10, 0, 10]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-20 right-20 w-64 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl backdrop-blur-sm border border-white/10"
      />
    </div>
  )
}

export default Hero