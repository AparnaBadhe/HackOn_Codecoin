import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "../components/navbar"

const challenges = [
  { id: 1, title: "Bug Hunt", difficulty: "Easy", exp: 100 },
  { id: 2, title: "Refactor Rush", difficulty: "Medium", exp: 200 },
  { id: 3, title: "Algorithm Ace", difficulty: "Hard", exp: 300 },
  { id: 4, title: "Debugging Duel", difficulty: "Expert", exp: 500 }
];

export default function Challenges() {
  const navigate = useNavigate();

  return (
    <>
    <Nav/>
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Coding Challenges</h1>
      <p className="text-lg mb-6 text-gray-300">Test your skills and earn experience points!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {challenges.map((challenge) => (
          <motion.div 
            key={challenge.id} 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-between"
          >
            <h2 className="text-xl font-semibold mb-2">{challenge.title}</h2>
            <p className="text-sm text-gray-400">Difficulty: {challenge.difficulty}</p>
            <p className="text-yellow-400 font-bold my-2">EXP: {challenge.exp}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md"
              onClick={() => navigate(`/challenge/${challenge.id}`)}
            >
              Start Challenge
            </button>
          </motion.div>
        ))}
      </div>
    </div></>
  );
}
