document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.policy-section');
  const tocLinks = document.querySelectorAll('.policy-toc a');

  if (!sections.length || !tocLinks.length) return;

  const highlight = () => {
    let currentId = sections[0].id;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 160) currentId = section.id;
    });

    tocLinks.forEach((link) => {
      link.style.color = '';
      link.style.borderLeftColor = 'transparent';
      if (link.getAttribute('href') === `#${currentId}`) {
        link.style.color = 'orangered';
        link.style.borderLeftColor = 'orangered';
      }
    });
  };

  document.addEventListener('scroll', highlight);
  highlight();
});
