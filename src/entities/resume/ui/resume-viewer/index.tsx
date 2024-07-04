import { Resume, Template } from '@/shared/types'
import { Box, Button } from '@mui/material'
import downloadPDF from '@/features/download-pdf'
import { Download } from '@mui/icons-material'
import ResumeDocument from '../resume-document'
import ResumeDocumentWithSidebar from '../resume-document-with-sidebar'

type Props = {
  resume: Resume
  selectedTemplate: Template
}

export const ResumeViewer = ({ resume, selectedTemplate }: Props) => {
  const { id, firstName, lastName } = resume
  const fullName = `${firstName} ${lastName}`

  const sidebar = selectedTemplate.config.sidebar
  const hasSidebar = sidebar.hasSidebar
  const sidebarSettings = {
    width: sidebar.width,
    backgroundColor: sidebar.backgroundColor,
    textColor: sidebar.textColor,
    sections: {
      personalDetails: sidebar.personalDetails,
      skills: sidebar.skills,
      certifications: sidebar.certifications,
      references: sidebar.references
    }
  }

  console.log('sidebarSettings', sidebarSettings)

  return (
    <Box display="flex" justifyContent="center" alignItems="start">
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            downloadPDF(`resume-${id}`, fullName)
          }}
        >
          <Download />
        </Button>
      </Box>
      {hasSidebar ? (
        <ResumeDocumentWithSidebar
          resume={resume}
          selectedTemplate={selectedTemplate}
          sidebarSettings={sidebarSettings}
        />
      ) : (
        <ResumeDocument resume={resume} selectedTemplate={selectedTemplate} />
      )}
    </Box>
  )
}
