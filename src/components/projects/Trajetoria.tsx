import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiBriefcase,
  FiHome,
  FiShoppingCart,
  FiShoppingBag,
  FiAnchor,
  FiPenTool,
  FiLayout,
  FiCloud,
  FiCode,
  FiMapPin,
} from 'react-icons/fi';
import { useTheme } from '../ThemeContext';
import React from 'react';

const TimelineItem = ({ date, title, company, location, description, icon: Icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex gap-6 relative group"
    >
      <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gray-300 dark:bg-gray-600" />

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-full bg-blue-500 dark:bg-purple-500 flex items-center justify-center text-white">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="flex-1 mb-12">
        <div className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all">
          <span className="text-sm text-blue-600 dark:text-purple-400 font-medium">{date}</span>
          <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-gray-100">{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <FiMapPin className="text-gray-500 dark:text-gray-400" />
            <span className="text-gray-600 dark:text-gray-300 text-sm">{company} • {location}</span>
          </div>
          <p className="mt-3 text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Trajetoria = () => {
  const { theme } = useTheme();
  const timelineData = [
    {
      date: "Agosto de 2023 - Presente",
      title: "Desenvolvedor Front End",
      company: "RADIX - ENGENHARIA E SOFTWARE",
      location: "Rio de Janeiro, RJ (remoto)",
      description: "Desenvolvi o novo sistema do ECAD, órgão federal que distribui direitos autorais. Criei os módulos técnicos para avaliar arquivos e calcular os repasses aos artistas, eguindo as regras oficiais. O sistema gerencia todo o processo de distribuição.",
      icon: FiBriefcase
    },
    {
      date: "Março 2021 - Maio 2023",
      title: "Desenvolvedor Front End",
      company: "KENLO",
      location: "Campinas, SP (remoto)",
      description: "DesNa maior fintech imobiliária do Brasil, desenvolvi soluções digitais para o processo de locação, impactando mais de 9000 imobiliárias com tecnologia.",
      icon: FiHome
    },
    {
      date: "Agosto 2019 - Janeiro 2021",
      title: "Desenvolvedor Front end",
      company: "GRUPO BOTICÁRIO",
      location: "São Paulo, SP (remoto)",
      description: "Fui responsável pelo checkout de 40+ lojas do Boticário, desenvolvendo e mantendo o sistema de pagamentos após reconhecimento do meu trabalho na experiência anterior.",
      icon: FiShoppingCart
    },
    {
      date: "Fevereiro 2018 - Agosto 2019",
      title: "Desenvolvedor Front End",
      company: "COREBIZ",
      location: "Alphavile, SP",
      description: "Passei a prestar serviços ao Grupo Boticário e desenvolvi projetos nacionais de e-commerce para suas principais marcas, aprimorando continuamente minha expertise em plataformas de varejo digital.",
      icon: FiShoppingBag
    },
    {
      date: "Agosto 2017 - Janeiro 2018",
      title: "Desenvolvedor Front End",
      company: "GEODATA",
      location: " Mogi das Cruzes, SP",
      description: "Desenvolvi a interface front-end de um sistema nacional de leilões imobiliários, integrando backend e gerenciando dados de imóveis e lances, garantindo usabilidade e performance.",
      icon: FiAnchor
    },
    {
      date: "Fevereiro 2017 - Julho 2017",
      title: "Desenvolvedor Front End",
      company: "LUEGO",
      location: " Mogi das Cruzes, SP",
      description: "Na produtora digital, atuei como Front End com metodologias atualizadas, expandindo conhecimento técnico em projetos nacionais de alto nível.",
      icon: FiPenTool
    },
    {
      date: "Setembro 2016 - Fevereiro 2017",
      title: "Desenvolvedor Front End",
      company: "ADD+",
      location: " Mogi das Cruzes, SP",
      description: "Como Front-end na agência, desenvolvi sites institucionais, blogs e e-commerces, além de integrar big data e newsletters. Ampliei expertise em projetos web diversificados.",
      icon: FiLayout
    },
    {
      date: "Janeiro 2016 - Setembro 2016",
      title: "Desenvolvedor Front End",
      company: "YEBO - API E-COMMERCE",
      location: " Mogi das Cruzes, SP",
      description: "Atuei no desenvolvimento front-end de e-commerces, criando interfaces e integrando APIs. Ganhei expertise em projetos de comércio eletrônico com foco em resultados técnicos.",
      icon: FiCloud
    },
    {
      date: "Março 2015 - Janeiro 2016",
      title: "Desenvolvedor Front End",
      company: "AZCLICK",
      location: " Mogi das Cruzes, SP",
      description: "Migrei do suporte técnico para Front-end, focando em HTML, CSS e JavaScript. Desenvolvi interfaces web responsivas, integrei sistemas e apliquei boas práticas de UX em projetos reais.",
      icon: FiCode
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50/50 dark:bg-gray-900 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark'
        ? 'from-purple-900/10 to-gray-900'
        : 'from-blue-50/20 to-gray-50'
        }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Minha <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Jornada</span>
        </motion.h2>

        <div className="relative">
          <div className={`absolute left-1/2 -ml-px w-px h-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
            } md:block hidden`} />

          <div className="space-y-8 md:space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                <div className="md:w-1/2 md:px-8">
                  <TimelineItem {...item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {[...Array(6)].map((_, i) => (
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
          <div className={`w-3 h-3 rounded-full ${theme === 'dark' ? 'bg-purple-400/30' : 'bg-blue-400/30'
            }`} />
        </motion.div>
      ))}
    </section>
  );
};

export default Trajetoria;