import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type Props = {
  path: string
}

export const EditButton = (props: Props) => {
  const { path } = props
  const navigate = useNavigate()
  return (
    <Button variant="text" color="primary" onClick={() => navigate(`/${path}`)}>
      Edit
    </Button>
  )
}
