function wait(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

console.log('wait 3 started');
wait(3, function() {
  console.log('wait 3 done');
});

function repeat (times, callback) {

}

function User () {

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};