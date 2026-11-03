import React, { ReactNode } from 'react';
import Link from 'next/link';
import { buttonClasses, ButtonSize, ButtonVariant } from '@/utils/styles';

type ButtonLinkProps = {
  to: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ to, variant = 'blue', size = 'md', className = '', children }: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  if (/^(https?:|tel:|mailto:)/.test(to)) {
    return (
      <a href={to} className={classes}>
        {children}
      </a>);

  }
  return (
    <Link href={to} className={classes}>
      {children}
    </Link>);

}