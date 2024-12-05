export type ProductProps = {
  ID?: string;
  skills?: string[];
  price?: number;
  description?: string;
  avatarUrl?: string; // ? means optional
  preview?: boolean;
};

export type PathParams = {
  productid: string;
};
export type OutletContext = {
  addToCart: (productInfo: { ID: string; price: number }) => void;
};
