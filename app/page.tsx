import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContentSections from './components/ContentSections';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ContentSections />
      <BlogList />
      <Footer />
    </main>
  );
}
