import ProductCard from './ProductCard';
import { products } from '@/data/products';

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            🍿 Produk Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pilih Varian Favorit Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tersedia dalam berbagai varian rasa yang lezat dan menggugah selera
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
