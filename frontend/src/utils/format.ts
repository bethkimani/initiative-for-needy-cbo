const kes = new Intl.NumberFormat('en-KE', {
  style: 'currency',
  currency: 'KES',
  maximumFractionDigits: 0
});

export function formatKES(amount: number): string {
  return kes.format(amount);
}

export function formatDate(iso: string): string {
  const monthOnly = /^(\d{4})-(\d{2})$/.exec(iso);
  if (monthOnly) {
    const [, year, month] = monthOnly;
    return new Date(Number(year), Number(month) - 1, 1).toLocaleDateString('en-GB', {
      month: 'long',
      year: 'numeric'
    });
  }

  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function dateParts(iso: string): {day: string;month: string;year: string;} {
  const d = new Date(`${iso}T00:00:00`);
  return {
    day: d.toLocaleDateString('en-GB', { day: '2-digit' }),
    month: d.toLocaleDateString('en-GB', { month: 'short' }),
    year: String(d.getFullYear())
  };
}