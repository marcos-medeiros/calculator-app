import Operate from './operate';

const Calculate = (data, btn) => {
  const result = { ...data };

  if (btn !== 'AC' && btn !== '=') {
    result.total = Operate(data.total, data.next, btn);
    result.next = 0;
    result.operation = '';
  }
  return result;
};

export default Calculate;
