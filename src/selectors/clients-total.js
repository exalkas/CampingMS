export default (clients) => {
  return clients
      .map((client) => client.amount)
      .reduce((sum, value) => sum + value, 0);
};
