
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { generatePriceListPDF } from '@/utils/pdfUtils';

const PriceListButton = () => {
  const handleDownloadPriceList = () => {
    generatePriceListPDF();
  };

  return (
    <div className="fixed bottom-20 left-4 z-40">
      <Button
        onClick={handleDownloadPriceList}
        className="bg-primary hover:bg-red-700 text-white rounded-full shadow-lg flex items-center gap-2 px-4 py-2"
      >
        <FileText size={20} />
        <span className="hidden sm:inline">Price List</span>
      </Button>
    </div>
  );
};

export default PriceListButton;
