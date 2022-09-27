export function convertFirstToUpperCase(text: string) {
  const result = text[0].toUpperCase() + text.substring(1)

  return result
}

export function limitDescription(description: string) {
  if (window.innerWidth >= 2000) {
    return description.substring(0, 400) + '...'
  } else if (window.innerWidth <= 1024) {
    return description.substring(0, 50) + '...'
  } else {
    return description.substring(0, 160) + '...'
  }
}

export function limitDescriptionCustom(description: string, value: number) {
  return description.substring(0, value)
}


export async function apenasNumeros(string: string) {
  return await parseInt(string.replace(/\D/g, ''));
}