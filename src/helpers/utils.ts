import { AllProducts, Product } from "@/helpers/sharedTypes";

export const categorizeProductData = (products: Product[]): AllProducts => {
  const allProducts: AllProducts = {};
  products.forEach((product) => {
    const { category, id } = product;
    if (!allProducts[category]) {
      allProducts[category] = {
        data: {},
        image: product?.image,
      };
    }
    allProducts[category].data[id] = product;
  });
  return allProducts;
};

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
