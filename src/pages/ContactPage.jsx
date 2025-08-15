import React from 'react';
import { Mail } from 'lucide-react';

const ContactPage = () => {
  const contactEmail = 'hello@tastetribe.example.com';

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-500">
          Have questions or feedback? We&apos;d love to hear from you.
        </p>
        <div className="mt-8">
          <div className="inline-flex items-center p-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary">
            <Mail className="-ml-1 mr-3 h-5 w-5" />
            <a href={`mailto:${contactEmail}`} className="text-white">
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
