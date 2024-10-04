// Function to encode the message
function encodeMessage() {
  const messageInput = document.getElementById('messageInput').value;
  const encodedMessage = btoa(messageInput); // Base64 encoding
  document.getElementById('result').value = encodedMessage;
}

// Function to decode the message
function decodeMessage() {
  const encodedMessage = document.getElementById('messageInput').value;
  try {
      const decodedMessage = atob(encodedMessage); // Base64 decoding
      document.getElementById('result').value = decodedMessage;
  } catch (e) {
      document.getElementById('result').value = 'Invalid encoded message';
  }
}

// Function to copy result to clipboard
function copyToClipboard() {
  const result = document.getElementById('result');
  result.select();
  document.execCommand('copy');
  alert('Copied to clipboard!');
}

// Function to clear both text areas
function clearText() {
  document.getElementById('messageInput').value = '';
  document.getElementById('result').value = '';
}
