export default (clients) => {
  return clients
      .map((client) => client.amount)
      .reduce((sum, value) => sum + value, 0);
};

// const countDianiktereuseis= (clients) => {
//   return clients
//   .map((client)=> client.dianikterefseis)
//   .reduce((sum,value) => sum+value,0);
// }


//Calculates total Dianiktereuseis
const countDianiktereuseis =(clients) => {
  let total=0;
  let num;

  clients.forEach(element => {
    
    num=parseInt(element.dianikterefseis,10);

    if (!isNaN(num) && num!=null) {
      total+=num;  
    }
  });

 return total;

}


//Calculates total from totals columns
const countTotal =(clients) => {
  let total=0;
  let num;

  clients.forEach(element => {
    num=parseInt(element.total,10);
    if (!isNaN(num) && num!=null) {
      total+=num;  
    }
  });

 return total;
}

export {countDianiktereuseis};
export {countTotal};