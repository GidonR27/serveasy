export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  options?: {
    name: string;
    choices: string[];
  }[];
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  selectedOptions?: {
    [key: string]: string;
  };
}

export interface Order {
  items: OrderItem[];
  roomNumber: string;
  specialInstructions?: string;
} 