import { IProduct, ITechnicalSpecifications } from "types/productTypes.ts";

export const createFiltersArray = (
  key: keyof ITechnicalSpecifications,
  products: IProduct[],
): string[] => {
  const set: Set<string> = new Set();

  products.forEach((product: IProduct) => {
    const value = product.specifications.technicalSpecifications[key];

    if (typeof value === "string") {
      set.add(value);
    }
  });

  return Array.from(set);
};
