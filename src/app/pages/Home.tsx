import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-amber-950/10" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900/20 border border-amber-700/30 rounded-full text-amber-400 text-sm mb-6">
              <Sparkles size={16} />
              <span>การออกแบบและพัฒนาระดับพรีเมียม</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Portfolio Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              นี่คือผลงานทั้งหมดของเรา
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                to="/portfolio"
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-500/20"
              >
                ดูผลงานของเรา
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300"
              >
                พบกับทีมงาน
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-amber-400/30 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-amber-400 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                สิ่งที่เรานำเสนอ
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              โซลูชันที่ครอบคลุมและปรับแต่งเพื่อยกระดับแบรนด์ของคุณ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "เอกลักษณ์แบรนด์",
                description:
                  "สร้างสรรค์เอกลักษณ์ทางภาพที่ไม่เหมือนใคร สะท้อนถึงกลุ่มเป้าหมายของคุณและคงอยู่ตลอดกาล",
                image: "https://images.unsplash.com/photo-1727755868077-22f0d2ff8353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwbWluaW1hbHxlbnwxfHx8fDE3NzE4MjgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "พัฒนาเว็บไซต์",
                description:
                  "สร้างเว็บไซต์ที่ซับซ้อนและมีประสิทธิภาพสูง มอบประสบการณ์ผู้ใช้ที่ราบรื่นในทุกอุปกรณ์",
                image: "https://images.unsplash.com/photo-1764601842171-3d6fba7c3830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNzY5Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "ผลิตภัณฑ์ระดับพรีเมียม",
                description:
                  "สร้างผลิตภัณฑ์ดิจิทัลระดับพรีเมียมด้วยความใส่ใจในรายละเอียดและสุนทรียศาสตร์ที่ประณีต",
                image: "https://images.unsplash.com/photo-1745284504942-2eb53650360a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwbHV4dXJ5fGVufDF8fHx8MTc3MTgyODM0NXww&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-amber-400">
                    {feature.title}
                  </h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-900/30 to-amber-950/20 border border-amber-700/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                สนใจติดต่องานกับเราแล้วยัง?
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              ให้เราได้เป็นส่วนนึงกับงานของคุณ
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20"
            >
              ติดต่อเรา
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}