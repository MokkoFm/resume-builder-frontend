import { Resume, Template } from '@/shared/types'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import {
  ResumePersonalDetailsInput,
  ResumeExperienceInput,
  ResumeEducationInput,
  ResumeSkillsInput,
  ResumeCertificatesInput
} from './parts'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createResume } from '@/features/create-resume'
import { saveEditedResume } from '@/features/save-edited-resume'
import TemplateSettings from './parts/template-settings'
import { createTemplate } from '@/features/create-template'
import { saveEditedTemplate } from '@/features/save-edited-template'

type Props = {
  resume: Resume
  setResume: React.Dispatch<React.SetStateAction<Resume>>
  isNewResume: boolean
  isNewTemplate: boolean
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
  templates: Template[]
  selectedTemplate: Template
  setSelectedTemplate: React.Dispatch<React.SetStateAction<Template>>
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
  defaultActiveSection: Section
  type: 'resume' | 'template'
}

export type Section =
  | 'personal-details'
  | 'experience'
  | 'education'
  | 'skills'
  | 'certifications'
  | 'template-settings'

export const ResumeInput = ({
  resume,
  setResume,
  isNewResume,
  isNewTemplate,
  resumes,
  setResumes,
  templates,
  selectedTemplate,
  setSelectedTemplate,
  setTemplates,
  defaultActiveSection,
  type
}: Props) => {
  const {
    title,
    firstName,
    lastName,
    email,
    phoneNumber,
    experiences,
    education,
    certifications,
    description,
    linkedin,
    skills
  } = resume
  const navigate = useNavigate()

  const [activeSection, setActiveSection] = useState<Section>(defaultActiveSection)

  const templatesNames = templates.map(template => template.title)

  const onResumeSave = () => {
    if (isNewResume) {
      createResume({
        resume,
        resumes,
        setResumes
      })
    } else {
      saveEditedResume({
        resume,
        resumes,
        setResumes
      })
    }

    navigate('/')
  }

  const handleTemplateChange = (title: string) => {
    const selectedTemplate = templates.find(template => template.title === title)
    if (selectedTemplate) {
      setSelectedTemplate(selectedTemplate)
    }
  }

  const onTemplateSave = () => {
    if (isNewTemplate) {
      createTemplate({
        template: selectedTemplate,
        templates,
        setTemplates
      })
    } else {
      saveEditedTemplate({
        template: selectedTemplate,
        templates,
        setTemplates
      })
    }
    
    navigate('/')
  }

  return (
    <Box mr={4} mt={4}>
      {type === 'resume' ? (
        <FormControl fullWidth>
          <InputLabel id="resume-template-select-label">Resume template</InputLabel>
          <Select
            label="Resume template"
            labelId="resume-template-select-label"
            id="resume-template-select"
            value={selectedTemplate.title}
            onChange={e => handleTemplateChange(e.target.value as string)}
          >
            {templatesNames.map(templateName => (
              <MenuItem key={templateName} value={templateName}>
                {templateName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <TextField
          fullWidth
          label="Template title"
          value={selectedTemplate.title}
          onChange={e => setSelectedTemplate({ ...selectedTemplate, title: e.target.value })}
        />
      )}

      <TemplateSettings
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ResumePersonalDetailsInput
        title={title}
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        linkedin={linkedin}
        description={description}
        setResume={setResume}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ResumeExperienceInput
        experiences={experiences}
        setResume={setResume}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isNewResume={isNewResume}
      />
      <ResumeEducationInput
        education={education}
        setResume={setResume}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isNewResume={isNewResume}
      />
      <ResumeSkillsInput
        skills={skills}
        setResume={setResume}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isNewResume={isNewResume}
      />
      <ResumeCertificatesInput
        certifications={certifications}
        setResume={setResume}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isNewResume={isNewResume}
      />
      {type === 'resume' ? (
        <Button variant="contained" color="primary" sx={{ my: 2 }} onClick={onResumeSave}>
          Save resume
        </Button>
      ) : (
        <Button variant="contained" color="primary" sx={{ my: 2 }} onClick={onTemplateSave}>
          Save template
        </Button>
      )}
    </Box>
  )
}
