import "./genre.css";

const Genre = () => {
  const scrollLeft = () => {
    document.querySelector(".genre-movies").scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.querySelector(".genre-movies").scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-fluid trending-section px-1 mt-3">
      {/* Header with title and navigation buttons */}
      <div className="trending-header ps-3 pe-3">
        <h2>Genre</h2>
        <div className="indicators">
          <button className="left-indicator py-3" onClick={scrollLeft}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </button>
          <button className="right-indicator py-3" onClick={scrollRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Movie cards */}
      <div className="genre-movies ps-3 pe-3 pb-3">

        <div className="genre-card">
          <div className="movie-image-container">
            <img src="./mov13.jpeg" className="trend" alt="Movie 1" />
            <div className="play-icon fs-6">
           
              See All
            </div>
          </div>
          <p>Drama/Comedy</p>
        </div>

        <div className="genre-card">
          <div className="movie-image-container">
            <img src="./mov14.jpg" className="trend" alt="Movie 1" />
            <div className="play-icon fs-6">
           
           See All
         </div>
          </div>
          <p>Thriller/Drama</p>
        </div>

        <div className="genre-card">
          <div className="movie-image-container">
            <img src="./mov15.jpg" className="trend" alt="Movie 1" />
            <div className="play-icon fs-6">
           See All
         </div>
          </div>
          <p>Fantasy/Adventure</p>
        </div>

        <div className="genre-card">
          <div className="movie-image-container">
            <img src="./mov16.jpg" className="trend" alt="Movie 1" />
            <div className="play-icon fs-6">
           
           See All
         </div>
          </div>
          <p>Romance/Fantasy</p>
        </div>

        <div className="genre-card">
          <div className="movie-image-container">
            <img src="./mov17.jpeg" className="trend" alt="Movie 1" />
            <div className="play-icon fs-6">
           
           See All
         </div>
          </div>
          <p>Historical Biopic</p>
        </div>

        <div className="genre-card">
          <div className="movie-image-container">
            <img src="./mov18.jpg" className="trend" alt="Movie 1" />
            <div className="play-icon fs-6">
           
           See All
         </div>
          </div>
          <p>Animated</p>
        </div>

        <div className="genre-card">
          <div className="movie-image-container">
            <img src="./mov19.jpeg" className="trend" alt="Movie 1" />
            <div className="play-icon fs-6">
           
              See All
            </div>
          </div>
          <p>War</p>
        </div>

        <div className="genre-card">
          <div className="movie-image-container">
            <img src="./mov20.jpeg" className="trend" alt="Movie 1" />
            <div className="play-icon fs-6">
           
           See All
         </div>
          </div>
          <p>Drama/Emotional</p>
        </div>

        

        
      </div>
    </div>
  );
};

export default Genre;
