import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiDocker
} from 'react-icons/si';
import { useTheme } from '../ThemeContext';

const TechCard = ({ name, icon: Icon, color }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border ${color.border} hover:shadow-lg transition-all group relative overflow-hidden`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${color.bg} ${color.text}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {name}
        </h3>
      </div>
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity ${color.gradient}`} />
    </motion.div>
  );
};

const Habilidades = () => {
  const technologies = [
    {
      name: 'HTML5',
      icon: SiHtml5,
      color: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-500',
        border: 'border-orange-200 dark:border-orange-800',
        gradient: 'from-orange-400 to-red-400'
      }
    },
    {
      name: 'CSS3',
      icon: SiCss3,
      color: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-500',
        border: 'border-blue-200 dark:border-blue-800',
        gradient: 'from-blue-400 to-sky-400'
      }
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/30',
        text: 'text-yellow-500',
        border: 'border-yellow-200 dark:border-yellow-800',
        gradient: 'from-yellow-400 to-amber-400'
      }
    },
    {
      name: 'React',
      icon: SiReact,
      color: {
        bg: 'bg-cyan-100 dark:bg-cyan-900/30',
        text: 'text-cyan-500',
        border: 'border-cyan-200 dark:border-cyan-800',
        gradient: 'from-cyan-400 to-sky-400'
      }
    },
    {
      name: 'Vue.js',
      icon: SiVuedotjs,
      color: {
        bg: 'bg-emerald-100 dark:bg-emerald-900/30',
        text: 'text-emerald-500',
        border: 'border-emerald-200 dark:border-emerald-800',
        gradient: 'from-emerald-400 to-green-400'
      }
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/30',
        text: 'text-indigo-500',
        border: 'border-indigo-200 dark:border-indigo-800',
        gradient: 'from-indigo-400 to-violet-400'
      }
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: {
        bg: 'bg-gray-100 dark:bg-gray-800',
        text: 'text-gray-700 dark:text-gray-300',
        border: 'border-gray-200 dark:border-gray-700',
        gradient: 'from-gray-400 to-slate-400'
      }
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-500',
        border: 'border-green-200 dark:border-green-800',
        gradient: 'from-green-400 to-emerald-400'
      }
    },
    {
      name: 'Git',
      icon: SiGit,
      color: {
        bg: 'bg-red-100 dark:bg-red-900/30',
        text: 'text-red-500',
        border: 'border-red-200 dark:border-red-800',
        gradient: 'from-red-400 to-orange-400'
      }
    },
    {
      name: 'Docker',
      icon: SiDocker,
      color: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-500',
        border: 'border-blue-200 dark:border-blue-800',
        gradient: 'from-blue-400 to-sky-400'
      }
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('/grid.svg')] bg-repeat" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Minha <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:block"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-3 h-3 rounded-full bg-blue-400/30 dark:bg-purple-400/30" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;