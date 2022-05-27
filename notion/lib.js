import { parse, evaluate } from "groq-js"

export const groq = async ([query]) => {
  let tree = parse(query)
  return async dataset => {
    let result = await evaluate(tree, { dataset })
    return await result.get()
  }
}
