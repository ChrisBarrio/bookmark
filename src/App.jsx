import ContactUs from './components/ContactUs';
import DownloadExtension from './components/DownloadExtension';
import Faqs from './components/Faqs';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="mx-auto min-h-screen text-lg ">
      <Header />
      <Hero />
      <Features />
      <DownloadExtension />
      <Faqs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
