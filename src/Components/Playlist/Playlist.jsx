import { Box } from "@chakra-ui/react";
import Sidebar from "../CommonComponents/Sidebar/sidebar";
import LikeHeader from "../Like/LikeComponents/LikeHeader";
import LikeBody from "../Like/LikeComponents/LikeBody";
import SpotifyAudioPlayer from "../CommonComponents/AudioPlayer/SpotifyAudioPlayer";
import { useState } from "react";


const Playlist = () => {
  const [playSong, setPlaySong] = useState({
    songUrl: "",
    playSong: false,
    img: "",
    songName: "",
    singer: "",
  });

  return (
    <Box>
      <Sidebar />
      <LikeHeader
        img={
          "https://e-cdns-images.dzcdn.net/images/cover/798bbbf25e2eba0c25ac7be1a8f8e89c/1000x1000-000000-80-0-0.jpg"
        }
        heading={"SongName"}
        bg1={"#e015be"}
        bg2={"#53aced"}
      />

      {playSong.playSong ? <SpotifyAudioPlayer song={playSong} /> : ""}

      <LikeBody bg1={'#53aced'} bg2={'#0f0b15'} setPlaySong={setPlaySong} />
    </Box>
  );
};

export default Playlist;