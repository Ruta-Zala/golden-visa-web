
export const handleScrollToSection = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

export const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };