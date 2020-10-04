import React from 'react';

import { FractinWrapper, Integer, Numerator, FractionLine, Denominator } from './Fraction.css';

const gcd = (a, b) => {
  if (!b) 
    return a;
  return gcd(b, a % b);
}


const parseFraction = fractionStr => {
  const [integer, fraction] = fractionStr.split(' ');
  let numerator, denominator;
  if (fraction) 
    [numerator, denominator] = fraction.split('/');

  return {
    integer: parseInt(integer),
    numerator: parseInt(numerator),
    denominator: parseInt(denominator),
  }
}

const multiplyFraction = (fraction, multiplier) => {  
  if (multiplier === 1) return {...fraction};
  else if (multiplier === 0) return { integer: 0, numerator: 0, denominator: 0};
  else {
    let integer = fraction.integer * multiplier;
    let numerator = fraction.numerator * multiplier;
    let denominator = fraction.denominator;

    const fractionGcd = gcd(numerator, denominator);
    if (fractionGcd !== 1) {
      numerator /= fractionGcd;
      denominator /= fractionGcd;
    }

    while (numerator >= denominator) {
      numerator -= denominator;
      integer++;
    }

    return {
      integer,
      numerator,
      denominator,
    }
  }
}

const Fraction = ({ quantityString = '', multiplier = 1 }) => {
  const rawFraction = parseFraction(quantityString);
  const finalFraction = multiplyFraction(rawFraction, multiplier);

  return (
    <FractinWrapper>
      {finalFraction.integer ? <Integer>{finalFraction.integer}</Integer> : null}
      {finalFraction.numerator ? (
        <>
          <Numerator>{finalFraction.numerator}</Numerator>
          <FractionLine>&#8260;</FractionLine>
          <Denominator>{finalFraction.denominator}</Denominator>
        </>
      ) : null}
    </FractinWrapper>
  )
}

export default Fraction;