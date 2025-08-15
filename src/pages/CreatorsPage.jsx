import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const CreatorsPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-primary rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to build your tribe?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Share your passion, connect with real fans, and earn money on your own terms. TasteTribe gives you the tools to create, publish, and monetize your unique expertise.
              </p>
              <div className="mt-8">
                <Link to="/signup">
                  <Button variant="secondary">
                    Get Started for Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsPage;
