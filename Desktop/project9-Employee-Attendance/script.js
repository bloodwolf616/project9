

/*using javascript class syntax to create and manage numerous objects at the same time.
 Class has to be upper case to differenciate from functions and variables*/
class Player {
//creates properties of the object we can plug in
 constructor(name,age,online) {
 this.name = name;
 this.age = age;
 this.online = online;
}
//creates a method we can use for these objects that do special tasks

onlineStatus() {

  console.log(`${this.name} is ${this.online ? `online` : `offline`} at the moment`)}

}



//creating a new object from scratch using javascript class syntax. You can create objects very fast this way.
var player1 = new Player('Chris', '23', true);
var player2 = new Player('John', '34', true);
var player3 = new Player('Kelly', '18', false);
var player4 = new Player('Madison', '25', true);


var attendance = [player1, player2, player3, player4];



// Can style elements in the loop
for (var i = 0; i < attendance.length; i++) {

//selects the ul element we want to add on to
  var playerList = document.getElementById('playerList');

 var playerProfile = document.createElement('UL')
 playerProfile.className = 'flex-container'
//creates li element then places the values of the obects inside of them

  var node1 = document.createElement('LI');
   node1.innerHTML = '<li>' + attendance[i].name + '</li>';
   node1.className = 'profile-name';

   var node2 = document.createElement('LI');
    node2.innerHTML = '<li>' + attendance[i].age + '</li>';
    node2.className = 'profile-age';

    var node3 = document.createElement('LI');
     node3.innerHTML = '<li>' + attendance[i].online + '</li>';


//if they value inside online is true. replace text and style. same for offline
    if (attendance[i].online  === true) {
      node3.textContent = 'Online';
      node3.className = 'style-online';
    }
    else {
      node3.textContent = 'Offline';
      node3.className = 'style-offline';
    }

//adds name, age, online list elements to the unordered list
   playerProfile.appendChild(node1)
   playerProfile.appendChild(node2)
   playerProfile.appendChild(node3)

//add unoredered list to the main element
 playerList.appendChild(playerProfile);

}
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
