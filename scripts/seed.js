import admin from 'firebase-admin';
import { createRequire } from 'module';

// --- Configuration ---
// IMPORTANT: You must download your own service account key from the Firebase console
// and save it as `serviceAccountKey.json` in the root of the project.
// This file should NOT be committed to git. Add it to your .gitignore.
const require = createRequire(import.meta.url);
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// --- Sample Data ---
const tribesData = [
  {
    title: "Montréal's Hidden Coffee Shops",
    summary: "A guided tour of the best independent coffee shops in Le Plateau.",
    city: "Montréal",
    tags: ["coffee", "food", "local"],
    cover: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2070&auto=format&fit=crop",
    priceType: "free",
    price: 0,
    stripeProductId: null,
    ownerId: "user_placeholder_1", // Replace with a real user ID from your auth
    status: "published",
  },
  {
    title: "Toronto's West End Art Walk",
    summary: "Discover street art, galleries, and murals in Toronto's vibrant west end.",
    city: "Toronto",
    tags: ["art", "culture", "walking"],
    cover: "https://images.unsplash.com/photo-1603323423334-a881de2a57b3?q=80&w=2070&auto=format&fit=crop",
    priceType: "free",
    price: 0,
    stripeProductId: null,
    ownerId: "user_placeholder_2",
    status: "published",
  },
  {
    title: "Vancouver's Seaside Bike Route",
    summary: "A scenic bike ride from Kitsilano Beach to Stanley Park with the best views.",
    city: "Vancouver",
    tags: ["outdoors", "active", "scenic"],
    cover: "https://images.unsplash.com/photo-1593739742329-3a849747a8b6?q=80&w=1974&auto=format&fit=crop",
    priceType: "paid",
    price: 10,
    stripeProductId: "prod_placeholder_1",
    ownerId: "user_placeholder_1",
    status: "published",
  },
   {
    title: "A Foodie's Guide to Kensington Market",
    summary: "Taste the world in one of Toronto's most diverse and eclectic neighborhoods.",
    city: "Toronto",
    tags: ["food", "market", "culture"],
    cover: "https://images.unsplash.com/photo-1543083477-4f785aeafb96?q=80&w=1974&auto=format&fit=crop",
    priceType: "free",
    price: 0,
    stripeProductId: null,
    ownerId: "user_placeholder_2",
    status: "published",
  }
];

// --- Seeding Function ---
async function seedDatabase() {
  console.log('Starting to seed database...');
  const tribesCollection = db.collection('tribes');

  // Clear existing tribes
  const existingTribes = await tribesCollection.get();
  const batch = db.batch();
  existingTribes.docs.forEach(doc => {
    batch.delete(doc.ref);
  });
  await batch.commit();
  console.log('Cleared existing tribes.');

  // Add new tribes
  for (const tribe of tribesData) {
    const docRef = tribesCollection.doc(); // Auto-generate ID
    await docRef.set({
      ...tribe,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log(`Added tribe: ${tribe.title}`);
  }

  console.log('Seeding complete!');
}

seedDatabase().catch(console.error);
