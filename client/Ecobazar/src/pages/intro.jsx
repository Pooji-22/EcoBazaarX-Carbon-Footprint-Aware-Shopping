import { useEffect, useRef, useState } from "react";
import logoVideo from "../assets/Eco_Bazaar_logo.mp4";

export default function Intro() {
  const videoRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    videoRef.current.playbackRate = 1.5;

    videoRef.current.onended = () => {
      setShowContent(true);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      {!showContent && (
        <video ref={videoRef} autoPlay muted className="w-[350px] rounded-xl">
          <source src={logoVideo} type="video/mp4" />
        </video>
      )}

      {showContent && (
        <div className="text-center transition-all duration-700">
          <h1 className="text-5xl font-bold text-green-700 mb-6 animate-fade-in">
            EcoBazaarX
          </h1>

          <div className="flex justify-center gap-6 animate-fade-in">
            <a href="/register" className="bg-green-700 text-white px-6 py-3 rounded-xl">
              Register
            </a>
            <a href="/login" className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-xl">
              Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
