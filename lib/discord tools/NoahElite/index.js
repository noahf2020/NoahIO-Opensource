require("dotenv").config();
const inquirer = require("inquirer");
var player = require('play-sound')(opts = {})
const open = require("open");
const winston = require("winston");
const discord = require("discord.js");
const client = new discord.Client({ _tokenType: "User" });
//const config = require("./config.json");
const figlet = require("figlet");
const axios = require('axios')
const delay = require('delay')
const profile = require('../../profile.json')
const j = require('request').jar();
const fetch = require("node-fetch");


async function alo(){
  
require('log-timestamp')('[NoahIO]');
console.log(`Fuck SAA`);
console.log(
  "--------------------------------------------------------"
);

inquirer
.prompt([
    {
  type: 'input',
  name: 'keyword',
  message: 'Input keyword (https://dashboard.hype-central.com)',
 
    },
  
    {
  type: 'input',
  name: 'channel',
  message: 'Input channel ID:',
    }
]).then(answers => {
  
const configNow = {

  keywords: [`${answers.keyword}`],
  negativeKeywords: [],
  channelIds: [`${answers.channel}`]
}
client.login(process.env.DISCORD_TOKEN);
  const site = answers.keyword;
console.log('Hey there, Ready to fuck up Nemesis...')

  
  client.on("ready", () => {
    console.log(`Monitoring Channels--Account:${client.user.tag}`);
  });
  client.on("message", message => {
    if(message.content.toLowerCase().startsWith(configNow.keywords)){
      const url = message.content
      conurl(url)
      open(url)
      console.log('Opened URL')
    }

      //  console.log(`Opening ${url}`);
      function conurl(url){
        var spi = url
        var D = spi.split(`${answers.keyword}/purchase?password=`,)
       console.log(`Fuck Nemesis -- URL found: ${answers.keyword}/purchase?password=`+D[1])
       console.log("Fuck Nemesis -- Password Found:"+D[1])

   
  //    var almostsplit = D.split(" ")
      }})



      
      //  console.log(`Opening ${url}`);
      //  open(url);
      })
    }



  
  





module.exports ={alo}