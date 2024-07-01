import { FC, ReactNode } from 'react'
import { BasicLayout, LayoutProps } from '@/shared/ui/layout'

type LayoutWrapperProps = {
  layout?: FC<LayoutProps>
  element: ReactNode
}

const LayoutWrapper = ({ layout: Layout = BasicLayout, element }: LayoutWrapperProps) => (
  <Layout>{element}</Layout>
)

export { LayoutWrapper }
export default LayoutWrapper
