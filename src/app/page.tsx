'use client';

import { useState, useEffect } from 'react';
import { menuItems } from '@/data/menuItems';
import { MenuItem, OrderItem } from '@/types/menu';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

// Category icons mapping
const categoryIcons: Record<string, string> = {
  'Beverage': '☕',
  'Sandwiches': '🥪',
  'Salads': '🥗',
  'Pizza': '🍕',
  'Pasta': '🍝',
  'Burgers': '🍔',
  'Main Courses': '🍽️',
  'Dessert': '🍰',
  'Appetizers': '🥟',
  'Soups': '🥣',
  'Beer': '🍺',
  'Alcohol': '🥃',
  'Snack': '🍟',
  'Indian': '🍛',
  'Food': '🍲',
};

// Item-specific icons
const itemIcons: Record<string, string> = {
  // Beverages
  'Coffee': '☕',
  'Black Coffee': '☕',
  'Coke': '🥤',
  'Diet Coke': '🥤',
  'Coke Zero': '🥤',
  'Sprite Zero': '🥤',
  'Pineapple Juice': '🍍',
  'Banana Lassi': '🍌',
  'Mango Lassi': '🥭',
  'Sweet Lassi': '🥛',
  'Buttermilk': '🥛',
  'Water': '💧',
  'Lime Soda': '🍋',
  'Tonic Water': '💦',
  'Ginger Ale': '🍸',
  'Red Bull': '🏃',
  'Green Smoothie': '🥝',
  
  // Beer
  'Kingfisher Beer': '🍺',
  'Tuborg': '🍻',
  'Premium Pint/Large': '🍺',
  'Strong Pint/Large': '🍺',
  'Ultra Beer': '⚡',
  'Budweiser': '🇺🇸',
  'Magnum': '🍺',
  'Heineken': '🇳🇱',
  'Corona': '👑',
  'Peoples': '🍺',
  'Kings': '👑',
  'Simba Wit': '🦁',
  'Simba Blond': '🦁',
  '8 Fingers': '👐',
  'San Mungel': '🍺',
  'Breezer': '🍹',
  
  // Alcohol
  'Old Monk Rum': '🥃',
  'Whiskey (Blenders Pride)': '🥃',
  'Whiskey – Fireball': '🔥',
  'Whiskey – Jameson': '🇮🇪',
  'Whiskey – Jack Daniels': '🥃',
  'Gin – Hapusa': '🍸',
  'Gin – Greater Than': '🍸',
  'Gin – Bombay Sapphire': '🍸',
  'Rum – Bacardi White': '🥃',
  'Rum – Bacardi Lemon': '🥃',
  'Single Malt Whisky – Paul John Nirvana': '🥃',
  'Single Malt Whisky – Amrut Fusion': '🥃',
  'Single Malt Whisky – Glenfiddich 12yrs': '🥃',
  'Vodka – Romanov': '🍸',
  'Vodka – Absolut': '🍸',
  'Vodka – Ciroc': '🍸',
  'Shot – El Charro Tequila': '🥃',
  'Shot – Jagerbomb': '💣',
  'Shot – B52': '🥃',
  'Brandy – Mansion House': '🥃',
  'Brandy – Honey Bee': '🥃',
  'Brandy – Baudin': '🥃',
  'Fenny – Coconut': '🥥',
  'Fenny – Cashew': '🥜',
  'Cocktail – Whiskey Sour': '🍋',
  'Cocktail – Cosmopolitan': '🍸',
  'Cocktail – Long Island Iced Tea': '🧊',
  'Mocktail – Disney Bar': '🍹',
  'Mocktail – Blue Lagoon': '🔵',
  'Mocktail – Sea Peng': '🌊',
  'Dylan Special Cocktail – Bondearm': '🍹',
  'Dylan Special Cocktail – Coco Chilli Willy': '🌶️',
  'Dylan Special Cocktail – Malana Bong': '🍹',
  'Wine – Sula Red (glass)': '🍷',
  'Wine – Sula Red (bottle)': '🍾',
  'Wine – Jacob\'s Creek Red (glass)': '🍷',
  'Wine – Big Banyan Red (glass)': '🍷',
  
  // Food
  'French Fries': '🍟',
  'Veg Sandwich': '🥪',
  'Chicken Sandwich': '🥪',
  'Club Sandwich': '🥪',
  'Samosa': '🥟',
  'Vada Pav': '🥖',
  'Dal Tadka': '🥘',
  'Steamed Rice': '🍚',
  'Veg Biryani': '🥘',
  'Chicken Biryani': '🥘',
  'Paneer Butter Masala': '🍲',
  'Butter Chicken': '🍲',
  'Roti': '🫔',
  'Naan': '🫓',
  'Pasta (Creamy Veg)': '🍝',
  'Margarita Pizza': '🍕',
  'Vegetarian Pizza': '🍕',
  'Chicken Wings': '🍗',
  'Vegetable Stir Fry': '🥦',
  'Fish and Chips': '🐟',
  'Mushroom Risotto': '🍄',
  'Vegetable Soup': '🥣',
  'Cheese Platter': '🧀',
  'Grilled Salmon': '🐟',
  
  // Desserts
  'Chocolate Cake': '🍰',
  'Gulab Jamun': '🍯',
  'Rasmalai': '🥮',
  'Ice Cream Sundae': '🍨',
  'Fruit Plate': '🍎',
};

// Get unique categories from menuItems
const getUniqueCategories = () => {
  const categories = menuItems.map(item => item.category);
  const uniqueSet = [...new Set(categories)];
  
  // Filter out categories we add manually - using case insensitive comparison
  const uniqueCategories = uniqueSet.filter(cat => 
    !['appetizers', 'soups', 'beverage', 'food'].includes(cat.toLowerCase())
  );
  
  return ['Top 20', 'All', 'Beverage', 'Food', ...uniqueCategories];
};

export default function Home() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [roomNumber] = useState('27'); // Fixed room number
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [showOptions, setShowOptions] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: string}>({});
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Top 20');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submittedItems, setSubmittedItems] = useState<OrderItem[]>([]);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('2A19yeF-CXJz3zLrB');
  }, []);

  // Filter menu items based on selected category
  const filteredMenuItems = menuItems.filter(item => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Top 20') {
      // Sort by rating or popularity and return top 20
      return item.popularity && item.popularity >= 3;
    }
    if (selectedCategory === 'Beverage') return item.category === 'Beverage';
    if (selectedCategory === 'Food') return item.category !== 'Beverage' && item.category !== 'Beer' && item.category !== 'Alcohol';
    
    // Handle both singular and plural forms of the category
    const singularCategory = selectedCategory.endsWith('s') ? selectedCategory.slice(0, -1) : selectedCategory;
    const pluralCategory = selectedCategory.endsWith('s') ? selectedCategory : selectedCategory + 's';
    
    return item.category === selectedCategory || item.category === singularCategory || item.category === pluralCategory;
  });

  // Sort top 20 items to the beginning if that category is selected
  const sortedMenuItems = selectedCategory === 'Top 20' 
    ? [...filteredMenuItems].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)).slice(0, 20)
    : filteredMenuItems;

  const addToOrder = (item: MenuItem) => {
    if (item.options) {
      setShowOptions(item.id);
      setSelectedOptions({});
    } else {
      const existingItem = orderItems.find(orderItem => orderItem.menuItem.id === item.id);
      if (existingItem) {
        setOrderItems(orderItems.map(orderItem =>
          orderItem.menuItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        ));
      } else {
        setOrderItems([...orderItems, { menuItem: item, quantity: 1 }]);
      }
    }
  };

  const removeFromOrder = (itemId: string) => {
    setOrderItems(orderItems.map(item =>
      item.menuItem.id === itemId
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const handleOptionSelect = (itemId: string, optionName: string, choice: string) => {
    setSelectedOptions({ ...selectedOptions, [optionName]: choice });
  };

  const confirmOptions = (item: MenuItem) => {
    const existingItem = orderItems.find(orderItem => orderItem.menuItem.id === item.id);
    if (existingItem) {
      setOrderItems(orderItems.map(orderItem =>
        orderItem.menuItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1, selectedOptions }
          : orderItem
      ));
    } else {
      setOrderItems([...orderItems, { menuItem: item, quantity: 1, selectedOptions }]);
    }
    setShowOptions(null);
    setSelectedOptions({});
  };

  const handleSubmit = () => {
    if (orderItems.length === 0) {
      alert('Please add items to your order');
      return;
    }

    setIsSubmitting(true);

    // Store current order items for confirmation popup
    setSubmittedItems([...orderItems]);
    
    // Generate a random order ID
    const orderId = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Calculate order totals
    const subtotal = orderItems.reduce((total, item) => total + (item.menuItem.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;
    
    // Prepare data for email template
    const templateParams = {
      room_id: roomNumber,
      order_id: orderId,
      orders: orderItems.map(item => ({
        name: item.menuItem.name,
        units: item.quantity,
        price: (item.menuItem.price * item.quantity).toFixed(2)
      })),
      cost: {
        shipping: '0.00',
        tax: tax.toFixed(2),
        total: total.toFixed(2)
      },
      special_instructions: specialInstructions
    };

    // Send email using EmailJS
    emailjs.send(
      'service_twcb6z9', // Service ID
      'template_27xkuz5', // Template ID
      templateParams,
      '2A19yeF-CXJz3zLrB' // Public Key
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setOrderItems([]);
        setSpecialInstructions('');
        setShowOrderDetails(false);
        setIsSubmitting(false);
        setShowConfirmation(true); // Show confirmation popup
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('There was an error submitting your order. Please try again.');
        setIsSubmitting(false);
      });
  };

  // Function to safely get item quantity
  const getItemQuantity = (itemId: string): number => {
    const orderItem = orderItems.find(item => item.menuItem.id === itemId);
    return orderItem ? orderItem.quantity : 0;
  };

  // Calculate total items in order
  const totalItems = orderItems.reduce((acc, item) => acc + item.quantity, 0);
  
  // Calculate total price
  const totalPrice = orderItems.reduce((total, item) => total + (item.menuItem.price * item.quantity), 0).toFixed(2);

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* Resort Cover Photo */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image 
          src="/covers/dylan.jpg" 
          alt="Dylan&apos;s Resort"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold drop-shadow-md">Dylan&apos;s Resort</h1>
            <p className="text-sm font-medium text-amber-200">Service open 8AM-8PM</p>
          </div>
          <div className="bg-amber-600 bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            Room {roomNumber}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 pt-5 pb-4">
        {/* Category Navigation */}
        <div className="mb-6 overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {getUniqueCategories().map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-amber-800 border border-amber-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-4 mb-20">
          {sortedMenuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100">
              <div className="p-3">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-4xl mb-2 shadow-inner">
                    {itemIcons[item.name] || categoryIcons[item.category] || '🍴'}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm text-center mb-1">{item.name}</h3>
                  <p className="text-xs text-amber-900 mb-3 font-semibold">₹{item.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-3">
                    {getItemQuantity(item.id) > 0 && (
                      <>
                        <button
                          onClick={() => removeFromOrder(item.id)}
                          className="bg-gray-100 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-200 transition-colors"
                        >
                          <span className="text-sm font-medium">-</span>
                        </button>
                        <span className="text-sm w-5 text-center font-medium">
                          {getItemQuantity(item.id)}
                        </span>
                      </>
                    )}
                    <button
                      onClick={() => addToOrder(item)}
                      className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm hover:bg-amber-700 transition-colors"
                    >
                      <span className="text-sm font-medium">+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Something Else Button */}
        <div className="mb-20">
          <button 
            className="w-full py-3 border-2 border-dashed border-amber-400 rounded-lg text-amber-800 flex items-center justify-center hover:bg-amber-50 transition-colors"
            onClick={() => alert("This would open a form to request a custom item")}
          >
            <span className="mr-2 font-medium">Something Else</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Coffee Customization Modal */}
      {showOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-20 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-5 w-full max-w-md shadow-xl">
            <h3 className="text-lg font-semibold mb-4">Customize Your Order</h3>
            {menuItems.find(item => item.id === showOptions)?.options?.map((option) => (
              <div key={option.name} className="mb-4">
                <h4 className="font-medium mb-2">{option.name}</h4>
                <select
                  className="w-full p-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  onChange={(e) => handleOptionSelect(showOptions, option.name, e.target.value)}
                  value={selectedOptions[option.name] || ''}
                >
                  <option value="">Select {option.name}</option>
                  {option.choices.map((choice) => (
                    <option key={choice} value={choice}>{choice}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowOptions(null)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const item = menuItems.find(item => item.id === showOptions);
                  if (item) confirmOptions(item);
                }}
                className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Summary and Submit Button (Fixed at bottom) */}
      {orderItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-amber-200 p-4 z-10">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-3">
              <div>
                <span className="font-medium">{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
                <span className="mx-2 text-amber-400">|</span>
                <span className="font-bold text-amber-800">₹{totalPrice}</span>
              </div>
              <button 
                className="text-amber-700 text-sm font-medium hover:text-amber-800 transition-colors"
                onClick={() => setShowOrderDetails(true)}
              >
                View Order
              </button>
            </div>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-amber-700 transition-colors disabled:bg-amber-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Order'}
            </button>
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {showOrderDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-end justify-center p-4 z-20 backdrop-blur-sm">
          <div className="bg-white rounded-t-lg p-5 w-full max-w-md max-h-[80vh] overflow-y-auto shadow-xl">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-semibold">Your Order</h3>
              <button 
                onClick={() => setShowOrderDetails(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                ✕
              </button>
            </div>
            
            {orderItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-4 pb-3 border-b border-amber-100">
                <div className="flex items-start">
                  <div className="bg-amber-100 h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center mr-3 shadow-inner">
                    <span className="text-sm font-bold text-amber-800">{item.quantity}x</span>
                  </div>
                  <div>
                    <p className="font-medium">{item.menuItem.name}</p>
                    {item.selectedOptions && Object.entries(item.selectedOptions).length > 0 && (
                      <p className="text-xs text-gray-500">
                        {Object.entries(item.selectedOptions).map(([key, value]) => `${key}: ${value}`).join(', ')}
                      </p>
                    )}
                  </div>
                </div>
                <p className="font-medium text-amber-800">₹{(item.menuItem.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            
            <div className="mt-5">
              <h4 className="font-medium mb-2">Special Instructions</h4>
              <textarea
                placeholder="Add any special instructions..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                rows={3}
              />
            </div>
            
            <div className="mt-5 pt-4 border-t border-amber-100">
              <div className="flex justify-between font-bold mb-5">
                <span>Total</span>
                <span className="text-amber-800">₹{totalPrice}</span>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-amber-700 transition-colors disabled:bg-amber-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Order'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-30 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl text-center">
            <div className="mb-4">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h3>
              <p className="text-lg text-gray-600 mb-6">Your order will arrive shortly</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {submittedItems.map((item, index) => (
                <div key={index} className="relative">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-3xl shadow-md" title={item.menuItem.name}>
                    {itemIcons[item.menuItem.name] || categoryIcons[item.menuItem.category] || '🍴'}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md">
                    {item.quantity}
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => setShowConfirmation(false)}
              className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-amber-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
