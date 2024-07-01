import { Resume, Template } from '@/shared/types'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import Resumes from './resumes'
import Templates from './templates'

type Props = {
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
}

export const HomePage = (props: Props) => {
  const { resumes, setResumes } = props
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
