import { Flowbite } from 'flowbite-react'

import { Navbar } from './../Navbar'
import { Footer } from './../Footer'

export function Layout() {
  return (
    <Flowbite>
      <header className="bg-slate-100 dark:bg-[#111827]">
        <nav className="max-w-5xl mx-auto py-8 px-2 lg:px-0">
          <Navbar />
        </nav>
      </header>
      <main className="bg-slate-100 dark:bg-[#111827]">
        <section className="py-36"></section>
        <footer className="max-w-5xl mx-auto mt-20 py-8 px-2 lg:px-0">
          <Footer />
        </footer>
      </main>
    </Flowbite>
  )
}
