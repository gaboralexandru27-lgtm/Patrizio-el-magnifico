import { Product, Review } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Whey Protein Isolate',
    category: 'protein',
    price: 59.99,
    originalPrice: 69.99,
    description: 'Ultra-pure whey protein isolate with 25g of protein per serving. Perfect for muscle building and recovery.',
    image: 'https://images.pexels.com/photos/4397844/pexels-photo-4397844.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/4397844/pexels-photo-4397844.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4397845/pexels-photo-4397845.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    brand: 'PeakSupps',
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    features: [
      '25g of high-quality protein per serving',
      'Fast-absorbing whey protein isolate',
      'Low in carbs and fat',
      'Available in 5 delicious flavors',
      'Third-party tested for purity'
    ],
    nutritionalFacts: {
      servingSize: '1 scoop (30g)',
      servingsPerContainer: 30,
      calories: 120,
      ingredients: [
        { name: 'Whey Protein Isolate', amount: '25g', dailyValue: '50%' },
        { name: 'Natural Flavors', amount: '2g' },
        { name: 'Stevia Extract', amount: '0.5g' },
      ]
    },
    usage: 'Mix 1 scoop with 8-10 oz of water or milk. Consume within 30 minutes post-workout or between meals.',
    warnings: [
      'Not suitable for individuals with milk allergies',
      'Keep out of reach of children',
      'Store in a cool, dry place'
    ],
    tags: ['protein', 'whey', 'isolate', 'muscle building'],
    goals: ['muscle building', 'recovery', 'weight management'],
    servingsPerContainer: 30,
    servingSize: '1 scoop (30g)'
  },
  {
    id: '2',
    name: 'Explosive Pre-Workout Formula',
    category: 'pre-workout',
    price: 44.99,
    description: 'High-stimulant pre-workout with citrulline, beta-alanine, and caffeine for explosive energy and pumps.',
    image: 'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/4397842/pexels-photo-4397842.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    brand: 'PeakSupps',
    rating: 4.6,
    reviewCount: 189,
    inStock: true,
    features: [
      '300mg caffeine for explosive energy',
      '6g L-Citrulline for incredible pumps',
      '3.2g Beta-Alanine for endurance',
      'Zero sugar, zero calories',
      'Available in 3 flavors'
    ],
    nutritionalFacts: {
      servingSize: '1 scoop (15g)',
      servingsPerContainer: 30,
      ingredients: [
        { name: 'L-Citrulline', amount: '6g' },
        { name: 'Beta-Alanine', amount: '3.2g' },
        { name: 'Caffeine Anhydrous', amount: '300mg' },
        { name: 'L-Tyrosine', amount: '1g' },
      ]
    },
    usage: 'Mix 1 scoop with 8-10 oz of water 20-30 minutes before workout. Do not exceed 1 serving per day.',
    warnings: [
      'Not for use by individuals under 18 years of age',
      'Contains high amounts of caffeine',
      'Do not use if pregnant or nursing',
      'Consult physician before use'
    ],
    tags: ['pre-workout', 'energy', 'stimulant', 'performance'],
    goals: ['energy', 'performance', 'strength'],
    servingsPerContainer: 30,
    servingSize: '1 scoop (15g)'
  },
  {
    id: '3',
    name: 'Multivitamin Complex',
    category: 'vitamins',
    price: 29.99,
    description: 'Complete daily multivitamin with 25+ essential vitamins and minerals for optimal health.',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    brand: 'PeakSupps',
    rating: 4.7,
    reviewCount: 312,
    inStock: true,
    features: [
      '25+ essential vitamins and minerals',
      'High potency formula',
      'Easy-to-swallow capsules',
      '90-day supply',
      'Third-party tested for purity'
    ],
    nutritionalFacts: {
      servingSize: '2 capsules',
      servingsPerContainer: 45,
      ingredients: [
        { name: 'Vitamin A', amount: '5000 IU', dailyValue: '100%' },
        { name: 'Vitamin C', amount: '90mg', dailyValue: '100%' },
        { name: 'Vitamin D3', amount: '2000 IU', dailyValue: '500%' },
        { name: 'B-Complex', amount: 'Various', dailyValue: '100%' },
        { name: 'Calcium', amount: '200mg', dailyValue: '15%' },
        { name: 'Iron', amount: '18mg', dailyValue: '100%' },
      ]
    },
    usage: 'Take 2 capsules daily with food, preferably with breakfast.',
    warnings: [
      'Keep out of reach of children',
      'Do not exceed recommended dose',
      'Consult physician if pregnant or nursing'
    ],
    tags: ['vitamins', 'minerals', 'health', 'daily'],
    goals: ['health', 'wellness', 'immunity'],
    servingsPerContainer: 45,
    servingSize: '2 capsules'
  },
  {
    id: '4',
    name: 'Creatine Monohydrate',
    category: 'performance-enhancers',
    price: 24.99,
    description: 'Pure creatine monohydrate for increased strength, power, and muscle mass.',
    image: 'https://images.pexels.com/photos/4397849/pexels-photo-4397849.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/4397849/pexels-photo-4397849.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    brand: 'PeakSupps',
    rating: 4.9,
    reviewCount: 567,
    inStock: true,
    features: [
      '100% pure creatine monohydrate',
      '5g per serving',
      'Unflavored, mixes easily',
      '100 servings per container',
      'Micronized for better absorption'
    ],
    nutritionalFacts: {
      servingSize: '1 scoop (5g)',
      servingsPerContainer: 100,
      ingredients: [
        { name: 'Creatine Monohydrate', amount: '5g' },
      ]
    },
    usage: 'Mix 1 scoop with 8 oz of water or your favorite beverage. Take daily for best results.',
    warnings: [
      'Drink plenty of water when using this product',
      'Not recommended for individuals under 18',
      'Store in a cool, dry place'
    ],
    tags: ['creatine', 'strength', 'power', 'muscle'],
    goals: ['strength', 'power', 'muscle building'],
    servingsPerContainer: 100,
    servingSize: '1 scoop (5g)'
  },
  {
    id: '5',
    name: 'Omega-3 Fish Oil',
    category: 'vitamins',
    price: 34.99,
    description: 'High-potency omega-3 fish oil for heart, brain, and joint health.',
    image: 'https://images.pexels.com/photos/3683073/pexels-photo-3683073.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3683073/pexels-photo-3683073.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    brand: 'PeakSupps',
    rating: 4.5,
    reviewCount: 198,
    inStock: true,
    features: [
      '1000mg of EPA and DHA per serving',
      'Molecularly distilled for purity',
      'No fishy aftertaste',
      '60-day supply',
      'Third-party tested for heavy metals'
    ],
    nutritionalFacts: {
      servingSize: '2 softgels',
      servingsPerContainer: 60,
      ingredients: [
        { name: 'EPA (Eicosapentaenoic Acid)', amount: '600mg' },
        { name: 'DHA (Docosahexaenoic Acid)', amount: '400mg' },
      ]
    },
    usage: 'Take 2 softgels daily with meals.',
    warnings: [
      'Consult physician if taking blood thinners',
      'Keep refrigerated after opening',
      'Not suitable for fish/seafood allergies'
    ],
    tags: ['omega-3', 'fish oil', 'heart health', 'brain health'],
    goals: ['heart health', 'brain health', 'joint health'],
    servingsPerContainer: 60,
    servingSize: '2 softgels'
  },
  {
    id: '6',
    name: 'Plant-Based Protein Blend',
    category: 'protein',
    price: 54.99,
    description: 'Complete plant-based protein with pea, rice, and hemp proteins. Perfect for vegans.',
    image: 'https://images.pexels.com/photos/4397848/pexels-photo-4397848.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/4397848/pexels-photo-4397848.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    brand: 'PeakSupps',
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    features: [
      '24g of complete plant protein',
      'Blend of pea, rice, and hemp proteins',
      'Vegan and gluten-free',
      'Added digestive enzymes',
      'Natural vanilla flavor'
    ],
    nutritionalFacts: {
      servingSize: '1 scoop (32g)',
      servingsPerContainer: 28,
      calories: 130,
      ingredients: [
        { name: 'Pea Protein Isolate', amount: '15g' },
        { name: 'Rice Protein', amount: '7g' },
        { name: 'Hemp Protein', amount: '2g' },
        { name: 'Digestive Enzymes', amount: '50mg' },
      ]
    },
    usage: 'Mix 1 scoop with 8-10 oz of water, plant milk, or smoothie.',
    warnings: [
      'Store in a cool, dry place',
      'Keep out of reach of children'
    ],
    tags: ['plant protein', 'vegan', 'gluten-free', 'complete protein'],
    goals: ['muscle building', 'recovery', 'vegan nutrition'],
    servingsPerContainer: 28,
    servingSize: '1 scoop (32g)'
  }
];

export const reviews: Record<string, Review[]> = {
  '1': [
    {
      id: '1',
      userId: '1',
      userName: 'Mike Johnson',
      rating: 5,
      title: 'Best protein I\'ve tried!',
      comment: 'Mixes well, tastes great, and I can definitely see results. Been using it for 3 months now.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: '2',
      userId: '2',
      userName: 'Sarah Williams',
      rating: 4,
      title: 'Great quality',
      comment: 'Love the vanilla flavor. Only reason it\'s not 5 stars is the price, but quality is worth it.',
      date: '2024-01-10',
      verified: true
    }
  ],
  '2': [
    {
      id: '3',
      userId: '3',
      userName: 'Alex Chen',
      rating: 5,
      title: 'Incredible energy boost!',
      comment: 'This pre-workout is amazing. Great pumps and sustained energy throughout my workout.',
      date: '2024-01-20',
      verified: true
    }
  ],
  '3': [
    {
      id: '4',
      userId: '4',
      userName: 'Jessica Brown',
      rating: 5,
      title: 'Feel more energetic',
      comment: 'Since taking these vitamins, I feel much more energetic and healthier overall.',
      date: '2024-01-18',
      verified: true
    }
  ]
};