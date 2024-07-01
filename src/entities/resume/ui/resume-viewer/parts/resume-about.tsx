import { TemplateConfig } from '@/entities/template'
import { Box, Typography } from '@mui/material'

type Props = {
  description: string
  templateConfig: TemplateConfig
}

const ResumeAbout = (props: Props) => {
  const { description, templateConfig } = props

  const { fontSize } = templateConfig
  return (
    <Box my={1}>
      <Typography variant="h6" fontSize={fontSize.heading} fontWeight={600}>
        About me
      </Typography>
      <Typography variant="subtitle1" fontSize={fontSize.body}>
        {description}
      </Typography>
    </Box>
  )
}

export default ResumeAbout
