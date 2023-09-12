import { Alert } from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi'

export function Error({ message }: { message: string }) {
  return (
    <div className="absolute top-10 right-10">
      <Alert color="failure" icon={HiInformationCircle}>
        <span>
          <p>
            <span className="font-medium pr-3">Error!</span>
            <span>{message}</span>
          </p>
        </span>
      </Alert>
    </div>
  )
}
