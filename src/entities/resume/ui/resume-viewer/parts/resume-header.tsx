import { TemplateConfig } from '@/entities/template'
import { Box, Typography } from '@mui/material'

type Props = {
  fullName: string
  title: string
  email: string
  phoneNumber: string
  linkedin: string
  templateConfig: TemplateConfig
}

const ResumeHedaer = (props: Props) => {
  const { fullName, title, email, phoneNumber, linkedin, templateConfig } = props
  const { fontSize, headerImage } = templateConfig

  const addCommatoString = (str: string) => {
    return str.trim() ? str + ', ' : ''
  }
  return (
    <Box
      textAlign="center"
      my={1}
      sx={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 2
      }}
    >
      <Typography variant="h6" fontSize={fontSize.title} fontWeight={600}>
        {addCommatoString(fullName)}
        {title}
      </Typography>
      <Typography variant="subtitle1" fontSize={fontSize.subtitle}>
        {addCommatoString(email)}
        {addCommatoString(phoneNumber)}
        {linkedin}
      </Typography>
    </Box>
  )
}

export default ResumeHedaer
