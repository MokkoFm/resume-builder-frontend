import { Resume } from '@/shared/types'
import { Box, Button, Typography } from '@mui/material'

type Props = {
  resume: Resume
}

export const ResumeCard = ({ resume }: Props) => {
  const { title, updatedAt } = resume
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
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1">Updated at: {updatedAt}</Typography>
      <Button variant="text" color="primary">
        Edit
      </Button>
      <Button variant="contained" color="primary">
        Download
      </Button>
    </Box>
  )
}
