
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const PaymentInfo = () => {
  const [copiedField, setCopiedField] = useState<string>('');

  const bankAccounts = [
    {
      name: "KARANRAJ A",
      bank: "TMB",
      accountNumber: "52115005080001165",
      ifscCode: "TMBL0000521",
      micrCode: "626060312", 
      branch: "MEENAMPATTI",
      accountType: "Current Account",
      googlePay: "+91 75502 29158"
    },
    {
      name: "GOKUL KANNAN K",
      bank: "BANK OF BARODA",
      accountNumber: "33090100018035",
      ifscCode: "BARB0SIVAKA",
      micrCode: "626012002",
      branch: "SIVAKASI MAIN BRANCH", 
      accountType: "Savings Account",
      googlePay: "+91 63830 78082"
    },
    {
      name: "GANESHKUMAR M",
      bank: "TMB",
      accountNumber: "52115005080001166",
      ifscCode: "TMBL0000521",
      micrCode: "626060312",
      branch: "MEENAMPATTI",
      accountType: "Current Account",
      googlePay: "+91 75502 29159"
    }
  ];

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      toast({
        title: "Copied!",
        description: `${fieldName} copied to clipboard`,
      });
      setTimeout(() => setCopiedField(''), 2000);
    });
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Payment Information</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose any of the following payment methods for your orders. We accept bank transfers and digital payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bankAccounts.map((account, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary text-white p-4">
                <CardTitle className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold">{account.name}</div>
                    <div className="text-sm opacity-90">{account.bank}</div>
                  </div>
                  <div className="text-white">
                    <Copy className="h-4 w-4" />
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Account Number</p>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{account.accountNumber}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(account.accountNumber, 'Account Number')}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">IFSC Code</p>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{account.ifscCode}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(account.ifscCode, 'IFSC Code')}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">MICR Code</p>
                    <p className="font-semibold">{account.micrCode}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Branch</p>
                    <p className="font-semibold">{account.branch}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Type</p>
                    <p className="font-semibold">{account.accountType}</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">🟢 Google Pay</span>
                      <span className="font-semibold">{account.googlePay}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(account.googlePay, 'Google Pay')}
                      className="h-6 w-6 p-0"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">Payment Instructions</h3>
            <ul className="text-sm text-blue-700 space-y-1 text-left">
              <li>• Transfer the exact order amount to any of the above accounts</li>
              <li>• Share the payment screenshot via WhatsApp for confirmation</li>
              <li>• Orders will be processed after payment verification</li>
              <li>• For Google Pay, use the provided mobile numbers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
