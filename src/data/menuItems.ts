import { MenuItem } from '@/types/menu';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Coffee',
    description: 'Freshly brewed coffee with your choice of style',
    price: 4.99,
    category: 'Beverages',
    popularity: 5,
    options: [
      {
        name: 'Size',
        choices: ['Small', 'Medium', 'Large']
      },
      {
        name: 'Type',
        choices: ['Regular', 'Decaf', 'Espresso']
      },
      {
        name: 'Milk',
        choices: ['None', 'Regular', 'Oat', 'Almond', 'Soy']
      }
    ]
  },
  {
    id: '2',
    name: 'Club Sandwich',
    description: 'Triple-decker with turkey, bacon, lettuce, and tomato',
    price: 12.99,
    category: 'Sandwiches',
    popularity: 4
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce with parmesan and croutons',
    price: 10.99,
    category: 'Salads',
    popularity: 3
  },
  {
    id: '4',
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, and basil',
    price: 14.99,
    category: 'Pizza',
    popularity: 5
  },
  {
    id: '5',
    name: 'Chicken Alfredo',
    description: 'Fettuccine pasta with creamy alfredo sauce and grilled chicken',
    price: 16.99,
    category: 'Pasta',
    popularity: 4
  },
  {
    id: '6',
    name: 'Greek Salad',
    description: 'Mixed greens with feta, olives, and cucumber',
    price: 11.99,
    category: 'Salads',
    popularity: 2
  },
  {
    id: '7',
    name: 'Beef Burger',
    description: 'Angus beef patty with lettuce, tomato, and special sauce',
    price: 13.99,
    category: 'Burgers',
    popularity: 5
  },
  {
    id: '8',
    name: 'Vegetable Stir Fry',
    description: 'Fresh vegetables in Asian sauce with rice',
    price: 12.99,
    category: 'Main Courses',
    popularity: 3
  },
  {
    id: '9',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with ganache',
    price: 6.99,
    category: 'Desserts',
    popularity: 4
  },
  {
    id: '10',
    name: 'Fish and Chips',
    description: 'Beer-battered cod with crispy fries',
    price: 15.99,
    category: 'Main Courses',
    popularity: 4
  },
  {
    id: '11',
    name: 'Vegetarian Pizza',
    description: 'Loaded with fresh vegetables and cheese',
    price: 14.99,
    category: 'Pizza',
    popularity: 3
  },
  {
    id: '12',
    name: 'Chicken Wings',
    description: 'Spicy buffalo wings with blue cheese dip',
    price: 11.99,
    category: 'Appetizers',
    popularity: 5
  },
  {
    id: '13',
    name: 'Mushroom Risotto',
    description: 'Creamy Arborio rice with wild mushrooms',
    price: 13.99,
    category: 'Main Courses',
    popularity: 2
  },
  {
    id: '14',
    name: 'Green Smoothie',
    description: 'Spinach, banana, and apple blend',
    price: 5.99,
    category: 'Beverages',
    popularity: 3
  },
  {
    id: '15',
    name: 'Steak Sandwich',
    description: 'Thinly sliced steak with caramelized onions',
    price: 15.99,
    category: 'Sandwiches',
    popularity: 4
  },
  {
    id: '16',
    name: 'Vegetable Soup',
    description: 'Hearty soup with seasonal vegetables',
    price: 6.99,
    category: 'Soups',
    popularity: 2
  },
  {
    id: '17',
    name: 'Cheese Platter',
    description: 'Selection of artisanal cheeses with crackers',
    price: 12.99,
    category: 'Appetizers',
    popularity: 3
  },
  {
    id: '18',
    name: 'Ice Cream Sundae',
    description: 'Vanilla ice cream with chocolate sauce and nuts',
    price: 5.99,
    category: 'Desserts',
    popularity: 4
  },
  {
    id: '19',
    name: 'Grilled Salmon',
    description: 'Fresh salmon with seasonal vegetables',
    price: 18.99,
    category: 'Main Courses',
    popularity: 4
  },
  {
    id: '20',
    name: 'Fruit Plate',
    description: 'Seasonal fresh fruits',
    price: 7.99,
    category: 'Desserts',
    popularity: 2
  }
]; 