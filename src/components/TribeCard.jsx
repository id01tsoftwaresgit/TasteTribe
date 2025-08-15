import React from 'react';
import { Link } from 'react-router-dom';
import Card from './ui/Card';
import { User, MapPin } from 'lucide-react';

const TribeCard = ({ tribe }) => {
  // Use placeholder data if no tribe is provided
  const {
    id = '1',
    cover = 'https://via.placeholder.com/400x225/E0E7FF/4F46E5?text=TasteTribe',
    title = 'Hidden Gems of the City',
    summary = 'A curated list of the best spots only locals know about.',
    creatorName = 'Alex Doe',
    city = 'New York',
  } = tribe || {};

  return (
    <Link to={`/tribe/${id}`} className="block group">
      <Card className="h-full flex flex-col">
        <div className="aspect-w-16 aspect-h-9">
          <img src={cover} alt={title} className="object-cover w-full h-full" />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">{title}</h3>
          <p className="mt-1 text-sm text-gray-600 flex-grow">{summary}</p>
          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1.5" />
              <span>{creatorName}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1.5" />
              <span>{city}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default TribeCard;
