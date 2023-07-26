const quotes = [
    "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
    "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
    "La seule façon de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
    "Le pessimiste voit la difficulté dans chaque opportunité. L'optimiste voit l'opportunité dans chaque difficulté. - Winston Churchill",
    "On ne peut pas construire son avenir en regardant dans le rétroviseur. - J. K. Rowling",
    "Le vrai bonheur ne dépend d'aucun être, d'aucun objet extérieur. Il ne dépend que de nous. - Dalaï Lama",
    "Ce n'est pas en regardant la lumière qu'on devient lumineux, mais en plongeant dans son obscurité. - Carl Gustav Jung",
    "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez. - Albert Schweitzer",
    "La vie devient plus simple lorsque nous acceptons les choses que nous ne pouvons pas changer. - Proverbe inconnu",
    "Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est maintenant. - Proverbe chinois",
    "L'échec est le fondement de la réussite. - Lao Tseu",
    "Le succès, c'est tomber sept fois et se relever huit. - Proverbe japonais",
    "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute. - Nelson Mandela",
    "L'avenir appartient à ceux qui croient en la beauté de leurs rêves. - Eleanor Roosevelt",
    "Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi. - Georges Clemenceau",
    "Les gagnants trouvent des moyens, les perdants des excuses. - Frank Sinatra",
    "Ne jugez pas chaque jour à la récolte que vous récoltez, mais aux graines que vous plantez. - Robert Louis Stevenson",
    "Soyez le changement que vous voulez voir dans le monde. - Gandhi",
    "Le bonheur est quelque chose qui se multiplie quand il se divise. - Paulo Coelho",
    "La plus grande découverte de tous les temps, c'est qu'une personne peut changer son avenir en changeant simplement son attitude. - Oprah Winfrey",
    "On regrette rarement d'avoir osé, mais toujours de ne pas avoir essayé. - Proverbe inconnu",
    "Lorsque vous avez éliminé l'impossible, ce qui reste, si improbable que ce soit, est nécessairement la vérité. - Arthur Conan Doyle",
    "La folie, c'est de faire toujours la même chose et de s'attendre à un résultat différent. - Albert Einstein",
    "Soyez vous-même, tous les autres sont déjà pris. - Oscar Wilde",
    "L'éducation est l'arme la plus puissante pour changer le monde. - Nelson Mandela",
    "Nous devons apprendre à vivre ensemble comme des frères, sinon nous allons mourir tous ensemble comme des idiots. - Martin Luther King Jr.",
    "La vie est faite de choix, et vivre c'est en assumer les conséquences. - Jean-Paul Sartre",
    "Le courage n'est pas l'absence de peur, mais la capacité de la vaincre. - Nelson Mandela",
    "Le plus grand risque est de ne prendre aucun risque. Dans une période de changement, le seul danger est de rester immobile. - Seth Godin",
    "Si vous ne faites jamais d'erreurs, c'est que vous ne prenez pas assez de risques. - John Sculley",
    "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui. - Franklin D. Roosevelt",
    "L'échec est l'épice qui donne sa saveur au succès. - Truman Capote",
    "Rien de grand ne s'est accompli dans le monde sans passion. - Georg Wilhelm Friedrich Hegel",
    "Le succès, c'est se promener d'échec en échec tout en restant motivé. - Winston Churchill",
    "Les gens qui sont assez fous pour penser qu'ils peuvent changer le monde sont ceux qui le font. - Rob Siltanen",
    "Un pessimiste voit la difficulté dans chaque opportunité, un optimiste voit l'opportunité dans chaque difficulté. - Winston Churchill",
    "Ne demandez pas ce que votre pays peut faire pour vous, demandez ce que vous pouvez faire pour votre pays. - John F. Kennedy",
    "Le bonheur est un parfum que l'on ne peut répandre sur autrui sans en faire jaillir quelques gouttes sur soi-même. - Ralph Waldo Emerson",
    "La véritable éducation consiste à tirer le meilleur de soi-même. - Mahatma Gandhi",
    "Le succès n'est pas toujours le résultat d'un travail acharné, parfois il faut savoir saisir les opportunités. - Mark Twain",
    "La créativité, c'est l'intelligence qui s'amuse. - Albert Einstein",
    "La vie devient plus simple lorsque nous acceptons les choses que nous ne pouvons pas changer. - Proverbe inconnu",
    "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux. - Antoine de Saint-Exupéry",
    "Chaque jour est une nouvelle chance de changer votre vie. - Proverbe inconnu",
    "La persévérance est la clé du succès. - Proverbe français",
    "L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde. - Nelson Mandela",
    "Un objectif sans plan n'est qu'un souhait. - Antoine de Saint-Exupéry",
    "La patience est l'art d'espérer. - Luc de Clapiers",
    "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
    "Les plus grandes réalisations de l'humanité ont été accomplies en travaillant ensemble. - Proverbe inconnu",
    "La beauté commence au moment où vous décidez d'être vous-même. - Coco Chanel",
    "La vie est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. - Albert Einstein"
  ];
  
  function generateRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.textContent = quotes[randomNumber];
  }
  
  const generateBtn = document.getElementById("generateBtn");
  generateBtn.addEventListener("click", generateRandomQuote);
  
  // Afficher une citation aléatoire au chargement initial de la page
  generateRandomQuote();
  