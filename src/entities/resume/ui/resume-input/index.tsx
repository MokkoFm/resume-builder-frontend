import { Resume } from '@/shared/types'
import { Box } from '@mui/material'
import {
  ResumePersonalDetailsInput,
  ResumeExperienceInput,
  ResumeEducationInput,
  ResumeSkillsInput,
  ResumeCertificatesInput
} from './parts'

type Props = {
  resume: Resume
}

export const ResumeInput = ({ resume }: Props) => {
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
    references,
    linkedin,
    skills
  } = resume
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
      />
      <ResumeExperienceInput experiences={experiences} />
      <ResumeEducationInput education={education} />
      <ResumeSkillsInput skills={skills} />
      <ResumeCertificatesInput certificates={certifications} />
    </Box>
  )
}
