import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import ValuePropositions from '@/components/ValuePropositions';
import OrderCTA from '@/components/OrderCTA';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Benefits />
        <ValuePropositions />
        <OrderCTA />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
