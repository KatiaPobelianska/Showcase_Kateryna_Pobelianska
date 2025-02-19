document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const globalTimerElement = document.getElementById("global-timer");
  const scrollDuration = 1 * 60 * 1000;
  const updateInterval = 1000;
  let currentSectionIndex = 0;
  let timeLeft = scrollDuration / 1000;
  let intervalId;

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const updateTimer = () => {
    if (globalTimerElement) {
      globalTimerElement.textContent = formatTime(timeLeft);
    }
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(intervalId);
      scrollToNextSection();
    }
  };

  const scrollToNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      timeLeft = scrollDuration / 1000;
      sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
      startTimer();
    } else {
      clearInterval(intervalId);
    }
  };

  const startTimer = () => {
    clearInterval(intervalId);
    intervalId = setInterval(updateTimer, updateInterval);
    updateTimer();
  };

  window.addEventListener("beforeunload", () => {
    clearInterval(intervalId);
  });

  startTimer();
});