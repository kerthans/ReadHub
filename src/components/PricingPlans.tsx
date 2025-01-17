'use client'

import { motion } from 'framer-motion'
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react'
import { useState } from 'react'

const PricingPlans = () => {
  const [hoveredPlan, setHoveredPlan] =  useState<number | null>(null)
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "个人免费版",
      price: isYearly ? "0" : "0",
      period: "永久免费",
      description: "适合个人轻度使用",
      features: [
        "最多添加 5 个 RSS 源",
        "基础 AI 摘要功能",
        "2 个公众号订阅",
        "基础数据统计",
        "标准客户支持"
      ],
      highlights: [],
      buttonText: "开始使用",
      popular: false
    },
    {
      name: "专业版",
      price: isYearly ? "288" : "29",
      period: isYearly ? "每年" : "每月",
      description: "适合个人重度用户",
      features: [
        "无限 RSS 源",
        "高级 AI 摘要和分析",
        "10 个公众号订阅",
        "完整数据分析",
        "优先客户支持",
        "文章归档",
        "跨平台同步",
        "自定义分类"
      ],
      highlights: ["节省 60+ 小时/月", "更智能的内容推荐"],
      buttonText: "升级专业版",
      popular: true,
      saving: isYearly ? "节省 ¥60/年" : null
    },
    {
      name: "团队版",
      price: isYearly ? "988" : "99",
      period: isYearly ? "每年" : "每月",
      description: "适合小型团队使用",
      features: [
        "所有专业版功能",
        "最多 5 个团队成员",
        "团队协作功能",
        "高级数据分析",
        "API 访问",
        "自定义集成",
        "24/7 专属支持",
        "培训指导"
      ],
      highlights: ["提升团队效率 80%", "专属客户成功经理"],
      buttonText: "联系我们",
      popular: false,
      saving: isYearly ? "节省 ¥200/年" : null
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* 动态背景光效 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            选择最适合您的方案
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r text-gradient-aurora bg-clip-text text-transparent">
            灵活定价，按需升级
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            从个人到团队，我们提供多样化的解决方案，助力您的成功
          </p>

          {/* 计费周期切换器 */}
          <div className="mt-8 inline-flex items-center bg-white/5 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !isYearly ? 'bg-blue-500 text-white' : 'text-gray-400'
              }`}
            >
              月付
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isYearly ? 'bg-blue-500 text-white' : 'text-gray-400'
              }`}
            >
              年付
              <span className="ml-1 text-xs text-emerald-400">省20%</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                hoveredPlan === index
                  ? 'transform scale-105'
                  : ''
              } ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30'
                  : 'bg-white/5 backdrop-blur-xl border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                    <Star className="w-4 h-4 mr-1" fill="currentColor" />
                    最受欢迎
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold">¥{plan.price}</span>
                  <span className="text-lg text-gray-400 ml-2">/{plan.period}</span>
                </div>
                {plan.saving && (
                  <span className="inline-block bg-emerald-500/20 text-emerald-400 text-sm px-2 py-1 rounded-full">
                    {plan.saving}
                  </span>
                )}
                <p className="text-gray-400 mt-4">{plan.description}</p>
              </div>

              {plan.highlights.length > 0 && (
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  {plan.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-emerald-400 mb-2 last:mb-0">
                      <Sparkles className="w-4 h-4 mr-2" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center group ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
                <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                  hoveredPlan === index ? 'transform translate-x-1' : ''
                }`} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ 部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r text-gradient-arctic bg-clip-text text-transparent">
            常见问题解答
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "如何选择合适的方案？",
                a: "根据您的使用需求和预算选择。个人用户建议从免费版开始体验，需要更多功能可升级到专业版。我们提供 14 天无条件退款保证。"
              },
              {
                q: "是否支持随时更换方案？",
                a: "是的，您可以随时升级或降级您的订阅方案，费用会按比例计算。系统会自动处理余额。"
              },
              {
                q: "可以免费试用专业版吗？",
                a: "是的，我们提供 14 天免费试用专业版全部功能，无需信用卡。试用期间可以随时取消。"
              },
              {
                q: "支持哪些付款方式？",
                a: "我们支持多种付款方式：支付宝、微信支付、Visa/Master 信用卡、银联等。企业用户可开具增值税专用发票。"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors duration-300"
              >
                <h4 className="text-lg font-semibold mb-3">{faq.q}</h4>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingPlans