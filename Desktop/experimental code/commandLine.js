//problem: we need a simple way of getting a users name and their javascript points
//Solution: use node.js to connect to treehouse's api to get profile information to print out

//requires https module. this is how we get the node.js API. We have to specify node into our code
const https = require('https');
const username = 'Chris Cooper'


//prints message to console
function printMessage(username, badgeCount, points) {
const message = `${username} has ${badgeCount} number of badges and ${points} points in JavaScript`;
console.log(message);
}

//function that allows us to get the information from multiple users, bot just our own

//connect to API url (https://teamtreehouse.com/christophercooper3.json). ${username} allows us to set multiple usernames
const request = https.get('https://teamtreehouse.com/christophercooper3.json', response => {
//    console.log(response.statusCode);

  let body = "";
   //response.on("data", storedDataFunction) is the response function that has a callback function that when they get the API to add it to the body in string formatt
  //read the data. we want to change in to a string using .toString() method
  response.on('data', data => {
  body += data.toString();
  })


//response.on("end", storedDataFunction) is the response function that has a callback that returns when the http request is finished.
  response.on('end', () => {
    //parse the data into JSON onjects we can access
    const profile = JSON.parse(body);

    //print the data. Accessing the Json object using dot notation
   printMessage(profile.name, profile.badges.length, profile.points.JavaScript)
  })


});





/*Change the url to ${username} so you can get multiple profiles bot just your own  */
