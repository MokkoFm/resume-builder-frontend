import { Resume, Template } from '@/shared/types'
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
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

type Props = {
  resume: Resume
  setResume: React.Dispatch<React.SetStateAction<Resume>>
  isNewResume: boolean
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
  templates: Template[]
  selectedTemplate: Template
  setSelectedTemplate: React.Dispatch<React.SetStateAction<Template>>
}

export type Section = 'personal-details' | 'experience' | 'education' | 'skills' | 'certifications'

export const ResumeInput = ({
  resume,
  setResume,
  isNewResume,
  resumes,
  setResumes,
  templates,
  selectedTemplate,
  setSelectedTemplate
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

  const [activeSection, setActiveSection] = useState<Section>('personal-details')

  const templatesNames = templates.map(template => template.title)

  const onSave = () => {
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

  return (
    <Box mr={4} mt={4}>
      <FormControl fullWidth>
        <InputLabel id="resume-template-select-label">Resume template</InputLabel>
        <Select
          label="Resume template"
          labelId="resume-template-select-label"
          id="resume-template-select"
          value={templatesNames[0]}
          onChange={e => handleTemplateChange(e.target.value as string)}
        >
          {templatesNames.map(templateName => (
            <MenuItem key={templateName} value={templateName}>
              {templateName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={onSave}>
        Save resume
      </Button>
    </Box>
  )
}
