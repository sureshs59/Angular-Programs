export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Order {
  id: number;
  userId: number;
  product: string;
  amount: number;
}

export interface Profile {
  userId: number;
  city: string;
  membership: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}
