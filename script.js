document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('#review-rating .star');
  const ratingInput = document.getElementById('review-rating-value');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = star.getAttribute('data-rating');
      ratingInput.value = rating; // حفظ التقييم في الحقل المخفي
      stars.forEach(s => {
        s.setAttribute('aria-checked', s.getAttribute('data-rating') <= rating);
        s.querySelector('i').classList.toggle('fas', s.getAttribute('data-rating') <= rating);
        s.querySelector('i').classList.toggle('far', s.getAttribute('data-rating') > rating);
        s.querySelector('i').classList.toggle('text-orange-600', s.getAttribute('data-rating') <= rating);
        s.querySelector('i').classList.toggle('text-gray-400', s.getAttribute('data-rating') > rating);
      });
    });
    star.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        star.click();
      }
    });
  });
});
