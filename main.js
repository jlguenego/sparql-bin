#!/usr/bin/env node

const axios = require('axios');
const fs = require('fs');
const endPoint = 'https://query.wikidata.org/bigdata/namespace/wdq/sparql';

if (process.argv < 3) {
    console.error('I need at least one file which contains a SPARQL request.');
    process.exit(1);
}

const filename = process.argv[2];
const sparql = encodeURIComponent(fs.readFileSync(filename));

axios.get(endPoint + `?query=${sparql}`, {
    headers: {
        Accept: 'text/csv'
    }
}).then(response => {
    if (process.argv[3]) {
        fs.writeFileSync(process.argv[3], response.data);
        return;
    }
    console.log(response.data);
}).catch(error => {
    console.log('error', error);
});