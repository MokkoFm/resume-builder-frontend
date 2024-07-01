import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type Props = {
  path: string
}

export const EditButton = (props: Props) => {
  const { path } = props
  const navigate = useNavigate()
  return (
    <Button variant="contained" color="primary" onClick={() => navigate(`/${path}`)} sx={{ my: 1 }}>
      Edit resume
    </Button>
  )
}
