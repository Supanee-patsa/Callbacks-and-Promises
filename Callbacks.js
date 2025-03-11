// Function to flip a coin and decide the next action
const flipCoin = async () => {
  try {
    console.log("Flipping the coin...");
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

    let result = Math.random();

    if (result > 0.5) {
      console.log("You win! Fetching advice...");
      await getAdvice(); // Fetch advice if you win
    } else {
      console.log("You lose! Better luck next time.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

// Function to fetch advice from an API
const getAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) throw new Error("Failed to fetch advice");

    const data = await response.json();
    console.log("Advice:", data.slip.advice);
  } catch (error) {
    console.error("Error fetching advice:", error.message);
  }
};

// Run the program
flipCoin();
