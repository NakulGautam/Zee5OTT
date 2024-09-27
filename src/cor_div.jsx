import React, { useState, useEffect, useRef } from "react";

const CardData = [
  {
    title: "Berlin",
    type: "video",
    image: "./mov1.webp",
    videoUrl: "https://www.youtube.com/embed/ZNggGchubZQ?autoplay=0&mute=1&loop=1&playlist=ZNggGchubZQ&si=ik5xJGs7JAwyWiQV",
    description: "Thriller/Spy/Action",
  },
  {
    title: "Bhaiya Ji",
    type: "video",
    image: "./mov2.webp",
    videoUrl: "https://www.youtube.com/embed/BTG7TVVD_ys?autoplay=0&mute=1&loop=1&playlist=BTG7TVVD_ys&si=cHzvWrGDP4GfYiFL",
    description: "Action/Drama/Crime",
    

  },
  {
    title: "DEADPOOL & WOLVERINE",
    type: "video",
    image:"./mov4.png",
    videoUrl: "https://www.youtube.com/embed/-REFarTXJbw?autoplay=0&mute=1&loop=1&playlist=-REFarTXJbw&si=0hxiyU-hRJimIYSm", // Updated video link with autoplay and mute
    description: "Sci-fi/Action/Comedy",
  },
  {
    title: "Rab Ne Bna Di Jodi",
    type: "video",
    image:"./mov30.jpg",
    videoUrl: "https://www.youtube.com/embed/E9XJGUEecyE?autoplay=0&mute=1&loop=1&playlist=E9XJGUEecyE&si=peIgu5kTCYAu1bX0",
    description: "Comedy/Romance",
     
  },
];


const Slider = () => {
  const [active, setActive] = useState(3);
  const itemsRef = useRef([]);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const loadShow = () => {
    let stt = 0;
    itemsRef.current[active].style.transform = "none";
    itemsRef.current[active].style.zIndex = 1;
    itemsRef.current[active].style.filter = "none";
    itemsRef.current[active].style.opacity = 1;

    for (let i = active + 1; i < itemsRef.current.length; i++) {
      stt++;
      itemsRef.current[i].style.transform = `translateX(${360 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(35px) rotateY(-1deg)`;
      itemsRef.current[i].style.zIndex = -stt;
      itemsRef.current[i].style.filter = "blur(5px)";
      itemsRef.current[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;

    for (let i = active - 1; i >= 0; i--) {
      stt++;
      itemsRef.current[i].style.transform = `translateX(${
        -360 * stt
      }px) scale(${1 - 0.2 * stt}) perspective(35px) rotateY(1deg)`;
      itemsRef.current[i].style.zIndex = -stt;
      itemsRef.current[i].style.filter = "blur(5px)";
      itemsRef.current[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  return (
    <div className="container-fluid out">
      <div className="slider">
        <div
          id="prev"
          ref={prevRef}
          onClick={() => setActive(active - 1 >= 0 ? active - 1 : active)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill" // Updated to className
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </div>
        <div
          id="next"
          ref={nextRef}
          onClick={() =>
            setActive(
              active + 1 < itemsRef.current.length ? active + 1 : active
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="currentColor"
            className="bi bi-arrow-right-circle-fill" // Updated to className
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </div>
        {CardData.map((card, index) => (
  <div
    key={index} // Moved key here
    ref={(el) => (itemsRef.current[index] = el)}
    className="card item me-lg-2 me-md-3 mb-4 mb-xl-0"
  >
    {card.type === "image" ? (
      <img src={card.image} className="card-img-top" alt={card.title} />
    ) : (
      <iframe
  width="100%"
  height="315"
  src={card.videoUrl}
  title={card.title}
  style={{ border: "none" }} // Removes the border
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

    )}
   
   <div className="mov_cover">
  <div className="blur-background"></div> 
  
  <div className="card-content"> 
    <img src={card.image} className="cover" alt="" srcSet="" />
    <div className="card-body ps-0">
      <h5 className="card-title text-warning">{card.title}</h5>
      <p className="card-text fw-bold">{card.description}</p>
      <a href="#" className="btn btn-warning text-white ">
        <span className="pe-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
        </svg></span>
        WATCH NOW</a>
    </div>
  </div>
</div>



  </div>
))}

      </div>
    </div>
  );
};

export default Slider;
