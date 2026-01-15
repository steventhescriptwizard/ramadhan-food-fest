
import { Stall, MenuItem } from './types';

export const STALLS: Stall[] = [
  {
    id: '1',
    name: "The Sultan's Kebab",
    shortName: "SK",
    cuisine: "Middle Eastern",
    rating: 4.9,
    description: "Experience the royal taste of authentic Persian grills marinated in heritage spice blends for 24 hours.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVbfhn-0jDfu0LjpmLjawa9FZ_eLoCLdMuIEpPirlijfRk15iK32TIv0oeRha6a2fCDTvXZE6FM0oCpIipMtYks6KCciHFoJs938VpQdhH7BcRmKhx3r6KSoIBv8CPTbyYxExbMrx0iNUHSY8jH0bm5vgfeHYm7GXPp2QblMf2x4IkbflenNdR-8EMhjiUXMdEIgHRkNueUVcoPhFeSHBYmxGkN8xGbfoYf8o13QnGObZ2fryJvSYqL8DP4XU-Js9Y7hUaqybBlL4",
    isMustTry: true,
    isPremium: true,
    waitTime: "20m",
    logoImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8ops4YVxWdefWTqUBvLMC0z2H-Suw7HvM0C4OPWfC8nt7HfVMgGsxg-0Ak0WpQ0hS4np6uiMXA4Ty9cbrQw013BYLx7Ble8e9gxAahfqQX_vqS8hj0TLuDGndPymYWa36Kjru1yhdqyvWDtNCsVMEKDG3Jw46AZHj4vSPHZkM5Lfn8xG8dY5bwcNEJFnDW2dVuGCEaV0XnxAdwkBvooMYMrpp6SsG6Xbw057Jc0ipqwjjbxP1yFq3YEj5IezlH27ZWeUY3afxePA"
  },
  {
    id: '2',
    name: "Madina Sweets",
    shortName: "MS",
    cuisine: "Traditional Desserts",
    rating: 4.8,
    description: "Hand-layered pastries and artisanal dates stuffed with premium nuts, bringing the warmth of Madina to your table.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKh958fAfXSo-h59aEX_lUKALbANjIEji-GjZfIivBQAv-G9Y926YVaZIto4z_zUY5NK5VQsiLE0hQP1ocYHFNaIttyr7YRnnh0fe_01hiv_J4tETPlA6IWy_NE1JPUPnDyxmgkoAizQqBbBeEm_zqL2hwv1QkwCLCGeJFqG-QEzHBFNbO34yeSYhbi8BkkBGzA_TzurHC4X6vcqOy1c5u6y7QIgwbq9wXOI9iliLbNznEOzfg0jmZmsZYXi5HLhLWV0A2nil7q6I",
    waitTime: "10m"
  },
  {
    id: '3',
    name: "Oasis Grills",
    shortName: "OG",
    cuisine: "Modern Fusion",
    rating: 4.7,
    description: "Refreshing and light Iftar options focusing on farm-to-table ingredients with a Levantine twist.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIWfCp9g6TD87h3QwKiT4IWaPuF0623Rwotq-i3lkLAh_JQprdGQe61kn7JPISBmpF4SAJab4JzUvheKSejKW9i9KcHrK-I2XaFeKp6RiF0KxG9sHG_tpTMwyocQuoubGMupnnuFFz16BeVXBIrfRmzucyocKjL6O6WaPXejH189bK_EpiJbId55XMVNJo6R_aiat1gnaMmYM4-2Zk-WwNISQw_f44P1b1QuQLuM2IWY9wbiCs3241xBd8lOksBvawWV0wmgAlojk",
    waitTime: "15m"
  },
  {
    id: '4',
    name: "Nusantara House",
    shortName: "NH",
    cuisine: "Traditional Iftar",
    rating: 5.0,
    description: "Specializing in slow-cooked rendang and aromatic rices, recipes passed down through three generations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACgXjTbQx0NwG9FEdZ1gwYJfQcIhz8WL0oXO9ld1M_TD00a51Ey_QcgMk7UN4XqMJYYcRrT1BI32afvs4puUJnJ31eiVegB67ADKBcI0jkMXvjCupl5MSY_RBIn95I9OIVTLuQzy7yVq4HZNYwq4__UCLfClvDg8jMf6yMzUWXQFULYem22l7JCEuN-rXuKdcWp8i4YVNfCxwIom2eP9ssR7vNYKH2yVrzXGY9AKeHjFjIAyCEhO-JZAFuKAjl8Xy04CSwcqIgw3Y",
    waitTime: "25m"
  },
  {
    id: '5',
    name: "Hydration Bar",
    shortName: "HB",
    cuisine: "Refreshing Drinks",
    rating: 4.6,
    description: "Beat the thirst with our signature Rose Milk and hand-pressed fruit medleys, chilled to perfection.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH6ynd200n1JeVcQGLaxP7QsV5p0IKm3Dz4s9rGJrXVUBAcaOCd7bk2wdORbgW4o0sujvukVOq6UUnBpDu3yLkg4Mf-5iwt9mPF5hSdryKyrqTZgQqYIbM7PXJuHlmt5ky45sf6I651OsIsrD_Nw_PCsyVOgu01StUvPKAOpPTGfh3_OSZn4a8vljH2IHta5eSZUtfS4JKhBk9-fTLh8Wj1pQCc3o477SIK2BBJtUay73SgNhiH_WkoilF9GIsRl0aOzjjwuFtFrc",
    isBestseller: true,
    waitTime: "5m"
  },
  {
    id: 'al-barakah',
    name: "Al-Barakah Mandi House",
    shortName: "AB",
    cuisine: "Middle Eastern",
    rating: 4.9,
    description: "A legacy of spices spanning three generations. Experience the authentic slow-roasted soul of Hadramout.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKr9OvWikyZj4MT3hG84nQQSRPi5tLS_eY9sPW-MLkmrtjT5gvjU45GHh-I07xQytJ0R4kbSkfypfHDeHgJnO0Xa2fCmrv7JMpb8qxKT6W6zhDa9zMFeP0fHEP5ALGNY0cgHSDttYtynLiuEZ3mFuj0vPAFfIhZ0665F7jM9yORe6OaVzhdigt7aNlKGfG42l6qaOuVOEEjCYQCnClz6aHYz62We5ozwqxbPO_TvjzWPfKdAovOjixtB1rbUlJT8AeZkXleFiTJ98",
    isPremium: true,
    waitTime: "15m",
    logoImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhoG7IUpg1VNV5Il7zwvkkEO2kUNwrLbQyuSUp4v-HS7cPZQAhh_MpV8uYqrsF1kMk5Q9K3R-5T9ensxI3Ns_7-3aVofkWdC8HxP_mnDkNOgaUcRGRJda_rT0dNYBocft7kBU30pOjEC8zTYkeVVTT4jbQOIW-sHDutlXJ_P1ogxkdkt9_biqJtCe5jedQbjhUb59cTbYmtTH1_Yfuc8fuEK7FKeEVEfNSv85-z1Qc9hlIKdsAsTlt1RcszH0r5F3LOtzb4UEjT3I"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    stallId: 'al-barakah',
    name: "Royal Medjoul Dates",
    price: 18,
    currency: "AED",
    description: "Hand-picked jumbo Medjoul dates stuffed with caramelized pecans and a hint of Himalayan salt.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv-LDvcFiFKhWB3UFUiZWAdQvtv443D8SZpUfXKYrCNFqnaagURDC_9Zl9VAw4l4997Bt-263QTqXvqBASeAAK8s52WaR9hreQ5ukWItCObYiAJZCMrFHCFMH-4RB1mXICdBbFjyHinRPupVgqxHAFDQKbNx5jODcq25GrgMVywlYbMmgyb09oSaD9eKfZpXtzL30lUaO1utbic26U-KROzgulNxkkBE3RRljWH4_rkCHluZ4dmQ9WX5ESUzhk6VZkUE6bI38hgmk",
    category: 'Takjil',
    tags: ["High Fiber", "Natural Sugar"]
  },
  {
    id: 'm2',
    stallId: 'al-barakah',
    name: "Beef Samboussa",
    price: 25,
    currency: "AED",
    description: "Crispy pastry triangles filled with spiced wagyu beef and fresh cilantro. Served with spicy shatta.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbQ0oTN3djQJpvCyX3jSu7oOgi3cujhnv8N6Mickfzzb4g-ExsvUnDAcwPoiyaIOE_8HoGJcy4p95bHt_larD23WjmXJu-Li12nT1OnyY29o7Ze6MBz7DqPhUE6DFcw2GznfwpmztgK9MzDm1BsctVL_nL0ONFUxxG7d7GQ-D2WyP0f3AbjO9CxTKUf8LIOm5VMbz0uuczy6cbEs6zFuqWnJxH-oWRSA8k9CBpmp0v65-QF78ohaVORRNXbLkbn_e5y2W63sgm-kE",
    category: 'Takjil',
    tags: ["Fried", "Spicy Dip"]
  },
  {
    id: 'm3',
    stallId: 'al-barakah',
    name: "Saffron Lentil Soup",
    price: 22,
    currency: "AED",
    description: "Velvety yellow lentils slow-cooked with roasted cumin and Iranian saffron. Served with lemon wedges.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx1mOxBxsu2mhx9G2mD79Mdw-0baJB49jjrn1RbP5WVvtaZrKxhxfsHL9PXgA5UqVfc8uFBvDXyyg1ufF7bVVJ543gOyDNiq3YzIzK87cNLCaPrxDQPsEbpjSOuS9diNhUph-XnmEH6BElT4u-4szo9UyYHaEHGfAG_DUOu4JOcTwuFufIaczDxDkK-zZgqeP0UCKHkjZWh2M-RZfZ_VXDFejS9T87NIWIk6l0TNDNyDZliJzyT4shUm18ve_K1LLbicz41zsGkQw",
    category: 'Takjil',
    tags: ["Vegan Friendly", "Gluten Free"]
  },
  {
    id: 'm4',
    stallId: 'al-barakah',
    name: "Signature Lamb Mandi",
    price: 85,
    currency: "AED",
    description: "Succulent slow-roasted young lamb, pit-cooked for 6 hours until the meat falls off the bone. Served over fragrant Basmati rice.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiH7ht-fK9rT-MY_1hOf4q8q6HpEnKICUEvnBzSMSPPNjBRqkB2R9JNm0t3TVU0M9eJDw0pAlf5zj6yAQi7SAMjQYm1WkI1c67jmpozTfaij3YssruiexVMuoiOLvs86EmOaua-xx8ASHBiPP1QkHl7wfKSLQrSNUecoOoc_6kukVXWE6cMP8kVSxKuZS_d2OcYFmIDnJaw6xBFpBcBKL1BOr-a8GyyDXVbL4HfXewosAcM3MqeJXNNgFDhw40HtXzSOzTPbB9s_s",
    category: 'Main Dishes',
    isChefSpecial: true,
    tags: ["Spicy Shatta", "Garnished with Nuts", "Serving for 2"]
  },
  {
    id: 'm5',
    stallId: '1',
    name: "Persian Mix Grill",
    price: 75,
    currency: "AED",
    description: "A platter of Shish Tawook, Lamb Kofta, and Beef Tikka, served with saffron rice and grilled vegetables.",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800",
    category: 'Main Dishes',
    tags: ["High Protein", "Grilled"]
  },
  {
    id: 'm6',
    stallId: '2',
    name: "Golden Baklava Tower",
    price: 45,
    currency: "AED",
    description: "Layers of filo pastry with crushed pistachios and honey syrup. A sweet masterpiece.",
    image: "https://images.unsplash.com/photo-1519676867240-f031ee04a703?auto=format&fit=crop&q=80&w=800",
    category: 'Desserts',
    tags: ["Nutty", "Sweet"]
  },
  {
    id: 'm7',
    stallId: '5',
    name: "Vimto Rose Sparkler",
    price: 20,
    currency: "AED",
    description: "The iconic Ramadhan Vimto mixed with rose water, fresh berries, and a splash of sparkling soda.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    category: 'Refreshments',
    tags: ["Icy", "Fruity"]
  },
  {
    id: 'm8',
    stallId: '4',
    name: "Beef Rendang Tok",
    price: 68,
    currency: "AED",
    description: "Traditional dry beef curry slow-cooked for 8 hours with toasted coconut and 15 heritage spices.",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800",
    category: 'Main Dishes',
    tags: ["Nusantara Origin", "Spicy"]
  },
  {
    id: 'm9',
    stallId: '3',
    name: "Halloumi Quinoa Salad",
    price: 42,
    currency: "AED",
    description: "Grilled Cypriot halloumi, tricolor quinoa, pomegranate seeds, and a zesty lemon-tahini dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    category: 'Takjil',
    tags: ["Healthy", "Vegetarian"]
  }
];
