
import React from 'react';
import { Company, useCalculator } from '@/contexts/CalculatorContext';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

interface ComparableCompanyFormProps {
  company: Company;
  index: number;
}

const ComparableCompanyForm = ({ company, index }: ComparableCompanyFormProps) => {
  const { updateComparableCompany, removeComparableCompany } = useCalculator();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = name !== 'name' ? parseFloat(value) || 0 : value;
    
    updateComparableCompany(index, {
      ...company,
      [name]: numericValue,
    });
  };

  return (
    <Card className="calculator-card mb-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-primary">Comparable Company {index + 1}</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeComparableCompany(index)}
          aria-label="Remove company"
        >
          <Trash size={18} className="text-red-500" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor={`name-${index}`} className="text-sm font-medium">
            Company Name
          </label>
          <Input
            id={`name-${index}`}
            name="name"
            value={company.name}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor={`revenue-${index}`} className="text-sm font-medium">
            Revenue (₹)
          </label>
          <Input
            id={`revenue-${index}`}
            name="revenue"
            type="number"
            value={company.revenue}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor={`ebitda-${index}`} className="text-sm font-medium">
            EBITDA (₹)
          </label>
          <Input
            id={`ebitda-${index}`}
            name="ebitda"
            type="number"
            value={company.ebitda}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor={`netIncome-${index}`} className="text-sm font-medium">
            Net Income (₹)
          </label>
          <Input
            id={`netIncome-${index}`}
            name="netIncome"
            type="number"
            value={company.netIncome}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor={`enterpriseValue-${index}`} className="text-sm font-medium">
            Enterprise Value (₹)
          </label>
          <Input
            id={`enterpriseValue-${index}`}
            name="enterpriseValue"
            type="number"
            value={company.enterpriseValue}
            onChange={handleChange}
            className="input-field"
          />
        </div>
      </div>
    </Card>
  );
};

export default ComparableCompanyForm;
