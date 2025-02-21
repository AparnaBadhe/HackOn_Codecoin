// import { useNavigate } from "react-router-dom";
// export default function(){
//   const navigate = useNavigate();
// return(
// <div className="hero flexbox">
// <h1>Level Up Your Coding Skills<br/> Through Play</h1>
//   <div><p>Transform your coding journey into an exciting adventure with our gamified app. Experience hands-on learning, instant feedback, and a scoring system that motivates you to excel.</p>
//   <div className="flexbox">
// <span className="button"onClick={()=>{navigate('/lessons')}} >Get Started</span>
// <span >Learn More</span>
//   </div>
//   </div>

//   </div>
// );
// }

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-6"
      >
        Level Up Your Coding Skills <br /> Through Play
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-lg md:text-xl max-w-2xl mb-8"
      >
        Transform your coding journey into an exciting adventure with our gamified app. 
        Experience hands-on learning, instant AI-powered feedback, and a scoring system 
        that motivates you to excel. Earn badges, climb leaderboards, and become a coding champion!
      </motion.p>
      
      <div className="flex space-x-4">
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg transition-all"
          onClick={() => navigate('/lessons')}
        >
          Get Started
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white text-lg font-semibold rounded-xl shadow-lg transition-all"
          onClick={() => navigate('/about')}
        >
          Learn More
        </motion.button>
      </div>
      
      <div className="mt-10 flex space-x-4">
        <span className="px-4 py-2 bg-yellow-500 text-black text-sm font-semibold rounded-lg shadow-md">🏆 Earn Badges</span>
        <span className="px-4 py-2 bg-purple-500 text-white text-sm font-semibold rounded-lg shadow-md">🔥 Streak Rewards</span>
        <span className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-md">🚀 Leaderboards</span>
      </div>
    </div>
  );
}
