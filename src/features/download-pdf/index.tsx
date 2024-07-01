import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const downloadPDF = async (elementId: string, candidateFullName: string) => {
  const input = document.getElementById(elementId)

  if (!input) {
    return
  }

  await html2canvas(input, { scale: 3 }).then(canvas => {
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const imgProps = pdf.getImageProperties(imgData)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(`${candidateFullName} - resume.pdf`)
  })
}

export default downloadPDF
