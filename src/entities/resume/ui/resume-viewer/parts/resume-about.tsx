import { Box, Typography } from '@mui/material'

type Props = {
  description: string
}

const ResumeAbout = (props: Props) => {
  const { description } = props
  return (
    <Box my={2}>
      <Typography variant="h6" fontSize={14} fontWeight={600}>
        About me
      </Typography>
      <Typography variant="subtitle1" fontSize={10}>
        {description}
      </Typography>
    </Box>
  )
}

export default ResumeAbout
