import { Resume } from '@/shared/types'

type Props = {
  resume: Resume
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
}

export const createResume = (props: Props) => {
  const { resume, resumes, setResumes } = props
  const resumeWithId = { ...resume, id: (resumes.length + 1).toString() }
  const updatedResumes = [...resumes, resumeWithId]
  setResumes(updatedResumes)
  return updatedResumes
}
