import productOriginal from '@/assets/product-original.jpg';
import productBalado from '@/assets/product-balado.jpg';
import productCheese from '@/assets/product-cheese.jpg';
import productBbq from '@/assets/product-bbq.jpg';
import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: 'original',
    name: 'Original Natural',
    description: 'Rasa alami sukun tanpa tambahan perasa',
    price: 25000,
    image: productOriginal,
  },
  {
    id: 'balado',
    name: 'Balado Nusantara',
    description: 'Pedas gurih khas Indonesia yang menggugah selera',
    price: 27000,
    image: productBalado,
  },
  {
    id: 'keju',
    name: 'Keju Lumer',
    description: 'Perpaduan sempurna keju premium dan sukun renyah',
    price: 28000,
    image: productCheese,
  },
  {
    id: 'bbq',
    name: 'Barbeque Modern',
    description: 'Sensasi BBQ yang smoky dan savory',
    price: 27000,
    image: productBbq,
  },
];
