import Big from 'big-js';

const Operate = (operation, num1, num2 = '0') => {
  let result = '';

  const big1 = Big(num1);
  const big2 = Big(num2);

  if (operation === '+') {
    result = big1.plus(big2);
  } else if (operation === '-') {
    result = big1.minus(big2);
  } else if (operation === 'x') {
    result = big1.times(big2);
  } else if (operation === '÷') {
    if (big1 === 0 || big2 === 0) {
      result = 0;
    } else {
      result = big1.div(big2);
    }
  } else if (operation === '+/-') {
    result = big1.times(-1);
  } else if (operation === '%') {
    result = big1.times(big2.div(100));
  }
  return result;
};

export default Operate;
