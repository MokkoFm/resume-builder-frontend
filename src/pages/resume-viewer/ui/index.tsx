import { useParams } from 'react-router-dom'
import { ResumeInput, ResumeViewer } from '@/entities/resume'
import { useResume } from '@/shared'
import { Box, Typography } from '@mui/material'
import { BackButton } from '@/shared/ui/back-button/back-button'

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
    <Box display="flex" justifyContent="space-between" height="100vh">
      <Box width="50%">
        <Box mt={2}>
          <BackButton />
        </Box>
        <ResumeInput resume={currentResume} />
      </Box>
      <Box
        width="50%"
        sx={{
          backgroundColor: 'grey',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0
        }}
      >
        <ResumeViewer resume={currentResume} />
      </Box>
    </Box>
  )
}
