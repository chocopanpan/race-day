let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
//variable for if a runner is registered or not //
// console.log(registeredRunner);

let runnerAge = 18;
// variable for a runner's age //
// console.log(runnerAge);

if ((runnerAge > 18) && (registeredEarly === true)) {
  raceNumber += 1000;
}
//creating an expression to determine the raceNumber of a player //
// console.log(raceNumber); //

if ((runnerAge > 18) && (registeredEarly === true)) {
  console.log(`You will run at 9:30am.  Your race number is: ${raceNumber}.`);
} else if ((runnerAge > 18) && (registeredEarly !== true)) {
  console.log(`You will run at 11:00am.  Your race number is: ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30pm.  Your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
}
