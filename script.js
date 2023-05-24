//your JS code here. If required.

 
  function findFirstNonRepeatedChar() {
  const input = prompt("Enter a string");
  
  for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i);
    
    if (input.indexOf(char) === input.lastIndexOf(char)) {
      alert(char);
      return;
    }
  }
  }
findFirstNonRepeatedChar()

