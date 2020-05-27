var CronJob = require('cron').CronJob;

const github = require('./tasks/github');

var job = new CronJob('* * * * *', github, null, true, 'Asia/Kolkata');
job.start();