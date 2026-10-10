import { Analytics } from './components/Analytics';
import { Faq } from './components/Faq';
import { Features, Stats } from './components/Features';
import { Cta, Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Install } from './components/Install';
import { Plugins } from './components/Plugins';
import { Privacy } from './components/Privacy';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Analytics />
        <Plugins />
        <Privacy />
        <Install />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
