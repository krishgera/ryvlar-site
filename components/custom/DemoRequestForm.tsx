'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { saveDemoRequest } from '@/lib/firebase';

export function DemoRequestForm() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firebase
      await saveDemoRequest({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message
      });
      
      // Also send email notification (optional)
      const mailtoLink = `mailto:support@ryvlar.com?subject=Demo Request from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0ACompany: ${encodeURIComponent(formData.company)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
      
      // Show success message
      toast.success("Request Sent", {
        description: "Our team will get back to you shortly to schedule your demo.",
      });
      
      // Reset form and close modal
      setFormData({ name: '', email: '', company: '', message: '' });
      setOpen(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Error", {
        description: "There was an error submitting your request. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <RainbowButton size={"sm"} className=" rounded-sm font-semibold text-xs w-full md:w-fit sm:text-base font-medium whitespace-nowrap">
          Get a Demo
        </RainbowButton>
      </DialogTrigger>
      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-[500px] bg-black border-white/20 mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-light tracking-tight">
            Request a Demo
          </DialogTitle>
          <p className="text-xs sm:text-sm text-white/60 pt-1 sm:pt-2">
            Fill out the form below and our team will get in touch to schedule a personalized demo.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
          <div className="space-y-1 sm:space-y-2">
            <Input
              id="name"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-10 sm:h-11 text-sm sm:text-base bg-black/50 border-white/20 text-white placeholder:text-white/40"
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Work Email"
              value={formData.email}
              onChange={handleChange}
              required
              inputMode="email"
              className="h-10 sm:h-11 text-sm sm:text-base bg-black/50 border-white/20 text-white placeholder:text-white/40"
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <Input
              id="company"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              required
              className="h-10 sm:h-11 text-sm sm:text-base bg-black/50 border-white/20 text-white placeholder:text-white/40"
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your security needs"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="text-sm sm:text-base bg-black/50 border-white/20 text-white placeholder:text-white/40 min-h-[100px]"
            />
          </div>
          <div className="pt-1 sm:pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-10 sm:h-11 text-sm sm:text-base bg-white text-black hover:bg-white/90 transition-colors duration-200"
            >
              {isSubmitting ? 'Sending...' : 'Request Demo'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
