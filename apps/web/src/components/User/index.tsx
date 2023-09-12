import { Label, TextInput, Button } from 'flowbite-react'

export function User() {
  const onSubmit = () => {
    console.log('on submit')
  }

  return (
    <div className="max-w-lg mx-auto flex flex-col gap-5">
      <Label htmlFor="name" value="Type your nickname:" />
      <TextInput id="name" type="text" />
      <Button onClick={() => onSubmit()}>Submit</Button>
    </div>
  )
}
