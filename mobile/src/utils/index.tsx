export function convertFirstToUpperCase(text: string) {
  const result = text[0].toUpperCase() + text.substring(1)

  return result
}

export function limitDescription(description: string) {
  return description.substring(0, 100)
}

export function apenasNumeros(string: string) 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}