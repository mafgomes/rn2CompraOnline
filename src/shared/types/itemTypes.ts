export interface ItemProps {
  category: Category;
  _id: string;
  name: string;
  price: number;
  unit: string;
  imageUrl: string;
  description: string;
  quantity?: number;
}

export interface Category {
  id: number;
  name: string;
}
