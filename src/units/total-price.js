export const totalprice = (arr) => {
    return arr.reduce((a, c) => a + c.price * c.quantity, 0);
  };
  