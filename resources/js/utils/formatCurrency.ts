type TypeCurrency = 'EUR' | 'USD';

interface IFormatCurrency {
  price: string | number
  currency: TypeCurrency
}

const formatCurrency = ({price, currency}: IFormatCurrency): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
  }).format(Number(price));
};

export default formatCurrency