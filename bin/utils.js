const fetch = require("node-fetch");

module.exports = {fetchData};
async function fetchData(url) {
    const response = await fetch(url);
    const body = await response.text();
    console.log(body);
}