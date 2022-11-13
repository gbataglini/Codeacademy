let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;  
let runnerAge = 35; 

if (runnerAge >= 18 && registeredEarly) { 
  console.log(raceNumber += 1000)
} 
if (runnerAge >= 18 && registeredEarly) { 
  console.log('The race starts at 9:30am, and your race number is ' + raceNumber)
} else if (runnerAge > 18 && !registeredEarly) { 
  console.log ('The race starts at 11:00am, and your race number is ' + raceNumber)
} else if (runnerAge < 18) { 
console.log ('The race starts at 12:30, and your race number is ' + raceNumber)
} else { 
  console.log ('Please head over to the registration desk');
}
 