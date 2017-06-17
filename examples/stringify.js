import stringifyObject from 'stringify-object'

export default function stringify(code) {
  return stringifyObject(code, { indent: '  ' })
}
