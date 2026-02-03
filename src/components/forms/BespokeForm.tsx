'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BespokeRequestSchema,
  type BespokeRequestFormData,
} from '@/lib/validation';
import Button from '@/components/common/Button';

export default function BespokeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BespokeRequestFormData>({
    resolver: zodResolver(BespokeRequestSchema),
  });

  const onSubmit = async (data: BespokeRequestFormData) => {
    try {
      const response = await fetch('/api/bespoke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        alert('Thank you! We will get back to you soon.');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-walnut"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-walnut"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone *
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-walnut"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="room" className="block text-sm font-medium mb-2">
          Room Type *
        </label>
        <input
          id="room"
          type="text"
          {...register('room')}
          placeholder="e.g., Living Room, Bedroom"
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-walnut"
        />
        {errors.room && (
          <p className="mt-1 text-sm text-red-600">{errors.room.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="dimensions" className="block text-sm font-medium mb-2">
          Dimensions (optional)
        </label>
        <input
          id="dimensions"
          type="text"
          {...register('dimensions')}
          placeholder="e.g., 200cm x 100cm x 80cm"
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-walnut"
        />
      </div>

      <div>
        <label htmlFor="materials" className="block text-sm font-medium mb-2">
          Preferred Materials (optional)
        </label>
        <input
          id="materials"
          type="text"
          {...register('materials')}
          placeholder="e.g., Teak Wood, Walnut"
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-walnut"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-walnut"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </Button>
    </form>
  );
}

