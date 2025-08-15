import React, { useState } from 'react';
import { useData } from '../../providers/DataProvider';
import { useAuth } from '../../providers/AuthProvider';
import Input from '../ui/Input';
import Button from '../ui/Button';
import toast from 'react-hot-toast';
import AIAssistButton from './AIAssistButton';

const CreateTribeForm = ({ onTribeCreated }) => {
  const { createTribe } = useData();
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    city: '',
    tags: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      toast.error('You must be logged in to create a tribe.');
      return;
    }
    if (!formData.title.trim() || !formData.summary.trim()) {
      toast.error('Title and summary are required.');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Creating your tribe...');

    try {
      const tribeData = {
        ...formData,
        // Convert comma-separated string to array of strings
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      };

      const newTribeId = await createTribe(tribeData, currentUser.uid);

      toast.dismiss(loadingToast);
      toast.success('Tribe created successfully as a draft!');

      // Reset form and notify parent component
      setFormData({ title: '', summary: '', city: '', tags: '' });
      if (onTribeCreated) {
        onTribeCreated(newTribeId);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error('Failed to create tribe. Please try again.');
      console.error("Error creating tribe: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white border border-ui-border rounded-lg">
      <h2 className="text-xl font-bold">Create a New Tribe</h2>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <Input id="title" name="title" value={formData.title} onChange={handleChange} placeholder="e.g., Best Pizza in Brooklyn" required />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
          <AIAssistButton
            prompt={`Based on the title "${formData.title}", write a short, engaging summary for a micro-guide or tour. The summary should be one or two sentences long.`}
            onComplete={(generatedSummary) => setFormData(prev => ({ ...prev, summary: generatedSummary }))}
            helpText="Generate a summary based on your title"
          />
        </div>
        <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange} rows="3" className="block w-full px-3 py-2 border border-ui-border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" placeholder="A short, catchy description of your tribe." required></textarea>
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
        <Input id="city" name="city" value={formData.city} onChange={handleChange} placeholder="e.g., New York" />
      </div>
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
        <Input id="tags" name="tags" value={formData.tags} onChange={handleChange} placeholder="e.g., food, pizza, local" />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Draft'}
        </Button>
      </div>
    </form>
  );
};

export default CreateTribeForm;
