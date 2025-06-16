export type CategoryType = 'clothing_men' | 'clothing_women' | 'electronics' | 'accessories_men' | 'accessories_women' | 'furnitures' | 'others';

export type Product = {
  _id: number;
  name: string;
  price: number;
  description: string;
  category: CategoryType;
  imageUrl: string;
  imageId: string;
  stock: number;
  tags: string[];
  isAvailable: boolean;
  rating: {
    rate: number;
    count: number;
  };
};

export type AllProducts = {
  [category in CategoryType]: {
    image: string;
    data: {
      [productId: number]: Product;
    };
  };
};
