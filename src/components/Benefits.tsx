import { Sparkles, Droplets, Leaf, Package, QrCode } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Tekstur Super Renyah',
    description: 'Proses vacuum frying menghasilkan tekstur yang lebih renyah dan tahan lama',
  },
  {
    icon: Droplets,
    title: '50% Lebih Rendah Minyak',
    description: 'Kandungan minyak jauh lebih rendah dibanding penggorengan biasa',
  },
  {
    icon: Leaf,
    title: 'Rasa Alami Terjaga',
    description: 'Suhu rendah menjaga nutrisi dan cita rasa asli buah sukun',
  },
  {
    icon: Package,
    title: 'Kemasan Higienis Premium',
    description: 'Dikemas dalam kemasan food-grade untuk menjaga kesegaran',
  },
  {
    icon: QrCode,
    title: 'QR Code Transparansi',
    description: 'Scan QR code untuk mengetahui asal bahan baku produk',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            🔬 Teknologi Vacuum Frying
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Keunggulan Produk Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teknologi modern yang menghasilkan camilan sehat tanpa mengorbankan kelezatan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
