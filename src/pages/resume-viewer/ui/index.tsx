import { useNavigate, useParams } from 'react-router-dom'
import { ResumeInput, ResumeViewer } from '@/entities/resume'
import { useResume } from '@/shared'
import { Box, Typography } from '@mui/material'
import { BackButton } from '@/shared/ui/back-button/back-button'
import { Resume } from '@/shared/types'

type Params = {
  resumeId: string
}

type Props = {
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
}

export const ResumeViewerPage = (props: Props) => {
  const { resumes, setResumes } = props
  const { resumeId } = useParams<Params>()
  const navigate = useNavigate()
  const id = resumeId || ''

  const { resume, setResume } = useResume(id, resumes)

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
          <BackButton onBack={() => navigate('/')} />
        </Box>
        <ResumeInput
          resume={resume}
          setResume={setResume}
          isNewResume={false}
          resumes={resumes}
          setResumes={setResumes}
        />
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
