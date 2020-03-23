import Operate from './operate';

const Calculate = (data, btn) => {
  const { total, next, operation } = { ...data };
  const { result } = { ...data };

  switch (btn) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (next) {
        result.next = next + btn;
      } else {
        result.next = btn;
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (next) {
        result.total = Operate(operation, total, next).toString();
        result.next = null;
        result.operation = btn;
      } else {
        result.operation = btn;
      }
      break;
    case '+/-':
      if (next) {
        result.next = Operate(btn, next).toString();
      } else {
        result.total = Operate(btn, total).toString();
      }
      break;
    case '%':
      if (next) {
        result.total = Operate(btn, total, next).toString();
        result.next = null;
        result.operation = null;
      } else {
        result.total = null;
        result.next = null;
        result.operation = null;
      }
      break;
    case '=':
      if (next) {
        result.total = Operate(operation, total, next).toString();
        result.next = null;
        result.operation = null;
      } else {
        result.operation = null;
      }
      break;
    case 'AC':
      result.total = null;
      result.next = null;
      result.operation = null;
      break;
    default:
      result.total = null;
      result.next = null;
      result.operation = null;
      break;
  }

  return result;
};

export default Calculate;
