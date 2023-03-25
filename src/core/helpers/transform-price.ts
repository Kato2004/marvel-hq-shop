export const transformPrice = (num: number) => {
  return num.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
};
