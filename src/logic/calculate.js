import Operate from './operate';

const Calculate = (data, btn) => {
  const { total, next, operation } = { ...data };
  const result = { ...data };

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
        result.next += btn;
        result.current += btn;
      } else {
        result.next = btn;
        result.current = btn;
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (next && total) {
        result.total = Operate(operation, total, next).toString();
        result.next = null;
        result.operation = btn;
        result.current = result.total;
      } else if (!next && total) {
        result.operation = btn;
        result.current = btn;
      } else if (next && !total) {
        result.total = next;
        result.next = null;
        result.operation = btn;
        result.current = btn;
      } else {
        result.total = null;
        result.next = null;
        result.operation = null;
        result.current = '0';
      }
      break;
    case '+/-':
      if (next && !total) {
        result.next = Operate(btn, next).toString();
        result.current = result.next;
      } else if (total && !next) {
        result.total = Operate(btn, total).toString();
        result.current = result.total;
      } else if (total && next) {
        result.total = Operate(btn, Operate(operation, total, next)).toString();
        result.operation = null;
        result.next = null;
        result.current = result.total;
      } else {
        result.total = null;
        result.next = null;
        result.operation = null;
        result.current = '0';
      }
      break;
    case '%':
      if ((total && !next) || (!total && next)) {
        result.total = '0';
        result.operation = null;
        result.current = result.total;
      } else if (total && next) {
        result.total = Operate(operation, total, Operate(btn, total, next)).toString();
        result.next = null;
        result.operation = null;
        result.current = result.total;
      } else {
        result.total = null;
        result.next = null;
        result.operation = null;
        result.current = '0';
      }
      break;
    case '=':
      if (next && total) {
        result.total = Operate(operation, total, next).toString();
        result.next = null;
        result.operation = null;
        result.current = result.total;
      } else {
        result.operation = null;
        result.current = total || (next || '0');
      }
      break;
    case 'AC':
      result.total = null;
      result.next = null;
      result.operation = null;
      result.current = '0';
      break;
    default:
      result.total = null;
      result.next = null;
      result.operation = null;
      result.current = null;
      break;
  }

  return result;
};

export default Calculate;
