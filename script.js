// Countdown to Sept 1, 2025
const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-09-01T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "Presale Live!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Wallet Connect (basic MetaMask + Coinbase support)
document.getElementById("connectMetaMask").onclick = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      alert("Wallet connected!");
    } catch (error) {
      alert("Wallet connection failed.");
    }
  } else {
    alert("MetaMask not found.");
  }
};

document.getElementById("connectCoinbase").onclick = () => {
  window.open("https://www.coinbase.com/wallet", "_blank");
};
