document.addEventListener('DOMContentLoaded', () => {
  const { jsPDF } = window.jspdf;
  document.getElementById('downloadResume').addEventListener('click', () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('M. Mani Preetham', 10, 10);
    doc.setFontSize(14);
    doc.text('Salesforce Certified Developer', 10, 20);
    doc.save('Mani_Preetam_Resume.pdf');
  });
});
