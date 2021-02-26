const inquirer = require('inquirer')
const axios = require('axios')
const delay = require('delay')
const profile = require('../profile.json')
const j = require('request').jar();
const fetch = require("node-fetch");
//const site = 'https://dashboard.hype-central.com'
const request = require('request').defaults({
    timeout: 10000,
    jar: j,
  });

function setuppaid() {
  require('log-timestamp')('[NoahIO]');
  inquirer
.prompt([
    {
  type: 'input',
  name: 'metalink',
  message: 'Please enter metalink (https://dashboard.hype-central.com)>'
    }
]).then(answers => {
 console.log('Site:' + answers.metalink)

 const site = answers.metalink;
freemetacookout()


async function freemetacookout(){
  await delay(500)
inquirer
.prompt([
    {
  type: 'input',
  name: 'apikey',
  message: 'Noah IO | Waiting for Pass...>'
    }
]).then(answers => {
 
    GetRelease()

async function GetRelease(){
  
    console.log("I want Nemesis - Getting Release")
axios({
    method: "GET",
    url: `https://portal-api.metalabs.io/v1/release?password=${answers.apikey}`,
    headers: {
     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36',
     origin: site ,
     referer:site ,
 }
},
function(err, res, body) {
  //console.log(res)
if (res.statusCode === 404){
  console.log("No release found")
  //  failedWebhook()
      freemetacookout()
}
 else if (err) {
    console.log("No release found")
    console.log(res)
        freemetacookout()
  }
}
).then(
    (response, error, body) => {
    //  console.log(response)
 
 console.log("GETTING PAYMENT")

        axios({
            method: "POST",
            url: 'https://api.stripe.com/v1/payment_methods',
            headers: {
             'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36',
             origin: 'https://js.stripe.com',
             referer: 'https://js.stripe.com/',
             authority: 'api.stripe.com',
             'path': '/v1/payment_methods',
             'scheme': 'https',
             'accept': 'application/json',
             'accept-encoding': 'gzip, deflate, br',
             'accept-language': 'en-US,en;q=0.9',
             'content-length': '582',
             'content-type': 'application/x-www-form-urlencoded',
             'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
             'sec-ch-ua-mobile': '?0',
             'sec-fetch-dest': 'empty',
             'sec-fetch-mode': 'cors',
             'sec-fetch-site': 'same-site' ,
        
         },
         formData: {
             type: 'card',
            'billing_details[name]': profile.Name,
           'billing_details[email]': profile.Email,
            'billing_details[address][postal_code]': profile.Postalcode,
            'card[number]': profile.cardnum,
            'card[cvc]': profile.cardcvv,
            'card[exp_month]': profile.cardmonth,
            'card[exp_year]': profile.cardyear,
            'referrer': site,
            'payment_user_agent': 'stripe.js/d3602c5be; stripe-js-v3/d3602c5be',
            'stripe_account': "acct_1HI2zVJFE1nZVCDs",
            'key': 'pk_live_KwXNnGJavzZFU2niIHohefJA00DQdgijzp'


         }
        }).then(
            (response, error, body) => {
                const billingcode = response.body.id
                console.log("I want Nemesis - Release secured"+ "["+response.body.id+']')





                console.log("I want Nemesis - Release secured"+ "["+response.data.id+']')
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
                    payment_method: billingcode,
                    release: `${response.data.id}`,
                    secret: "youneedtogetajob",
                 }
                }).then(
                    (response) => {
                        if (response.statusCode === 200) {
                            var waitForp0ll = setInterval(pollog, 100);
                            console.log("Who Needs Nemesis anyway - Waiting.."+ " ["+response.data.status+'] ' + '['+response.data.id+']')
                        function pollog(){
                             console.log("Who Needs Nemesis anyway - Waiting.."+ " ["+response.data.status+'] ' + '['+response.data.id+']')
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
                                            console.log("Who Needs Nemesis anyway - Copped!"+ "["+response.data.license.key+']'+ '['+response.data.id+']')
                                            SuccessWebhook()
                                            SuccessWebhookG()
                                            freemetacookout()
    
                                            function SuccessWebhookG(){
                                                              fetch(webhooksG, {
                                                  "method":"POST",
                                                  "headers": {"Content-Type": "application/json"},
                                                  "body": JSON.stringify({ 
                                                   "content": "", 
                                                   "embeds": [
                                                     {
                                                       "title": "NoahIO",
                                                       "color": 3066993,
                                                       "timestamp": new Date(),
                                                       footer:{
                                                        "text": `FUCK SAA: NoahIO + Moon`,
                                                       },
                                                       "fields": [
                                                         {
                                                         "name": "Website",
                                                         "value": `${answers.metalink}`
                                                         },
                                                      
                                                         {
                                                           "name": "Mode",
                                                           "value": 'Copy - Paid', 
                                                           "inline": true
                                                         },
                                                         {
                                                         "name": "Price",
                                                       "value": 'PAID', 
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
                                                         "title": "NoahIO",
                                                         "color": 3066993,
                                                         "timestamp": new Date(),
                                                         footer:{
                                                          "text": `FUCK SAA: NoahIO + Moon`,
                                                         },
                                                         "fields": [
                                                           {
                                                           "name": "Website",
                                                           "value": `${answers.metalink}`
                                                           },
                                                        
                                                           {
                                                             "name": "Mode",
                                                             "value": 'Copy - Paid', 
                                                             "inline": true
                                                           },
                                                           {
                                                           "name": "Price",
                                                         "value": 'PAID', 
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
                                            console.log("Shoulda Bought Nemesis - L"+ "["+response.data.status+']')
                                            failedWebhook()
                                            failedWebhookG()
                                            freemetacookout()
                                        }
                                    })
                             }
                        
        
                        } else {
                            console.log("Shoulda Bought Nemesis - L"+ " [OOS] ")
                            failedWebhook()
                            failedWebhookG()
                            freemetacookout()
                        }
        
          }  )




            }

        )




     
    
 })
 

}
})




const webhookb =require('../profile.json');

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
          "text": `FUCK NOAH: Shoulda got Nemesis`,
         },
      
           "fields": [
             {
             "name": "Website",
             "value": `${answers.metalink}`
             },
          
             {
               "name": "Mode",
               "value": 'Copy - Paid', 
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
            "text": `FUCK NOAH: Shoulda got Nemesis`,
           },
        
             "fields": [
               {
               "name": "Website",
               "value": `${answers.metalink}`
               },
            
               {
                 "name": "Mode",
                 "value": 'Copy - Paid', 
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


})


}



module.exports ={setuppaid}