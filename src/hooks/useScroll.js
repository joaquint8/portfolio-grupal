export const useScrollTo = (onAfterScroll) => {

  const scrollTo = (e, id) => {
    e.preventDefault();

    const section = document.querySelector(id);

    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    if (onAfterScroll) onAfterScroll();
  };

  return { scrollTo };
};