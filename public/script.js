const socket = new WebSocket("ws://localhost:3000");

const messages = document.getElementById("messages");
const input = document.getElementById("messageInput");

socket.onmessage = (event) => {
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = event.data;
  messages.appendChild(msg);

  // Auto scroll
  messages.scrollTop = messages.scrollHeight;
};

function sendMessage() {
  if (input.value.trim() !== "") {
    socket.send(input.value);
    input.value = "";
  }
}
