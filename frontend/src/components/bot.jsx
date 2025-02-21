import { useState } from "react";

export default function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "mistral",
          prompt: input,
          stream: true,
        }),
      });
      
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botResponse = "";
      
      while (true) {
        const { done, value } = await reader.read();
        console.log(value)
        if (done) break;
        botResponse += JSON.parse(decoder.decode(value, { stream: true })).response;
        setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 border rounded-xl shadow-lg">
      <div className="space-y-4">
        <div className="h-80 overflow-y-auto border p-2 rounded-lg bg-gray-100">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-1 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-black self-start"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border p-2 rounded"
          />
          <button onClick={sendMessage} disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
