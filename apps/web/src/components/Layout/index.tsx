import { useEffect, useState } from 'react'
import { Flowbite } from 'flowbite-react'

import { Navbar } from './../Navbar'
import { Footer } from './../Footer'
import { User } from './../User'
import { PokemonLayout } from './../Pokemon/Layout'
import { Error } from './../Error'

import { useError } from './../../hooks/useError'

import { USER } from './../../utils/constants'

export function Layout() {
  const [isUser, setIsUser] = useState(false)
  const { errorMessage, setErrorMessage } = useError()

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
        <section className="max-w-5xl mx-auto mb-20">
          <img
            className="block mx-auto"
            width="500"
            src="https://raw.githubusercontent.com/HectorRubi/app-test-express-react/master/app/public/logo.png"
            alt="logo"
          />
        </section>

        <section className="max-w-5xl mx-auto px-2 lg:px-0 min-h-[68vh]">
          {isUser ? (
            <PokemonLayout setErrorMessage={setErrorMessage} />
          ) : (
            <User setIsUser={setIsUser} setErrorMessage={setErrorMessage} />
          )}
        </section>

        <footer className="max-w-5xl mx-auto mt-20 py-8 px-2 lg:px-0">
          <Footer />
        </footer>

        {errorMessage !== null && <Error message={errorMessage} />}
      </main>
    </Flowbite>
  )
}
