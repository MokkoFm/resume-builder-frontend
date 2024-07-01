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
  setResume: React.Dispatch<React.SetStateAction<Resume>>
}

export const ResumeInput = ({ resume, setResume }: Props) => {
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
      />
      <ResumeExperienceInput experiences={experiences} setResume={setResume} />
      <ResumeEducationInput education={education} setResume={setResume} />
      <ResumeSkillsInput skills={skills} setResume={setResume} />
      <ResumeCertificatesInput certifications={certifications} setResume={setResume} />
    </Box>
  )
}
