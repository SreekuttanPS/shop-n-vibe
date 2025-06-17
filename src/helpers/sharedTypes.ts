export type CategoryType = 'clothing_men' | 'clothing_women' | 'electronics' | 'accessories_men' | 'accessories_women' | 'furnitures' | 'others';

export type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: CategoryType;
  imageUrl: string;
  imageId: string;
  stock: number;
  tags: string[];
  isAvailable: boolean;
  rating?: number;
  rateCount?: number;
};

export type AllProducts = {
  [category in CategoryType]: {
    image: string;
    data: {
      [productId: string]: Product;
    };
  };
};
