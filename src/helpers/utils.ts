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
  return (str.charAt(0).toUpperCase() + str.slice(1))?.replaceAll("_", " ");
};

export function removeKey<T extends object, K extends keyof T>(obj: T, keyToRemove: K): Omit<T, K> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [keyToRemove]: _, ...rest } = obj;
  return rest;
}

export const isEmpty = (value: unknown): boolean => {
  if (value == null) return true; // null or undefined

  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
};

export const generateRandomString = (length: number = 10): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

export const generateElementId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};
