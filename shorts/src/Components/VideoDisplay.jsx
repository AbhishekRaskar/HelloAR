import React, { useEffect, useState } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

const VideoDisplay = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    "https://www.youtube.com/embed/NPvVxMlPlB0",
    "https://www.youtube.com/embed/n_6YPvWcFLA",
    "https://www.youtube.com/embed/DyG-Z7O0Cnc",
    "https://www.youtube.com/embed/hzBUbK1B7Pc",
    "https://www.youtube.com/embed/CkcUhKugORs",
    "https://www.youtube.com/embed/NPvVxMlPlB0",
    "https://www.youtube.com/embed/n_6YPvWcFLA",
    "https://www.youtube.com/embed/DyG-Z7O0Cnc",
    "https://www.youtube.com/embed/hzBUbK1B7Pc",
    "https://www.youtube.com/embed/CkcUhKugORs",
    "https://www.youtube.com/embed/NPvVxMlPlB0",
    "https://www.youtube.com/embed/n_6YPvWcFLA",
    "https://www.youtube.com/embed/DyG-Z7O0Cnc",
    "https://www.youtube.com/embed/hzBUbK1B7Pc",
    "https://www.youtube.com/embed/CkcUhKugORs",
    "https://www.youtube.com/embed/NPvVxMlPlB0",
    "https://www.youtube.com/embed/n_6YPvWcFLA",
    "https://www.youtube.com/embed/DyG-Z7O0Cnc",
    "https://www.youtube.com/embed/hzBUbK1B7Pc",
    "https://www.youtube.com/embed/CkcUhKugORs",
    "https://www.youtube.com/embed/NPvVxMlPlB0",
    "https://www.youtube.com/embed/n_6YPvWcFLA",
    "https://www.youtube.com/embed/DyG-Z7O0Cnc",
    "https://www.youtube.com/embed/hzBUbK1B7Pc",
    "https://www.youtube.com/embed/CkcUhKugORs",
    "https://www.youtube.com/embed/NPvVxMlPlB0",
    "https://www.youtube.com/embed/n_6YPvWcFLA",
    "https://www.youtube.com/embed/DyG-Z7O0Cnc",
    "https://www.youtube.com/embed/hzBUbK1B7Pc",
    "https://www.youtube.com/embed/CkcUhKugORs",
    "https://www.youtube.com/embed/NPvVxMlPlB0",
    "https://www.youtube.com/embed/n_6YPvWcFLA",
    "https://www.youtube.com/embed/DyG-Z7O0Cnc",
    "https://www.youtube.com/embed/hzBUbK1B7Pc",
    "https://www.youtube.com/embed/CkcUhKugORs",
  ];

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else if (e.key === "ArrowUp" && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDownListener = (e) => {
      if (e.key === "ArrowDown" && currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1);
      } else if (e.key === "ArrowUp" && currentVideoIndex > 0) {
        setCurrentVideoIndex(currentVideoIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDownListener);
    return () => window.removeEventListener("keydown", handleKeyDownListener);
  }, [currentVideoIndex, videos.length]);

  const goToNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const goToPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  return (
    <Flex direction="column" justify="center" align="center" py={4}>
      <Button
        onClick={goToPreviousVideo}
        mb={2}
        disabled={currentVideoIndex === 0}
        colorScheme="teal"
        variant="solid"
      >
        Previous Video
      </Button>
      <Box mb={4}>
        <iframe
          src={videos[currentVideoIndex]}
          title={`YouTube video ${currentVideoIndex + 1}`}
          width="100%"
          height="500"
          frameBorder="0"
        ></iframe>
      </Box>
      <Button
        onClick={goToNextVideo}
        mt={2}
        disabled={currentVideoIndex === videos.length - 1}
        colorScheme="teal"
        variant="solid"
      >
        Next Video
      </Button>
    </Flex>
  );
};

export default VideoDisplay;
