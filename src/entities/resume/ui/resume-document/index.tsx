import { Resume, Template } from '@/shared/types'
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
  selectedTemplate: Template
}

const ResumeDocument = (props: Props) => {
  const { resume, selectedTemplate } = props
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
  const templateConfig = selectedTemplate.config

  const { colorSchema, margins } = templateConfig

  return (
    <Paper
      id={`resume-${id}`}
      elevation={0}
      sx={{
        padding: 2,
        mx: margins.horizontal,
        my: margins.vertical,
        minHeight: 'calc(100vh - 96px)',
        width: '600px',
        backgroundColor: colorSchema.primaryColor,
        color: colorSchema.secondaryColor,
        backgroundImage: `url(${templateConfig.watermark.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {templateConfig.sections.header && (
        <>
          <ResumeHeader
            fullName={fullName}
            title={title}
            email={email}
            phoneNumber={phoneNumber}
            linkedin={linkedin}
            templateConfig={templateConfig}
          />
          <Divider />
        </>
      )}
      {templateConfig.sections.personalDetails && (
        <>
          <ResumeAbout description={description} templateConfig={templateConfig} />
          <Divider />
        </>
      )}
      {templateConfig.sections.experience && (
        <>
          <ResumeExperience experiences={experiences} templateConfig={templateConfig} />
          <Divider />
        </>
      )}
      {templateConfig.sections.education && (
        <>
          <ResumeEducation education={education} templateConfig={templateConfig} />
          <Divider />
        </>
      )}
      {templateConfig.sections.skills && (
        <>
          <ResumeSkills skills={skills} templateConfig={templateConfig} />
          <Divider />
        </>
      )}
      {templateConfig.sections.certifications && (
        <>
          <ResumeCertifications certifications={certifications} templateConfig={templateConfig} />
          <Divider />
        </>
      )}
    </Paper>
  )
}

export default ResumeDocument
