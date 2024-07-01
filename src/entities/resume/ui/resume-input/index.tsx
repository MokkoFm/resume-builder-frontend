import { Resume } from '@/shared/types'
import { Box, Button } from '@mui/material'
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
}

export type Section = 'personal-details' | 'experience' | 'education' | 'skills' | 'certifications'

export const ResumeInput = ({ resume, setResume, isNewResume, resumes, setResumes }: Props) => {
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

  return (
    <Box mr={4} mt={4}>
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
