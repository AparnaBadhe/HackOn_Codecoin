export default [
    {  
      title: "Introduction to CSS",  
      description: [
        "CSS (Cascading Style Sheets) is used to style and layout web pages.",
        "It allows you to apply colors, fonts, spacing, and more to HTML elements."
      ],  
      problems: [
        {
          question: "Write a CSS rule to change the background color of the body to light blue.",
          solution: `body {\n  background-color: lightblue;\n}`
        }
      ]
    },
    {  
      title: "CSS Selectors",  
      description: [
        "Selectors are used to target HTML elements for styling.",
        "Common selectors include element, class, ID, and attribute selectors."
      ],  
      problems: [
        {
          question: "Write a CSS rule to change the text color of all paragraphs to red.",
          solution: `p {\n  color: red;\n}`
        },
        {
          question: "Style an element with class 'highlight' to have a yellow background.",
          solution: `.highlight {\n  background-color: yellow;\n}`
        }
      ]
    },
    {  
      title: "CSS Box Model",  
      description: [
        "The box model consists of margin, border, padding, and content.",
        "Understanding the box model is essential for layout design."
      ],  
      problems: [
        {
          question: "Write a CSS rule to add a 2px solid black border around a div.",
          solution: `div {\n  border: 2px solid black;\n}`
        },
        {
          question: "Add 20px padding inside a div and 10px margin outside.",
          solution: `div {\n  padding: 20px;\n  margin: 10px;\n}`
        }
      ]
    },
    {  
      title: "CSS Flexbox",  
      description: [
        "Flexbox is a layout model for arranging elements efficiently in a container.",
        "It provides control over alignment, spacing, and ordering of elements."
      ],  
      problems: [
        {
          question: "Create a flex container that centers its items both horizontally and vertically.",
          solution: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}`
        }
      ]
    },
    {  
      title: "CSS Grid",  
      description: [
        "CSS Grid is a two-dimensional layout system that allows precise placement of elements.",
        "It enables rows and columns to be defined in a flexible way."
      ],  
      problems: [
        {
          question: "Create a grid container with three equal columns.",
          solution: `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}`
        }
      ]
    },
    {  
      title: "CSS Transitions",  
      description: [
        "Transitions allow smooth animations between CSS property changes.",
        "They are useful for hover effects and dynamic UI interactions."
      ],  
      problems: [
        {
          question: "Animate a button to change its background color smoothly over 0.5 seconds on hover.",
          solution: `button {\n  background-color: blue;\n  transition: background-color 0.5s;\n}\nbutton:hover {\n  background-color: green;\n}`
        }
      ]
    },
    {  
      title: "CSS Animations",  
      description: [
        "CSS animations allow elements to move and change styles over time.",
        "Keyframes define animation steps and transitions."
      ],  
      problems: [
        {
          question: "Create a keyframe animation that moves a box from left to right.",
          solution: `@keyframes moveRight {\n  0% { transform: translateX(0); }\n  100% { transform: translateX(100px); }\n}\n.box {\n  animation: moveRight 2s infinite alternate;\n}`
        }
      ]
    },
    {  
      title: "CSS Variables",  
      description: [
        "CSS variables allow you to define reusable values for colors, spacing, and other styles.",
        "They improve maintainability and make theme changes easier."
      ],  
      problems: [
        {
          question: "Define a CSS variable for primary color and use it for a button.",
          solution: `:root {\n  --primary-color: #3498db;\n}\nbutton {\n  background-color: var(--primary-color);\n  color: white;\n}`
        }
      ]
    },
    {  
      title: "CSS Media Queries",  
      description: [
        "Media queries enable responsive designs by applying different styles based on screen size.",
        "They are essential for making websites mobile-friendly."
      ],  
      problems: [
        {
          question: "Write a media query to change the background color to red on screens smaller than 600px.",
          solution: `@media (max-width: 600px) {\n  body {\n    background-color: red;\n  }\n}`
        }
      ]
    },
    {  
      title: "CSS Best Practices",  
      description: [
        "Write clean and maintainable CSS by using modular classes and avoiding unnecessary styles.",
        "Use a naming convention like BEM (Block Element Modifier) for clarity."
      ],  
      problems: [
        {
          question: "Write a BEM-style class structure for a button with a primary modifier.",
          solution: `.button {\n  background-color: gray;\n  color: white;\n}\n.button--primary {\n  background-color: blue;\n}`
        }
      ]
    }
  ];
  