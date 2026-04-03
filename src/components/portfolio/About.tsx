"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  FolderKanban,
  Users,
  Code2,
  Palette,
  Zap,
} from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: Briefcase,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: FolderKanban,
    value: "10+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "3+",
    label: "Happy Clients",
  },
];

const quickSkills = [
  { icon: Code2, label: "Python" },
  { icon: Code2, label: "TensorFlow" },
  { icon: Code2, label: "PyTorch" },
  { icon: Palette, label: "NLP" },
  { icon: Zap, label: "FastAPI" },
  { icon: Code2, label: "SQL" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 glow-emerald">
                <Image
                  src="/waqas-photo.png"
                  alt="Waqas Fazal"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-card border border-primary/30 rounded-xl px-4 py-2 shadow-xl"
              >
                <span className="text-sm font-semibold text-primary">
                  🤖 AI Innovator
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              AI Engineer &{" "}
              <span className="text-primary">Data Scientist</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an AI Engineer passionate about developing intelligent solutions
                that drive efficiency and innovation. With over 2 years of
                experience, I specialize in machine learning, natural language
                processing, and data-driven decision making.
              </p>
              <p>
                My approach combines cutting-edge AI research with practical
                engineering to build models that are not just accurate, but also
                deployable and scalable. I believe the true power of AI lies in
                its ability to solve real-world problems and create meaningful impact.
              </p>
              <p>
                When I&apos;m not building AI models, you&apos;ll find me exploring
                the latest research papers, experimenting with new frameworks,
                or working on open-source projects that push the boundaries of
                what&apos;s possible with artificial intelligence.
              </p>
            </div>

            {/* Quick skills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {quickSkills.map((skill) => (
                <Badge
                  key={skill.label}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-3 py-1"
                >
                  {skill.label}
                </Badge>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="text-center p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
