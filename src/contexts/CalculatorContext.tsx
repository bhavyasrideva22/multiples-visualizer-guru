
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Company {
  name: string;
  revenue: number;
  ebitda: number;
  netIncome: number;
  enterpriseValue: number;
}

export interface TargetCompany {
  name: string;
  revenue: number;
  ebitda: number;
  netIncome: number;
}

export interface ValuationResult {
  evToRevenue: number;
  evToEbitda: number;
  peRatio: number;
  targetEvRevenue: number;
  targetEvEbitda: number;
  targetEquityValue: number;
  averageEnterpriseValue: number;
  averageEquityValue: number;
}

interface CalculatorContextType {
  comparableCompanies: Company[];
  targetCompany: TargetCompany;
  valuationResult: ValuationResult | null;
  setComparableCompanies: (companies: Company[]) => void;
  addComparableCompany: (company: Company) => void;
  updateComparableCompany: (index: number, company: Company) => void;
  removeComparableCompany: (index: number) => void;
  setTargetCompany: (company: TargetCompany) => void;
  calculateValuation: () => void;
  targetDebt: number;
  targetCash: number;
  setTargetDebt: (debt: number) => void;
  setTargetCash: (cash: number) => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};

interface CalculatorProviderProps {
  children: ReactNode;
}

export const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
  const [comparableCompanies, setComparableCompanies] = useState<Company[]>([
    {
      name: 'Company 1',
      revenue: 1000000000,
      ebitda: 250000000,
      netIncome: 150000000,
      enterpriseValue: 5000000000,
    },
    {
      name: 'Company 2',
      revenue: 800000000,
      ebitda: 180000000,
      netIncome: 100000000,
      enterpriseValue: 4000000000,
    },
  ]);

  const [targetCompany, setTargetCompany] = useState<TargetCompany>({
    name: 'Target Company',
    revenue: 500000000,
    ebitda: 120000000,
    netIncome: 70000000,
  });

  const [targetDebt, setTargetDebt] = useState<number>(100000000);
  const [targetCash, setTargetCash] = useState<number>(50000000);
  const [valuationResult, setValuationResult] = useState<ValuationResult | null>(null);

  const addComparableCompany = (company: Company) => {
    setComparableCompanies([...comparableCompanies, company]);
  };

  const updateComparableCompany = (index: number, company: Company) => {
    const updatedCompanies = [...comparableCompanies];
    updatedCompanies[index] = company;
    setComparableCompanies(updatedCompanies);
  };

  const removeComparableCompany = (index: number) => {
    const updatedCompanies = comparableCompanies.filter((_, i) => i !== index);
    setComparableCompanies(updatedCompanies);
  };

  const calculateValuation = () => {
    // Calculate average multiples
    let totalEvToRevenue = 0;
    let totalEvToEbitda = 0;
    let totalPeRatio = 0;

    comparableCompanies.forEach((company) => {
      totalEvToRevenue += company.enterpriseValue / company.revenue;
      totalEvToEbitda += company.enterpriseValue / company.ebitda;
      totalPeRatio += company.enterpriseValue / company.netIncome;
    });

    const avgEvToRevenue = totalEvToRevenue / comparableCompanies.length;
    const avgEvToEbitda = totalEvToEbitda / comparableCompanies.length;
    const avgPeRatio = totalPeRatio / comparableCompanies.length;

    // Calculate target company valuation
    const targetEvRevenue = avgEvToRevenue * targetCompany.revenue;
    const targetEvEbitda = avgEvToEbitda * targetCompany.ebitda;
    const targetEquityValue = avgPeRatio * targetCompany.netIncome;

    // Calculate enterprise value
    const avgEnterpriseValue = (targetEvRevenue + targetEvEbitda) / 2;
    
    // Calculate equity value (Enterprise Value - Debt + Cash)
    const avgEquityValue = avgEnterpriseValue - targetDebt + targetCash;

    // Set the results
    setValuationResult({
      evToRevenue: avgEvToRevenue,
      evToEbitda: avgEvToEbitda,
      peRatio: avgPeRatio,
      targetEvRevenue,
      targetEvEbitda,
      targetEquityValue,
      averageEnterpriseValue: avgEnterpriseValue,
      averageEquityValue: avgEquityValue,
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        comparableCompanies,
        targetCompany,
        valuationResult,
        setComparableCompanies,
        addComparableCompany,
        updateComparableCompany,
        removeComparableCompany,
        setTargetCompany,
        calculateValuation,
        targetDebt,
        targetCash,
        setTargetDebt,
        setTargetCash,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
