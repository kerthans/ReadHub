'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const PricingPlans = () => {
  const plans = [
    {
      name: "个人免费版",
      price: "0",
      period: "永久免费",
      description: "适合个人轻度使用",
      features: [
        "最多添加 5 个 RSS 源",
        "基础 AI 摘要功能",
        "2 个公众号订阅",
        "基础数据统计",
        "标准客户支持"
      ],
      buttonText: "开始使用",
      popular: false
    },
    {
      name: "专业版",
      price: "29",
      period: "每月",
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
      buttonText: "升级专业版",
      popular: true
    },
    {
      name: "团队版",
      price: "99",
      period: "每月",
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
      buttonText: "联系我们",
      popular: false
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            选择适合您的方案
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            灵活的定价方案，满足不同需求
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 backdrop-blur-xl rounded-xl ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm bg-blue-500 text-white">
                    <Star className="w-4 h-4 mr-1" fill="currentColor" />
                    最受欢迎
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  ¥{plan.price}
                  <span className="text-lg text-gray-400">/{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">常见问题</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "如何选择合适的方案？",
                a: "根据您的使用需求和预算选择。个人用户建议从免费版开始体验，需要更多功能可升级到专业版。"
              },
              {
                q: "是否支持随时更换方案？",
                a: "是的，您可以随时升级或降级您的订阅方案，费用会按比例计算。"
              },
              {
                q: "可以免费试用专业版吗？",
                a: "提供14天免费试用专业版全部功能，无需信用卡。"
              },
              {
                q: "付款方式有哪些？",
                a: "支持支付宝、微信支付、银行卡等多种支付方式。"
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl"
              >
                <h4 className="text-lg font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingPlans