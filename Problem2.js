function addNumbers(num1, num2) {
    let stepCount = 0;
    let carry = 0;
    let steps = {};
  
    while (num1 || num2) {
      let a = num1 % 10 || 0;
      let b = num2 % 10 || 0;
      let sum = a + b + carry;
      carry = sum >= 10 ? 1 : 0;
      let step = { carryString: "1".repeat(carry), sumString: sum.toString().padStart(stepCount + 1, "0") };
      steps[`step${stepCount + 1}`] = step;
      num1 = Math.floor(num1 / 10);
      num2 = Math.floor(num2 / 10);
      stepCount++;
    }
  
    if (carry > 0) {
      let step = { carryString: "1".repeat(carry), sumString: "1".padEnd(stepCount + 1, "0") };
      steps[`step${stepCount + 1}`] = step;
    }
  
    return steps;
  }
  
  // Example usage:
  let num1 = 1489;
  let num2 = 714;
  let ans = addNumbers(num1, num2)

  let s = "" , t = "";

  for (const key in ans) {
      s += ans[key].carryString;
      ans[key].carryString = s;

      t = ans[key].sumString[ans[key].sumString.length - 1] + t;
      ans[key].sumString = t;
  }

  console.log(ans)