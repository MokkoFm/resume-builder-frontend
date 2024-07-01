import { ResumeInput, ResumeViewer } from '@/entities/resume'
import { EMPTY_RESUME } from '@/shared/config'
import { Resume } from '@/shared/types'
import { BackButton } from '@/shared/ui/back-button/back-button'
import { Box } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
}

const CreateResumePage = (props: Props) => {
  const { resumes, setResumes } = props
  const navigate = useNavigate()
  const newResume = EMPTY_RESUME
  const [resume, setResume] = useState(newResume)

  const onBack = () => {
    navigate('/')
    setResume(newResume)
  }
  return (
    <Box display="flex" justifyContent="space-between" height="100vh">
      <Box width="50%">
        <Box mt={2}>
          <BackButton onBack={onBack} />
        </Box>
        <ResumeInput
          resume={resume}
          setResume={setResume}
          isNewResume={true}
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

export default CreateResumePage
