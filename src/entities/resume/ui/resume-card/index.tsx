import { Resume } from '@/shared/types'
import { Box, Button, Typography } from '@mui/material'
import { EditButton } from '@/shared/ui/edit-button'
import downloadPDF from '@/features/download-pdf'
import { useRef } from 'react'

type Props = {
  resume: Resume
}

export const ResumeCard = ({ resume }: Props) => {
  const { title, updatedAt, firstName, lastName, id } = resume
  const fullName = `${firstName} ${lastName}`

  return (
    <Box
      width="200px"
      minHeight="200px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        border: 'solid 1px black'
      }}
    >
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="h6">{fullName}</Typography>
      <Typography variant="subtitle1">Updated at: {updatedAt}</Typography>
      <EditButton path={`resumes/${resume.id}/edit`} />
      <Button variant="text" color="primary">
        Delete
      </Button>
    </Box>
  )
}
