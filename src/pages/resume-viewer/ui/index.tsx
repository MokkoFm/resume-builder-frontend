import { useParams } from 'react-router-dom'
import { ResumeViewer } from '@/entities/resume'
import { useResume } from '@/shared'

type Params = {
  resumeId: string
}

export const ResumeViewerPage = () => {
  const { resumeId } = useParams<Params>()
  const id = parseInt(resumeId || '')

  const currentResume = useResume(id)

  if (!currentResume) {
    return (
      <div>
        <p>Unfortunately, resume doesn't exist</p>
      </div>
    )
  }

  return <ResumeViewer resume={currentResume} />
}
