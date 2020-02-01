const axios = require('axios');

function getRespSize(url) {
  return axios.get(url).then ( resp => {
    const reader = resp.data.getReader();
    let total = 0;
    return reader.read().then(
      function proc(result) {
        if (result.done) return total;
        const value = result.value;
        total+=value.length;
        console.log('Received chunk ',value);
        return reader.read().then(proc);
      }
    )
  }).catch(function(error){
    console.log(error);
  });
}

async function agetRespSize(url) {
  const resp = await axios.get(url);
  const reader = resp.data.getReader();
  let total = 0;
  let result = await reader.read();
  while (!result.done) {
    const value = result.value;
    total += value.length;
    console.log('Recieved chunk ',value);
    result = await reader.read();
  }
  return total;
}

axios.get('https://www.yahoo.com/')
  .then(function (response) {
    // handle success
    console.log(typeof response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('ALWAYS');
  });