import { TemplateCard } from '@/entities/template'
import { Template } from '@/shared/types'
import { StyledCardWrapper } from '@/shared/ui/card-wrapper'
import { Box, Typography } from '@mui/material'

type Props = {
  templates: Template[]
}

const Templates = (props: Props) => {
  const { templates } = props
  if (!templates.length) {
    return (
      <Box py={3}>
        <Typography variant="h4">Templates</Typography>
        <Typography variant="subtitle1">Here you can see a list of your templates</Typography>
        <StyledCardWrapper>
          <Typography variant="h6" fontSize={12} textAlign={'center'} fontWeight={600}>
            Add Template
          </Typography>
        </StyledCardWrapper>
      </Box>
    )
  }

  return templates.map(template => <TemplateCard key={template.id} template={template} />)
}

export default Templates
