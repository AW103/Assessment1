const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  "Hello! Welcome to your very own password validator. Please enter a password you would like to validate: ",
  function (input) {
    if (input.length >= 10 && input.includes("a")) {
      console.log(
        ` Congrats!
           _______  
        __[_______]__
          ( ^ ~~ ^ )
       *<>/   --  /<>* 
         /-------/
         V      V  
  That is a valid password.`);
    } else {
      console.log(
        ` Uh-oh...
           _______  
        __[_______]__
          ( T ~~ T )
        <>/   --  /<> 
         /-------/
         V      V        
 Looks like you need to change something. Try again.`
      );
    }

    reader.close();
  }
);
