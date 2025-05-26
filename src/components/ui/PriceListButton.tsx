
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { generatePriceListPDF } from '@/utils/pdfUtils';

const PriceListButton = () => {
  const handleDownload = () => {
    generatePriceListPDF();
  };

  return (
    <Button
      onClick={handleDownload}
      className="fixed bottom-6 left-6 bg-primary hover:bg-red-700 text-white rounded-full p-4 shadow-lg z-50 flex items-center gap-2"
      aria-label="Download Price List"
    >
      <FileText className="w-5 h-5" />
      <span className="hidden sm:inline">Price List</span>
    </Button>
  );
};

export default PriceListButton;
