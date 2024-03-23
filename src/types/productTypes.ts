export interface ITechnicalSpecifications {
  sensor: string;
  maxDpi: number;
  pollingFrequency: number;
  microswitches: string;
  encoder: string;
  type: string;
  batteryLife?: number | null;
  manufacturer: string;
}

export interface IPhysicalSpecifications {
  length: number;
  width: number;
  height: number;
  weight: number;
}

export interface ISpecifications {
  physicalSpecifications: IPhysicalSpecifications;
  technicalSpecifications: ITechnicalSpecifications;
}

export interface IReview {
  id: number;
  author: string;
  body: string;
  evaluation: number;
}

export interface IProduct {
  id: number;
  name: string;
  altName: string;
  imgSmall: string;
  imgBig: string[];
  description: string;
  price: number;
  specifications: ISpecifications;
  reviews: IReview[];
}

export interface IBasketProduct {
  id: number;
  name: string;
  price: number;
  altName: string;
  img: string;
  count?: number;
}
