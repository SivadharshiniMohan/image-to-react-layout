
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { generatePriceListPDF } from '@/utils/pdfUtils';

const PriceListButton = () => {
  const handleDownloadPriceList = () => {
    generatePriceListPDF();
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Button
        onClick={handleDownloadPriceList}
        className="bg-primary hover:bg-red-700 text-white shadow-lg"
        size="lg"
      >
        <Download className="w-4 h-4 mr-2" />
        Price List
      </Button>
    </div>
  );
};

export default PriceListButton;
