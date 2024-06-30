import { useParams } from 'react-router-dom'
import { ResumeViewer } from '@/entities/resume'
import { useResume } from '@/shared'
import { Box, Divider, Typography } from '@mui/material'

type Params = {
  resumeId: string
}

export const ResumeViewerPage = () => {
  const { resumeId } = useParams<Params>()
  const id = resumeId || ''

  const currentResume = useResume(id)

  if (!currentResume) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Typography variant="h6">Unfortunately, a resume doesn't exist</Typography>
      </Box>
    )
  }

  return (
    <Box display="flex" justifyContent="space-between" height="100vh" m={0} p={0}>
      <Box width="50%"></Box>
      <Box
        width="50%"
        sx={{
          backgroundColor: 'grey'
        }}
      >
        <ResumeViewer resume={currentResume} />
      </Box>
    </Box>
  )
}
