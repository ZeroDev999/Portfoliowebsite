import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Linkedin, Mail, Award, Briefcase } from "lucide-react";

export function About() {
  const team = [
    {
      name: "Apiwat",
      role: "ผู้สร้างและจัดทำโปรเจคนี้",
      image: "src/app/image/unnamed.jpg",
      bio: "ด้วยประสบการณ์กว่า 5 ปีในการออกแบบเว็บและuiต่างๆ",
      specialties: [
        "พัฒนาเว็บ",
        "พัฒนาแอปพลิเคชัน",
        "Game Developer",
        "UX-UI design",
      ],
      awards: ["รางวัล Ui Design", "รางวัล Web Application", "รางวัลเกมดีเด่น"],
      email: "zero99dev@gmail.com",
      linkedin: "https://linkedin.com/in/apiwat",
    },
    {
      name: "คุณานนท์ มังน้อย",
      role: "เจ้าชาย ไม่ทำไรเลย",
      image:
        "src/app/image/unnamed1.jpg",
      bio: "นักเล่นเกม roblox",
      specialties: ["เล่นเกม", "จะหมดเวลาส่งก็เล่น", "เล่นอยู่อย่างั้น"],
      awards: ["เล่นเกมทุกเวลา", "เล่นเกม", "รางวัล เล่นเกมจนตัวแตก"],
      email: "marcus@email.com",
      linkedin: "https://linkedin.com/in/marcus",
    },
  ];

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
                Our Team
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              คุณสามารถดูข้อมูลเกี่ยวกับ ผลงานและ
              ความเชี่ยวชาญในด้านต่างๆของทีมงานเราได้เลย
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="relative max-w-sm mx-auto">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-8 left-8 w-full h-full border border-amber-500/20 rounded-2xl" />
              </div>

              {/* Content */}
              <div
                className={
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }
              >
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">
                      {member.name}
                    </h2>
                    <p className="text-amber-400 text-xl">{member.role}</p>
                  </div>

                  <p className="text-white/70 text-lg leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase size={20} className="text-amber-400" />
                      <h3 className="font-semibold">ความเชี่ยวชาญ</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/5 border border-amber-700/30 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={20} className="text-amber-400" />
                      <h3 className="font-semibold">รางวัลและการยอมรับ</h3>
                    </div>
                    <ul className="space-y-2">
                      {member.awards.map((award, i) => (
                        <li
                          key={i}
                          className="text-white/70 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-4">
                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/30 rounded-lg transition-all duration-300"
                    >
                      <Linkedin size={20} className="text-amber-400" />
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${member.email}`}
                      className="p-3 bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/30 rounded-lg transition-all duration-300"
                    >
                      <Mail size={20} className="text-amber-400" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-900/30 to-amber-950/20 border border-amber-700/30 rounded-3xl p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "โปรเจกต์ที่สำเร็จ" },
                { value: "15+", label: "ประเทศที่ให้บริการ" },
                { value: "98%", label: "ความพึงพอใจของลูกค้า" },
                { value: "20+", label: "รางวัลในอุตสาหกรรม" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                เกี่ยวกับเรา
              </span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              เรามุ่งเน้นการทำเว็บและการพัฒนา Application และ Game เพิ่อให้คุณได้คุณภาพที่ดีที่สุด
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              ด้วยการผสมผสานการคิดเชิงกลยุทธ์ทางเทคนิคกับทีมของเรา เพื่อให้ คุณภาพของ งานเราดียิ่งขี้น
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
