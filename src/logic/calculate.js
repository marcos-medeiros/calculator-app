import Operate from './operate';

const Calculate = (data, btn) => {
<<<<<<< HEAD
=======
  const { total, next, operation } = { ...data };
>>>>>>> milestone-4
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
<<<<<<< HEAD
      if (data.next) {
=======
    case '.':
      if (next) {
>>>>>>> milestone-4
        result.next += btn;
        result.current += btn;
      } else {
        result.next = btn;
        result.current = btn;
<<<<<<< HEAD
      }
      break;
    case '.':
      if (data.next) {
        result.next += btn;
        result.current += btn;
      } else {
        result.next = '0.';
        result.current = '0.';
=======
>>>>>>> milestone-4
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
<<<<<<< HEAD
      if (data.next && data.total) {
        result.total = Operate(data.operation, data.total, data.next).toString();
        result.next = null;
        result.operation = btn;
        result.current = result.total;
      } else if (!data.next && data.total) {
        result.operation = btn;
        result.current = btn;
      } else if (data.next && !data.total) {
        result.total = data.next;
        result.next = null;
        result.operation = btn;
        result.current = btn;
=======
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
>>>>>>> milestone-4
      } else {
        result.total = null;
        result.next = null;
        result.operation = null;
        result.current = '0';
      }
      break;
    case '+/-':
<<<<<<< HEAD
      if (data.next && !data.total) {
        result.next = Operate(btn, data.next).toString();
        result.current = result.next;
      } else if (data.total && !data.next) {
        result.total = Operate(btn, data.total).toString();
        result.current = result.total;
      } else if (data.total && data.next) {
        result.total = Operate(btn, Operate(data.operation, data.total, data.next)).toString();
=======
      if (next && !total) {
        result.next = Operate(btn, next).toString();
        result.current = result.next;
      } else if (total && !next) {
        result.total = Operate(btn, total).toString();
        result.current = result.total;
      } else if (total && next) {
        result.total = Operate(btn, Operate(operation, total, next)).toString();
>>>>>>> milestone-4
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
<<<<<<< HEAD
      if ((data.total && !data.next) || (!data.total && data.next)) {
        result.total = Operate(btn, (data.total || data.next)).toString();
        result.operation = null;
        result.next = null;
        result.current = result.total;
      } else if (data.total && data.next) {
        result.total = Operate(data.operation, data.total,
          Operate(btn, data.total, data.next)).toString();
=======
      if ((total && !next) || (!total && next)) {
        result.total = Operate(btn, (total || next)).toString();
        result.operation = null;
        result.next = null;
        result.current = result.total;
      } else if (total && next) {
        result.total = Operate(operation, total, Operate(btn, total, next)).toString();
>>>>>>> milestone-4
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
<<<<<<< HEAD
      if (data.next && data.total) {
        result.total = Operate(data.operation, data.total, data.next).toString();
=======
      if (next && total) {
        result.total = Operate(operation, total, next).toString();
>>>>>>> milestone-4
        result.next = null;
        result.operation = null;
        result.current = result.total;
      } else {
        result.operation = null;
<<<<<<< HEAD
        result.current = data.total || (data.next || '0');
=======
        result.current = total || (next || '0');
>>>>>>> milestone-4
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
