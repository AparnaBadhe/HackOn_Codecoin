import { useNavigate } from "react-router-dom";
import Nav from "../components/navbar";
import Question from "../components/question";

export default function Lesson(props) {
  const navigate = useNavigate(); // Use React Router navigation
  console.log('from lesson', props);

  return (
    <div className="lesson-div flexbox">
      <Nav />

      {/* Conditional Rendering */}
      {!props.title ? (
        <>
          <h1>Available Lessons</h1>
          <span onClick={() => navigate("/lessons/html/0")}>
            Introduction to HTML
          </span>
          <span onClick={() => navigate("/lessons/css/0")}>
            Introduction to CSS
          </span>
          <span onClick={() => navigate("/lessons/javascript/0")}>
            Introduction to JavaScript
          </span>
        </>
      ) : (
        <Question {...props}/>
        
      )}
    </div>
  );
}
