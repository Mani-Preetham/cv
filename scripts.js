document.getElementById('downloadResume').addEventListener('click', function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text('M. Mani Preetham — Salesforce Certified Developer', 10, 10);
  doc.setFontSize(11);
  doc.text('Email: manipreetham512@gmail.com | Phone: +91 9381332255', 10, 20);
  doc.text('Professional Summary:', 10, 30);
  doc.text('Salesforce Certified Developer with 3+ years in Apex, LWC, Flows, Sales Cloud, integration, and automation.', 10, 36, { maxWidth: 190 });
  doc.save('Mani_Preetham_Resume.pdf');
});