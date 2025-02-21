// import { useExpLevel } from "../context/exp";
// import { useNavigate } from "react-router-dom";
// export default function(){
//   const { exp, level, addExp } = useExpLevel();
//   const navigate = useNavigate();
// return(
// <div className="navbar flexbox">
// <h1 onClick={()=>{navigate('/')}}>Code Quest</h1>
//   <div className="flexbox">
// <span >Challenges</span>
// <span onClick={()=>{navigate('/lessons')}}>Lessons</span>
//   </div>
//   <div className="nav-pro flexbox">
// <p>exp {exp}</p>
// <p>level {level}</p>
// <span className="button">User</span>
//   </div>
  
//   </div>
// );
// }

import { useExpLevel } from "../context/exp";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { exp, level } = useExpLevel();
  const navigate = useNavigate();

  return (
    <div className="navbar flex items-center justify-between bg-gray-900 text-white px-6 py-4 shadow-md">
      <h1 
        onClick={() => navigate('/')} 
        className="text-2xl font-bold cursor-pointer hover:text-gray-300"
      >
        Code Quest
      </h1>
      
      <div className="flex space-x-6 text-lg">
        <span 
          className="cursor-pointer hover:text-blue-400 transition" 
          onClick={() => navigate('/challenges')}
        >
          Challenges
        </span>
        <span 
          className="cursor-pointer hover:text-blue-400 transition" 
          onClick={() => navigate('/lessons')}
        >
          Lessons
        </span>
      </div>
      
      <div className="flex items-center space-x-4 bg-gray-800 px-4 py-2 rounded-lg shadow-md">
        <p className="text-yellow-400">EXP: {exp}</p>
        <p className="text-green-400">Level: {level}</p>
        <span className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg cursor-pointer">
          User
        </span>
      </div>
    </div>
  );
}
