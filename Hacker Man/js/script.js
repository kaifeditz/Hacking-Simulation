const outputElement = document.getElementById('output');

async function hackKaif15() {
  outputElement.textContent += 'Initializing Hack program...\n';
  await delay(2000); // Simulate delay

  outputElement.textContent += 'Hacking Kaif15 Username...\n';
  await delay(3000); // Simulate delay

  outputElement.textContent += 'Username found: kaif17\n';
  await delay(2000); // Simulate delay

  outputElement.textContent += 'Connecting to Facebook...\n';
  await delay(4000); // Simulate delay

  // Add more steps here, like "Cracking password", "Accessing data", etc.
  // You can customize the delays and messages to your liking.
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

hackKaif15();