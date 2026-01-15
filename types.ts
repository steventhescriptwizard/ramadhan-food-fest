
export interface Stall {
  id: string;
  name: string;
  shortName: string;
  cuisine: string;
  rating: number;
  description: string;
  image: string;
  tags?: string[];
  logoImage?: string;
  isBestseller?: boolean;
  isMustTry?: boolean;
  isPremium?: boolean;
  waitTime?: string;
}

export interface MenuItem {
  id: string;
  stallId: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  image: string;
  category: 'Takjil' | 'Main Dishes' | 'Refreshments' | 'Desserts';
  isChefSpecial?: boolean;
  tags?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}
