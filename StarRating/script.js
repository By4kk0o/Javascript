const stars = document.querySelectorAll('.star');
const totalRating = document.getElementById('totalRating');

let ratings = {
  responsive: 0,
  code: 0,
  intégration: 0,
  vertu: 0,
  total: 0
};

function updateTotalRating() {
  const totalStars = totalRating.querySelectorAll('.star_total, .star_fraction');
  const totalRatingValue = totalRating.querySelector('.rating-value');

  // Calculate totalSum and totalCount excluding the "total" category
  let totalSum = 0;
  let totalCount = 0;
  for (const category in ratings) {
    if (category !== 'total') {
      totalSum += ratings[category];
      totalCount++;
    }
  }

  // Calculate totalAverage only if totalCount is not zero
  const totalAverage = totalCount > 0 ? totalSum / totalCount : 0;

  // Nombre entier des étoiles (totalAverageInt)
  const totalAverageInt = Math.floor(totalAverage);
  // Partie décimale (0.0 - 0.5) pour les étoiles fractionnées
  const totalAverageDecimal = totalAverage - totalAverageInt;

  totalStars.forEach((star, index) => {
    if (index < totalAverageInt) {
      star.classList.add('active');
      star.classList.remove('filled');
    } else {
      star.classList.remove('active');
      star.classList.add('filled');
    }
    // Pour les étoiles fractionnées, vérifier si l'index est égal à totalAverageInt
    // et si la partie décimale est supérieure à 0 pour les colorier en partie.
    if (index === totalAverageInt && totalAverageDecimal > 0) {
      star.classList.add('active');
      star.style.setProperty('--star-width', totalAverageDecimal * 100 + '%');
    } else {
      star.style.removeProperty('--star-width');
    }
  });

  totalRatingValue.textContent = totalAverage.toFixed(1);

  // Add or remove the "visible" class based on the total rating
  if (totalAverage > 0) {
    totalRating.querySelector('.total-stars').classList.add('visible');
  } else {
    totalRating.querySelector('.total-stars').classList.remove('visible');
  }

  // Show or hide the rating-value span for the Total category
  if (ratings.total > 0) {
    totalRatingValue.style.display = 'inline';
  } else {
    totalRatingValue.style.display = 'none';
  }

  console.log('Ratings:', ratings);
}

stars.forEach(star => {
  star.addEventListener('mouseover', function () {
    const category = this.parentElement.dataset.category;
    const value = parseFloat(this.dataset.value);
    const categoryStars = document.querySelectorAll(`.stars[data-category="${category}"] .star`);

    categoryStars.forEach((star, index) => {
      if (index < value) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
  });

  star.addEventListener('mouseout', function () {
    const category = this.parentElement.dataset.category;
    const value = parseFloat(this.dataset.value);
    const categoryStars = document.querySelectorAll(`.stars[data-category="${category}"] .star`);

    categoryStars.forEach((star, index) => {
      if (index >= ratings[category]) {
        star.classList.remove('active');
      } else {
        star.classList.add('active');
      }
    });
  });

  star.addEventListener('click', function () {
    const category = this.parentElement.dataset.category;
    const value = parseFloat(this.dataset.value);

    ratings[category] = value;
    updateTotalRating();

    // Reset the rating for this category
    const categoryStars = document.querySelectorAll(`.stars[data-category="${category}"] .star`);
    categoryStars.forEach((star, index) => {
      if (index < value) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });

    // Check if all categories except "total" have been rated to show the Total section
    const allCategoriesRated = Object.keys(ratings)
      .filter(category => category !== 'total')
      .every(category => ratings[category] > 0);

    if (allCategoriesRated) {
      // Calculate the total rating
      let totalSum = 0;

      for (const category in ratings) {
        if (category !== 'total') {
          totalSum += ratings[category];
        }
      }

      const totalAverage = totalSum / Object.keys(ratings).length;
      ratings.total = totalAverage;
      updateTotalRating();

      totalRating.style.display = 'block';
      totalRating.style.animation = 'fadeIn 1s';
    } else {
      totalRating.style.display = 'none';
    }
  });
});

// Assurez-vous que la catégorie "Total" est initialement cachée
totalRating.style.display = 'none';

// Empêcher l'interaction avec les étoiles de la catégorie "Total"
const totalStars = totalRating.querySelectorAll('.star_total, .star_fraction');
totalStars.forEach(star => {
  star.addEventListener('mouseover', () => {
    totalStars.forEach(totalStar => totalStar.classList.remove('active'));
  });
  star.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});
