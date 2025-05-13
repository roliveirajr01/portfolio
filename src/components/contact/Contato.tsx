import { motion } from 'framer-motion';
import { SiLinkedin } from 'react-icons/si';
import { FiMail, FiMessageCircle } from 'react-icons/fi';
import React from 'react';

const Contato = () => {
  const handleEmailClick = () => {
    navigator.clipboard.writeText('roliveirajr01@gmail.com');
  };

  return (
    <section className="relative pt-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Vamos tomar um <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">café?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all cursor-pointer"
            onClick={() => window.open('https://www.linkedin.com/in/roliveira-junior/', '_blank')}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/20">
                <SiLinkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Conecte-se profissionalmente</p>
              <span className="text-blue-600 dark:text-blue-400 text-sm">@rogerio-junior</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all cursor-pointer"
            onClick={handleEmailClick}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900/20">
                <FiMail className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Email</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Me mande uma mensagem</p>
              <span className="text-purple-600 dark:text-purple-400 text-sm">roliveirajr01@gmail.com</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all cursor-pointer"
            onClick={() => window.open('https://wa.me/5511972576473', '_blank')}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/20">
                <FiMessageCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Conversa rápida e direta</p>
              <span className="text-green-600 dark:text-green-400 text-sm">+55 (11) 97257-6473</span>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-24 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()} Rogério Oliveira. Todos os direitos reservados.
              <span className="mx-2">•</span>
              Feito com <span className="text-red-500">♥</span> e React
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contato;