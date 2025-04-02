
export const formatCurrency = (value: number): string => {
  // Format currency in Indian Rupees
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercentage = (value: number): string => {
  return (value * 100).toFixed(2) + '%';
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-IN').format(value);
};

export const formatMultiple = (value: number): string => {
  return value.toFixed(2) + 'x';
};

// Function to determine a readable format for large numbers (crore/lakh)
export const formatIndianLakhs = (value: number): string => {
  if (value >= 10000000) { // 1 crore or more
    const crores = value / 10000000;
    return `${crores.toFixed(2)} Cr`;
  } else if (value >= 100000) { // 1 lakh or more
    const lakhs = value / 100000;
    return `${lakhs.toFixed(2)} L`;
  } else {
    return new Intl.NumberFormat('en-IN').format(value);
  }
};
