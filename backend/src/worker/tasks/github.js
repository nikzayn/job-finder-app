var fetch = require('node-fetch');
var redis = require("redis").
    client = redis.createClient();
    
const { promisify } = require('util');
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseUrl = 'https://jobs.github.com/positions.json';

async function fetchGithub() {
    console.log('Fetching Github Jobs')
    let count = 1, onPage = 0;
    const allJobs = [];

    while (count > 0) {
        const res = await fetch(`${baseUrl}?page=${onPage}`)
        const jobs = await res.json();
        allJobs.push(...jobs);
        count = jobs.length;
        console.log('got ' + count + " jobs");
        onPage++;
    }
    console.log('got ' + allJobs.length + ' jobs');

    const success = await setAsync('gituhb', JSON.stringify(allJobs));
    console.log({success});
}

fetchGithub();

module.exports = fetchGithub;