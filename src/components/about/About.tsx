import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCpu, FiServer, FiCloud, FiDatabase, FiLayout } from 'react-icons/fi';
import { useTheme } from '../ThemeContext';
import React from 'react';

const Sobre = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const neonEffect = theme === 'dark'
    ? 'shadow-[0_0_20px_#3b82f6]'
    : 'shadow-[0_0_10px_#60a5fa]';

  return (
    <section
      ref={ref}
      className="relative pb-4 pt-28 bg-gradient-to-b from-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:to-gray-900 overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-pink-200/20 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative group perspective-1000"
          >
            <div className={`absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur opacity-30 group-hover:opacity-50 transition-opacity ${neonEffect}`} />
            <div className="relative h-96 w-96 mx-auto rounded-full bg-white/5 backdrop-blur-lg border-2 border-white/20 dark:border-gray-600/20 transform-style-preserve-3d group-hover:rotate-[15deg] transition-all duration-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-72 w-72 clip-hexagon">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/20 animate-gradient-rotate" />

                  {[FiCode, FiServer, FiCpu, FiDatabase, FiCloud, FiCpu].map((Icon, index) => (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        left: `${50 + Math.cos((index * 60 * Math.PI) / 180) * 35}%`,
                        top: `${50 + Math.sin((index * 60 * Math.PI) / 180) * 35}%`
                      }}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8 + index * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Icon className="w-8 h-8 text-blue-500 dark:text-purple-400" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              <span className="text-gray-900 dark:text-gray-100">Desenvolvedor</span>
              <br />
              <span className="typewriter">Front End</span>
            </motion.h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FiCode, title: 'Frontend', tech: 'React.js/Next.js' },
                { icon: FiServer, title: 'Backend', tech: 'Node.js' },
                { icon: FiLayout, title: 'Styling', tech: 'Tailwind CSS' },
                { icon: FiCloud, title: 'DevOps', tech: 'Docker' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 dark:border-gray-700/30 hover:border-blue-400/30 transition-all group"
                >
                  <item.icon className="w-8 h-8 mb-4 text-blue-500 dark:text-purple-400 group-hover:text-purple-500 transition-colors" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-600/80 dark:text-purple-300/80 font-mono">
                    {item.tech}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            >
              Desenvolvedor front end apaixonado por ReactJS com  <span className="text-blue-500 dark:text-blue-400">mais de 8 anos</span> de experiência no desenvolvimento de sistemas. Especializado em criar interfaces responsivas e intuitivas utilizando JavaScript, buscando constantemente atualizações e inovações no campo. Sou movido pelo desafio de entregar <span className="text-purple-500 dark:text-purple-400">soluções excepcionais</span> aos clientes, enquanto minha paixão por esportes e séries contribui para uma <span className="border-b-2 border-blue-500 dark:border-purple-400">mente criativa e aberta</span> a novas perspectivas. Estou sempre em busca de oportunidades para aprender, crescer e colaborar com equipes inspiradoras e apaixonadas por inovação.
            </motion.p>
          </div>
        </div>

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute hidden lg:block"
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
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-2 h-2 bg-blue-400/30 dark:bg-purple-400/30 rounded-full" />
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        @keyframes gradient-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-gradient-rotate {
          animation: gradient-rotate 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Sobre;