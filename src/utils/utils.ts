export function mapOneRangeToAnother(
  sourceNumber: number,
  fromA: number,
  fromB: number,
  toA: number,
  toB: number
) {
  const deltaA = fromB - fromA
  const deltaB = toB - toA
  const scale = deltaB / deltaA
  const negA = -1 * fromA
  const offset = negA * scale + toA
  const finalNumber = sourceNumber * scale + offset
  return Math.round(finalNumber)
}

export function parseCategoryString(text: string) {
  return text.toLowerCase().split(' ').join('-')
}