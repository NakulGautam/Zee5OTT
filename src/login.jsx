

import React, { useState } from "react";

const fakeUsers = [
  { email: "user1@example.com", password: "password1" },
  { email: "user2@example.com", password: "password2" },
  { email: "user3@example.com", password: "password3" },
  { email: "user4@example.com", password: "password4" },
];

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = fakeUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setError("");
      onLogin(); // Call the onLogin function passed from App component
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom pb-5 pt-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="216"
              height="216"
              class="pb-3"
              viewBox="0 0 100 100"
               preserveAspectRatio="none"
              fill-rule="evenodd"
            >

              <path
                fill="#22bbbe"
                d="M47.823 3.717V.561C21.411.56 0 21.83 0 48.067s21.411 47.506 47.823 47.506v-3.156c-17.146-.015-33.49-9.9-40.839-26.492-9.927-22.414.315-48.58 22.879-58.442a44.734 44.734 0 0 1 17.96-3.766"
              />
              <path
                fill="#7dad41"
                d="M31.132 10.386L29.85 7.489C7.285 17.351-2.957 43.516 6.971 65.93s36.268 32.59 58.832 22.727l-1.284-2.896c-11.668 5.088-25.534 4.783-37.416-2.032C7.279 72.36.487 47.18 11.933 27.487a41.166 41.166 0 0 1 19.2-17.101"
              />
              <path
                fill="#f4b719"
                d="M66.962 15.139l1.585-2.728C48.723 1.041 23.375 7.79 11.929 27.481S7.277 72.354 27.1 83.723l1.59-2.735a38.21 38.21 0 0 1-8.602-6.76c-14.545-15.225-13.91-39.28 1.416-53.729C34.088 8.636 52.665 6.94 66.962 15.14"
              />
              <path
                fill="#e55824"
                d="M23.68 22.794l-2.185-2.287C6.168 34.956 5.527 59.003 20.072 74.228s38.76 15.855 54.086 1.407l-2.192-2.295c-8.172 7.69-19.917 11.342-31.733 8.739-18.91-4.164-30.84-22.768-26.648-41.552A34.622 34.622 0 0 1 23.68 22.794"
              />
              <path
                fill="#b52c80"
                d="M54.724 17.149l.69-3.094c-18.91-4.164-37.637 7.687-41.83 26.472s7.74 37.388 26.649 41.552l.69-3.09-.005-.001C23.725 75.2 12.879 58.288 16.69 41.212s20.837-27.85 38.027-24.065l.007.002"
              />
              <path
                d="M71.242 52.89h8.073c.172-1.117.284-2.253.336-3.405l-8.41.041v3.364zm0-9.748v3.25l8.394-.042a31.7 31.7 0 0 0-.337-3.208h-8.057zm-3.524 12.882V40.008H78.64C75.05 26.42 62.605 16.397 47.8 16.397c-17.608 0-31.883 14.18-31.883 31.67s14.275 31.671 31.882 31.671c14.842 0 27.314-10.074 30.867-23.714h-10.95zm16.089-2.189l1.745-2.03c1.285 1.185 2.64 1.915 4.131 1.915 1.928 0 3.19-1.094 3.19-2.759v-.045c0-1.619-1.377-2.645-3.328-2.645-1.148 0-2.134.32-2.96.707l-1.7-1.118.46-7.82h9.594v2.485h-7.161l-.253 3.74c.758-.274 1.47-.457 2.548-.457 3.121 0 5.577 1.642 5.577 5.016v.046c0 3.26-2.387 5.404-5.944 5.404-2.456 0-4.384-.98-5.9-2.44"
                fill="#fefefe"
              />
              <path
                fill="#020303"
                d="M63.448 43.142h-8.753v3.25h8.753v3.134h-8.753v3.364h8.753v3.134H51.17V40.008h12.277zm-15.985-.457l-8.869 10.25h8.869v3.09h-13.43v-2.678l8.868-10.25h-8.59v-3.089h13.152zm32.175 3.665h-.117l-8.28.041v-3.249h8.061a31.279 31.279 0 0 0-.66-3.135H67.719v16.017H78.67a31.13 31.13 0 0 0 .648-3.134h-8.075v-3.364l8.297-.04.112-.001h.001a31.91 31.91 0 0 0-.014-3.134"
              />
            </svg>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit} className="bg-white p-5 rounded-3">
              {/* Social media buttons */}
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
               
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook mx-2" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
                
               
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter-x mx-2" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
              
               
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram mx-2" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
               
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              {/* Password input */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              {/* Error message */}
              {error && <p className="text-danger">{error}</p>}

              {/* Remember me and Forgot password */}
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              {/* Submit button */}
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </section>
  );
}
