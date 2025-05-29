export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type AllProducts = {
  [category: string]: {
    image: string;
    data: {
      [productId: number]: Product;
    };
  };
};
