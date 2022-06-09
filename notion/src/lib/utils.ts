import { parse, evaluate } from "groq-js"
import { JSONValue } from "../lib/interfaces"

export const groq = async ([query]: TemplateStringsArray) => {
  let tree = parse(query)
  return async (dataset: JSONValue) => {
    let result = await evaluate(tree, { dataset })
    return await result.get()
  }
}

// export const groq = async (dataset: JSONValue, query: string) => {
//   const tree = parse(query)
//   const result = await evaluate(tree, { dataset })
//   return await result.get()
// }
