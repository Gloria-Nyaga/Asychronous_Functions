//QUESTION 1//
//Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
//The function should log the message to the console after the specified delay time.

async function entermessage(message, delayTime) {
    await new Promise(resolve => setTimeout(resolve,delayTime));
    console.log(message);
   } 
    
   entermessage("Today is going to be a great day!","3560 miliseconds")


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID.
// Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.   

const userIds = [1001, 1002, 1003, 21004];

function getUserData(id) {


 return new Promise((resolve, reject) => {
 setTimeout(() => {
 
 const userData = { id, name: `User ${id}` };
 resolve(userData);
 }, 1000);
 });
}
async function logUserData() {
 for (const userId of userIds) {
 try {
 const userData = await getUserData(userId);
 console.log(`User ID ${userId}: ${userData.name}`);
 } catch (error) {
 console.error(`Error fetching data for User ID ${userId}: ${error.message}`);
 }
 }
 }
 logUserData()