import React from "react";

type Props = {
  videoUrl: string;
};

const YouTubeThumbnail = ({ videoUrl }: Props) => {
  const videoId = new URL(videoUrl).searchParams.get("v");
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <img
      src={thumbnailUrl}
      alt="YouTube thumbnail"
      className="w-[80px] h-[45px] rounded-lg object-cover"
    />
  );
};

export default YouTubeThumbnail;
