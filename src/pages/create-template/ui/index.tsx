import { ResumeInput, ResumeViewer } from '@/entities/resume'
import { EMPTY_RESUME, MOCK_CANDIDATE_PROFILE } from '@/shared/config'
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

const CreateTemplatePage = (props: Props) => {
  const { resumes, setResumes, templates, setTemplates } = props
  const navigate = useNavigate()
  const newResume = MOCK_CANDIDATE_PROFILE as Resume
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
          isNewResume={false}
          isNewTemplate={true}
          resumes={resumes}
          setResumes={setResumes}
          templates={templates}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          setTemplates={setTemplates}
          defaultActiveSection="template-settings"
          type="template"
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

export default CreateTemplatePage
