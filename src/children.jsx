import "./children.css";

const ChildrenSection = () => {
  const scrollLeft = () => {
    document.querySelector(".children-movies").scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.querySelector(".children-movies").scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-fluid trending-section px-1 mt-3">
      {/* Header with title and navigation buttons */}
      <div className="trending-header ps-3 pe-3">
        <h2>Children & Family</h2>
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
      <div className="children-movies ps-3 pe-3 pb-3">

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov21.png" className="trend" alt="Movie 1" />
            <div className="play-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
            </div>
          </div>
          <p>Work Dogs</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov22.jpeg" className="trend" alt="Movie 1" />
            <div className="play-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
            </div>
          </div>
          <p>BayBlade</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov23.jpg" className="trend" alt="Movie 1" />
            <div className="play-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
            </div>
          </div>
          <p>Ben 10</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov24.jpg" className="trend" alt="Movie 1" />
            <div className="play-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
            </div>
          </div>
          <p>ShinChan</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov25.jpg" className="trend" alt="Movie 1" />
            <div className="play-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
            </div>
          </div>
          <p>Doreamon</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov26.jpeg" className="trend" alt="Movie 1" />
            <div className="play-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
            </div>
          </div>
          <p>Ninja Hatori</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov27.webp" className="trend" alt="Movie 1" />
            <div className="play-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
            </div>
          </div>
          <p>Dragon Ball Z</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov28.jpg" className="trend" alt="Movie 1" />
            <div className="play-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
            </div>
          </div>
          <p>Horrid Henry</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov29.jpg" className="trend" alt="Movie 1" />
            <div className="play-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
            </div>
          </div>
          <p>Haddi Mera Buddy</p>
        </div>

        
      </div>
    </div>
  );
};

export default ChildrenSection;
