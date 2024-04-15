const express = require('express');
const { getCityFromZipcode } = require('utils-playground');

const app = express();

app.get('/', async (req, res) => {
    const cidade = await getCityFromZipcode('40231015');
    const cidade2 = await getCityFromZipcode('44700000');
    
    const promise = await Promise.all([cidade, cidade2]);

    const [ resposta1, resposta2 ] = promise;
    res.send(`A cidade encontrada foi: ${resposta2} e ${resposta1}`);
});

app.listen(3000);