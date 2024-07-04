import { Template } from '@/shared/types'

type Props = {
  template: Template
  templates: Template[]
  setTemplates: React.Dispatch<React.SetStateAction<Template[]>>
}

export const createTemplate = (props: Props) => {
  const { template, templates, setTemplates } = props
  const templateWithId = { ...template, id: (templates.length + 1).toString() }
  const updatedTemplates = [...templates, templateWithId]
  setTemplates(updatedTemplates)
  return updatedTemplates
}
