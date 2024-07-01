import { Resume } from '@/shared/types'

type Props = {
  resume: Resume
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
}

export const deleteResume = (props: Props) => {
  const { resume, resumes, setResumes } = props
  const updatedResumes = resumes.filter(r => r.id !== resume.id)
  setResumes(updatedResumes)
  return updatedResumes
}
