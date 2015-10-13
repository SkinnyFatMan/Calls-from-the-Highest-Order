var poop = require('./datastore.js');

function wait(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

// console.log('wait 3 started');
// wait(3, function() {
//   console.log('wait 3 done');
// });

function repeat (times, callback) {
  for (var i = 0; i < times; i++) {
    callback(i);
  }
}

// repeat(10, function iteration(n) {
//   console.log(100 + n);
// });

// wait(4, repeat(2, function(n) {
//   console.log('repeating for i ' + n);
//   wait(n * 3, repeat(3, function(m) {
//     console.log('i ' + n + ' j ' + m);
//   }));
// }));

function User () {
}

User.find = function(query, callback){

  var err = null;

  var users = poop.User.filter(function(user){

      var breaker = true;

      for(var key in query){

        if(!user.hasOwnProperty(key)){
          err = new RangeError('query argument ' + key + ' is not a property of "User"');
        }else if(!(typeof query[key] === typeof user[key])){
          err = new TypeError( 'query arguments are incorrect types, ' + key + ' is ' +  '"string", expected "number"');
        }

        if(breaker && query[key] === user[key]){
          breaker = true;
        }else{
          breaker = false;
        }
      }
      return breaker;
});
console.log(users);


  callback(err, users);

};

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};