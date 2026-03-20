import { useState } from 'react';
import { TESTIMONIALS } from '../utils/constants';

export const useTestimonials = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  return { current: TESTIMONIALS[index], next, prev };
};