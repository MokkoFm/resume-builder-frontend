type PersonalDetails = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  address: string
}

type Experience = {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
}

type Education = {
  degree: string
  major: string
  university: string
  location: string
  startDate: string
  endDate: string
  description: string
}

type Certification = {
  name: string
  date: string
}

type Reference = {
  name: string
  company: string
  email: string
  phoneNumber: string
}

type Skill = {
  name: string
  score: number
}

export interface Resume {
  personalDetails: PersonalDetails
  experiences: Experience[]
  education: Education[]
  certifications: Certification[]
  description: string
  reference: Reference[]
  linkedin: string
  skills: Skill[]
}
