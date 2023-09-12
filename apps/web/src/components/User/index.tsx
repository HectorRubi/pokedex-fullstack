import { useRef, useState, ChangeEvent } from 'react'
import { Label, TextInput, Button } from 'flowbite-react'
import { createUser } from './../../api/user'
import { USER } from './../../utils/constants'

export function User({
  setIsUser,
  setShowError,
  setErrorMessage,
}: {
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>
  setShowError: React.Dispatch<React.SetStateAction<boolean>>
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}) {
  const [showLoader, setShowLoader] = useState(false)
  const name = useRef('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    name.current = event.target.value
  }

  const onSubmit = () => {
    setShowLoader(true)

    if (name.current.length === 0) {
      setErrorMessage('Name field should not be empty')
      setShowError(true)
      setShowLoader(false)
      return
    }

    createUser(name.current)
      .then((response) => {
        localStorage.setItem(USER, response.id)
        setIsUser(true)
      })
      .catch(() => {
        setErrorMessage('Something wrong happen, please try again later.')
        setShowError(true)
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
