export function formatToCurrency(value: string) {
  const numericValue = Number(value.replace(/\D/g, ''))

  if (!numericValue) return ''

  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue / 100)

  return formattedValue
}
