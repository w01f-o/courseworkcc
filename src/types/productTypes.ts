export interface ISpecifications {
  physicalSpecifications: {
    length: number;
    width: number;
    height: number;
    weight: number;
  };
  technicalSpecifications: {
    sensor: string;
    maxDpi: number;
    pollingFrequency: number;
    microswitches: string;
    encoder: string;
    type: string;
    batteryLife?: number | null;
  };
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
  manufacturer: string;
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
