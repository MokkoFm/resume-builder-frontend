import { Button } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

type Props = {
  onBack: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const BackButton = (props: Props) => {
  const { onBack } = props
  return (
    <Button onClick={onBack} startIcon={<ArrowBack />}>
      Back
    </Button>
  )
}
