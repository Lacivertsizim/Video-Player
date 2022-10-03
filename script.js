const songlist = [
    {
      id: 1,
      name: "KÜL",
      singer: 'Cem Adrian & Mark Eliyahu',
      src: "Cem Adrian & Mark Eliyahu - KÜL.mp4",
    },
    {
      id: 2,
      name: "Sen Ağlama",
      singer: 'Sezen Aksu',
      src: "Sezen Aksu - Sen Ağlama (Official Audio).mp4",
    },

    {
      id: 3,
      name: 'Gir Kanıma',
      singer: 'Harun Kolçak',
      src: 'Harun Kolçak - Gir Kanıma (Official Video).mp4'
    },
  ];

  const playlist = document.getElementById('playlist');
  const video =document.getElementById('video');

   playlistContent = '<ol>' 
  songlist.forEach((element) => {
    playlistContent = playlistContent + 
    '<li onclick="changeVideo(' + 
    element.id + ')">' + 
    element.name + '-' + 
    element.singer + '</li>'
  });
  playlistContent = playlistContent + '</ol>'
  playlist.innerHTML = playlist.innerHTML + playlistContent
  
  const changeVideo = (id) => {
    const result = songlist.filter(elm => {
        if (elm.id === id) {
            return elm;
        }
    })
    console.log(result[0].src);
    video.src = "./assets/videos/" + result[0].src
    video.play();
  };

