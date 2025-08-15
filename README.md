# TasteTribe

**TasteTribe** is a human-curated, AI-assisted social platform where creators publish micro-guided experiences, called "tribes," for their fans. This repository contains the full source code for the TasteTribe progressive web app (PWA), built to be deployed and run at zero cost to the owner.

---

## ✨ Key Features

*   **Zero-Cost Architecture:** Built with a serverless approach using static hosting and free-tier backends (Firebase).
*   **BYO-Keys for AI:** All AI-powered features run client-side, using the user's own API keys. No inference costs for the owner.
*   **Creator Monetization:** Creators can offer free or paid tribes using Stripe Connect, with platform fees covering all transaction costs.
*   **Modern Tech Stack:** Built with React, Vite, and TailwindCSS for a fast, premium-quality user experience.
*   **PWA Enabled:** Fully installable on mobile and desktop devices with basic offline capabilities.

## 🚀 Tech Stack

*   **Frontend:** React (Vite), TailwindCSS
*   **Backend:** Firebase (Firestore, Auth, Storage, FCM)
*   **Payments:** Stripe Connect
*   **Maps:** MapLibre GL
*   **State Management:** Zustand
*   **Internationalization:** i18next

## ⚙️ Local Development Setup

Follow these steps to get the project running on your local machine.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd tastetribe
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project by copying the example file:

```bash
cp .env.example .env
```

Now, you need to populate this file with your own keys. See the dedicated guides for instructions on how to get these:
*   **Firebase:** See [FIREBASE.md](./FIREBASE.md)
*   **Stripe:** See [STRIPE.md](./STRIPE.md)

### 4. Set Up Firebase Service Account

To seed your database with sample data, you need a Firebase Admin service account key.

1.  Follow the instructions in `FIREBASE.md` to download your `serviceAccountKey.json` file.
2.  Place this file in the **root** of the project directory.
3.  **Important:** The `.gitignore` file is already configured to ignore `serviceAccountKey.json`, so you won't accidentally commit it.

### 5. Seed the Database

Run the following command to populate your Firestore database with sample tribes. This is necessary to see content on the homepage.

```bash
npm run db:seed
```

### 6. Run the Development Server

```bash
npm run dev
```

The application should now be running on `http://localhost:5173`.

## ☁️ Deployment

This application is a static site and can be deployed to any static hosting provider. Vercel and Netlify are recommended for their ease of use and generous free tiers.

### Deploying to Vercel/Netlify

1.  Push your code to a GitHub/GitLab/Bitbucket repository.
2.  Create a new project on Vercel or Netlify and connect it to your repository.
3.  Configure the build settings:
    *   **Build Command:** `npm run build` or `vite build`
    *   **Output Directory:** `dist`
4.  Add your environment variables (the same ones from your `.env` file) to the project settings in Vercel/Netlify.
5.  Deploy!

---

This project was built by Jules, your senior product engineer. For questions, refer to the detailed documentation files.