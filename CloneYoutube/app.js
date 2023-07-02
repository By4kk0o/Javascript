document.addEventListener("DOMContentLoaded", function () {
  const videoList = document.getElementById("videoItems");
  const videoElement = document.getElementById("videoElement");
  const videoTitle = document.getElementById("videoTitle");
  const videoDescription = document.getElementById("videoDescription");
  let player;

  // Tableau de vidéos
  const videos = [
    {
      id: "VIDEO_ID_1",
      title: "Vidéo 1",
    },
    {
      id: "VIDEO_ID_2",
      title: "Vidéo 2",
    },
    {
      id: "VIDEO_ID_3",
      title: "Vidéo 3",
    },
  ];

  // Fonction pour afficher les détails de la vidéo sélectionnée
  function displayVideoDetails(videoId) {
    // Appel à l'API de YouTube pour récupérer les détails de la vidéo
    const request = gapi.client.youtube.videos.list({
      part: "snippet",
      id: videoId,
    });

    request.execute(function (response) {
      const video = response.items[0].snippet;
      videoTitle.innerText = video.title;
      videoDescription.innerText = video.description;
    });
  }

  // Fonction pour charger la vidéo sélectionnée dans le lecteur
  function loadVideo(videoId) {
    player.loadVideoById(videoId);
    displayVideoDetails(videoId);
  }

  // Fonction pour changer la vidéo en fonction de l'élément cliqué dans la liste
  function changeVideo(event) {
    const selectedVideoId = event.target.getAttribute("data-video-id");
    loadVideo(selectedVideoId);
  }

  // Parcourir les vidéos et créer les éléments de la liste
  videos.forEach(function (video) {
    const listItem = document.createElement("li");
    listItem.innerText = video.title;
    listItem.setAttribute("data-video-id", video.id);
    listItem.addEventListener("click", changeVideo);
    videoList.appendChild(listItem);
  });

  // Initialiser l'API de YouTube lors du chargement de la page
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("videoElement", {
      height: "360",
      width: "640",
      events: {
        // Gérer les événements du lecteur ici si nécessaire
      },
    });
    loadVideo(videos[0].id); // Charger la première vidéo par défaut
  }

  // Initialiser l'API de YouTube avec votre clé d'API
  function init() {
    gapi.client
      .init({
        apiKey: "",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
        ],
      })
      .then(function () {
        // Appeler la fonction onYouTubeIframeAPIReady une fois que l'API de YouTube est prête
        onYouTubeIframeAPIReady();
      });
  }

  // Charger l'API client de YouTube
  gapi.load("client", init);
});
