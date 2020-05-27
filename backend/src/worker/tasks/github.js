var fetch = require('node-fetch');
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const setAsync = promisify(client.get).bind(client);

const baseUrl = 'https://jobs.github.com/positions.json';

async function fetchGithub(){
    console.log('Fetching Github Jobs')
    let count = 1, onPage = 0;
    const allJobs = [];

    while(count > 0){
        const res = await fetch(`${baseUrl}?page=${onPage}`)
        const jobs = await res.json();
        allJobs.push(...jobs);
        count = jobs.length;
        console.log('got ' + count + " jobs");
        onPage++;
    }
    console.log('got ' + allJobs.length + ' jobs');
}

module.exports = fetchGithub;