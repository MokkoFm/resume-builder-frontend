import { ResumeCard } from '@/entities/resume'
import { Resume, Template } from '@/shared/types'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import Resumes from './resumes'
import Templates from './templates'
import { MOCK_CANDIDATE_PROFILE } from '@/shared/config'

export const HomePage = () => {
  const [resumes, setResumes] = useState<Resume[]>([MOCK_CANDIDATE_PROFILE])
  const [userTemplates, setUserTemplates] = useState<Template[]>([])
  return (
    <Box>
      <Box py={5}>
        <Typography variant="h2">Dashboard</Typography>
        <Typography variant="subtitle1">Welcome to the dashboard</Typography>
      </Box>
      <Resumes resumes={resumes} setResumes={setResumes} />
      <Templates templates={userTemplates} />
    </Box>
  )
}
