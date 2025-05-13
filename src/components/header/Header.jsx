import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState } from 'react';
import { useTheme } from '../ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="font-mono text-2xl hover:text-blue-500 dark:hover:text-purple-400 transition-all">
              <span className="text-gray-400 dark:text-gray-500">{'// '}</span>
              <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                rogerio.dev
              </span>
            </Link>
          </motion.div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <Link to="/sobre" className="hover:text-blue-500 dark:text-gray-300 dark:hover:text-white transition-all">
                Sobre
              </Link>
              <Link to="/projetos" className="hover:text-blue-500 dark:text-gray-300 dark:hover:text-white transition-all">
                Jornada
              </Link>
              <Link to="/contato" className="hover:text-blue-500 dark:text-gray-300 dark:hover:text-white transition-all">
                Contato
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? (
                  <FiSun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <FiMoon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header