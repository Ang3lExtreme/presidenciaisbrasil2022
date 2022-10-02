import fetch from "node-fetch";

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function elec(){
  fetch("https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json", requestOptions)
  .then(response => response.text())
  .then(result => {
      let r = JSON.parse(result);
      const date = new Date();
      console.log("Data e Hora: "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear() +" "+date.getHours()+":"+date.getMinutes());
      
      r.cand.map(cand => {
        console.log(cand.nm,cand.pvap+"%")
      })
      console.log("\n");

  })
  .catch(error => console.log('error', error));
}
console.log("Eleições presidenciais do Brasil (atualização das votações a cada minuto)"+"\n");
elec();
setInterval(elec,1000*60)
