document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.exp-card');
  const emptyMsg = document.getElementById('expEmpty');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.tag === filter;
        card.classList.toggle('hidden', !match);
        if (match) visibleCount++;
      });

      emptyMsg.classList.toggle('visible', visibleCount === 0);
    });
  });
});
