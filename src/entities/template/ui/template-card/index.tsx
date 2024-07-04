import { deleteTemplate } from '@/features/delete-template'
import { Template } from '@/shared/types'
import { EditButton } from '@/shared/ui/edit-button'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type Props = {
  template: Template
  templates: Template[]
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
}

export const TemplateCard = ({ template, templates, setTemplates }: Props) => {
  const { title } = template
  const navigate = useNavigate()

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max)
  }

  const randomNumber = getRandomInt(100)

  const titleWithMaxSymbolsAndDotsAfter = (title: string, maxSymbols: number) => {
    if (title.length > maxSymbols) {
      return title.slice(0, maxSymbols) + '...'
    }
    return title
  }

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
      <Typography variant="h6" textAlign="center">
        {titleWithMaxSymbolsAndDotsAfter(title, 15)}
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 1 }}
        onClick={() =>
          navigate(`/resumes/${randomNumber}/create`, {
            state: { templateId: template.id }
          })
        }
      >
        Create resume
      </Button>
      <Box display="flex">
        <EditButton path={`templates/${template.id}/edit`} buttonText="Edit" variant="text" />
        <Button
          variant="text"
          color="primary"
          onClick={() => deleteTemplate({ template, templates, setTemplates })}
        >
          Delete
        </Button>
      </Box>
    </Box>
  )
}
