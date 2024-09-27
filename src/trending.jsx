import "./trending.css";

const Trending = () => {
  const scrollLeft = () => {
    document.querySelector(".trending-movies").scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.querySelector(".trending-movies").scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-fluid trending-section px-1 mt-3">
      {/* Header with title and navigation buttons */}
      <div className="trending-header ps-3 pe-3">
        <h2>Trending</h2>
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
      <div className="trending-movies ps-3 pe-3 pb-3">

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov5.webp" className="trend" alt="Movie 1" />
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
          <p>Jo Tera Hai Woh Mera Hai</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov3.jpg" className="trend" alt="Movie 1" />
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
          <p>The Great Indian Kapil Show</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov6.jpg" className="trend" alt="Movie 1" />
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
          <p>Thangalaan</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov7.webp" className="trend" alt="Movie 1" />
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
          <p>Thalaivettiyaan Paalayam</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov8.jpg" className="trend" alt="Movie 1" />
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
          <p>His Three Daughters</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov9.webp" className="trend" alt="Movie 1" />
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
          <p>The Penguin</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov10.jpg" className="trend" alt="Movie 1" />
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
          <p>Agatha All Along</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov11.jpeg" className="trend" alt="Movie 1" />
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
          <p>What’s Next? The Future with Bill Gates</p>
        </div>

        <div className="movie-card">
          <div className="movie-image-container">
            <img src="./mov12.jpeg" className="trend" alt="Movie 1" />
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
          <p>Monsters</p>
        </div>

        
      </div>
    </div>
  );
};

export default Trending;
