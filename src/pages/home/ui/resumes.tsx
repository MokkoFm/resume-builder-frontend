import { ResumeCard } from '@/entities/resume'
import { Resume } from '@/shared/types'
import { StyledCardWrapper } from '@/shared/ui/card-wrapper'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type Props = {
  resumes: Resume[]
  setResumes: React.Dispatch<React.SetStateAction<Resume[]>>
}

const Resumes = (props: Props) => {
  const { resumes, setResumes } = props

  const navigate = useNavigate()

  const resumesList = resumes.map(resume => (
    <ResumeCard key={resume.id} resume={resume} resumes={resumes} setResumes={setResumes} />
  ))

  return (
    <Box>
      <Typography variant="h4">Resumes</Typography>
      <Typography variant="subtitle1">Here you can see a list of saved resumes</Typography>
      <Box display="flex" flexWrap="wrap">
        {resumesList}
        <StyledCardWrapper>
          <Button
            variant="text"
            onClick={() => navigate(`/resumes/${resumesList.length + 1}/create`)}
          >
            Add Resume
          </Button>
        </StyledCardWrapper>
      </Box>
    </Box>
  )
}

export default Resumes
