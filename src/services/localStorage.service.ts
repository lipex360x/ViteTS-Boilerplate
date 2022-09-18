const localStorage = window.localStorage

export function setItem(key: string, item: string | object) {
  const value = typeof item === 'object' ? JSON.stringify(item) : item
  return localStorage.setItem(key, value)
}

export function getItem(key: string) {
  const value = localStorage.getItem(key)

  if (!value) {
    return
  }

  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

export function removeItem(key: string) {
  return localStorage.removeItem(key)
}
