export function convertFirstToUpperCase(text: string) {
  const result = text[0].toUpperCase() + text.substring(1)

  return result
}

export function limitDescription(description: string) {
  return description.substring(0, 100)
}
