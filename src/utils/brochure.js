export async function downloadBrochure() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const margin = 44
  const width = doc.internal.pageSize.getWidth()
  let y = 60

  doc.setFillColor(255, 255, 255)
  doc.rect(0, 0, width, doc.internal.pageSize.getHeight(), 'F')
  doc.setTextColor(31, 41, 55)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(26)
  doc.text('Kriscel Nut Bolt', margin, y)
  y += 28
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text('Engineering Precision. Delivering Strength.', margin, y)
  y += 32

  const sections = [
    ['Core Capability', 'Automotive fasteners, precision machined components, brake end fittings, and custom cold forged parts.'],
    ['Quality Positioning', 'ISO-aligned documentation, traceability, PPAP support, and safety-focused inspection flows.'],
    ['Manufacturing Scope', 'Cold forging, machining, heat treatment, coating, and export-ready packaging.'],
    ['Industries Served', 'Automotive, railway, construction, heavy machinery, agriculture, and industrial equipment.'],
  ]

  doc.setFontSize(15)
  doc.setFont('helvetica', 'bold')
  sections.forEach(([heading, body]) => {
    doc.text(heading, margin, y)
    y += 16
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(11)
    const lines = doc.splitTextToSize(body, width - margin * 2)
    doc.text(lines, margin, y)
    y += lines.length * 15 + 10
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(15)
  })

  doc.setFontSize(13)
  doc.text('Request quote at the site contact form for local data capture and response.', margin, y)
  doc.save('kriscel-fasteners-brochure.pdf')
}
