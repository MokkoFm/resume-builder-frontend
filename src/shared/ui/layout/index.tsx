import { FC, ReactNode } from 'react'
import { Container } from '@mui/material'

export type LayoutProps = {
  children?: ReactNode
}

const BasicLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <div className="content">{children}</div>
    </Container>
  )
}

export { BasicLayout }
export default BasicLayout
