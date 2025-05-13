import Sobre from './components/about/About';
import Header from './components/header/Header';
import TechCard from './components/skills/Habilidades'
import TimelineItem from './components/projects/Trajetoria'
import { ThemeProvider } from './components/ThemeContext';
import Contato from './components/contact/Contato';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Sobre />
      <TimelineItem />
      <TechCard />
      <Contato />
    </ThemeProvider>
  );
}