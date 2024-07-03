import { ResumeInput, ResumeViewer } from '@/entities/resume'
import { EMPTY_RESUME } from '@/shared/config'
import { Resume, Template } from '@/shared/types'
import { BackButton } from '@/shared/ui/back-button/back-button'
import { Box } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
  templates: Template[]
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
}

const CreateResumePage = (props: Props) => {
  const { resumes, setResumes, templates, setTemplates } = props
  const navigate = useNavigate()
  const newResume = EMPTY_RESUME
  const [resume, setResume] = useState(newResume)
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0])

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
          templates={templates}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
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
        <ResumeViewer resume={resume} selectedTemplate={selectedTemplate} />
      </Box>
    </Box>
  )
}

export default CreateResumePage
