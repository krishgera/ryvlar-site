'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type FormData = {
  name: string;
  company: string;
  email: string;
  companyDescription: string;
  reason: string;
  other: string;
};

export function DemoRequestForm({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('company');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    companyDescription: '',
    reason: '',
    other: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      setIsSuccess(true);
    } catch (err) {
      setError('Failed to submit the form. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-black/90 backdrop-blur-sm p-8 rounded-xl border border-white/10 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-2xl font-light mb-2">Request Received!</h3>
          <p className="text-white/70 mb-6">
            Thank you for your interest in Ryvlar. Our team will get back to you shortly.
          </p>
          <Button onClick={onClose} className="px-8">
            Close
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 max-w-2xl w-full mx-4 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-light mb-2">Request a Demo</h3>
        <p className="text-white/70">Fill out the form below and our team will get in touch with you shortly.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
          defaultValue="company"
        >
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="company">Company Info</TabsTrigger>
            <TabsTrigger value="needs">Your Needs</TabsTrigger>
          </TabsList>

          <TabsContent value="company" className="space-y-4">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                  Name <span className="text-red-400">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 text-white placeholder-white/40"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">
                  Company <span className="text-red-400">*</span>
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 text-white placeholder-white/40"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                  Company Email <span className="text-red-400">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 text-white placeholder-white/40"
                  placeholder="your@company.com"
                />
              </div>

              <div>
                <label htmlFor="companyDescription" className="block text-sm font-medium text-white/80 mb-1">
                  What does your company do? <span className="text-red-400">*</span>
                </label>
                <Textarea
                  id="companyDescription"
                  name="companyDescription"
                  required
                  rows={3}
                  value={formData.companyDescription}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 text-white placeholder-white/40"
                  placeholder="Briefly describe your company"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <Button
                  type="button"
                  onClick={() => setActiveTab('needs')}
                  className="px-6"
                >
                  Next: Your Needs
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="needs" className="space-y-4">
            <div className="space-y-6">
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-white/80 mb-1">
                  Why are you looking for Ryvlar? <span className="text-red-400">*</span>
                </label>
                <Textarea
                  id="reason"
                  name="reason"
                  required
                  rows={3}
                  value={formData.reason}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 text-white placeholder-white/40"
                  placeholder="What challenges are you trying to solve?"
                />
              </div>

              <div>
                <label htmlFor="other" className="block text-sm font-medium text-white/80 mb-1">
                  Additional Information
                </label>
                <Textarea
                  id="other"
                  name="other"
                  rows={3}
                  value={formData.other}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 text-white placeholder-white/40"
                  placeholder="Any other details you'd like to share"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-between gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveTab('company')}
                  className="w-full sm:w-auto"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {error && (
          <div className="mt-4 p-3 bg-red-500/20 text-red-300 text-sm rounded-md">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
