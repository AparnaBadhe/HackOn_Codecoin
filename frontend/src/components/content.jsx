import { useState } from "react";

export default function Lesson({ title, description, problems }) {
return(
    <div class="content-div flexbox">
        <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg m-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
      <div className="mt-4">
        {description.map((desc, index) => (
          <p key={index} className="text-gray-600 mb-4">{desc}</p>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example Problems</h2>
        {problems.map((problem, index) => (
          <div key={index} className="mt-6 p-6 bg-gray-100 rounded-lg">
            <p className="text-gray-800 font-medium mb-2">{problem.question}</p>
            <pre className="mt-3 p-4 bg-gray-200 rounded-md text-sm overflow-x-auto">
              {problem.solution}
            </pre>
          </div>
        ))}
      </div>
    </div>
</div>

)
}
