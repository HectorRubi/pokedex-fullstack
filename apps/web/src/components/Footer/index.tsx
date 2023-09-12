import { Footer as FooterFlowbite, DarkThemeToggle } from 'flowbite-react'

export const Footer = () => {
  return (
    <FooterFlowbite container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterFlowbite.LinkGroup>
            <DarkThemeToggle />
          </FooterFlowbite.LinkGroup>
        </div>
        <FooterFlowbite.Divider />
        <FooterFlowbite.Copyright by="Hector Rubí" href="#" year={2023} />
      </div>
    </FooterFlowbite>
  )
}
