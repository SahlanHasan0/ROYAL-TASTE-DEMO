import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter, Menu as MenuIcon, X } from 'lucide-react';

const WA_NUMBER = "8801608383607";
const WA_LINK_DEFAULT = `https://wa.me/${WA_NUMBER}?text=Hi%20I%20want%20to%20order%20food%20from%20your%20restaurant`;

const getOrderLink = (itemName: string) => 
  `https://wa.me/${WA_NUMBER}?text=Hi%20I%20want%20to%20order%20the%20${encodeURIComponent(itemName)}%20from%20your%20restaurant`;

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="font-serif text-2xl font-bold tracking-wider text-gold-500">
          ROYAL TASTE
        </a>
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium tracking-widest uppercase hover:text-gold-500 transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        <button className="md:hidden text-zinc-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-950 border-b border-white/5 py-4 flex flex-col items-center gap-6 md:hidden">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
          alt="Fine Dining" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gold-500 tracking-[0.3em] uppercase text-sm md:text-base mb-6"
        >
          Welcome to
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
        >
          Royal Taste
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-zinc-300 text-lg md:text-xl font-light mb-12"
        >
          Experience Premium Dining with Exquisite Flavors
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#menu" 
            className="w-full sm:w-auto border border-gold-500 text-gold-500 px-8 py-3.5 hover:bg-gold-500 hover:text-zinc-950 transition-colors uppercase tracking-widest text-sm"
          >
            View Menu
          </a>
          <a 
            href={WA_LINK_DEFAULT} 
            target="_blank" 
            rel="noreferrer" 
            className="w-full sm:w-auto bg-gold-500 flex items-center justify-center gap-3 text-zinc-950 px-8 py-3.5 hover:bg-gold-400 transition-colors uppercase tracking-widest text-sm font-semibold"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Order on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 relative"
        >
          <div className="absolute -inset-4 border border-gold-500/30 z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Chef preparing premium dish" 
            className="w-full h-[500px] object-cover relative z-10"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h4 className="text-gold-500 tracking-[0.2em] uppercase text-sm mb-4">Our Story</h4>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-white">A Symphony of Flavors</h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-6">
            At Royal Taste, dining transcends mere consumption to become an extraordinary sensory journey. Born out of a deep-seated passion for culinary excellence, we source only the absolute highest caliber of fresh, locally sourced ingredients. 
          </p>
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
            Every dish is carefully crafted by masterful chefs, weaving modern techniques together with timeless culinary traditions. The result is a dining experience enveloped in an ambiance of pure sophistication.
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_Gordon_Ramsay.svg" alt="Signature" className="h-12 opacity-70 filter invert" />
        </motion.div>
      </div>
    </section>
  );
};

const menuCategories = [
  {
    title: "Starters",
    items: [
      { name: "Truffle Arancini", price: "1800", desc: "Crispy risotto balls, wild mushroom" },
      { name: "Wagyu Carpaccio", price: "2800", desc: "Thinly sliced wagyu beef, shaved parmesan", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=300&auto=format&fit=crop" },
      { name: "Seared Foie Gras", price: "3400", desc: "Brioche toast, fig compote", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=300&auto=format&fit=crop" },
    ]
  },
  {
    title: "Main Course",
    items: [
      { name: "Pan-Seared Scallops", price: "4200", desc: "Diver scallops, cauliflower purée" },
      { name: "Tomahawk Ribeye", price: "11500", desc: "32oz bone-in prime ribeye, rosemary butter", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=300&auto=format&fit=crop" },
      { name: "Lobster Thermidor", price: "6800", desc: "Fresh lobster, cognac cream sauce", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=300&auto=format&fit=crop" },
    ]
  },
  {
    title: "Drinks",
    items: [
      { name: "Midnight Gold Cocktail", price: "2400", desc: "Activated charcoal, dry gin, elderflower", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=300&auto=format&fit=crop" },
      { name: "Vintage Merlot", price: "3500", desc: "Glass of 2012 reserve, intense dark fruit", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=300&auto=format&fit=crop" },
      { name: "Smoked Old Fashioned", price: "2200", desc: "Aged bourbon, bitters, smoked maple syrup" },
    ]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-[#050505] px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-gold-500 tracking-[0.2em] uppercase text-sm mb-4">Discover</h4>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Our Premium Menu</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {menuCategories.map((category, catIdx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.2, duration: 0.8 }}
            >
              <h3 className="font-serif text-2xl border-b border-gold-500/20 pb-4 mb-8 text-gold-500">{category.title}</h3>
              <div className="space-y-8">
                {category.items.map((item) => (
                  <div key={item.name} className="group flex gap-5 items-start">
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-lg font-medium tracking-wide text-zinc-100 group-hover:text-gold-400 transition-colors">{item.name}</h4>
                        <div className="border-b border-dotted border-zinc-700 flex-grow mx-4 relative top-[-6px]"></div>
                        <span className="text-gold-500 font-serif text-xl whitespace-nowrap">BDT {item.price}</span>
                      </div>
                      <p className="text-zinc-500 font-light text-sm mb-3 leading-relaxed">{item.desc}</p>
                      <button 
                        onClick={() => window.open(getOrderLink(item.name), '_blank')}
                        className="text-xs uppercase tracking-widest text-zinc-400 hover:text-gold-500 transition-colors flex items-center gap-1.5"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        Order Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const galleryImages = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop"
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-zinc-950">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <h4 className="text-gold-500 tracking-[0.2em] uppercase text-sm mb-4">Atmosphere</h4>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Visual Culinary Art</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {galleryImages.map((src, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.2, duration: 0.8 }}
            className="group relative h-80 overflow-hidden cursor-crosshair"
          >
            <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src={src} 
              alt="Gallery Cuisine" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#050505] px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/3"
        >
          <h4 className="text-gold-500 tracking-[0.2em] uppercase text-sm mb-4">Visit Us</h4>
          <h2 className="font-serif text-4xl font-bold text-white mb-10">Get in Touch</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <MapPin className="text-gold-500 flex-shrink-0 w-6 h-6 mt-1" />
              <div>
                <h5 className="font-medium text-white mb-2 uppercase tracking-widest text-sm">Location</h5>
                <p className="text-zinc-400 font-light leading-relaxed">
                  123 Luxury Avenue,<br />
                  Gulshan 2, Dhaka 1212<br />
                  Bangladesh
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Phone className="text-gold-500 flex-shrink-0 w-6 h-6 mt-1" />
              <div>
                <h5 className="font-medium text-white mb-2 uppercase tracking-widest text-sm">Reservations</h5>
                <p className="text-zinc-400 font-light">+88 01608-383607</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Clock className="text-gold-500 flex-shrink-0 w-6 h-6 mt-1" />
              <div>
                <h5 className="font-medium text-white mb-2 uppercase tracking-widest text-sm">Opening Hours</h5>
                <p className="text-zinc-400 font-light">Mon-Sun: 12:00 PM - 11:30 PM</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:w-2/3 h-[400px] border border-white/10 p-2"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.603348128458!2d90.4101416!3d23.797136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a40ff26b77%3A0xe964a30e20e8b15d!2sGulshan%202%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1714150000000!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl font-bold tracking-wider text-gold-500">
          ROYAL TASTE
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-gold-500 transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-zinc-500 hover:text-gold-500 transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-zinc-500 hover:text-gold-500 transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2 text-zinc-600 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Royal Taste. All Rights Reserved.</p>
          <p>
            DEVELOPED BY{' '}
            <a 
              href="https://wa.me/8801608383607" 
              target="_blank" 
              rel="noreferrer"
              className="text-gold-500 hover:text-gold-400 transition-colors font-medium hover:underline"
            >
              WEBBITE AGENCY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a
      href={WA_LINK_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300"
      aria-label="Order on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default function App() {
  return (
    <div className="bg-zinc-950 font-sans text-zinc-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
