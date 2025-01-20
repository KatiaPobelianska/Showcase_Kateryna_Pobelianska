document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = 0;
    const scrollDuration = 2 * 60 * 1000;

    const scrollToNextSection = () => {
      if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
      } else {
        clearInterval(timer);
      }
    };
  
    const timer = setInterval(scrollToNextSection, scrollDuration);
  
    window.addEventListener("beforeunload", () => {
      clearInterval(timer);
    });
});  