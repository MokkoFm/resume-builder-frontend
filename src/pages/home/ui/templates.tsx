import { TemplateCard } from '@/entities/template'
import { Template } from '@/shared/types'
import { StyledCardWrapper } from '@/shared/ui/card-wrapper'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type Props = {
  templates: Template[]
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
}

const Templates = (props: Props) => {
  const { templates, setTemplates } = props

  const navigate = useNavigate()

  const templatesList = templates.map(template => (
    <TemplateCard
      key={template.id}
      template={template}
      templates={templates}
      setTemplates={setTemplates}
    />
  ))

  return (
    <Box>
      <Typography variant="h4">Templates</Typography>
      <Typography variant="subtitle1">Templates you can use for a resume creation</Typography>
      <Box display="flex" flexWrap="wrap">
        {templatesList}
        <StyledCardWrapper>
          <Button
            variant="text"
            onClick={() => navigate(`/templates/${templatesList.length + 1}/create`)}
          >
            Add template
          </Button>
        </StyledCardWrapper>
      </Box>
    </Box>
  )
}

export default Templates
