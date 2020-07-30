import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/globalStyles';
import { Container, Zeros, Title, Paragraph, Input, Result } from './styles';

function App() {
  const [number, setNumber] = useState('');
  const [decimal, setDecimal] = useState(0);

  function bin2dec(n) {
    const dec = parseInt(n, 2);
    if (Number.isNaN(dec)) {
      setDecimal('');
    } else {
      setDecimal(dec);
    }
  }

  useEffect(() => {
    bin2dec(number);
  }, [number]);

  function handleChange(e) {
    const { value } = e.target;
    const { length } = value;
    if (
      value[length - 1] === '0' ||
      value[length - 1] === '1' ||
      value === ''
    ) {
      setNumber(value);
    }
  }

  return (
    <Container>
      <GlobalStyles />
      <div>
        <Zeros>000</Zeros>
        <Title>Bin2Dec</Title>
        <Zeros>000</Zeros>
      </div>
      <Paragraph>Enter a binary number, get a decimal conversion.</Paragraph>
      <div style={{ width: '100%' }}>
        <Input name="number" value={number} onChange={handleChange} />
      </div>
      <div>
        <Result>{decimal}</Result>
      </div>
    </Container>
  );
}

export default App;
