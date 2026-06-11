import "./Home.css";

const cars = [
  {
    name: "Flame Rider",
    desc: "Built for speed with blazing orange tracks.",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Night Racer",
    desc: "A dark beast made for midnight racing.",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Turbo Beast",
    desc: "Power, style, and serious track domination.",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
  },
];

function Home() {
  return (
    <div className="hotwheels-home">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold logo-text" href="#">
            HOT<span>WHEELS</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-lg-3">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cars">Cars</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tracks">Tracks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#join">Join Race </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#join">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section d-flex align-items-center">
        <div className="track-line"></div>
        <div className="moving-car">🏎️</div>

        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 text-white hero-content">
              <p className="badge rounded-pill hero-badge px-3 py-2">
                New Turbo Collection 2026
              </p>

              <h1 className="display-2 fw-bold hero-title">
                Race Beyond <br />
                <span>Imagination</span>
              </h1>

              <p className="lead mt-4 hero-subtitle">
                Discover powerful miniature machines, crazy loops, fire tracks,
                and high-speed action inspired by Hot Wheels.
              </p>

              <div className="d-flex gap-3 mt-4 flex-wrap">
                <a href="#cars" className="btn btn-warning btn-lg fw-bold px-4">
                  Explore Cars
                </a>
                <a href="#join" className="btn btn-outline-light btn-lg px-4">
                  Start Racing
                </a>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="hero-car-card">
                <div className="speed-lines"></div>
                <img
                  src="https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=900&q=80"
                  alt="Racing car"
                  className="img-fluid hero-car-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="stat-box">
                <h2>500+</h2>
                <p>Die-Cast Cars</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box">
                <h2>80+</h2>
                <p>Crazy Track Sets</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box">
                <h2>1M+</h2>
                <p>Young Racers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars */}
      <section className="cars-section py-5" id="cars">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">Featured Racers</p>
            <h2 className="section-title">Choose Your Speed Machine</h2>
          </div>

          <div className="row g-4">
            {cars.map((car, index) => (
              <div className="col-md-4" key={index}>
                <div className="car-card h-100">
                  <div className="car-img-wrap">
                    <img src={car.img} alt={car.name} />
                  </div>
                  <div className="p-4">
                    <h4>{car.name}</h4>
                    <p>{car.desc}</p>
                    <button className="btn btn-sm btn-danger rounded-pill px-4">
                      View Model
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="tracks-section py-5" id="tracks">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="loop-box">
                <div className="loop-circle"></div>
                <div className="tiny-car">🚗</div>
              </div>
            </div>

            <div className="col-lg-6 text-white">
              <p className="section-label">Extreme Tracks</p>
              <h2 className="section-title text-white">
                Loops, Jumps & Fire-Speed Turns
              </h2>
              <p className="track-text">
                Build your dream racing world with gravity-defying loops,
                mega ramps, boosters, and glowing orange tracks that turn every
                room into a racing arena.
              </p>

              <div className="row g-3 mt-3">
                <div className="col-sm-6">
                  <div className="mini-feature">🔥 Flame Boosters</div>
                </div>
                <div className="col-sm-6">
                  <div className="mini-feature">⚡ Turbo Launchers</div>
                </div>
                <div className="col-sm-6">
                  <div className="mini-feature">🌀 Mega Loops</div>
                </div>
                <div className="col-sm-6">
                  <div className="mini-feature">🏁 Race Finish Gates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="join-section py-5" id="join">
        <div className="container">
          <div className="join-box text-center text-white">
            <h2>Ready to Enter the Speed Zone?</h2>
            <p>
              Join the ultimate Hot Wheels-inspired racing experience and build
              your own legendary garage.
            </p>
            <button className="btn btn-warning btn-lg fw-bold px-5">
              Join the Race
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4 text-center">
        <p className="mb-0">
          © 2026 Hot Wheels Fan Home Page. Built with React & Bootstrap.
        </p>
      </footer>
    </div>
  );
}

export default Home;