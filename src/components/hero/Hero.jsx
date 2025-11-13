import Navbar from "../navbar/Navbar";
import me from "../../assets/me.png";
import { useEffect, useState } from "react";


export default function Hero() {
  const text = "Frontend Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setDisplayedText("");
        setIndex(0);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index, text]);

  const handleDownloadCV = () => {
    // Download CV directly from Google Drive
    const fileId = '1n6jHGotIXaICn6jaYUjbth1Q2NWWIa9t';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Zahra_Abdelaleem_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center">
      <div className="md:h-[720px] h-[990px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute bg-yellow-800 rounded-full transform rotate-6 -top-40 z-0"></div>
      <Navbar />

      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 md:pt-32 pt-24 md:pb-24 mt-24 md:mt-0 z-10"
      >
        <div className="flex-1 md:text-left mt-10 md:mt-0">
          <span className="hello text-2xl font-thin">Hello, </span>
          <span className="intoText">I`m </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Zahra Abdelaleem
          </h1>
          <p
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 whitespace-nowrap"
          >
            {displayedText}
          </p>
          <div data-aos="fade-up" data-aos-delay="500">
            <button
              type="button"
              onClick={handleDownloadCV}
              className="text-white bg-blue-950 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 font-semibold rounded-full text-xs sm:text-sm px-4 py-2 text-center"
            >
              Download CV
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex-1 flex justify-center md:justify-end mt-0 md:mt-0"
        >
          <img
            src={me}
            alt="Hero Image"
            className="h-[300px] sm:h-[400px] md:h-[440px] w-[250px] sm:w-[360px] object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
