
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Calculator } from 'lucide-react';
import { CalculatorProvider, useCalculator } from '@/contexts/CalculatorContext';
import ComparableCompanyForm from '@/components/ComparableCompanyForm';
import TargetCompanyForm from '@/components/TargetCompanyForm';
import ValuationResults from '@/components/ValuationResults';
import CalculatorExplanation from '@/components/CalculatorExplanation';
import { Toaster } from '@/components/ui/toast';

const CalculatorContent = () => {
  const { comparableCompanies, addComparableCompany, calculateValuation, valuationResult } = useCalculator();
  const [showResults, setShowResults] = useState(false);

  const handleAddCompany = () => {
    addComparableCompany({
      name: `Company ${comparableCompanies.length + 1}`,
      revenue: 0,
      ebitda: 0,
      netIncome: 0,
      enterpriseValue: 0,
    });
  };

  const handleCalculate = () => {
    calculateValuation();
    setShowResults(true);
    window.scrollTo({
      top: document.getElementById('results')?.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary mb-4">Valuation Multiples Calculator</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate company valuations using the Comparables method with this interactive tool. Enter your data below to get started.
        </p>
      </div>

      <div className="mb-10 animate-slide-up" style={{ animationDelay: '200ms' }}>
        <h2 className="text-2xl font-bold text-primary mb-6">Comparable Companies</h2>
        
        {comparableCompanies.map((company, index) => (
          <ComparableCompanyForm key={index} company={company} index={index} />
        ))}
        
        <div className="mt-4">
          <Button 
            onClick={handleAddCompany} 
            variant="outline" 
            className="flex items-center border-dashed border-2 hover:bg-secondary/10"
          >
            <Plus size={16} className="mr-2" />
            Add Comparable Company
          </Button>
        </div>
      </div>

      <div className="mb-10 animate-slide-up" style={{ animationDelay: '400ms' }}>
        <h2 className="text-2xl font-bold text-primary mb-6">Target Company</h2>
        <TargetCompanyForm />
        
        <div className="mt-8">
          <Button 
            onClick={handleCalculate} 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center px-6 py-5 text-lg"
          >
            <Calculator size={20} className="mr-2" />
            Calculate Valuation
          </Button>
        </div>
      </div>

      <div id="results">
        {valuationResult && <ValuationResults />}
      </div>

      <CalculatorExplanation />
    </div>
  );
};

const Index = () => {
  return (
    <CalculatorProvider>
      <CalculatorContent />
    </CalculatorProvider>
  );
};

export default Index;
