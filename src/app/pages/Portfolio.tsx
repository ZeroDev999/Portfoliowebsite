import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "ทั้งหมด" },
    { id: "branding", label: "แบรนด์ดิ้ง" },
    { id: "web", label: "เว็บไซต์" },
    { id: "product", label: "ผลิตภัณฑ์" },
  ];

  const projects = [
    {
      id: 1,
      title: "รีแบรนด์เครื่องสำอางหรู",
      category: "branding",
      description: "การออกแบบเอกลักษณ์แบรนด์ใหม่ทั้งหมดสำหรับสายผลิตภัณฑ์เครื่องสำอางหรูหรา",
      image: "https://images.unsplash.com/photo-1745284504942-2eb53650360a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwbHV4dXJ5fGVufDF8fHx8MTc3MTgyODM0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2025",
      tags: ["แบรนด์ดิ้ง", "เอกลักษณ์", "บรรจุภัณฑ์"],
    },
    {
      id: 2,
      title: "บริษัทสถาปัตยกรรมสมัยใหม่",
      category: "web",
      description: "เว็บไซต์พรีเมียมสำหรับนำเสนอโปรเจกต์สถาปัตยกรรมร่วมสมัย",
      image: "https://images.unsplash.com/photo-1638454795595-0a0abf68614d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGx1eHVyeXxlbnwxfHx8fDE3NzE3NDMyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2025",
      tags: ["การออกแบบเว็บ", "พัฒนา", "3D"],
    },
    {
      id: 3,
      title: "การออกแบบพื้นที่ทำงานสำหรับผู้บริหาร",
      category: "product",
      description: "การออกแบบผลิตภัณฑ์ดิจิทัลสำหรับการจัดการพื้นที่ทำงานระดับหรูหรา",
      image: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b3Jrc3BhY2UlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzcxODI4MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2024",
      tags: ["UI/UX", "ผลิตภัณฑ์", "มือถือ"],
    },
    {
      id: 4,
      title: "เอกลักษณ์แบรนด์มินิมอล",
      category: "branding",
      description: "ระบบแบรนด์ที่สะอาดและซับซ้อนสำหรับสตาร์ทอัพเทคโนโลยี",
      image: "https://images.unsplash.com/photo-1727755868077-22f0d2ff8353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwbWluaW1hbHxlbnwxfHx8fDE3NzE4MjgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2024",
      tags: ["แบรนด์ดิ้ง", "โลโก้", "แนวทาง"],
    },
    {
      id: 5,
      title: "แพลตฟอร์มสตูดิโอสร้างสรรค์",
      category: "web",
      description: "แพลตฟอร์มพอร์ตโฟลิโอแบบโต้ตอบสำหรับนักสร้างสรรค์มืออาชีพ",
      image: "https://images.unsplash.com/photo-1759884837460-a296cb57a3d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHByb2plY3QlMjBtb2NrdXB8ZW58MXx8fHwxNzcxNzQwNjg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2024",
      tags: ["การออกแบบเว็บ", "แอนิเมชัน", "CMS"],
    },
    {
      id: 6,
      title: "การออกแบบอินเทอร์เฟซดิจิทัล",
      category: "product",
      description: "แดชบอร์ดสมัยใหม่สำหรับแพลตฟอร์มวิเคราะห์ข้อมูลระดับองค์กร",
      image: "https://images.unsplash.com/photo-1764601842171-3d6fba7c3830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNzY5Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "2024",
      tags: ["แดชบอร์ด", "UI/UX", "การแสดงข้อมูล"],
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                ผลงานของเรา
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              ชุดผลงานที่คัดสรรมาอย่างดีเพื่อแสดงให้เห็นถึงความมุ่งมั่นของเรา
              ในความเป็นเลิศด้านการออกแบบและพัฒนา
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-amber-500/30 transition-all duration-500">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-amber-400 text-sm">{project.year}</span>
                        <span className="text-white/40">•</span>
                        <span className="text-white/60 text-sm">
                          {categories.find(c => c.id === project.category)?.label}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold mb-2">
                        {project.title}
                      </h3>

                      <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors opacity-0 group-hover:opacity-100 delay-200">
                        <span>ดูโปรเจกต์</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-900/30 to-amber-950/20 border border-amber-700/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                มีโปรเจกต์ในใจอยู่หรือไม่?
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              มาคุยกันว่าเราจะนำวิสัยทัศน์ของคุณมาสู่ชีวิตได้อย่างไร
              ด้วยความเชี่ยวชาญของเราด้านการออกแบบและพัฒนา
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20"
            >
              เริ่มบทสนทนา
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
