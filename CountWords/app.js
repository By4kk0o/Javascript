// Fonction pour compter les mots
function countWords() {
    var inputText = document.getElementById('input').value;
    var wordCount = 0;
  
    if (inputText.trim() !== '') {
      // Diviser le texte en mots en utilisant un espace comme délimiteur
      var words = inputText.split(' ');
      wordCount = words.length;
    }
  
    // Mettre à jour le compteur de mots dans le document
    document.getElementById('count').textContent = wordCount;
  }
  
  // Attacher un gestionnaire d'événements au bouton de comptage des mots
  document.getElementById('countBtn').addEventListener('click', countWords);
  