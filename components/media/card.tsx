import Image from "next/image";
import { PiQuestion } from "react-icons/pi";

export default function MediaCard({ media }: { media: Media }) {
  return (
    <div className="relative aspect-[2/3]">
      {media.poster_path ? (
        <Image
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
          width={500}
          height={750}
          alt=""
          unoptimized
        />
      ) : (
        <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
          <PiQuestion className="text-4xl text-zinc-500" />
        </div>
      )}
      <div className="mt-2">
        <h3 className="line-clamp-1">{media.name || media.title}</h3>
      </div>
    </div>
  );
}
