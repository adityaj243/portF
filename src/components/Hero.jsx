import React from "react";
import hero from "../assets/images/pfe1.png";
const Hero = () => {
  const social_media = [
    // {
      //   name: "logo-facebook",
      //   link: "https://www.linkedin.com/in/aditya-joshi-533100221"
      // },
      {
        name: "logo-linkedin",
        link: "https://www.linkedin.com/in/aditya-joshi-533100221"
      },
      {
        name: "logo-github",
        link: "https://github.com/adityaj243"
      },
      {
        name: "logo-instagram",
        link: "https://instagram.com/_joshiaditya_?igshid=MzNlNGNkZWQ4Mg=="
      }
  ];
  return (
    <section 
      id="home"
      className="min-h-screen flex py-13 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="h-83 w-90 object-cover" />
      </div> 
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I am <span>Aditya Joshi</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer and Programmer
          </h4>
          <button className="btn-primary mt-8"><a href="#contact">Contact Me</a></button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              > <a href={icon.link}><ion-icon name={icon.name}></ion-icon></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
