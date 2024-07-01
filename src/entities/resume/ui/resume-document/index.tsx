import { Resume } from '@/shared/types'
import { Paper, Divider } from '@mui/material'
import {
  ResumeHeader,
  ResumeAbout,
  ResumeExperience,
  ResumeEducation,
  ResumeSkills,
  ResumeCertifications
} from '../resume-viewer/parts'

type Props = {
  resume: Resume
}

const ResumeDocument = (props: Props) => {
  const { resume } = props
  const {
    id,
    title,
    email,
    phoneNumber,
    linkedin,
    description,
    experiences,
    education,
    skills,
    certifications
  } = resume

  const fullName = `${resume.firstName} ${resume.lastName}`
  return (
    <Paper
      id={`resume-${id}`}
      elevation={0}
      sx={{
        padding: 2,
        mx: 8,
        my: 4,
        minHeight: 'calc(100vh - 96px)',
        width: '600px'
      }}
    >
      <ResumeHeader
        fullName={fullName}
        title={title}
        email={email}
        phoneNumber={phoneNumber}
        linkedin={linkedin}
      />
      <Divider />
      <ResumeAbout description={description} />
      <Divider />
      <ResumeExperience experiences={experiences} />
      <Divider />
      <ResumeEducation education={education} />
      <Divider />
      <ResumeSkills skills={skills} />
      <Divider />
      <ResumeCertifications certifications={certifications} />
      <Divider />
    </Paper>
  )
}

export default ResumeDocument
