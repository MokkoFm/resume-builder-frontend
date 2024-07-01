export type TemplateConfig = {
  fontSize: {
    title: number
    subtitle: number
    heading: number
    body: number
  }
  margins: {
    horizontal: number
    vertical: number
  }
  watermark: {
    url: string
  }
  colorSchema: {
    primaryColor: string
    secondaryColor: string
  }
  type: string
  headerImage: string
  sections: {
    header: boolean
    personalDetails: boolean
    about: boolean
    experience: boolean
    education: boolean
    skills: boolean
    certifications: boolean
    references: boolean
  }
  sidebar: {
    hasSidebar: boolean
    width: number
    backgroundColor: string
    textColor: string
    sections: {
      personalDetails: boolean
      skills: boolean
      certifications: boolean
      references: boolean
    }
  }
}
