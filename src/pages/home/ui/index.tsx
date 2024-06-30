import { ResumeCard } from '@/entities/resume'
import { Resume } from '@/shared/types'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'

export const HomePage = () => {
  const [resumes, setResumes] = useState<Resume[]>([])
  return (
    <Box>
      <Box py={5}>
        <Typography variant="h2">Dashboard</Typography>
        <Typography variant="subtitle1">Welcome to the dashboard</Typography>
      </Box>
      <Box py={3}>
        <Typography variant="h4">Resumes</Typography>
        <Typography variant="subtitle1">Here you can see a list of your resumes</Typography>
        {resumes.length === 0 ? (
          <Box
            sx={{
              height: 150,
              display: 'flex',
              boxSizing: 'border-box',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 2,
              gap: 2,
              border: 'solid 1px black'
            }}
          >
            <Typography variant="h6" fontSize={12} textAlign={'center'} fontWeight={600}>
              Add Resume
            </Typography>
          </Box>
        ) : (
          resumes.map(resume => <ResumeCard key={resume.id} resume={resume} />)
        )}
      </Box>
    </Box>
  )
}
