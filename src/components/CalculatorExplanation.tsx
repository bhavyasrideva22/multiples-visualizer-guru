
import React from 'react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CalculatorExplanation = () => {
  return (
    <Card className="calculator-card mt-10">
      <h2 className="text-2xl font-bold text-primary mb-4">Understanding Valuation Multiples & Comparables</h2>
      
      <div className="prose prose-green max-w-none">
        <p className="text-base">
          The Valuation Multiples Calculator helps investors, financial analysts, business owners, and M&A professionals determine the value of a company by comparing it to similar businesses in the market. This method, known as the Comparables Method or "Comps," is one of the most widely used valuation approaches in finance and investment banking.
        </p>
        
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="what-are-multiples">
            <AccordionTrigger className="text-lg font-medium text-primary">What are Valuation Multiples?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">
                Valuation multiples are financial metrics that relate the market value of an asset to a specific financial metric like revenue, EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization), or net income. These multiples serve as standardized measures that allow for comparisons between companies of different sizes.
              </p>
              <p>
                The most commonly used valuation multiples include:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-3">
                <li><strong>EV/Revenue</strong>: Enterprise Value to Revenue ratio - useful for companies with negative earnings or high growth potential.</li>
                <li><strong>EV/EBITDA</strong>: Enterprise Value to EBITDA ratio - provides insight into operating performance while neutralizing differences in depreciation policies and capital structures.</li>
                <li><strong>P/E Ratio</strong>: Price to Earnings ratio - measures the market price per share relative to annual earnings per share.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="comparables-method">
            <AccordionTrigger className="text-lg font-medium text-primary">The Comparables Method Explained</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">
                The Comparables Method, also known as "Trading Multiples" or "Public Company Comparables," determines a company's value by comparing it to similar publicly traded companies or recent transactions in the same industry.
              </p>
              <p className="mb-3">
                This method follows several key steps:
              </p>
              <ol className="list-decimal pl-6 mb-3">
                <li><strong>Identify Comparable Companies</strong>: Select businesses with similar characteristics to the target company (industry, size, growth rate, geography, business model).</li>
                <li><strong>Gather Financial Information</strong>: Collect key financial data (revenue, EBITDA, net income) for each comparable company.</li>
                <li><strong>Calculate Valuation Multiples</strong>: Derive relevant multiples like EV/Revenue, EV/EBITDA, and P/E ratio for each comparable company.</li>
                <li><strong>Apply Multiples to Target</strong>: Calculate average multiples and apply them to the target company's financial metrics.</li>
                <li><strong>Determine Enterprise Value</strong>: This represents the total value of the business, including debt.</li>
                <li><strong>Calculate Equity Value</strong>: Subtract debt and add cash to find the shareholder value (Enterprise Value - Debt + Cash).</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="benefits-limitations">
            <AccordionTrigger className="text-lg font-medium text-primary">Benefits and Limitations</AccordionTrigger>
            <AccordionContent>
              <h4 className="font-semibold mt-2 mb-2">Benefits:</h4>
              <ul className="list-disc pl-6 mb-3">
                <li>Simple and intuitive methodology that's widely accepted in the financial industry</li>
                <li>Based on actual market valuations rather than theoretical assumptions</li>
                <li>Incorporates market sentiment and industry trends</li>
                <li>Can be applied even with limited financial information</li>
                <li>Useful for quick preliminary valuations</li>
              </ul>
              
              <h4 className="font-semibold mt-4 mb-2">Limitations:</h4>
              <ul className="list-disc pl-6 mb-3">
                <li>Finding truly comparable companies can be challenging</li>
                <li>Market valuations may not always reflect intrinsic value</li>
                <li>Does not account for company-specific factors or future growth potential</li>
                <li>Sensitive to market conditions and timing</li>
                <li>May not be suitable as the sole valuation method</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="when-to-use">
            <AccordionTrigger className="text-lg font-medium text-primary">When to Use This Calculator</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">
                The Valuation Multiples Calculator is particularly useful in the following scenarios:
              </p>
              <ul className="list-disc pl-6 mb-3">
                <li><strong>Mergers & Acquisitions</strong>: Determining appropriate purchase prices for target companies</li>
                <li><strong>Investment Decision-Making</strong>: Evaluating potential investment opportunities</li>
                <li><strong>Business Valuation</strong>: Assessing the market value of private companies</li>
                <li><strong>IPO Pricing</strong>: Determining initial public offering price ranges</li>
                <li><strong>Strategic Planning</strong>: Understanding how potential corporate actions might impact valuation</li>
                <li><strong>Equity Research</strong>: Analyzing whether public companies are overvalued or undervalued</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="industry-specific">
            <AccordionTrigger className="text-lg font-medium text-primary">Industry-Specific Considerations</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">
                Different industries typically use different valuation multiples based on their business characteristics:
              </p>
              <ul className="list-disc pl-6 mb-3">
                <li><strong>Technology & Software</strong>: Revenue multiples are common due to high growth and sometimes negative earnings</li>
                <li><strong>Manufacturing & Industrial</strong>: EBITDA multiples are preferred as they focus on operating efficiency</li>
                <li><strong>Financial Services</strong>: Price-to-Book (P/B) ratios are widely used due to the nature of assets</li>
                <li><strong>Retail</strong>: EV/EBITDA and revenue multiples are both considered important</li>
                <li><strong>Real Estate</strong>: Specialized metrics like Price-to-FFO (Funds From Operations) are more relevant</li>
                <li><strong>Healthcare</strong>: Often uses EBITDA multiples with adjustments for R&D expenses</li>
              </ul>
              <p>
                When using this calculator, consider incorporating industry-specific insights to refine your valuation approach.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default CalculatorExplanation;
