import { useState, useEffect } from 'react'
import { Resume } from '../types'
import { MOCK_CANDIDATE_PROFILE } from '../config'

export const useResume = (id: string) => {
  const [resume, setResume] = useState<Resume | null>(null)
  const savedResumes = [MOCK_CANDIDATE_PROFILE]

  useEffect(() => {
    const currentResume = savedResumes.find(resume => resume.id === id)
    if (currentResume) {
      setResume(currentResume)
    }
  }, [id])

  return resume
}
