import { AllProducts, Product } from "@/helpers/sharedTypes";

export const categorizeProductData = (products: Product[]): AllProducts => {
  const allProducts = {} as AllProducts;
  products.forEach((product) => {
    const { category, _id } = product;
    if (!allProducts[category]) {
      allProducts[category] = {
        data: {},
        image: product?.imageUrl,
      };
    }
    allProducts[category].data[_id] = product;
  });
  return allProducts;
};

export const capitalizeFirstAndSplit = (str: string): string => {
  return (str.charAt(0).toUpperCase() + str.slice(1))?.replaceAll('_', ' ');
};
