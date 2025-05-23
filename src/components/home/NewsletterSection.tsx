
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    // Mock submission - in a real app, this would call an API
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter."
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8">
            Join our community to receive the latest updates, special offers, and exclusive content.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-gray-800 flex-grow"
            />
            <Button type="submit" variant="secondary" className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
