export interface Product {
  reviwedByAdmin: boolean;
  reviwedByShipper: boolean;
  _id: string;
  name: string;
  src: string[];
  description: string;
  category: string;
  price: number;
  stock: number;
  userId: string;
  like: string[];
  unlike: string[];
  isDelete: boolean;
  totalVote: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  state: string;
  status: string;
  brand: string;
  id: string;
  spam: boolean;
}
