export interface IProduct {
  id: number ;
  title: string;
  description?: string;
  category: string;
  price: number ;
  discountPercentage: number;
  rating: { stars: number; count: number };
  tags?: string[];
  image: string;
}
