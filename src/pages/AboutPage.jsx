import React from 'react';

const AboutPage = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-primary font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Platform for Authentic Connection
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            TasteTribe was born from a simple idea: the best experiences are shared by real people with real passion. We wanted to create a space where creators could guide their fans through the things they love, without algorithms getting in the way.
          </p>
        </div>

        <div className="mt-10">
          <div className="prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              In a world of endless, generic recommendations, we believe in the power of human curation. Whether it&apos;s a hidden coffee shop, a perfect walking tour, a local art gallery, or an indie music playlist, the most memorable discoveries come from people who care.
            </p>
            <p>
              Our mission is to empower these creators with simple, beautiful tools to share their knowledge and build a real community—their tribe. We handle the technology so you can focus on what you do best: creating.
            </p>
            <p>
              We are also committed to a sustainable and fair model. By allowing users to bring their own API keys for advanced features, we keep the platform free for owners to operate and ensure that creators have access to powerful tools without passing on exorbitant costs.
            </p>
            <p>
              Welcome to TasteTribe. We can&apos;t wait to see what you share.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
