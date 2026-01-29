import { Leaf, FlaskConical, Heart, Shield } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Bahan Baku Lokal Berkualitas',
    description: 'Sukun pilihan dari petani mitra terpercaya di berbagai daerah Indonesia',
    color: 'primary',
  },
  {
    icon: FlaskConical,
    title: 'Teknologi Vacuum Frying',
    description: 'Proses modern dengan suhu rendah untuk hasil maksimal dan nutrisi terjaga',
    color: 'secondary',
  },
  {
    icon: Heart,
    title: 'Mendukung Petani Lokal',
    description: 'Setiap pembelian membantu meningkatkan ekonomi petani sukun Indonesia',
    color: 'primary',
  },
  {
    icon: Shield,
    title: 'Kemasan Higienis & Modern',
    description: 'Standar food safety terjaga ketat dengan kemasan berkualitas premium',
    color: 'secondary',
  },
];

export default function ValuePropositions() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            💪 Mengapa SUKUN.IN?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nilai Yang Kami Berikan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komitmen kami untuk menghadirkan camilan terbaik dari kekayaan alam Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card flex gap-5"
            >
              <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                value.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
              }`}>
                <value.icon className={`w-7 h-7 ${
                  value.color === 'primary' ? 'text-primary' : 'text-secondary'
                }`} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
