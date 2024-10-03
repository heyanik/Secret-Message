function encodeMessage() {
  const message = document.getElementById("messageInput").value;
  let encodedMessage = "";

  for (let i = 0; i < message.length; i++) {
    encodedMessage += String.fromCharCode(message.charCodeAt(i) + 3); // Shift each character by 3
  }

  document.getElementById("result").value = encodedMessage;
}

function decodeMessage() {
  const encodedMessage = document.getElementById("messageInput").value;
  let decodedMessage = "";

  for (let i = 0; i < encodedMessage.length; i++) {
    decodedMessage += String.fromCharCode(encodedMessage.charCodeAt(i) - 3); // Reverse the shift
  }

  document.getElementById("result").value = decodedMessage;
}

function copyToClipboard() {
  const resultText = document.getElementById("result");
  resultText.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}
