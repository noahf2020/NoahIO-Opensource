require("dotenv").config();
const inquirer = require("inquirer");
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


async function MFM(){

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
  client.login(profile.token);

const configNow = {
  keywords: [`${answers.keyword}`],
  negativeKeywords: [],
  channelIds: [`${answers.channel}`]
}

  const site = answers.keyword;
console.log('Hey there, Ready to fuck up Nemisis...')

  const matchUrls = text => {
    const urls = text.match(
      /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g
    );
  
    if (urls) {
      return urls;
    } else {
      return [];
    }
  };
  
  client.on("ready", () => {
    console.log(`Monitoring Channels--Account:${client.user.tag}`);
  });
  
  client.on("message", message => {
    if (answers.channel && answers.channel.length > 0 && !answers.channel.includes(message.channel.id)) return;
  
    const urls = new Set(matchUrls(message.content));
    if (urls.length == 0) return;
  
    urls.forEach(async url => {
      if (
        configNow.keywords.some(keyword =>
          url.toLowerCase().includes(keyword.toLowerCase())
        ) &&
        !configNow.negativeKeywords.some(
          keyword => keyword && url.toLowerCase().includes(keyword.toLowerCase())
        )
      ) {

      //  console.log(`Opening ${url}`);
        var spi = url
        var D = spi.split(`${answers.keyword}/purchase?password=`,)
       console.log("Fuck Nemisis -- Password Found:"+D[1])

   
  //    var almostsplit = D.split(" ")
        GetRelease()


        async function GetRelease(){
  
          console.log("I want Nemisis - Getting Release")
      axios({
          method: "GET",
          url: `https://portal-api.metalabs.io/v1/release?password=${D[1]}`,
          headers: {
           'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36',
           origin: site ,
           referer:site ,
       }
      }
      ).then(
          (response) => {
          //  console.log(response)
                  console.log("I want Nemisis - Release secured"+ "["+response.data.id+']')
                  axios({
                      method: "POST",
                      url: 'https://portal-api.metalabs.io/v1/checkouts',
                      headers: {
                       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36',
                       origin:site ,
                       referer:site ,
                   },
                   data: {
                      email: profile.Email,
                      name: profile.Name,
                      payment_method: null,
                      release: `${response.data.id}`,
                      secret: "youneedtogetajob",
                   }
                  }).then(
                      (response) => {
                      //    if (response.statusCode === 200) {
                              var waitForp0ll = setInterval(pollog, 100);
                              console.log("Who Needs Nemisis anyway - Waiting.."+ " ["+response.data.status+'] ' + '['+response.data.id+']')
                          function pollog(){
                               console.log("Who Needs Nemisis anyway - Waiting.."+ " ["+response.data.status+'] ' + '['+response.data.id+']')
                          }
                                  poll()
                               async function poll(){
                      
                                   await delay(500)
                                   clearInterval(waitForp0ll);
                                  await axios({
                                      method: "GET",
                                      url: `https://portal-api.metalabs.io/v1/checkouts/${response.data.id}`,
                                     headers: {
                                       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36',
                                       origin: site ,
                                       referer: site ,
                                   }
                                  }).then(
                                      (response) => {
                                          if(response.data.status === "succeeded"){
                                              module.exports = response.data.license.key
                                              console.log("Who Needs Nemisis anyway - Copped!"+ "["+response.data.license.key+']'+ '['+response.data.id+']')
                                              SuccessWebhook()
                                              SuccessWebhookG()
                                            
      
                                              function SuccessWebhookG(){
                                                        fetch(webhooksG, {
                                                    "method":"POST",
                                                    "headers": {"Content-Type": "application/json"},
                                                    "body": JSON.stringify({ 
                                                     "content": "", 
                                                     "embeds": [
                                                       {
                                                         "title": "NoahIO | Success",
                                                         "color": 3066993,
                                                         "timestamp": new Date(),
                                                         footer:{
                                                          "text": `FUCK SAA: NoahIO + Moon`,
                                                         },
                                                         "fields": [
                                                           {
                                                           "name": "Website",
                                                           "value": `${answers.site}`
                                                           },
                                                        
                                                           {
                                                             "name": "Mode",
                                                             "value": 'NoahElite', 
                                                             "inline": true
                                                           },
                                                           {
                                                           "name": "Price",
                                                         "value": 'Free', 
                                                          "inline": true
                                                          },
                                  
                                                          
                                                         ], 
                                                    
                                            
                                                       }
                                                     ]
                                                     })
                                               
                                                   })
                                                   .then(res=> console.log('Fuck SAA'))
                                                   .catch(err => console.error('Fuck SAA'));
                                                 }
      
                                              function SuccessWebhook(){
                                                  fetch(webhookb.webhook, {
                                                      "method":"POST",
                                                      "headers": {"Content-Type": "application/json"},
                                                      "body": JSON.stringify({ 
                                                       "content": "", 
                                                       "embeds": [
                                                         {
                                                           "title": "NoahIO | Success",
                                                           "color": 3066993,
                                                           "timestamp": new Date(),
                                                           footer:{
                                                            "text": `FUCK SAA: NoahIO + Moon`,
                                                           },
                                                           "fields": [
                                                             {
                                                             "name": "Website",
                                                             "value": `${answers.site}`
                                                             },
                                                          
                                                             {
                                                               "name": "Mode",
                                                               "value": 'NoahElite', 
                                                               "inline": true
                                                             },
                                                             {
                                                             "name": "Price",
                                                           "value": 'Free', 
                                                            "inline": true
                                                            },
                                                         {
                                                               "name": "Profile",
                                                               "value": `||${profile.Name+':'+profile.Email}||`, 
                                                               "inline": true
                                                             },
                                                             {
                                                              "name": "Key",
                                                              "value": `||${response.data.license.key}||`, 
                                                             }
                                                            
                                                           ], 
                                                      
                                              
                                                         }
                                                       ]
                                                       })
                                                 
                                                     })
                                                     .then(res=> console.log('Fuck SAA'))
                                                     .catch(err => console.error('Fuck SAA'));
                                                   }
                                          } else {
                                              console.log("Shoulda Bought Nemisis - L"+ "["+response.data.status+']')
                                              failedWebhook()
                                              failedWebhookG()
                                             
                                          }
                                      })
                               }
                          
          
                       //   }// else {
                             // console.log("Shoulda Bought Nemisis - L"+ " [OOS] ")
                             // failedWebhook()
                            //  failedWebhookG()
                             
                       //   }
          
            }  )
      
             
             // else {
               //   console.log("Shoulda Bought Nemisis - L"+ " [OOS] ")
              //    failedWebhook()
               //   failedWebhookG()
               
            //  }
      
          
       })
       
      
const webhookb =require('../../profile.json');

function failedWebhookG(){
  fetch(webhookG, {
      "method":"POST",
      "headers": {"Content-Type": "application/json"},
      "body": JSON.stringify({ 
       "content": "", 
       "embeds": [
         {
           "title": "NoahIO  | Failed :x: ",
           "color": 14028045,
         "timestamp": new Date(),
         footer:{
          "text": `FUCK NOAH: Shoulda got Nemisis`,
         },
      
           "fields": [
             {
             "name": "Website",
             "value": `${answers.site}`
             },
          
             {
               "name": "Mode",
               "value": 'NoahElite', 
               "inline": true
             },
            {
              "name": "Reason",
            "value": 'OOS', 
            "inline": true
            },
          //   {
           //    "name": "Profile",
           //    "value": `||${profile.Email+':'+profile.Name}||`, 
           //    "inline": true
            // },
            
           ], 
      

         }
       ]
       })
 
     })
     .then(res=> console.log('Fuck Noah'))
     .catch(err => console.error('Fuck Noah'));
   }


function failedWebhook(){

    fetch(webhookb.webhook, {
        "method":"POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify({ 
         "content": "", 
         "embeds": [
           {
             "title": "NoahIO  | Failed :x: ",
             "color": 14028045,
           "timestamp": new Date(),
           footer:{
            "text": `FUCK NOAH: Shoulda got Nemisis`,
           },
        
             "fields": [
               {
               "name": "Website",
               "value": `${answers.site}`
               },
            
               {
                 "name": "Mode",
                 "value": 'NoahElite', 
                 "inline": true
               },
              {
                "name": "Reason",
              "value": 'OOS', 
              "inline": true
              },
            //   {
             //    "name": "Profile",
             //    "value": `||${profile.Email+':'+profile.Name}||`, 
             //    "inline": true
              // },
              
             ], 
        

           }
         ]
         })
   
       })
       .then(res=> console.log('Fuck Noah'))
       .catch(err => console.error('Fuck Noah'));
     }
      }
        //console.log(`Opening ${url}`);
        //open(url);
      } else {
      //  console.log(`${url} not in keywords or is in negative keywords`);
      }
    });
  });


  
  
})

}






module.exports ={MFM}