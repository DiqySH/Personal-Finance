"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useWindowSize } from "@uidotdev/usehooks";

const Custom404 = () => {
  const { width } = useWindowSize();
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center gap-2">
      <Player
        autoplay
        loop
        src="/animations/404-not-found.json"
        style={{
          height: width <= 1100 ? "200px" : "300px",
          width: width <= 1100 ? "200px" : "300px",
        }}
      />
      <p className="font-young-serif font-bold flex gap-2">
        <span className="font-bricolage-grotesque">404</span> Not Found
      </p>
    </main>
  );
};

export default Custom404;
