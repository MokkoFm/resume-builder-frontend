import { Resume } from '@/shared/types'

type Props = {
  resume: Resume
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
}

export const saveEditedResume = (props: Props) => {
  const { resume, resumes, setResumes } = props
  const updatedResumes = resumes.map(r => (r.id === resume.id ? resume : r))
  setResumes(updatedResumes)
  return updatedResumes
}
