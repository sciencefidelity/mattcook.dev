import { ReactNode } from "react"
import { BaseHead } from "components/base-head"
import { Footer } from "components/footer"
import { Header } from "components/header"

/**
 * The Layout component
 * @remarks defines the layout of the whole site
 * @param children - ReactNode
 * @returns The JSX Code for the document site layout
 */
export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <BaseHead />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
