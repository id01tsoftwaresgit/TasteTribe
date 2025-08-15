# Stripe Connect Setup Guide

This guide explains how to set up Stripe Connect to allow creators to monetize their tribes. We use **Stripe Connect Standard** accounts, which is the simplest integration. It lets you onboard creators to Stripe without having to build, host, and maintain your own onboarding and dashboard UIs.

With this model:
*   Your creators are Stripe customers. They have their own full Stripe dashboard.
*   You (the platform) do not take on the liability for their payments.
*   You can set a platform fee to be taken on each transaction.

## 1. Set Up Your Stripe Account

1.  If you don't have one, create a [Stripe account](https://dashboard.stripe.com/register).
2.  Activate your account by filling out your business information.

## 2. Enable Stripe Connect

1.  In your Stripe Dashboard, go to **Settings > Connect > Settings**.
2.  Enable Stripe Connect by clicking the **Get Started** button.
3.  Choose the **Standard** integration type.
4.  Complete the required business information for your platform.

## 3. Configure Your Connect Branding

1.  Under **Settings > Connect > Branding**, customize the appearance of the onboarding flow that your creators will see. You can add your platform's name, logo, and brand colors.

## 4. Get Your API Keys

You only need your **Publishable Key** for this client-side application. Your secret key should never be exposed in the frontend code.

1.  In your Stripe Dashboard, go to the **Developers > API keys** section.
2.  You will see your **Publishable key**. It will start with `pk_live_...` or `pk_test_...` if you are in test mode.
3.  Copy this key.

## 5. Add the Key to Your Environment Variables

1.  Open the `.env` file in the root of this project.
2.  Paste your Stripe Publishable Key into the `VITE_STRIPE_PUBLISHABLE_KEY` variable.

    ```dotenv
    # For testing
    VITE_STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"

    # For production
    # VITE_STRIPE_PUBLISHABLE_KEY="pk_live_your_stripe_publishable_key"
    ```

## How It Works Without Webhooks

The traditional Stripe integration often requires webhooks to listen for events (like a completed payment or a new subscription). To remain "serverless" and avoid this complexity, this application uses a client-side polling approach:

*   **Onboarding:** When a creator wants to connect their account, the app redirects them to a Stripe-hosted onboarding page. When they are finished, Stripe redirects them back to our app. We can then check the status of their account on the client side.
*   **Subscription Status:** To check if a user has an active subscription to a paid tribe, the app can make a client-side request to the Stripe API. This is done in a limited, secure way. For the MVP, the simplest approach is to have the creator periodically refresh their status from their dashboard, which can update a flag in Firestore. The app's security rules then check this flag.

This approach is suitable for getting started but may be replaced with a more robust system using Firebase Cloud Functions as the application scales.

You are now ready to handle payments and monetization for your creators!
