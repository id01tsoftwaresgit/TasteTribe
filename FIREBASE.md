# Firebase Setup Guide

This guide provides step-by-step instructions for setting up the necessary Firebase services for TasteTribe. All of these services have a free tier (the "Spark" plan) that is sufficient for getting started.

## 1. Create a Firebase Project

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Click **Add project**.
3.  Enter a name for your project (e.g., "TasteTribe").
4.  You can choose to enable or disable Google Analytics. It's not required for the core app to function but is recommended for tracking usage.
5.  Click **Create project**.

## 2. Get Your Web App Configuration

These are the keys you will need for your `.env` file.

1.  In your new project's console, click the **Web** icon ( `</>` ) to start the setup process for a web app.
2.  Enter an app nickname (e.g., "TasteTribe Web").
3.  You do **not** need to set up Firebase Hosting at this stage. You can deploy the app to Vercel/Netlify instead.
4.  Click **Register app**.
5.  Firebase will display your web app configuration. It will look something like this:
    ```javascript
    const firebaseConfig = {
      apiKey: "AIzaSy...",
      authDomain: "your-project-id.firebaseapp.com",
      projectId: "your-project-id",
      storageBucket: "your-project-id.appspot.com",
      messagingSenderId: "1234567890",
      appId: "1:1234567890:web:..."
    };
    ```
6.  Copy these values into your `.env` file in the root of this project.

    ```dotenv
    VITE_FIREBASE_API_KEY="AIzaSy..."
    VITE_FIREBASE_AUTH_DOMAIN="your-project-id.firebaseapp.com"
    VITE_FIREBASE_PROJECT_ID="your-project-id"
    VITE_FIREBASE_STORAGE_BUCKET="your-project-id.appspot.com"
    VITE_FIREBASE_MESSAGING_SENDER_ID="1234567890"
    VITE_FIREBASE_APP_ID="1:1234567890:web:..."
    ```

## 3. Set Up Firestore Database

1.  From the left-hand menu in the Firebase console, go to **Build > Firestore Database**.
2.  Click **Create database**.
3.  Choose **Start in production mode**. This is important for security. We will rely on our own security rules.
4.  Choose a location for your database (e.g., `us-central`). This cannot be changed later.
5.  Click **Enable**.

## 4. Set Up Firebase Storage

1.  From the left-hand menu, go to **Build > Storage**.
2.  Click **Get started**.
3.  Follow the prompts to enable Cloud Storage. Use the default security rules for now.

## 5. Set Up Firebase Authentication

1.  From the left-hand menu, go to **Build > Authentication**.
2.  Click **Get started**.
3.  On the **Sign-in method** tab, enable the providers you want to use. **Email/Password** is a good one to start with.

## 6. Configure Security Rules

1.  Go back to the **Firestore Database** page.
2.  Click on the **Rules** tab.
3.  Copy the entire content of the `firestore.rules` file from this repository.
4.  Paste it into the rules editor in the Firebase console, completely replacing the existing content.
5.  Click **Publish**.

## 7. Generate a Service Account Key (for Seeding)

This key allows the `db:seed` script to run with admin privileges to populate your database.

1.  In the Firebase console, click the **Gear icon** next to **Project Overview** in the top left.
2.  Select **Project settings**.
3.  Go to the **Service accounts** tab.
4.  Click the **Generate new private key** button.
5.  A JSON file will be downloaded to your computer.
6.  **Rename this file to `serviceAccountKey.json`**.
7.  Place this file in the **root directory** of this project.
8.  **IMPORTANT:** Never commit this file to Git. The `.gitignore` file is already set up to ignore it, but be careful.

Your Firebase project is now fully configured to work with TasteTribe! You can now proceed with running the database seed script as described in the main `README.md`.
