document.addEventListener('DOMContentLoaded', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach(item => {
    item.addEventListener('click', function() {
      const content = this.querySelector('.content');
      content.classList.toggle('open');
    });
  });
});
