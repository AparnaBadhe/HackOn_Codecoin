export default [
  {  
    title: "Introduction to HTML",  
    description: [
      "HTML (HyperText Markup Language) is the standard language for creating web pages.",
      "It defines the structure of web pages using elements represented by tags."
    ],  
    problems: [
      {
        question: "Write a basic HTML document structure.",
        solution: `<html>\n<head>\n<title>My First Page</title>\n</head>\n<body>\n<h1>Hello, World!</h1>\n</body>\n</html>`
      }
    ]
  },
  {  
    title: "HTML Elements and Tags",  
    description: [
      "HTML elements are the building blocks of a web page.",
      "Each element consists of a start tag, content, and an end tag."
    ],  
    problems: [
      {
        question: "Create a paragraph and a link inside it.",
        solution: `<p>Visit <a href='https://example.com'>this website</a> for more info.</p>`
      }
    ]
  },
  {  
    title: "HTML Attributes",  
    description: [
      "Attributes provide additional information about HTML elements.",
      "They are always included in the opening tag and follow a key-value format."
    ],  
    problems: [
      {
        question: "Write an <img> tag with a source and alt attribute.",
        solution: `<img src="image.jpg" alt="A beautiful scenery">`
      }
    ]
  },
  {  
    title: "HTML Forms and Inputs",  
    description: [
      "Forms allow users to input and submit data to a server.",
      "Common input types include text, password, radio, checkbox, and submit."
    ],  
    problems: [
      {
        question: "Create a simple login form with username and password fields.",
        solution: `<form action="/login" method="POST">\n<input type="text" name="username" placeholder="Username">\n<input type="password" name="password" placeholder="Password">\n<button type="submit">Login</button>\n</form>`
      }
    ]
  },
  {  
    title: "HTML Tables",  
    description: [
      "Tables are used to organize and display data in a tabular format.",
      "A table consists of <table>, <tr> (row), <th> (header cell), and <td> (data cell)."
    ],  
    problems: [
      {
        question: "Create a table with three columns: Name, Age, and Country.",
        solution: `<table>\n<tr>\n<th>Name</th>\n<th>Age</th>\n<th>Country</th>\n</tr>\n<tr>\n<td>Alice</td>\n<td>25</td>\n<td>USA</td>\n</tr>\n</table>`
      }
    ]
  },
  {  
    title: "HTML Forms with Validation",  
    description: [
      "Form validation ensures that users enter correct data before submitting a form.",
      "HTML5 provides built-in validation attributes such as required, minlength, and pattern."
    ],  
    problems: [
      {
        question: "Create an email input field that validates an email format.",
        solution: `<input type="email" name="email" required>`
      }
    ]
  },
  {  
    title: "HTML Semantics",  
    description: [
      "Semantic HTML uses meaningful tags like <header>, <article>, <section>, and <footer> to structure a page.",
      "This improves accessibility, SEO, and code readability."
    ],  
    problems: [
      {
        question: "Create a basic webpage structure using semantic elements.",
        solution: `<header>\n<h1>My Website</h1>\n</header>\n<nav>\n<a href="#">Home</a>\n<a href="#">About</a>\n</nav>\n<main>\n<section>\n<article>\n<p>Welcome to my site!</p>\n</article>\n</section>\n</main>\n<footer>\n<p>&copy; 2025 My Website</p>\n</footer>`
      }
    ]
  },
  {  
    title: "HTML Media Elements",  
    description: [
      "HTML allows embedding multimedia like images, audio, and video.",
      "The <audio> and <video> tags provide built-in controls for media playback."
    ],  
    problems: [
      {
        question: "Create an audio player with controls.",
        solution: `<audio src="audio.mp3" controls></audio>`
      },
      {
        question: "Add a video that plays automatically.",
        solution: `<video src="video.mp4" autoplay></video>`
      }
    ]
  },
  {  
    title: "HTML5 Features",  
    description: [
      "HTML5 introduced new features like the <canvas> element for graphics, <localStorage> for offline data storage, and new form input types.",
      "It also includes APIs for geolocation, drag and drop, and web workers."
    ],  
    problems: [
      {
        question: "Write a basic <canvas> element.",
        solution: `<canvas id="myCanvas" width="200" height="100"></canvas>`
      }
    ]
  },
  {  
    title: "HTML Best Practices",  
    description: [
      "Follow best practices like writing clean, well-structured code, using semantic elements, and ensuring accessibility.",
      "Avoid inline CSS and JavaScript for better maintainability."
    ],  
    problems: [
      {
        question: "What is the correct way to structure a webpage?",
        solution: `<!DOCTYPE html>\n<html>\n<head>\n<title>Best Practices</title>\n</head>\n<body>\n<header>\n<h1>Welcome</h1>\n</header>\n<main>\n<p>Content goes here.</p>\n</main>\n<footer>\n<p>&copy; 2025</p>\n</footer>\n</body>\n</html>`
      }
    ]
  }
];

