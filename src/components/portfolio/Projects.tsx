"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Smart PDF Access Platform",
    description:
      "An AI-powered PDF management system with user authentication, role-based access control, and automated document classification using machine learning.",
    image: "/project1.png",
    techStack: ["Python", "FastAPI", "Machine Learning", "React", "PostgreSQL"],
    liveUrl: "https://verifile.ai",
    sourceUrl: "https://github.com/waqas-fazal/verifile",
  },
  {
    title: "House Price Prediction System",
    description:
      "A predictive analytics system using linear regression and machine learning to estimate house prices based on area, bedrooms, bathrooms, and location features.",
    image: "/project2.png",
    techStack: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Matplotlib"],
    liveUrl: "https://housepredictor.streamlit.app",
    sourceUrl: "https://github.com/waqas-fazal/house-price-predictor",
  },
  {
    title: "Mental Health Chatbot – EchoCare",
    description:
      "An intelligent NLP-powered chatbot for mental health support, providing personalized guidance, sentiment analysis, and curated mental health resources.",
    image: "/project3.png",
    techStack: ["Python", "NLP", "TensorFlow", "Flask", "React"],
    liveUrl: "https://echocare.ai",
    sourceUrl: "https://github.com/waqas-fazal/echocare",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building
            end-to-end solutions with modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className="bg-card/50 border-border/50 overflow-hidden group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-foreground/30 text-foreground hover:bg-foreground/10 rounded-lg"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </motion.div>
                  </div>
                </div>

                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary/80 border-primary/10 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-5 pt-4 border-t border-border/50">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.sourceUrl}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Source Code
                    </a>
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
