export default [
    {  
      title: "Introduction to JavaScript",  
      description: [
        "JavaScript is a programming language used to create dynamic and interactive web pages.",
        "It allows you to manipulate HTML and CSS, handle user events, and perform computations."
      ],  
      problems: [
        {
          question: "Write a JavaScript statement to display 'Hello, World!' in the console.",
          solution: `console.log("Hello, World!");`
        }
      ]
    },
    {  
      title: "Variables and Data Types",  
      description: [
        "Variables store data values in JavaScript.",
        "Common data types include strings, numbers, booleans, arrays, and objects."
      ],  
      problems: [
        {
          question: "Declare a variable named 'age' and assign it the value 25.",
          solution: `let age = 25;`
        },
        {
          question: "Create an object representing a person with name and age properties.",
          solution: `let person = { name: "Alice", age: 30 };`
        }
      ]
    },
    {  
      title: "Functions",  
      description: [
        "Functions allow you to write reusable blocks of code.",
        "They can take parameters and return values."
      ],  
      problems: [
        {
          question: "Write a function named 'greet' that takes a name as a parameter and returns 'Hello, name!'.",
          solution: `function greet(name) {\n  return "Hello, " + name + "!";\n}`
        }
      ]
    },
    {  
      title: "Conditional Statements",  
      description: [
        "Conditional statements allow you to execute different code based on conditions.",
        "Common statements include if, else if, and else."
      ],  
      problems: [
        {
          question: "Write an if-else statement that checks if a number is positive, negative, or zero.",
          solution: `let num = 5;\nif (num > 0) {\n  console.log("Positive");\n} else if (num < 0) {\n  console.log("Negative");\n} else {\n  console.log("Zero");\n}`
        }
      ]
    },
    {  
      title: "Loops",  
      description: [
        "Loops allow you to execute code multiple times.",
        "Common loops include for, while, and do-while."
      ],  
      problems: [
        {
          question: "Write a for loop to print numbers from 1 to 5.",
          solution: `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`
        }
      ]
    },
    {  
      title: "Arrays",  
      description: [
        "Arrays store multiple values in a single variable.",
        "You can access elements using indexes starting from 0."
      ],  
      problems: [
        {
          question: "Create an array of three fruits and print the first fruit.",
          solution: `let fruits = ["Apple", "Banana", "Cherry"];\nconsole.log(fruits[0]);`
        }
      ]
    },
    {  
      title: "Objects",  
      description: [
        "Objects store key-value pairs and allow you to model real-world entities.",
        "You can access properties using dot notation or bracket notation."
      ],  
      problems: [
        {
          question: "Create an object representing a car with brand, model, and year properties.",
          solution: `let car = { brand: "Toyota", model: "Corolla", year: 2022 };`
        }
      ]
    },
    {  
      title: "DOM Manipulation",  
      description: [
        "JavaScript allows you to manipulate the HTML Document Object Model (DOM).",
        "You can select, modify, add, or remove elements dynamically."
      ],  
      problems: [
        {
          question: "Write JavaScript code to change the text of an element with id 'title' to 'Hello, JavaScript!'.",
          solution: `document.getElementById("title").innerText = "Hello, JavaScript!";`
        }
      ]
    },
    {  
      title: "Events",  
      description: [
        "JavaScript can handle user interactions using event listeners.",
        "Common events include click, mouseover, and keydown."
      ],  
      problems: [
        {
          question: "Add a click event listener to a button with id 'myButton' that alerts 'Button clicked!'.",
          solution: `document.getElementById("myButton").addEventListener("click", function() {\n  alert("Button clicked!");\n});`
        }
      ]
    },
    {  
      title: "ES6 Features",  
      description: [
        "ES6 introduced modern JavaScript features such as let/const, arrow functions, template literals, and destructuring.",
        "These features improve readability and efficiency of code."
      ],  
      problems: [
        {
          question: "Write an arrow function that takes two numbers and returns their sum.",
          solution: `const add = (a, b) => a + b;`
        }
      ]
    },
    {  
      title: "Promises and Async/Await",  
      description: [
        "Promises and async/await handle asynchronous operations in JavaScript.",
        "They prevent callback hell and improve readability."
      ],  
      problems: [
        {
          question: "Write an async function that waits for 2 seconds and then logs 'Done!'.",
          solution: `async function waitAndLog() {\n  await new Promise(resolve => setTimeout(resolve, 2000));\n  console.log("Done!");\n}`
        }
      ]
    },
    {  
      title: "JavaScript Best Practices",  
      description: [
        "Follow best practices like using meaningful variable names, writing modular code, and avoiding global variables.",
        "Use linters like ESLint to enforce coding standards."
      ],  
      problems: [
        {
          question: "Refactor the following function to use ES6 syntax:\n\nfunction multiply(a, b) {\n  return a * b;\n}",
          solution: `const multiply = (a, b) => a * b;`
        }
      ]
    }
  ];
  