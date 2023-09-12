import { DarkThemeToggle, Navbar as NavbarFlowbite } from 'flowbite-react'

export const Navbar = () => {
  return (
    <NavbarFlowbite fluid rounded>
      <NavbarFlowbite.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Pokemon
        </span>
      </NavbarFlowbite.Brand>
      <NavbarFlowbite.Toggle />
      <NavbarFlowbite.Collapse>
        <DarkThemeToggle />
      </NavbarFlowbite.Collapse>
    </NavbarFlowbite>
  )
}
