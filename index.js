// code your solution here
razzle(); // Outputs: "You've been razzled!"

function razzle() {
  console.log("You've been razzled!");
}

const fn = function() {
    console.log("Yet more razzling");
  };
  fn(); // Outputs: "Yet more razzling"

  (function() {
  })();
  
  function outer(greeting) {
    const msg = "It's a fine day to learn";
    return function(name) {
      console.log(`${greeting}, ${name}! ${msg}`);
    };
  }
  
  const greet = outer("Hello");
  greet("Student"); // Outputs: "Hello, Student! It's a fine day to learn"

  function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  console.log(saturdayFun()); // Outputs: "This Saturday, I want to roller-skate!"
console.log(saturdayFun("go hiking")); // Outputs: "This Saturday, I want to go hiking!"

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };

  console.log(mondayWork()); // Outputs: "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // Outputs: "This Monday, I will work from home."

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }

  const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); // Outputs: "You are !!!a dedicated programmer!!!"
console.log(wrapAdjective("%")("an awesome coder")); // Outputs: "You are %an awesome coder%!"
