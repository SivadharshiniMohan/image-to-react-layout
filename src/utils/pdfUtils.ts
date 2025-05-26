
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { newMockData } from '@/data/newMockData';

export const generatePriceListPDF = () => {
  const doc = new jsPDF();
  
  // Add header
  doc.setFontSize(18);
  doc.setTextColor(220, 38, 127); // Primary color
  doc.text('K2G Crackers - Price List', 20, 20);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Sivakasi, Tamil Nadu', 20, 30);
  doc.text('Phone: +91 75502 29158, +91 63830 78082', 20, 38);
  doc.text('Email: k2gcrackers@gmail.com', 20, 46);
  
  let yPosition = 60;
  
  // Generate table for each category
  Object.entries(newMockData).forEach(([category, products]) => {
    // Category header
    doc.setFontSize(14);
    doc.setFillColor(220, 38, 127); // Red background
    doc.setTextColor(255, 255, 255); // White text
    doc.rect(20, yPosition, 170, 8, 'F');
    doc.text(category, 105, yPosition + 5, { align: 'center' });
    
    yPosition += 15;
    
    // Table data
    const tableData = products.map(product => [
      product.name,
      `₹${product.actualPrice}`,
      `₹${product.discountPrice}`
    ]);
    
    (doc as any).autoTable({
      startY: yPosition,
      head: [['Product Name', 'Actual Price', 'Discount Price']],
      body: tableData,
      headStyles: {
        fillColor: [240, 240, 240],
        textColor: [0, 0, 0],
        fontStyle: 'bold'
      },
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      margin: { left: 20, right: 20 }
    });
    
    yPosition = (doc as any).lastAutoTable.finalY + 10;
    
    // Check if we need a new page
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
  });
  
  // Save the PDF
  doc.save('K2G-Crackers-Price-List.pdf');
};
