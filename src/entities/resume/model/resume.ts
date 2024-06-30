export type Experience = {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
}

export type Education = {
  degree?: string
  major?: string
  university?: string
  school?: string
  location?: string
  startDate?: string
  endDate?: string
  description?: string
}

export type Certification = {
  name: string
  date: string
}

export type Reference = {
  name: string
  company: string
  email: string
  phoneNumber: string
}

export type Skill = {
  name: string
  score: number
}
