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

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};