/*using javascript class syntax to create and manage numerous objects at the same time.
 Class has to be upper case to differenciate from functions and variables*/
class Player {
    //creates properties of the object we can plug in
    constructor(name,age,online=false) {
        this.name = name;
        this.age = age;
        this.online = online;
    }
//creates a method we can use for these objects that do special tasks

    onlineStatus() {
        console.log(`${this.name} is ${this.online ? `online` : `offline`} at the moment`)
    }

    get online() {
        return this._online
    }
    set online(online) {
        this._online = online
    }
}



//creating a new object from scratch using javascript class syntax. You can create objects very fast this way.
const player1 = new Player('Chris', '23');
const error = new Player('ERROR', 'ERROR');
const player2 = new Player('John', '34');
const player3 = new Player('Kelly', '18');
const player4 = new Player('Madison', '25');


//storing my objects in a array
const attendance = [player1, error, player2, player3, player4];

//addding dynamic values
/*
const today = new Date();
const hour = today.getHours();
const second = today.getSeconds();

for (let i = 0; i < attendance.length; i++){

    if (hour > 19 && hour < 20) {
        if(player1 && player2 && player3 && player4) {attendance[i]._online = true;}
    } else {
        attendance[i]._online = false;
    }

    if (second > 20 || second < 40) {
        if(error) {
            attendance[i]._online = true;}
    } else {
        attendance[i]._online = false;
    }
}
*/


const playerList = document.getElementById('playerList');
const output = document.createElement('div');

// Can style elements in the loop
for (let i = 0; i < attendance.length; i++) {

    var playerProfile = document.createElement('UL');
    playerProfile.className = 'flex-container';

    var node1 = document.createElement('strong');
    node1.innerHTML = '<strong>' + 'Name:' + '</strong>';
    node1.className = 'name';

    var node2 = document.createElement('LI');
    node2.innerHTML = '<li>' + attendance[i].name + '</li>';
    node2.className = 'profile-name';

    var node3 = document.createElement('strong');
    node3.innerHTML = '<strong>' + 'Age:' + '</strong>';
    node3.className = 'age';


    var node4 = document.createElement('LI');
    node4.innerHTML = '<li>' + attendance[i].age + '</li>';
    node4.className = 'profile-age';

    var node5 = document.createElement('LI');
    node5.innerHTML = '<li>' + attendance[i].online + '</li>';

    if (attendance[i].online  === true) {
        node5.textContent = 'Online';
        node5.className = 'style-online';
    }
    else {
        node5.textContent = 'Offline';
        node5.className = 'style-offline';
    }

    playerProfile.appendChild(node1);
    playerProfile.appendChild(node2);
    playerProfile.appendChild(node3);
    playerProfile.appendChild(node4);
    playerProfile.appendChild(node5);

    output.appendChild(playerProfile);
}

playerList.appendChild(output);








var order = false;
//creating a promise that handles the eventual completion (or failure) of an asynchronus function
var breakfastPromise = new Promise( (resolve, reject) => {

  setTimeout(function() {
    //fufilled asynchronus function
     if (order) {resolve('Your order is ready');}
     //rejected asynchronus function
      else {reject('Oh no!!! Something went wrong with the order.')}
    }, 3000);

});
console.log(breakfastPromise);
breakfastPromise
.then(val => console.log(val))
.catch(err => console.log(err))


/*objectives
1.create Name and age list items from scratch in the loop



*/
