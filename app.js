const WebSocket = require("ws");
const express = require("express");
const http = require("http");
const { nanoid } = require("nanoid");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

const rooms = {}; // Stores active rooms and players

wss.on("connection", (ws) => {
    console.log("New player connected!");
 ws.on("message", (message) => {
        const data = JSON.parse(message);

        if (data.type === "createRoom") {
            const roomCode = nanoid(6); // Generate a 6-character room code
            rooms[roomCode] = { host: ws, players: [], quizStarted: false };
            ws.send(JSON.stringify({ type: "roomCreated", roomCode }));
            console.log(`Room ${roomCode} created!`);
        }

        if (data.type === "joinRoom") {
            const { roomCode, playerName } = data;
            if (rooms[roomCode] && !rooms[roomCode].quizStarted) {
                rooms[roomCode].players.push({ ws, name: playerName, score: 0 });
                ws.send(JSON.stringify({ type: "joinedRoom", roomCode }));
                console.log(`${playerName} joined room ${roomCode}`);

                // Notify all players in the room
                broadcast(roomCode, { type: "playerJoined", playerName });
            } else {
                ws.send(JSON.stringify({ type: "error", message: "Room not found or quiz already started" }));
            }
        }

        if (data.type === "startQuiz") {
            const { roomCode } = data;
            if (rooms[roomCode] && rooms[roomCode].host === ws) {
                rooms[roomCode].quizStarted = true;
                broadcast(roomCode, { type: "quizStarted" });
                sendQuestion(roomCode);
            }
        }

        if (data.type === "answer") {
            const { roomCode, playerName, timestamp } = data;
            const responseTime = Date.now() - timestamp;
            const points = Math.max(1000 - responseTime, 100); // Example scoring

            rooms[roomCode].players.forEach((player) => {
                if (player.name === playerName) player.score += points;
            });

            broadcast(roomCode, { type: "scoreUpdate", scores: rooms[roomCode].players });
        }
    });

    ws.on("close", () => {
        console.log("Player disconnected");
    });
});



app.get("/", (req, res) => {
    res.send("WebSocket server is running!");
})


server.listen(8080, () => console.log("Server running on http://localhost:8080"));
