import { db } from './client';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  addDoc,
  serverTimestamp
} from 'firebase/firestore';

const tribesCollection = collection(db, 'tribes');

/**
 * Fetches a list of published tribes.
 * @param {object} filters - Optional filters (e.g., { city: 'Paris', tags: ['food'] })
 * @returns {Promise<Array>} A list of tribe documents.
 */
export const getTribes = async (filters = {}) => {
  let q = query(tribesCollection, where('status', '==', 'published'));

  if (filters.city) {
    q = query(q, where('city', '==', filters.city));
  }
  if (filters.category) {
    q = query(q, where('tags', 'array-contains', filters.category));
  }
  // Note: Firestore does not support multiple array-contains clauses on different fields.
  // More complex filtering/searching would require a search service like Algolia or client-side filtering.

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

/**
 * Fetches a single tribe by its ID.
 * @param {string} id - The ID of the tribe to fetch.
 * @returns {Promise<object|null>} The tribe document or null if not found.
 */
export const getTribeById = async (id) => {
  const tribeDoc = doc(db, 'tribes', id);
  const docSnap = await getDoc(tribeDoc);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};

/**
 * Fetches a user's public profile.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<object|null>} The user profile document.
 */
export const getUserProfile = async (userId) => {
  const userDoc = doc(db, 'users', userId);
  const docSnap = await getDoc(userDoc);

  if (docSnap.exists()) {
    // Return only public data
    const publicProfile = docSnap.data();
    delete publicProfile.email; // Don't expose email address
    return { id: docSnap.id, ...publicProfile };
  } else {
    return null;
  }
};

/**
 * Creates a new tribe document.
 * @param {object} tribeData - The data for the new tribe.
 * @param {string} ownerId - The UID of the user creating the tribe.
 * @returns {Promise<string>} The ID of the newly created tribe.
 */
export const createTribe = async (tribeData, ownerId) => {
  const newTribe = {
    ...tribeData,
    ownerId,
    status: 'draft', // Always start as a draft
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  const docRef = await addDoc(tribesCollection, newTribe);
  return docRef.id;
};

/**
 * Fetches all tribes created by a specific owner.
 * @param {string} ownerId - The UID of the owner.
 * @returns {Promise<Array>} A list of tribe documents.
 */
export const getTribesByOwner = async (ownerId) => {
  const q = query(tribesCollection, where('ownerId', '==', ownerId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
