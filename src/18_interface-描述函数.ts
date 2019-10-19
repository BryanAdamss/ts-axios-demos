interface SearchFn {
  (source: string, subString: string): boolean
}

const mySearch2 = (src: string, sub: string): boolean => {
  const result = src.search(sub)
  return result > -1
}

const mySearch3: SearchFn = (src, sub) => {
  const result = src.search(sub)
  return result > -1
}

const mySearch: SearchFn = (src: string, sub: string): boolean => {
  const result = src.search(sub)
  return result > -1
}

// 以上三种是等价的；前两者可以通过主要是因为类型推断
