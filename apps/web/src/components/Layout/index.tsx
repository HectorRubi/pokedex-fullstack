import { useEffect, useState } from 'react'
import { Flowbite } from 'flowbite-react'

import { Navbar } from './../Navbar'
import { Footer } from './../Footer'
import { User } from './../User'

import { USER } from './../../utils/constants'

export function Layout() {
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem(USER)
    setIsUser(user !== null)
  }, [])

  return (
    <Flowbite>
      <header className="bg-slate-100 dark:bg-[#111827]">
        <nav className="max-w-5xl mx-auto py-8 px-2 lg:px-0">
          <Navbar />
        </nav>
      </header>
      <main className="bg-slate-100 dark:bg-[#111827]">
        <section className="max-w-5xl mx-auto px-2 lg:px-0 py-36">
          {isUser ? <span>Pokemon</span> : <User />}
        </section>
        <footer className="max-w-5xl mx-auto mt-20 py-8 px-2 lg:px-0">
          <Footer />
        </footer>
      </main>
    </Flowbite>
  )
}
