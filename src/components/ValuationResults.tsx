
import React from 'react';
import { useCalculator } from '@/contexts/CalculatorContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { formatCurrency, formatMultiple, formatPercentage, formatIndianLakhs } from '@/utils/formatters';
import { useToast } from '@/components/ui/use-toast';

const ValuationResults = () => {
  const { valuationResult, comparableCompanies, targetCompany, targetDebt, targetCash } = useCalculator();
  const { toast } = useToast();

  if (!valuationResult) return null;

  // Generate data for charts
  const multipleData = [
    {
      name: 'EV/Revenue',
      value: valuationResult.evToRevenue,
      fill: '#245e4f',
    },
    {
      name: 'EV/EBITDA',
      value: valuationResult.evToEbitda,
      fill: '#7ac9a7',
    },
    {
      name: 'P/E',
      value: valuationResult.peRatio,
      fill: '#e9c46a',
    },
  ];

  const valuationData = [
    {
      name: 'Revenue Based',
      value: valuationResult.targetEvRevenue,
      fill: '#245e4f',
    },
    {
      name: 'EBITDA Based',
      value: valuationResult.targetEvEbitda,
      fill: '#7ac9a7',
    },
    {
      name: 'P/E Based',
      value: valuationResult.targetEquityValue,
      fill: '#e9c46a',
    },
  ];

  const enterpriseValueData = [
    {
      name: 'Enterprise Value',
      value: valuationResult.averageEnterpriseValue,
    },
    {
      name: 'Debt',
      value: -targetDebt,
    },
    {
      name: 'Cash',
      value: targetCash,
    },
  ];

  // Colors for the pie chart
  const COLORS = ['#245e4f', '#7ac9a7', '#e9c46a', '#4a8fe7'];

  const handleDownloadPDF = () => {
    toast({
      title: "PDF Generation Started",
      description: "Your valuation report is being prepared for download.",
      duration: 3000,
    });
    
    // In a real implementation, this would generate and download a PDF
    setTimeout(() => {
      toast({
        title: "PDF Downloaded",
        description: "Your valuation report has been downloaded successfully.",
        duration: 3000,
      });
    }, 1500);
  };

  const handleEmailReport = () => {
    toast({
      title: "Preparing Email",
      description: "Setting up your valuation report for email delivery.",
      duration: 3000,
    });
    
    // In a real implementation, this would open an email dialog or send directly
    setTimeout(() => {
      toast({
        title: "Email Sent",
        description: "Your valuation report has been sent to your email address.",
        duration: 3000,
      });
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="calculator-card bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-primary">Valuation Results</h3>
          <div className="flex space-x-2">
            <Button onClick={handleEmailReport} variant="outline" className="flex items-center">
              <Mail size={16} className="mr-2" />
              Email
            </Button>
            <Button onClick={handleDownloadPDF} variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center">
              <Download size={16} className="mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium mb-2 text-primary">Key Valuation Multiples</h4>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">EV/Revenue:</span>
                  <span>{formatMultiple(valuationResult.evToRevenue)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">EV/EBITDA:</span>
                  <span>{formatMultiple(valuationResult.evToEbitda)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">P/E Ratio:</span>
                  <span>{formatMultiple(valuationResult.peRatio)}</span>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-medium mt-6 mb-2 text-primary">Target Company Valuation</h4>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Revenue Based EV:</span>
                  <span>{formatCurrency(valuationResult.targetEvRevenue)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">EBITDA Based EV:</span>
                  <span>{formatCurrency(valuationResult.targetEvEbitda)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">P/E Based Value:</span>
                  <span>{formatCurrency(valuationResult.targetEquityValue)}</span>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-medium mt-6 mb-2 text-primary">Final Valuation</h4>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Enterprise Value:</span>
                  <span>{formatCurrency(valuationResult.averageEnterpriseValue)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Less: Total Debt:</span>
                  <span>({formatCurrency(targetDebt)})</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Add: Cash & Equivalents:</span>
                  <span>{formatCurrency(targetCash)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-bold">Equity Value:</span>
                  <span className="font-bold text-primary">{formatCurrency(valuationResult.averageEquityValue)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-2 text-primary">Valuation Multiples Chart</h4>
              <div className="bg-white p-4 rounded-md shadow-sm h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={multipleData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value.toFixed(2)}x`, 'Multiple']} />
                    <Bar dataKey="value" name="Multiple">
                      {multipleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2 text-primary">Valuation Approaches</h4>
              <div className="bg-white p-4 rounded-md shadow-sm h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={valuationData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label={({ name, percent }) => `${name}: ${formatPercentage(percent)}`}
                    >
                      {valuationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [formatCurrency(value), 'Value']} />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ValuationResults;
