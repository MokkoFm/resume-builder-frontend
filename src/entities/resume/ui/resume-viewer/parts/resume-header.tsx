import { Box, Typography } from '@mui/material'

type Props = {
  fullName: string
  title: string
  email: string
  phoneNumber: string
  linkedin: string
}

const ResumeHedaer = (props: Props) => {
  const { fullName, title, email, phoneNumber, linkedin } = props
  return (
    <Box textAlign="center" my={2}>
      <Typography variant="h6" fontSize={14} fontWeight={600}>
        {fullName}, {title}
      </Typography>
      <Typography variant="subtitle1" fontSize={10}>
        {email}, {phoneNumber}, {linkedin}
      </Typography>
    </Box>
  )
}

export default ResumeHedaer
