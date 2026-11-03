export type ButtonVariant = 'red' | 'blue' | 'outline' | 'light' | 'outlineLight';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[background-color,color,border-color,transform] duration-150 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<ButtonVariant, string> = {
  red: 'bg-charity text-white hover:bg-charity-dark',
  blue: 'bg-brand text-white hover:bg-brand-dark',
  outline: 'border border-brand/30 text-brand hover:border-brand hover:bg-brand-light',
  light: 'bg-white text-navy hover:bg-soft',
  outlineLight: 'border border-white/50 text-white hover:border-white hover:bg-white/10'
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-[15px]'
};

export function buttonClasses(variant: ButtonVariant = 'blue', size: ButtonSize = 'md', extra = ''): string {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}

export const inputClass =
'block w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 transition-[border-color,box-shadow] duration-150 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10 aria-[invalid=true]:border-charity';

export const containerClass = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8';