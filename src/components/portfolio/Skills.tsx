"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Brain,
  Cpu,
  FileCode,
  Database,
  Cloud,
  Terminal,
  Server,
} from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: Code2,
    proficiency: 95,
    color: "from-emerald-400 to-teal-500",
    description: "Pandas, NumPy, Scikit-learn, Core Python",
  },
  {
    name: "Machine Learning",
    icon: Brain,
    proficiency: 90,
    color: "from-teal-400 to-cyan-500",
    description: "Scikit-learn, XGBoost, Feature Engineering",
  },
  {
    name: "Deep Learning",
    icon: Cpu,
    proficiency: 85,
    color: "from-cyan-400 to-emerald-500",
    description: "TensorFlow, PyTorch, Neural Networks",
  },
  {
    name: "NLP",
    icon: FileCode,
    proficiency: 88,
    color: "from-emerald-500 to-green-500",
    description: "Transformers, Spacy, Text Classification",
  },
  {
    name: "Data Analysis",
    icon: Database,
    proficiency: 90,
    color: "from-green-400 to-teal-500",
    description: "Pandas, Matplotlib, Seaborn, EDA",
  },
  {
    name: "Model Deployment",
    icon: Cloud,
    proficiency: 82,
    color: "from-teal-500 to-emerald-600",
    description: "Flask, FastAPI, Docker, REST APIs",
  },
  {
    name: "Databases",
    icon: Database,
    proficiency: 85,
    color: "from-emerald-400 to-cyan-500",
    description: "PostgreSQL, MongoDB, Redis, SQL",
  },
  {
    name: "Cloud Platforms",
    icon: Cloud,
    proficiency: 78,
    color: "from-cyan-500 to-teal-600",
    description: "AWS, GCP, SageMaker, Cloud Functions",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of AI/ML technologies built through hands-on
            experience with real-world intelligent systems and data solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={cardVariants}>
              <Card className="bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full group">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors`}>
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-primary font-medium">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
