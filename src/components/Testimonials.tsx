'use client'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, HeartHandshake } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Testimonial {
  name: string
  role: string
  avatar: string
  avatarEmoji: string
  content: string
  rating: number
  gradient: string
  accent: string
}

interface SlideDirection {
  direction: number
}

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [slideDirection, setSlideDirection] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const controls = useAnimation()

  const testimonials: Testimonial[] = [
    {
      name: "张成竹",
      role: "科技博主",
      avatar: "/avatars/avatars1.png",
      avatarEmoji: "👨‍💻",
      content: "使用ReadHub后，我每天只需要20分钟就能了解所有重要资讯，效率提升了很多。AI智能聚合的功能特别强大，再也不用在多个平台来回切换了。",
      rating: 5,
      gradient: "from-blue-500/5 to-cyan-500/5",
      accent: "from-blue-400 to-cyan-400"
    },
    {
      name: "贾子昕",
      role: "创业者",
      avatar: "/avatars/avatars3.png",
      avatarEmoji: "👨‍💼",
      content: "AI总结功能非常棒，让我能快速把握文章重点，再也不用担心错过重要信息。对于我们这些时间宝贵的创业者来说，这简直是神器。",
      rating: 5,
      gradient: "from-purple-500/5 to-pink-500/5",
      accent: "from-purple-400 to-pink-400"
    },
    {
      name: "王五",
      role: "投资分析师",
      avatar: "/avatars/avatars2.png",
      avatarEmoji: "👨‍💻",
      content: "信息的分类和整理很智能，对我的工作帮助很大。每天早上打开ReadHub，市场动态一目了然，大大提升了工作效率。强烈推荐！",
      rating: 5,
      gradient: "from-orange-500/5 to-rose-500/5",
      accent: "from-orange-400 to-rose-400"
    }
  ]

  const startAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    autoPlayRef.current = setInterval(() => {
      setSlideDirection(1)
      setActiveTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 5000)
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [])

  const handleTestimonialChange = (direction: number) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    setSlideDirection(direction)
    if (direction > 0) {
      setActiveTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    } else {
      setActiveTestimonial((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      )
    }
    startAutoPlay()
  }

  const handleDragEnd = (_: never, info: { offset: { x: number } }) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    if (info.offset.x > 100) {
      handleTestimonialChange(-1)
    } else if (info.offset.x < -100) {
      handleTestimonialChange(1)
    }
    controls.start({ x: 0 })
    startAutoPlay()
  }

  const slideVariants = {
    enter: ({ direction }: SlideDirection) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: ({ direction }: SlideDirection) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-[35rem] h-[35rem] bg-purple-500/5 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center space-x-2 mb-6"
          >
            <HeartHandshake className="w-6 h-6 text-blue-400" />
            <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">
              用户评价
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r text-gradient-ocean bg-clip-text text-transparent">
            他们都在用 ReadHub
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            来自各行各业的
            <span className="text-white font-medium mx-2">专业人士</span>
            都在使用 ReadHub 提升工作效率
          </p>
        </motion.div>

        {/* Testimonials Showcase */}
        <div 
          className="relative mb-32 rounded-3xl overflow-hidden backdrop-blur-xl"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative h-[600px]">
            <AnimatePresence initial={false} custom={{ direction: slideDirection }}>
              <motion.div
                key={activeTestimonial}
                custom={{ direction: slideDirection }}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className={`absolute inset-0 w-full h-full bg-gradient-to-br ${testimonials[activeTestimonial].gradient} backdrop-blur-xl`}
              >
                <div className="h-full px-8 md:px-16 lg:px-24 flex flex-col justify-center items-center">
                  <Quote className="w-12 h-12 text-white/10 absolute top-12 left-12" />
                  <Quote className="w-12 h-12 text-white/10 absolute bottom-12 right-12 rotate-180" />
                  
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative mb-12 group"
                  >
                    <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/10 group-hover:ring-white/20 transition-all">
                      <Image
                        src={testimonials[activeTestimonial].avatar}
                        alt={`${testimonials[activeTestimonial].name} 的头像`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </div>
                    <motion.div
                      className={`absolute -bottom-2 -right-2 bg-gradient-to-r ${testimonials[activeTestimonial].accent} 
                        rounded-full p-2 group-hover:scale-110 transition-transform`}
                    >
                      <Star className="w-5 h-5 text-white" fill="currentColor" />
                    </motion.div>
                  </motion.div>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl font-light mb-12 max-w-4xl text-center leading-relaxed"
                  >
                    {testimonials[activeTestimonial].content}
                  </motion.p>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-medium mb-2">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-400 text-lg">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <motion.div 
            className="absolute inset-y-0 left-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => handleTestimonialChange(-1)}
              className="p-3 mx-6 rounded-full bg-white/5 backdrop-blur-xl hover:bg-white/10 
                transition-all hover:scale-110 group"
              aria-label="查看上一个评价"
            >
              <ChevronLeft className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
            </button>
          </motion.div>

          <motion.div 
            className="absolute inset-y-0 right-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => handleTestimonialChange(1)}
              className="p-3 mx-6 rounded-full bg-white/5 backdrop-blur-xl hover:bg-white/10 
                transition-all hover:scale-110 group"
              aria-label="查看下一个评价"
            >
              <ChevronRight className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
            </button>
          </motion.div>

          {/* Progress indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => {
                  setSlideDirection(index > activeTestimonial ? 1 : -1)
                  setActiveTestimonial(index)
                  startAutoPlay()
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'w-12 bg-white' 
                    : 'w-4 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`切换到第 ${index + 1} 个评价`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials