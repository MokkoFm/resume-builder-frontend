export type TemplateConfig = {
  margins: {
    horizontal: number
    vertical: number
  }
  header: {
    fontSize: number
    fontFamily: string
    color: string
  }
  footer: {
    fontSize: number
    fontFamily: string
    color: string
  }
  body: {
    fontSize: number
    fontFamily: string
    color: string
  }
  watermark: {
    url: string
  }
  primaryColor: string
  secondaryColor: string
  type: string
}
