import { Template } from '@/shared/types'
import { EditButton } from '@/shared/ui/edit-button'
import { Box, Button, Typography } from '@mui/material'

type Props = {
  template: Template
  templates: Template[]
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
}

export const TemplateCard = ({ template, templates, setTemplates }: Props) => {
  const { title, updatedAt } = template
  return (
    <Box
      width="180px"
      minHeight="200px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        border: 'solid 1px black'
      }}
      margin={2}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1">Updated at: {updatedAt}</Typography>
      <Button variant="contained" sx={{ mt: 1 }}>
        Create resume
      </Button>
      <Box display="flex">
        <EditButton path={`templates/${template.id}/edit`} buttonText="Edit" variant="text" />
        <Button variant="text" color="primary">
          Delete
        </Button>
      </Box>
    </Box>
  )
}
