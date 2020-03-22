import Big from 'big-js';

const Operate = (num1, num2 = 0, operation) => {
  let result;
  if (operation === '+') {
    const big1 = new Big(num1);
    result = (big1.plus(num2));
  } if (operation === '-') {
    const big1 = new Big(num1);
    result = (big1.minus(num2));
  } if (operation === 'x') {
    const big1 = new Big(num1);
    result = (big1.times(num2));
  } if (operation === '÷') {
    const big1 = new Big(num1);
    result = (big1.div(num2));
  } if (operation === '+/-') {
    const big1 = new Big(num1);
    result = (big1.times(-1));
  } if (operation === '%') {
    const big1 = new Big(num1);
    result = (big1.div(100).times(num2));
  }
  return result;
};

export default Operate;
