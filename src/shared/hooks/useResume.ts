import { Resume } from '@/entities/resume'
import { useState, useEffect } from 'react'

export const useResume = (id: number) => {
  const [resume, setResume] = useState<Resume | null>(null)

  useEffect(() => {
    const fetchResume = async () => {
      const response = await fetch(`/api/resumes/${id}`)
      const data = await response.json()
      setResume(data)
    }

    fetchResume()
  }, [id])

  return resume
}
