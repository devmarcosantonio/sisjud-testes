interface UserData {
  nomeCliente: string;
  numeroProcesso: string;
  empresa: string;
  valorSentenca: string;
  uc: string;
}

export const allData: UserData[] = Array.from({ length: 30 }, (_, index) => ({
  nomeCliente: `Cliente ${index + 1}`,
  numeroProcesso: `${100000 + index}/2025`,
  empresa: `Equatorial ${['MA', 'PI', 'PA'][index % 3]}`,
  valorSentenca: `R$ ${(Math.random() * 20000 + 1000).toFixed(2).replace('.', ',')}`,
  uc: `UC${String(index + 1).padStart(4, '0')}`,
}));