import React from 'react';
import { CheckCircle } from 'lucide-react';

const FeatureItem = ({ title, children }) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <CheckCircle className="h-6 w-6 text-green-500" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{children}</p>
    </div>
  </div>
);

const FeaturesPage = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Share Your Passion
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            TasteTribe provides the tools for creators to build beautiful guides and for fans to discover them.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <FeatureItem title="Zero-Cost Platform">
              Host your content on a platform designed to be free for the owner. All variable costs, like AI usage and map views, are covered by user-provided API keys.
            </FeatureItem>

            <FeatureItem title="Bring-Your-Own AI Keys">
              Use your own keys for OpenAI, Anthropic, Gemini, and more. All AI assistance runs in your browser, ensuring your keys and data remain private.
            </FeatureItem>

            <FeatureItem title="Simple Monetization">
              Connect your Stripe account in minutes. Offer free content, one-time purchases, or recurring subscriptions. We use Stripe&apos;s hosted pages for maximum security.
            </FeatureItem>

            <FeatureItem title="Beautiful Guided Experiences">
              Create &quot;tribes&quot; with rich text, images, map points, and checklists. Guide your fans through your favorite places and passions.
            </FeatureItem>

            <FeatureItem title="AI-Powered Creator Studio">
              Enhance your workflow with AI Assist. Polish your writing, generate tags, build outlines, and optimize your listings without leaving the editor.
            </FeatureItem>

            <FeatureItem title="PWA & Offline Ready">
              Install TasteTribe on your phone or desktop. Browse content and draft new posts even when you&apos;re offline.
            </FeatureItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
