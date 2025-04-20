import { useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <div className="mt-24">
      <h2 className="text-center text-4xl font-bold mb-10 text-orange-300 font-title">Koncert előzetes</h2>
      <div className="w-full max-w-4xl mx-auto aspect-video relative rounded-2xl shadow-md overflow-hidden ">
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title={title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
            frameBorder="0"
          ></iframe>
        ) : (
          <div
            className="w-full h-full bg-black cursor-pointer relative"
            onClick={() => setIsPlaying(true)}
            role="button"
            aria-label={`Play video: ${title}`}
          >
            <img
              src={thumbnail}
              alt={`Video thumbnail: ${title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
              <svg
                className="w-16 h-16 text-white opacity-90"
                fill="currentColor"
                viewBox="0 0 84 84"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="42" cy="42" r="42" fill="rgba(0,0,0,0.6)" />
                <polygon points="33,26 60,42 33,58" fill="white" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
