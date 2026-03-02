import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to backend in production)
    console.log("Form submitted:", formData);
    alert("ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-black" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                ติดต่อเรา
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              พร้อมเริ่มโปรเจกต์ถัดไปของคุณหรือยัง? เรายินดีที่จะรับฟังจากคุณ
              ติดต่อเรามาและมาสร้างสรรค์สิ่งพิเศษด้วยกัน
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                    ติดต่อเรา
                  </span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  ไม่ว่าคุณจะมีโปรเจกต์ในใจ ต้องการคำปรึกษา
                  หรือแค่อยากทักทาย เรายินดีที่จะช่วยเหลือ
                  ทีมของเรามักจะตอบกลับภายใน 24 ชั่วโมง
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/30 transition-all duration-300">
                  <div className="p-3 bg-amber-500/10 rounded-lg">
                    <Mail className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">อีเมล</h3>
                    <a
                      href="mailto:hello@designstudio.com"
                      className="text-white/70 hover:text-amber-400 transition-colors"
                    >
                      hello@designstudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/30 transition-all duration-300">
                  <div className="p-3 bg-amber-500/10 rounded-lg">
                    <Phone className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">โทรศัพท์</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-white/70 hover:text-amber-400 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/30 transition-all duration-300">
                  <div className="p-3 bg-amber-500/10 rounded-lg">
                    <MapPin className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ที่อยู่</h3>
                    <p className="text-white/70">
                      123 ถนนดีไซน์
                      <br />
                      นิวยอร์ก, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-amber-900/30 to-amber-950/20 border border-amber-700/30 rounded-2xl p-6">
                <h3 className="font-semibold mb-4 text-amber-400">
                  เวลาทำการ
                </h3>
                <div className="space-y-2 text-white/70">
                  <div className="flex justify-between">
                    <span>จันทร์ - ศุกร์</span>
                    <span>9:00 - 18:00 น.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>เสาร์</span>
                    <span>10:00 - 16:00 น.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>อาทิตย์</span>
                    <span>ปิด</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 text-white/90">
                    ชื่อ *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 text-white placeholder:text-white/40"
                    placeholder="ชื่อเต็มของคุณ"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-white/90">
                    อีเมล *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 text-white placeholder:text-white/40"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block mb-2 text-white/90">
                    บริษัท
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 text-white placeholder:text-white/40"
                    placeholder="ชื่อบริษัทของคุณ (ถ้ามี)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-white/90">
                    ข้อความ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 text-white placeholder:text-white/40 resize-none"
                    placeholder="บอกเราเกี่ยวกับโปรเจกต์ของคุณ..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20"
                >
                  <span>ส่งข้อความ</span>
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <p className="text-white/50 text-sm text-center">
                  เราเคารพความเป็นส่วนตัวของคุณ ข้อมูลของคุณจะไม่ถูกแบ่งปัน
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Decorative) */}
      <section className="py-16 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Placeholder for map - in production, you'd integrate Google Maps or similar */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 to-black flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-amber-400 mx-auto mb-4" />
                <p className="text-white/70">แผนที่</p>
                <p className="text-white/50 text-sm mt-2">
                  เยี่ยมชมเราที่สำนักงานนิวยอร์ก
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
