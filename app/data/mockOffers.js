// Represents *all* available offers across markets
// In a real app, this would come from a database/API
// NOTE: Generating *extensive* mock data for *all* German discounter articles is beyond
//       the scope of a single response. This is a representative sample structure.
//       You'll need to significantly expand this list for real use.

// Helper function for simple ID generation
let offerIdCounter = 0;
const generateOfferId = () => `offer_${++offerIdCounter}`;

// Market IDs used
const markets = {
  aldi: { name: 'Aldi', id: 'aldi' },
  lidl: { name: 'Lidl', id: 'lidl' },
  rewe: { name: 'Rewe', id: 'rewe' },
  edeka: { name: 'Edeka', id: 'edeka' },
  penny: { name: 'Penny', id: 'penny' },
  netto: { name: 'Netto', id: 'netto' }, // Netto Markendiscount
  kaufland: { name: 'Kaufland', id: 'kaufland' },
};

// Add this categories object
const categories = {
  pflanzenkost: 'Pflanzenkost',
  molkeEier: 'Molke-Eier',
  fleischWurst: 'Fleisch & Wurst',
  backwaren: 'Backwaren',
  speisekammer: 'Speisekammer',
  gefrorenes: 'Gefrorenes',
  beverages: 'Getränke',
  haushalt: 'Haushalt',
  snacks: 'Snacks'
};

export const allMockOffers = [
  // --- Produce ---
  {
    offerId: generateOfferId(),
    productId: 'prod_bananas', // Unique identifier for the product itself
    marketId: markets.aldi.id, // Which market has this offer
    name: 'Bananen',
    category: 'Pflanzenkost', // Keep existing categories
    brand: 'Obstland', // Optional: Add brand info
    imageUrl: '/bananas.png', // Example image path
    originalPrice: 1.99,
    discountPrice: 0.99,
    quantity: '1kg', // String describing the quantity
    unit: 'kg', // Base unit for unit price calculation
    baseQuantity: 1, // Amount in base units (1 kg)
    validUntil: '2025-04-15',
  },
  {
    offerId: generateOfferId(),
    productId: 'prod_bananas',
    marketId: markets.lidl.id,
    name: 'Bananen, lose',
    category: 'Pflanzenkost',
    brand: null, // No specific brand
    imageUrl: 'https://placehold.co/400x400/yellow/black.png',
    originalPrice: 1.89,
    discountPrice: 1.19,
    quantity: '1kg',
    unit: 'kg',
    baseQuantity: 1,
    validUntil: '2025-04-16',
  },
   {
    offerId: generateOfferId(),
    productId: 'prod_apples_gala',
    marketId: markets.rewe.id,
    name: 'Äpfel Royal Gala',
    category: 'Pflanzenkost',
    brand: 'Rewe Beste Wahl',
    imageUrl: 'https://placehold.co/400x400/red/white.png',
    originalPrice: 2.49,
    discountPrice: 1.79,
    quantity: '1kg',
    unit: 'kg',
    baseQuantity: 1,
    validUntil: '2025-04-15',
  },
  {
    offerId: generateOfferId(),
    productId: 'prod_tomatoes_cherry',
    marketId: markets.edeka.id,
    name: 'Cherrytomaten',
    category: 'Pflanzenkost',
    brand: 'Edeka Bio',
    imageUrl: 'https://placehold.co/400x400/tomato/white.png',
    originalPrice: 2.99,
    discountPrice: 1.99,
    quantity: '250g',
    unit: 'kg', // Base unit is kg
    baseQuantity: 0.25, // 250g = 0.25 kg
    validUntil: '2025-04-14',
  },
   {
    offerId: generateOfferId(),
    productId: 'prod_potatoes',
    marketId: markets.penny.id,
    name: 'Speisekartoffeln, festkochend',
    category: 'Pflanzenkost',
    brand: 'Penny Marktliebe',
    imageUrl: 'https://placehold.co/400x400/tan/black.png',
    originalPrice: 2.79,
    discountPrice: 1.49,
    quantity: '2.5kg',
    unit: 'kg',
    baseQuantity: 2.5,
    validUntil: '2025-04-18',
  },

  // --- Dairy & Eggs ---
   {
    offerId: generateOfferId(),
    productId: 'prod_milk_1_5',
    marketId: markets.aldi.id,
    name: 'Frische Fettarme Milch 1,5%',
    category: 'Molke-Eier',
    brand: 'Milsani',
    imageUrl: 'https://placehold.co/400x400/lightblue/white.png',
    originalPrice: 1.09,
    discountPrice: 0.89,
    quantity: '1L',
    unit: 'L',
    baseQuantity: 1,
    validUntil: '2025-04-12',
  },
   {
    offerId: generateOfferId(),
    productId: 'prod_milk_1_5',
    marketId: markets.lidl.id,
    name: 'Frische Milch 1,5% Fett',
    category: 'Molke-Eier',
    brand: 'Milbona',
    imageUrl: 'https://placehold.co/400x400/lightblue/black.png',
    originalPrice: 1.09,
    discountPrice: 0.85,
    quantity: '1L',
    unit: 'L',
    baseQuantity: 1,
    validUntil: '2025-04-13',
  },
  {
    offerId: generateOfferId(),
    productId: 'prod_eggs_bio_10',
    marketId: markets.kaufland.id,
    name: 'Bio Eier 10 Stück',
    category: 'Molke-Eier',
    brand: 'K-Bio',
    imageUrl: 'https://placehold.co/400x400/beige/black.png',
    originalPrice: 3.49,
    discountPrice: 2.79,
    quantity: '10 Stück',
    unit: 'Stück', // Price per piece can be calculated
    baseQuantity: 10,
    validUntil: '2025-04-16',
  },
   {
    offerId: generateOfferId(),
    productId: 'prod_butter',
    marketId: markets.netto.id,
    name: 'Deutsche Markenbutter',
    category: 'Molke-Eier',
    brand: 'Gutes Land',
    imageUrl: 'https://placehold.co/400x400/lightyellow/black.png',
    originalPrice: 2.29,
    discountPrice: 1.59,
    quantity: '250g',
    unit: 'kg',
    baseQuantity: 0.25,
    validUntil: '2025-04-14',
  },

   // --- Beverages ---
   {
    offerId: generateOfferId(),
    productId: 'prod_coke_1_5',
    marketId: markets.rewe.id,
    name: 'Coca-Cola Kasten 12x1L',
    category: 'beverages',
    brand: 'Coca-Cola',
    imageUrl: 'https://placehold.co/400x400/darkred/white.png',
    originalPrice: 12.99,
    discountPrice: 9.99,
    quantity: '12 x 1L',
    unit: 'L', // Base unit Litre
    baseQuantity: 12, // 12 * 1L
    validUntil: '2025-04-18',
  },
  {
    offerId: generateOfferId(),
    productId: 'prod_water_sparkling_6x1_5',
    marketId: markets.penny.id,
    name: 'Mineralwasser Spritzig 6x1,5L',
    category: 'beverages',
    brand: 'Penny Ready',
    imageUrl: 'https://placehold.co/400x400/blue/white.png',
    originalPrice: 1.99,
    discountPrice: 1.39,
    quantity: '6 x 1.5L',
    unit: 'L',
    baseQuantity: 9, // 6 * 1.5L
    validUntil: '2025-04-16',
  },

  // --- Pantry ---
   {
    offerId: generateOfferId(),
    productId: 'prod_nutella_450',
    marketId: markets.edeka.id,
    name: 'Nutella Nuss-Nugat-Creme',
    category: 'speisekammer',
    brand: 'Nutella',
    imageUrl: 'https://placehold.co/400x400/brown/white.png',
    originalPrice: 3.29,
    discountPrice: 2.79,
    quantity: '450g',
    unit: 'kg',
    baseQuantity: 0.45,
    validUntil: '2025-04-20',
  },
   {
    offerId: generateOfferId(),
    productId: 'prod_pasta_barilla_500',
    marketId: markets.kaufland.id,
    name: 'Barilla Pasta versch. Sorten',
    category: 'speisekammer',
    brand: 'Barilla',
    imageUrl: 'https://placehold.co/400x400/gold/darkblue.png',
    originalPrice: 1.79,
    discountPrice: 0.99,
    quantity: '500g',
    unit: 'kg',
    baseQuantity: 0.5,
    validUntil: '2025-04-19',
  },

  // === ALDI ===
  // Pflanzenkost
  { offerId: generateOfferId(), productId: 'prod_bananas_aldi', marketId: markets.aldi.id, name: 'Bananen', category: categories.pflanzenkost, brand: 'Best Banana', imageUrl: '/bananas.png', originalPrice: 1.99, discountPrice: 0.99, quantity: '1kg', unit: 'kg', baseQuantity: 1, validUntil: '2025-04-15' },
  { offerId: generateOfferId(), productId: 'prod_avocado_aldi', marketId: markets.aldi.id, name: 'Avocado Hass', category: categories.pflanzenkost, brand: 'Nature\'s Best', imageUrl: 'https://placehold.co/400x400/green/white.png', originalPrice: 1.49, discountPrice: 0.89, quantity: '1 Stück', unit: 'Stück', baseQuantity: 1, validUntil: '2025-04-14' },
  { offerId: generateOfferId(), productId: 'prod_paprika_mix_aldi', marketId: markets.aldi.id, name: 'Paprika Mix', category: categories.pflanzenkost, brand: 'Bio Sonne', imageUrl: 'https://placehold.co/400x400/orange/black.png', originalPrice: 2.79, discountPrice: 1.99, quantity: '500g', unit: 'kg', baseQuantity: 0.5, validUntil: '2025-04-16' },
  // Molke-Eier
  { offerId: generateOfferId(), productId: 'prod_milk_1_5_aldi', marketId: markets.aldi.id, name: 'Frische Fettarme Milch 1,5%', category: categories.molkeEier, brand: 'Milsani', imageUrl: 'https://placehold.co/400x400/lightblue/white.png', originalPrice: 1.09, discountPrice: 0.89, quantity: '1L', unit: 'L', baseQuantity: 1, validUntil: '2025-04-12' },
  { offerId: generateOfferId(), productId: 'prod_yoghurt_aldi', marketId: markets.aldi.id, name: 'Naturjoghurt 3,5%', category: categories.molkeEier, brand: 'Milsani', imageUrl: 'https://placehold.co/400x400/white/blue.png', originalPrice: 0.89, discountPrice: 0.59, quantity: '500g', unit: 'kg', baseQuantity: 0.5, validUntil: '2025-04-18' },
  // Fleisch & Wurst
  { offerId: generateOfferId(), productId: 'prod_hackfleisch_aldi', marketId: markets.aldi.id, name: 'Hackfleisch gemischt', category: categories.fleischWurst, brand: 'Meine Metzgerei', imageUrl: 'https://placehold.co/400x400/pink/black.png', originalPrice: 4.99, discountPrice: 3.99, quantity: '500g', unit: 'kg', baseQuantity: 0.5, validUntil: '2025-04-13' },
  { offerId: generateOfferId(), productId: 'prod_chicken_breast_aldi', marketId: markets.aldi.id, name: 'Hähnchenbrustfilet', category: categories.fleischWurst, brand: 'Gut Bio', imageUrl: 'https://placehold.co/400x400/lightpink/black.png', originalPrice: 6.49, discountPrice: 5.49, quantity: '400g', unit: 'kg', baseQuantity: 0.4, validUntil: '2025-04-14' },
  // Speisekammer
  { offerId: generateOfferId(), productId: 'prod_tuna_aldi', marketId: markets.aldi.id, name: 'Thunfisch in Öl', category: categories.speisekammer, brand: 'Golden Seafood', imageUrl: 'https://placehold.co/400x400/silver/blue.png', originalPrice: 1.59, discountPrice: 1.19, quantity: '150g Abtropfg.', unit: 'kg', baseQuantity: 0.15, validUntil: '2026-01-10' },
  // Gefrorenes
  { offerId: generateOfferId(), productId: 'prod_pizza_salami_aldi', marketId: markets.aldi.id, name: 'Steinofen Pizza Salami', category: categories.gefrorenes, brand: 'Mama Mancini', imageUrl: 'https://placehold.co/400x400/red/yellow.png', originalPrice: 2.59, discountPrice: 1.99, quantity: '350g', unit: 'kg', baseQuantity: 0.35, validUntil: '2025-10-01' },
  // Getränke
  { offerId: generateOfferId(), productId: 'prod_orangensaft_aldi', marketId: markets.aldi.id, name: 'Orangensaft 100%', category: categories.beverages, brand: 'Rio D\'oro', imageUrl: 'https://placehold.co/400x400/orange/green.png', originalPrice: 1.79, discountPrice: 1.39, quantity: '1L', unit: 'L', baseQuantity: 1, validUntil: '2025-06-20' },
  // Haushalt
  { offerId: generateOfferId(), productId: 'prod_wc_papier_aldi', marketId: markets.aldi.id, name: 'Toilettenpapier 3-lagig', category: categories.haushalt, brand: 'Kokett', imageUrl: 'https://placehold.co/400x400/white/grey.png', originalPrice: 3.99, discountPrice: 3.29, quantity: '10 Rollen', unit: 'Rolle', baseQuantity: 10, validUntil: '2025-05-01' },
  // Snacks
  { offerId: generateOfferId(), productId: 'prod_chips_paprika_aldi', marketId: markets.aldi.id, name: 'Kartoffelchips Paprika', category: categories.snacks, brand: 'Sun Snacks', imageUrl: 'https://placehold.co/400x400/orangered/white.png', originalPrice: 1.29, discountPrice: 0.99, quantity: '175g', unit: 'kg', baseQuantity: 0.175, validUntil: '2025-07-15' },
   // ... Add ~10-15 more diverse Aldi items ...


  // === LIDL ===
  // Pflanzenkost
  { offerId: generateOfferId(), productId: 'prod_bananas_lidl', marketId: markets.lidl.id, name: 'Bananen, lose', category: categories.pflanzenkost, brand: null, imageUrl: 'https://placehold.co/400x400/yellow/black.png', originalPrice: 1.89, discountPrice: 1.19, quantity: '1kg', unit: 'kg', baseQuantity: 1, validUntil: '2025-04-16' },
  { offerId: generateOfferId(), productId: 'prod_cucumber_lidl', marketId: markets.lidl.id, name: 'Salatgurke', category: categories.pflanzenkost, brand: null, imageUrl: 'https://placehold.co/400x400/darkgreen/white.png', originalPrice: 0.99, discountPrice: 0.59, quantity: '1 Stück', unit: 'Stück', baseQuantity: 1, validUntil: '2025-04-15' },
  // Molke-Eier
  { offerId: generateOfferId(), productId: 'prod_milk_1_5_lidl', marketId: markets.lidl.id, name: 'Frische Milch 1,5% Fett', category: categories.molkeEier, brand: 'Milbona', imageUrl: 'https://placehold.co/400x400/lightblue/black.png', originalPrice: 1.09, discountPrice: 0.85, quantity: '1L', unit: 'L', baseQuantity: 1, validUntil: '2025-04-13' },
  { offerId: generateOfferId(), productId: 'prod_gouda_lidl', marketId: markets.lidl.id, name: 'Gouda jung, Scheiben', category: categories.molkeEier, brand: 'Milbona', imageUrl: 'https://placehold.co/400x400/gold/black.png', originalPrice: 3.49, discountPrice: 2.79, quantity: '400g', unit: 'kg', baseQuantity: 0.4, validUntil: '2025-05-10' },
  // Fleisch & Wurst
  { offerId: generateOfferId(), productId: 'prod_salami_lidl', marketId: markets.lidl.id, name: 'Salami, geschnitten', category: categories.fleischWurst, brand: 'Dulano', imageUrl: 'https://placehold.co/400x400/darkred/lightgrey.png', originalPrice: 1.99, discountPrice: 1.49, quantity: '100g', unit: 'kg', baseQuantity: 0.1, validUntil: '2025-04-25' },
  // Backwaren
  { offerId: generateOfferId(), productId: 'prod_toast_lidl', marketId: markets.lidl.id, name: 'Sandwich Toast', category: categories.backwaren, brand: 'Grafschafter', imageUrl: 'https://placehold.co/400x400/wheat/brown.png', originalPrice: 1.19, discountPrice: 0.89, quantity: '750g', unit: 'kg', baseQuantity: 0.75, validUntil: '2025-04-18' },
  // Speisekammer
  { offerId: generateOfferId(), productId: 'prod_ketchup_lidl', marketId: markets.lidl.id, name: 'Tomaten Ketchup', category: categories.speisekammer, brand: 'Kania', imageUrl: 'https://placehold.co/400x400/red/black.png', originalPrice: 1.39, discountPrice: 0.99, quantity: '500ml', unit: 'L', baseQuantity: 0.5, validUntil: '2025-12-01' },
  // Gefrorenes
  { offerId: generateOfferId(), productId: 'prod_spinach_lidl', marketId: markets.lidl.id, name: 'Rahmspinat', category: categories.gefrorenes, brand: 'Freshona', imageUrl: 'https://placehold.co/400x400/green/grey.png', originalPrice: 1.29, discountPrice: 0.99, quantity: '500g', unit: 'kg', baseQuantity: 0.5, validUntil: '2026-02-15' },
  // Getränke
  { offerId: generateOfferId(), productId: 'prod_cola_zero_lidl', marketId: markets.lidl.id, name: 'Freeway Cola Zero', category: categories.beverages, brand: 'Freeway', imageUrl: 'https://placehold.co/400x400/black/white.png', originalPrice: 0.59, discountPrice: 0.39, quantity: '1.5L', unit: 'L', baseQuantity: 1.5, validUntil: '2025-08-30' },
  // Haushalt
   { offerId: generateOfferId(), productId: 'prod_spuelmittel_lidl', marketId: markets.lidl.id, name: 'Spülmittel Konzentrat', category: categories.haushalt, brand: 'W5', imageUrl: 'https://placehold.co/400x400/lime/white.png', originalPrice: 0.99, discountPrice: 0.79, quantity: '500ml', unit: 'L', baseQuantity: 0.5, validUntil: '2025-07-01' },
  // Snacks
  { offerId: generateOfferId(), productId: 'prod_schokolade_lidl', marketId: markets.lidl.id, name: 'Alpenmilch Schokolade', category: categories.snacks, brand: 'Fin Carré', imageUrl: 'https://placehold.co/400x400/brown/purple.png', originalPrice: 0.89, discountPrice: 0.69, quantity: '100g', unit: 'kg', baseQuantity: 0.1, validUntil: '2025-09-10' },
   // ... Add ~10-15 more diverse Lidl items ...


  // === REWE ===
  // Pflanzenkost
  { offerId: generateOfferId(), productId: 'prod_apples_gala_rewe', marketId: markets.rewe.id, name: 'Äpfel Royal Gala', category: categories.pflanzenkost, brand: 'Rewe Beste Wahl', imageUrl: 'https://placehold.co/400x400/red/white.png', originalPrice: 2.49, discountPrice: 1.79, quantity: '1kg', unit: 'kg', baseQuantity: 1, validUntil: '2025-04-15' },
  { offerId: generateOfferId(), productId: 'prod_bio_zucchini_rewe', marketId: markets.rewe.id, name: 'Bio Zucchini', category: categories.pflanzenkost, brand: 'Rewe Bio', imageUrl: 'https://placehold.co/400x400/darkgreen/lightgreen.png', originalPrice: 1.99, discountPrice: 1.49, quantity: '500g', unit: 'kg', baseQuantity: 0.5, validUntil: '2025-04-16' },
  // Molke-Eier
  { offerId: generateOfferId(), productId: 'prod_quark_rewe', marketId: markets.rewe.id, name: 'Speisequark Magerstufe', category: categories.molkeEier, brand: 'ja!', imageUrl: 'https://placehold.co/400x400/white/red.png', originalPrice: 0.99, discountPrice: 0.79, quantity: '500g', unit: 'kg', baseQuantity: 0.5, validUntil: '2025-04-20' },
  // Getränke
  { offerId: generateOfferId(), productId: 'prod_coke_kasten_rewe', marketId: markets.rewe.id, name: 'Coca-Cola Kasten 12x1L', category: categories.beverages, brand: 'Coca-Cola', imageUrl: 'https://placehold.co/400x400/darkred/white.png', originalPrice: 12.99, discountPrice: 9.99, quantity: '12 x 1L', unit: 'L', baseQuantity: 12, validUntil: '2025-04-18' },
  { offerId: generateOfferId(), productId: 'prod_apfelschorle_rewe', marketId: markets.rewe.id, name: 'Apfelschorle', category: categories.beverages, brand: 'Rewe Beste Wahl', imageUrl: 'https://placehold.co/400x400/yellowgreen/white.png', originalPrice: 0.89, discountPrice: 0.69, quantity: '1.5L', unit: 'L', baseQuantity: 1.5, validUntil: '2025-07-22' },
   // ... Add ~10-15 more diverse Rewe items ...


  // === EDEKA ===
  // Pflanzenkost
  { offerId: generateOfferId(), productId: 'prod_tomatoes_cherry_edeka', marketId: markets.edeka.id, name: 'Cherrytomaten', category: categories.pflanzenkost, brand: 'Edeka Bio', imageUrl: 'https://placehold.co/400x400/tomato/white.png', originalPrice: 2.99, discountPrice: 1.99, quantity: '250g', unit: 'kg', baseQuantity: 0.25, validUntil: '2025-04-14' },
  // Molke-Eier
  { offerId: generateOfferId(), productId: 'prod_kaese_edeka', marketId: markets.edeka.id, name: 'Edamer am Stück', category: categories.molkeEier, brand: 'Gut & Günstig', imageUrl: 'https://placehold.co/400x400/yellow/red.png', originalPrice: 2.89, discountPrice: 2.29, quantity: '400g', unit: 'kg', baseQuantity: 0.4, validUntil: '2025-05-05' },
  // Speisekammer
  { offerId: generateOfferId(), productId: 'prod_nutella_450_edeka', marketId: markets.edeka.id, name: 'Nutella Nuss-Nugat-Creme', category: categories.speisekammer, brand: 'Nutella', imageUrl: 'https://placehold.co/400x400/brown/white.png', originalPrice: 3.29, discountPrice: 2.79, quantity: '450g', unit: 'kg', baseQuantity: 0.45, validUntil: '2025-04-20' },
  // Snacks
  { offerId: generateOfferId(), productId: 'prod_gummibaeren_edeka', marketId: markets.edeka.id, name: 'Gummibärchen', category: categories.snacks, brand: 'Haribo Goldbären', imageUrl: 'https://placehold.co/400x400/gold/red.png', originalPrice: 1.19, discountPrice: 0.99, quantity: '200g', unit: 'kg', baseQuantity: 0.2, validUntil: '2025-11-11' },
   // ... Add ~10-15 more diverse Edeka items ...


  // === PENNY ===
  // Pflanzenkost
  { offerId: generateOfferId(), productId: 'prod_potatoes_penny', marketId: markets.penny.id, name: 'Speisekartoffeln, festkochend', category: categories.pflanzenkost, brand: 'Penny Marktliebe', imageUrl: 'https://placehold.co/400x400/tan/black.png', originalPrice: 2.79, discountPrice: 1.49, quantity: '2.5kg', unit: 'kg', baseQuantity: 2.5, validUntil: '2025-04-18' },
  // Getränke
  { offerId: generateOfferId(), productId: 'prod_water_sparkling_6x1_5_penny', marketId: markets.penny.id, name: 'Mineralwasser Spritzig 6x1,5L', category: categories.beverages, brand: 'Penny Ready', imageUrl: 'https://placehold.co/400x400/blue/white.png', originalPrice: 1.99, discountPrice: 1.39, quantity: '6 x 1.5L', unit: 'L', baseQuantity: 9, validUntil: '2025-04-16' },
  // Haushalt
   { offerId: generateOfferId(), productId: 'prod_waschmittel_penny', marketId: markets.penny.id, name: 'Color Waschmittel Pulver', category: categories.haushalt, brand: 'Penny', imageUrl: 'https://placehold.co/400x400/pink/blue.png', originalPrice: 3.49, discountPrice: 2.79, quantity: '1.35kg', unit: 'kg', baseQuantity: 1.35, validUntil: '2025-06-01' },
   // ... Add ~10-15 more diverse Penny items ...


  // === NETTO ===
  // Molke-Eier
  { offerId: generateOfferId(), productId: 'prod_butter_netto', marketId: markets.netto.id, name: 'Deutsche Markenbutter', category: categories.molkeEier, brand: 'Gutes Land', imageUrl: 'https://placehold.co/400x400/lightyellow/black.png', originalPrice: 2.29, discountPrice: 1.59, quantity: '250g', unit: 'kg', baseQuantity: 0.25, validUntil: '2025-04-14' },
  // Fleisch & Wurst
  { offerId: generateOfferId(), productId: 'prod_wiener_netto', marketId: markets.netto.id, name: 'Wiener Würstchen', category: categories.fleischWurst, brand: 'Gut Ponholz', imageUrl: 'https://placehold.co/400x400/lightbrown/darkred.png', originalPrice: 4.49, discountPrice: 3.49, quantity: '400g', unit: 'kg', baseQuantity: 0.4, validUntil: '2025-04-22' },
   // ... Add ~10-15 more diverse Netto items ...


  // === KAUFLAND ===
  // Molke-Eier
  { offerId: generateOfferId(), productId: 'prod_eggs_bio_10_kaufland', marketId: markets.kaufland.id, name: 'Bio Eier 10 Stück', category: categories.molkeEier, brand: 'K-Bio', imageUrl: 'https://placehold.co/400x400/beige/black.png', originalPrice: 3.49, discountPrice: 2.79, quantity: '10 Stück', unit: 'Stück', baseQuantity: 10, validUntil: '2025-04-16' },
  // Speisekammer
  { offerId: generateOfferId(), productId: 'prod_pasta_barilla_500_kaufland', marketId: markets.kaufland.id, name: 'Barilla Pasta versch. Sorten', category: categories.speisekammer, brand: 'Barilla', imageUrl: 'https://placehold.co/400x400/gold/darkblue.png', originalPrice: 1.79, discountPrice: 0.99, quantity: '500g', unit: 'kg', baseQuantity: 0.5, validUntil: '2025-04-19' },
   // ... Add ~10-15 more diverse Kaufland items ...

  // ... Add MANY more products and offers for different markets and categories
  // (Meat, Frozen, Snacks, Household etc.) following this structure
];

// Add marketName to each offer for easier lookup later
export const allOffersWithMarketName = allMockOffers.map(offer => ({
    ...offer,
    marketName: markets[offer.marketId]?.name || offer.marketId, // Add readable market name
}));

// Function to get offers for a specific market (like the old API)
export function getOffersForMarket(marketId) {
  return allOffersWithMarketName.filter(offer => offer.marketId === marketId);
}

// Function to search offers across all markets
export function searchOffers(query) {
  const lowerCaseQuery = query.toLowerCase();
  return allOffersWithMarketName.filter(offer =>
    offer.name.toLowerCase().includes(lowerCaseQuery) ||
    (offer.brand && offer.brand.toLowerCase().includes(lowerCaseQuery)) ||
    offer.category.toLowerCase().includes(lowerCaseQuery)
  );
}


// Helper function to calculate unit price
// Tries to parse common quantity formats
export function calculateUnitPrice(price, quantityString) {
  if (typeof price !== 'number' || typeof quantityString !== 'string') {
    return null; // Invalid input
  }

  // Normalize string: remove spaces, use dot as decimal sep.
  const normalizedQuantity = quantityString.toLowerCase().replace(',', '.').replace(/\s+/g, '');

  let quantity = null;
  let unit = null;

  // Try common patterns (kg, g, l, ml, stück/stk)
  const kgMatch = normalizedQuantity.match(/^([\d.]+)\s*kg$/);
  const gMatch = normalizedQuantity.match(/^([\d.]+)\s*g$/);
  const lMatch = normalizedQuantity.match(/^([\d.]+)\s*l$/);
  const mlMatch = normalizedQuantity.match(/^([\d.]+)\s*ml$/);
  const stueckMatch = normalizedQuantity.match(/^([\d]+)\s*(?:stück|stk)$/);
  const packMatch = normalizedQuantity.match(/^([\d]+)x([\d.]+)\s*(kg|g|l|ml|stück|stk)$/); // e.g., 6x1.5l

   if (packMatch) {
      const count = parseFloat(packMatch[1]);
      const amount = parseFloat(packMatch[2]);
      const unitStr = packMatch[3];
      let baseAmount = amount;

      if (unitStr === 'g') {
          unit = 'kg';
          baseAmount = amount / 1000;
      } else if (unitStr === 'ml') {
          unit = 'L';
          baseAmount = amount / 1000;
       } else if (unitStr === 'stück' || unitStr === 'stk') {
           unit = 'Stück';
           baseAmount = amount; // Assume amount is 1 if not specified? Better to be explicit. Let's keep baseAmount=amount here.
       } else {
           unit = unitStr.toUpperCase(); // kg or L
       }
       quantity = count * baseAmount;

   } else if (kgMatch) {
    quantity = parseFloat(kgMatch[1]);
    unit = 'kg';
  } else if (gMatch) {
    quantity = parseFloat(gMatch[1]) / 1000; // Convert g to kg
    unit = 'kg';
  } else if (lMatch) {
    quantity = parseFloat(lMatch[1]);
    unit = 'L';
  } else if (mlMatch) {
    quantity = parseFloat(mlMatch[1]) / 1000; // Convert ml to L
    unit = 'L';
  } else if (stueckMatch) {
    quantity = parseInt(stueckMatch[1], 10);
    unit = 'Stück'; // Unit price per piece
  }

  if (quantity && quantity > 0 && unit) {
    return {
        value: price / quantity,
        unit: unit
    };
  }

  return null; // Could not parse or invalid quantity
}

// Add unit price calculation to all offers
export const allOffersEnriched = allOffersWithMarketName.map(offer => {
    const unitPriceInfo = calculateUnitPrice(offer.discountPrice, offer.quantity);
    return {
        ...offer,
        unitPrice: unitPriceInfo ? unitPriceInfo.value : null,
        unitPriceUnitLabel: unitPriceInfo ? `/ ${unitPriceInfo.unit}` : ''
    };
});

// Overwrite previous exports to use the enriched data
export function getOffersForMarketEnriched(marketId) {
  return allOffersEnriched.filter(offer => offer.marketId === marketId);
}

export function searchOffersEnriched(query) {
  const lowerCaseQuery = query.toLowerCase();
  return allOffersEnriched.filter(offer =>
    offer.name.toLowerCase().includes(lowerCaseQuery) ||
    (offer.brand && offer.brand.toLowerCase().includes(lowerCaseQuery)) ||
    offer.category.toLowerCase().includes(lowerCaseQuery)
  );
}