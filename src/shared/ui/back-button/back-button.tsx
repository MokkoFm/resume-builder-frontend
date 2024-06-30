import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'

export const BackButton = () => {
  const navigate = useNavigate()
  return (
    <Button onClick={() => navigate(-1)} startIcon={<ArrowBack />}>
      Back
    </Button>
  )
}
