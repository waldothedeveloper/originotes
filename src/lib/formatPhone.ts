export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '')
  const limitedDigits = digits.slice(0, 10)

  if (limitedDigits.length <= 3) {
    return `(${limitedDigits}`
  } else if (limitedDigits.length <= 6) {
    return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`
  } else {
    return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`
  }
}
