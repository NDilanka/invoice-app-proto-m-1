export type Line = { amount: number };

function minorUnitDigits(currency: string): number {
  return new Intl.NumberFormat('en', { style: 'currency', currency }).resolvedOptions().maximumFractionDigits ?? 2;
}

export function formatTotal(lines: Line[], currency: string): string {
  const digits = minorUnitDigits(currency);
  const scale = 10 ** digits;
  const minorTotal = lines.reduce((total, line) => total + Math.round(line.amount * scale), 0);
  return (minorTotal / scale).toFixed(digits);
}
