import { Template } from '@/shared/types'
import { Box, Button, Typography } from '@mui/material'

type Props = {
  template: Template
}

export const TemplateCard = ({ template }: Props) => {
  const { title, updatedAt } = template
  return (
    <Box
      sx={{
        height: 150,
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        gap: 2,
        border: 'solid 1px black'
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1">Updated at: {updatedAt}</Typography>
      <Button variant="contained" color="primary">
        Edit
      </Button>
      <Button variant="contained" color="secondary">
        Delete
      </Button>
      <Button variant="contained" color="primary">
        Download
      </Button>
    </Box>
  )
}
