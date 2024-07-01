import { useState, useEffect } from 'react'
import { Resume } from '../types'
import { EMPTY_RESUME } from '../config'

export const useResume = (id: string, savedResumes: Resume[]) => {
  const [resume, setResume] = useState<Resume>(EMPTY_RESUME)

  useEffect(() => {
    const currentResume = savedResumes.find(resume => resume.id === id)
    if (currentResume) {
      setResume(currentResume)
    }
  }, [id])

  return { resume, setResume }
}
