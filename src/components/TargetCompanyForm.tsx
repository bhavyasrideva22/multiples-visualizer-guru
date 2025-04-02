
import React from 'react';
import { useCalculator } from '@/contexts/CalculatorContext';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const TargetCompanyForm = () => {
  const { targetCompany, setTargetCompany, targetDebt, targetCash, setTargetDebt, setTargetCash } = useCalculator();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = name !== 'name' ? parseFloat(value) || 0 : value;
    
    setTargetCompany({
      ...targetCompany,
      [name]: numericValue,
    });
  };

  const handleBalanceSheetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value) || 0;
    
    if (name === 'debt') {
      setTargetDebt(numericValue);
    } else if (name === 'cash') {
      setTargetCash(numericValue);
    }
  };

  return (
    <Card className="calculator-card mb-6 bg-gradient-to-br from-primary/5 to-secondary/5 animate-fade-in">
      <h3 className="text-xl font-semibold text-primary mb-4">Target Company</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="target-name" className="text-sm font-medium">
            Company Name
          </label>
          <Input
            id="target-name"
            name="name"
            value={targetCompany.name}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="target-revenue" className="text-sm font-medium">
            Revenue (₹)
          </label>
          <Input
            id="target-revenue"
            name="revenue"
            type="number"
            value={targetCompany.revenue}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="target-ebitda" className="text-sm font-medium">
            EBITDA (₹)
          </label>
          <Input
            id="target-ebitda"
            name="ebitda"
            type="number"
            value={targetCompany.ebitda}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="target-netIncome" className="text-sm font-medium">
            Net Income (₹)
          </label>
          <Input
            id="target-netIncome"
            name="netIncome"
            type="number"
            value={targetCompany.netIncome}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="target-debt" className="text-sm font-medium">
            Total Debt (₹)
          </label>
          <Input
            id="target-debt"
            name="debt"
            type="number"
            value={targetDebt}
            onChange={handleBalanceSheetChange}
            className="input-field"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="target-cash" className="text-sm font-medium">
            Cash & Equivalents (₹)
          </label>
          <Input
            id="target-cash"
            name="cash"
            type="number"
            value={targetCash}
            onChange={handleBalanceSheetChange}
            className="input-field"
          />
        </div>
      </div>
    </Card>
  );
};

export default TargetCompanyForm;
