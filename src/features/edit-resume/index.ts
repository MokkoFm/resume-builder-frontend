import { Resume } from '@/shared/types'

type Props = {
  resume: Resume
  setResume: React.Dispatch<React.SetStateAction<Resume>>
  property: string
  value: string
}

export const editResume = (props: Props) => {
  const { resume, setResume, property, value } = props
  const updatedResume = { ...resume, [property]: value }
  setResume(updatedResume)
  return updatedResume
}
