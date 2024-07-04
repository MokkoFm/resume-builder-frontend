import { Resume, Template } from '@/shared/types'
import { Box, Divider, Paper, Typography } from '@mui/material'
import {
  ResumeHeader,
  ResumeAbout,
  ResumeExperience,
  ResumeEducation,
  ResumeSkills,
  ResumeCertifications
} from '../resume-viewer/parts'
import { addCommatoString } from '../resume-viewer/parts/resume-header'

type Props = {
  resume: Resume
  selectedTemplate: Template
  sidebarSettings: any
}

const ResumeDocumentWithSidebar = (props: Props) => {
  const { resume, selectedTemplate, sidebarSettings } = props
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
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box width={`calc(100% - ${sidebarSettings.width}`}>
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
          {templateConfig.sections.about && (
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
        </Box>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Box
          width={`${sidebarSettings.width}`}
          sx={{
            backgroundColor: sidebarSettings.backgroundColor,
            color: sidebarSettings.textColor
          }}
        >
          {sidebarSettings.sections.personalDetails && (
            <Typography variant="subtitle1">
              {addCommatoString(email)}
              {addCommatoString(phoneNumber)}
              {linkedin}
            </Typography>
          )}
          {sidebarSettings.sections.skills && (
            <>
              <ResumeSkills skills={skills} templateConfig={templateConfig} />
              <Divider />
            </>
          )}
          {sidebarSettings.sections.certifications && (
            <>
              <ResumeCertifications
                certifications={certifications}
                templateConfig={templateConfig}
              />
              <Divider />
            </>
          )}
        </Box>
      </Box>
    </Paper>
  )
}

export default ResumeDocumentWithSidebar
