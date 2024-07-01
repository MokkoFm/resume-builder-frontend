import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type Props = {
  path: string
  buttonText: string
  variant: 'contained' | 'outlined' | 'text'
}

export const EditButton = (props: Props) => {
  const { path, buttonText, variant } = props
  const navigate = useNavigate()
  return (
    <Button variant={variant} color="primary" onClick={() => navigate(`/${path}`)} sx={{ my: 1 }}>
      {buttonText}
    </Button>
  )
}
