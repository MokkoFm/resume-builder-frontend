import { ResumeCard } from '@/entities/resume'
import { Resume, Template } from '@/shared/types'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import Resumes from './resumes'
import Templates from './templates'

export const HomePage = () => {
  const [resumes, setResumes] = useState<Resume[]>([])
  const [userTemplates, setUserTemplates] = useState<Template[]>([])
  return (
    <Box>
      <Box py={5}>
        <Typography variant="h2">Dashboard</Typography>
        <Typography variant="subtitle1">Welcome to the dashboard</Typography>
      </Box>
      <Resumes resumes={resumes} />
      <Templates templates={userTemplates} />
    </Box>
  )
}
