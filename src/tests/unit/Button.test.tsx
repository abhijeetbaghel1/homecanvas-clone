import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from '@/components/common/Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Button variant="secondary">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveClass('bg-accent-sand');
  });
});

