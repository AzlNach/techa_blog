import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContentSections from './components/ContentSections';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Dark vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/80"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-32 left-32 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-64 right-64 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-48 left-48 w-1 h-1 bg-purple-300/20 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ContentSections />
        <BlogList />
        <Footer />
      </div>
    </div>
  );
}
