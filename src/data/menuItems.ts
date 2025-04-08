import { MenuItem } from '@/types/menu';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Coffee',
    description: 'Freshly brewed coffee with your choice of style',
    price: 90,
    category: 'Beverage',
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
    id: '3',
    name: 'Black Coffee',
    description: 'Strong black coffee',
    price: 70,
    category: 'Beverage',
    popularity: 5
  },
  {
    id: '4',
    name: 'Coke',
    description: 'Refreshing can/bottle of Coke',
    price: 60,
    category: 'Beverage',
    popularity: 5
  },
  {
    id: '5',
    name: 'Pineapple Juice',
    description: 'Fresh pineapple juice',
    price: 150,
    category: 'Beverage',
    popularity: 5
  },
  {
    id: '6',
    name: 'Banana Lassi',
    description: 'Creamy banana yogurt drink',
    price: 150,
    category: 'Beverage',
    popularity: 5
  },
  {
    id: '7',
    name: 'Mango Lassi',
    description: 'Sweet mango yogurt drink',
    price: 150,
    category: 'Beverage',
    popularity: 5
  },
  {
    id: '8',
    name: 'Sweet Lassi',
    description: 'Traditional sweet yogurt drink',
    price: 120,
    category: 'Beverage',
    popularity: 5
  },
  {
    id: '9',
    name: 'Buttermilk',
    description: 'Refreshing spiced buttermilk',
    price: 150,
    category: 'Beverage',
    popularity: 3
  },
  {
    id: '10',
    name: 'Water',
    description: 'Bottled mineral water',
    price: 20,
    category: 'Beverage',
    popularity: 5
  },
  {
    id: '11',
    name: 'Lime Soda',
    description: 'Refreshing lime soda',
    price: 70,
    category: 'Beverage',
    popularity: 3
  },
  {
    id: '12',
    name: 'Tonic Water',
    description: 'Sparkling tonic water',
    price: 120,
    category: 'Beverage',
    popularity: 2
  },
  {
    id: '13',
    name: 'Ginger Ale',
    description: 'Spicy ginger ale',
    price: 120,
    category: 'Beverage',
    popularity: 2
  },
  {
    id: '14',
    name: 'Diet Coke',
    description: 'Sugar-free Diet Coke',
    price: 100,
    category: 'Beverage',
    popularity: 3
  },
  {
    id: '15',
    name: 'Coke Zero',
    description: 'Zero sugar Coke',
    price: 100,
    category: 'Beverage',
    popularity: 3
  },
  {
    id: '16',
    name: 'Sprite Zero',
    description: 'Zero sugar Sprite',
    price: 100,
    category: 'Beverage',
    popularity: 2
  },
  {
    id: '17',
    name: 'Red Bull',
    description: 'Energy drink',
    price: 200,
    category: 'Beverage',
    popularity: 3
  },
  {
    id: '18',
    name: 'Kingfisher Beer',
    description: 'Pint of Kingfisher beer',
    price: 170,
    category: 'Alcohol',
    popularity: 5
  },
  {
    id: '19',
    name: 'Old Monk Rum',
    description: 'Classic dark rum',
    price: 150,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '20',
    name: 'Whiskey (Blenders Pride)',
    description: 'Premium blended whiskey',
    price: 160,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '21',
    name: 'French Fries',
    description: 'Crispy golden french fries',
    price: 150,
    category: 'Snack',
    popularity: 5
  },
  {
    id: '22',
    name: 'Veg Sandwich',
    description: 'Fresh vegetable sandwich',
    price: 150,
    category: 'Snack',
    popularity: 5
  },
  {
    id: '23',
    name: 'Chicken Sandwich',
    description: 'Grilled chicken sandwich',
    price: 250,
    category: 'Snack',
    popularity: 5
  },
  {
    id: '24',
    name: 'Club Sandwich',
    description: 'Triple-decker sandwich with multiple fillings',
    price: 300,
    category: 'Snack',
    popularity: 5
  },
  {
    id: '25',
    name: 'Samosa',
    description: 'Crispy pastry with spiced potato filling (2 pcs)',
    price: 50,
    category: 'Indian',
    popularity: 3
  },
  {
    id: '26',
    name: 'Vada Pav',
    description: 'Spicy potato fritter in a bun',
    price: 40,
    category: 'Indian',
    popularity: 3
  },
  {
    id: '27',
    name: 'Dal Tadka',
    description: 'Yellow lentil curry with spices',
    price: 180,
    category: 'Indian',
    popularity: 5
  },
  {
    id: '28',
    name: 'Steamed Rice',
    description: 'Plain steamed basmati rice',
    price: 150,
    category: 'Indian',
    popularity: 5
  },
  {
    id: '29',
    name: 'Veg Biryani',
    description: 'Fragrant rice with vegetables and spices',
    price: 220,
    category: 'Indian',
    popularity: 3
  },
  {
    id: '30',
    name: 'Chicken Biryani',
    description: 'Fragrant rice with chicken and spices',
    price: 300,
    category: 'Indian',
    popularity: 4
  },
  {
    id: '31',
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese in rich tomato gravy',
    price: 250,
    category: 'Indian',
    popularity: 4
  },
  {
    id: '32',
    name: 'Butter Chicken',
    description: 'Tender chicken in creamy tomato sauce',
    price: 300,
    category: 'Indian',
    popularity: 4
  },
  {
    id: '33',
    name: 'Roti',
    description: 'Whole wheat flatbread (2 pcs)',
    price: 50,
    category: 'Indian',
    popularity: 4
  },
  {
    id: '34',
    name: 'Naan',
    description: 'Soft leavened flatbread (Butter/Garlic)',
    price: 70,
    category: 'Indian',
    popularity: 5
  },
  {
    id: '35',
    name: 'Pasta (Creamy Veg)',
    description: 'Pasta in creamy sauce with vegetables',
    price: 250,
    category: 'Food',
    popularity: 5
  },
  {
    id: '36',
    name: 'Margarita Pizza',
    description: 'Classic pizza with tomato and cheese',
    price: 300,
    category: 'Pizza',
    popularity: 5
  },
  {
    id: '37',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake slice',
    price: 180,
    category: 'Dessert',
    popularity: 5
  },
  {
    id: '38',
    name: 'Gulab Jamun',
    description: 'Sweet milk dumplings in sugar syrup (2 pcs)',
    price: 80,
    category: 'Dessert',
    popularity: 3
  },
  {
    id: '39',
    name: 'Rasmalai',
    description: 'Soft cheese patties in sweetened milk (2 pcs)',
    price: 100,
    category: 'Dessert',
    popularity: 3
  },
  {
    id: '40',
    name: 'Tuborg',
    description: 'Tuborg beer',
    price: 110,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '41',
    name: 'Premium Pint/Large',
    description: 'Premium beer (large)',
    price: 170,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '42',
    name: 'Strong Pint/Large',
    description: 'Strong beer (large)',
    price: 220,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '43',
    name: 'Ultra Beer',
    description: 'Ultra beer',
    price: 140,
    category: 'Beer',
    popularity: 5
  },
  {
    id: '44',
    name: 'Budweiser',
    description: 'Budweiser beer',
    price: 140,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '45',
    name: 'Magnum',
    description: 'Magnum beer',
    price: 140,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '46',
    name: 'Heineken',
    description: 'Heineken beer',
    price: 140,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '47',
    name: 'Corona',
    description: 'Corona beer',
    price: 200,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '48',
    name: 'Peoples',
    description: 'Peoples beer',
    price: 170,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '49',
    name: 'Kings',
    description: 'Kings beer',
    price: 170,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '50',
    name: 'Simba Wit',
    description: 'Simba Wit beer',
    price: 150,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '51',
    name: 'Simba Blond',
    description: 'Simba Blond beer',
    price: 150,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '52',
    name: '8 Fingers',
    description: '8 Fingers beer',
    price: 250,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '53',
    name: 'San Mungel',
    description: 'San Mungel beer',
    price: 170,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '54',
    name: 'Breezer',
    description: 'Breezer flavored alcoholic beverage',
    price: 140,
    category: 'Beer',
    popularity: 3
  },
  {
    id: '55',
    name: 'Whiskey – Fireball',
    description: 'Cinnamon flavored whiskey',
    price: 250,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '56',
    name: 'Whiskey – Jameson',
    description: 'Irish whiskey',
    price: 270,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '57',
    name: 'Whiskey – Jack Daniels',
    description: 'Tennessee whiskey',
    price: 350,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '58',
    name: 'Gin – Hapusa',
    description: 'Indian craft gin',
    price: 350,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '59',
    name: 'Gin – Greater Than',
    description: 'Indian craft gin',
    price: 260,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '60',
    name: 'Gin – Bombay Sapphire',
    description: 'Premium London dry gin',
    price: 360,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '61',
    name: 'Rum – Bacardi White',
    description: 'White rum',
    price: 220,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '62',
    name: 'Rum – Bacardi Lemon',
    description: 'Lemon flavored rum',
    price: 230,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '63',
    name: 'Single Malt Whisky – Paul John Nirvana',
    description: 'Indian single malt whisky',
    price: 300,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '64',
    name: 'Single Malt Whisky – Amrut Fusion',
    description: 'Indian single malt whisky',
    price: 470,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '65',
    name: 'Single Malt Whisky – Glenfiddich 12yrs',
    description: 'Scotch single malt whisky',
    price: 600,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '66',
    name: 'Vodka – Romanov',
    description: 'Standard vodka',
    price: 100,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '67',
    name: 'Vodka – Absolut',
    description: 'Premium vodka',
    price: 300,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '68',
    name: 'Vodka – Ciroc',
    description: 'Luxury vodka',
    price: 550,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '69',
    name: 'Shot – El Charro Tequila',
    description: 'Tequila shot',
    price: 350,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '70',
    name: 'Shot – Jagerbomb',
    description: 'Jagermeister with energy drink',
    price: 450,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '71',
    name: 'Shot – B52',
    description: 'Layered shot with coffee liqueur, Irish cream, and orange liqueur',
    price: 600,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '72',
    name: 'Brandy – Mansion House',
    description: 'Indian brandy',
    price: 160,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '73',
    name: 'Brandy – Honey Bee',
    description: 'Indian brandy',
    price: 150,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '74',
    name: 'Brandy – Baudin',
    description: 'Brandy',
    price: 200,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '75',
    name: 'Fenny – Coconut',
    description: 'Goan coconut spirit',
    price: 200,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '76',
    name: 'Fenny – Cashew',
    description: 'Goan cashew spirit',
    price: 200,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '77',
    name: 'Cocktail – Whiskey Sour',
    description: 'Classic whiskey cocktail with lemon and sugar',
    price: 400,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '78',
    name: 'Cocktail – Cosmopolitan',
    description: 'Vodka cocktail with cranberry and lime',
    price: 370,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '79',
    name: 'Cocktail – Long Island Iced Tea',
    description: 'Strong cocktail with multiple spirits',
    price: 700,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '80',
    name: 'Mocktail – Disney Bar',
    description: 'Non-alcoholic fruity mocktail',
    price: 280,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '81',
    name: 'Mocktail – Blue Lagoon',
    description: 'Blue non-alcoholic mocktail',
    price: 280,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '82',
    name: 'Mocktail – Sea Peng',
    description: 'Refreshing non-alcoholic mocktail',
    price: 280,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '83',
    name: 'Dylan Special Cocktail – Bondearm',
    description: 'House special cocktail',
    price: 320,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '84',
    name: 'Dylan Special Cocktail – Coco Chilli Willy',
    description: 'Spicy coconut house special cocktail',
    price: 320,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '85',
    name: 'Dylan Special Cocktail – Malana Bong',
    description: 'House special cocktail',
    price: 350,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '86',
    name: 'Wine – Sula Red (glass)',
    description: 'Indian red wine by the glass',
    price: 170,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '87',
    name: 'Wine – Sula Red (bottle)',
    description: 'Indian red wine by the bottle',
    price: 700,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '88',
    name: 'Wine – Jacob\'s Creek Red (glass)',
    description: 'Australian red wine by the glass',
    price: 200,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '89',
    name: 'Wine – Big Banyan Red (glass)',
    description: 'Indian red wine by the glass',
    price: 170,
    category: 'Alcohol',
    popularity: 3
  },
  {
    id: '90',
    name: 'Vegetable Stir Fry',
    description: 'Fresh vegetables in Asian sauce with rice',
    price: 12.99,
    category: 'Main Courses',
    popularity: 3
  },
  {
    id: '91',
    name: 'Fish and Chips',
    description: 'Beer-battered cod with crispy fries',
    price: 15.99,
    category: 'Main Courses',
    popularity: 4
  },
  {
    id: '92',
    name: 'Vegetarian Pizza',
    description: 'Loaded with fresh vegetables and cheese',
    price: 14.99,
    category: 'Pizza',
    popularity: 3
  },
  {
    id: '93',
    name: 'Chicken Wings',
    description: 'Spicy buffalo wings with blue cheese dip',
    price: 11.99,
    category: 'Appetizers',
    popularity: 5
  },
  {
    id: '94',
    name: 'Mushroom Risotto',
    description: 'Creamy Arborio rice with wild mushrooms',
    price: 13.99,
    category: 'Main Courses',
    popularity: 2
  },
  {
    id: '95',
    name: 'Green Smoothie',
    description: 'Spinach, banana, and apple blend',
    price: 5.99,
    category: 'Beverage',
    popularity: 3
  },
  {
    id: '96',
    name: 'Vegetable Soup',
    description: 'Hearty soup with seasonal vegetables',
    price: 6.99,
    category: 'Soups',
    popularity: 2
  },
  {
    id: '97',
    name: 'Cheese Platter',
    description: 'Selection of artisanal cheeses with crackers',
    price: 12.99,
    category: 'Appetizers',
    popularity: 3
  },
  {
    id: '98',
    name: 'Ice Cream Sundae',
    description: 'Vanilla ice cream with chocolate sauce and nuts',
    price: 5.99,
    category: 'Dessert',
    popularity: 4
  },
  {
    id: '99',
    name: 'Grilled Salmon',
    description: 'Fresh salmon with seasonal vegetables',
    price: 18.99,
    category: 'Main Courses',
    popularity: 4
  },
  {
    id: '100',
    name: 'Fruit Plate',
    description: 'Seasonal fresh fruits',
    price: 7.99,
    category: 'Dessert',
    popularity: 2
  }
]; 