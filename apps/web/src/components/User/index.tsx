import { useRef, useState, ChangeEvent } from 'react'
import { Label, TextInput, Button } from 'flowbite-react'
import { createUser } from './../../api/user'
import { USER } from './../../utils/constants'

export function User({
  setIsUser,
}: {
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [showLoader, setShowLoader] = useState(false)
  const name = useRef('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    name.current = event.target.value
  }

  const onSubmit = () => {
    setShowLoader(true)

    if (name.current.length === 0) {
      // Show an error
      return
    }

    createUser(name.current)
      .then((response) => {
        localStorage.setItem(USER, response.id)
        setIsUser(true)
        // Show pokemon view
      })
      .catch((error) => {
        console.log({ error })
        // Show error
      })
      .finally(() => {
        setShowLoader(false)
      })
  }

  return (
    <div className="max-w-lg mx-auto flex flex-col gap-5">
      <Label htmlFor="name" value="Type your nickname:" />
      <TextInput id="name" type="text" onChange={(event) => onChange(event)} />
      <Button
        onClick={() => onSubmit()}
        disabled={showLoader}
        isProcessing={showLoader}
      >
        Submit
      </Button>
    </div>
  )
}
