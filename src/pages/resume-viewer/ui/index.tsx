import { useParams } from 'react-router-dom'
import { ResumeInput, ResumeViewer } from '@/entities/resume'
import { useResume } from '@/shared'
import { Box, Typography } from '@mui/material'
import { BackButton } from '@/shared/ui/back-button/back-button'
import { MOCK_CANDIDATE_PROFILE } from '@/shared/config'

type Params = {
  resumeId: string
}

export const ResumeViewerPage = () => {
  const { resumeId } = useParams<Params>()
  const id = resumeId || ''

  const savedResumes = [MOCK_CANDIDATE_PROFILE]
  const { resume, setResume } = useResume(id, savedResumes)
  console.log("resume", resume)

  if (!resume) {
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
        <ResumeInput resume={resume} setResume={setResume} />
      </Box>
      <Box
        width="50%"
        sx={{
          backgroundColor: '#80808070',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0
        }}
      >
        <ResumeViewer resume={resume} />
      </Box>
    </Box>
  )
}
