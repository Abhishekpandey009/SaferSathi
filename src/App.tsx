import React, { useState } from 'react';
import { Shield, MapPin, Phone, Bell, Users, MessageSquare, Menu, X, ChevronRight } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;