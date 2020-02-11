/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
let facebookProfile = {
  name: "Kevin",
  friends: 2,
  messages: ["Hello", "World"],
  postMessage: function(theMessage) {
    facebookProfile.messages.push(theMessage);
  },
  deleteMessage: function(theIndex) {
    facebookProfile.messages.splice(theIndex, 1);
  },
  addFriend: function() {
    facebookProfile.friends += 1;
  },
  removeFriend: function() {
    facebookProfile.friends -= 1;
  }
};
