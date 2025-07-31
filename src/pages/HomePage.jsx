import React, { useState } from "react";
import "../styles/home.css";
import fpIdle from "../assets/fingerprint-black.png";
import fpHalf from "../assets/fingerprint-half.png";
import fpSuccess from "../assets/fingerprint-green.png";


const HomePage = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [scanState, setScanState] = useState(null); // 'idle' | 'scanning' | 'success' | null

  const clients = [
    {
      name: "Dhkruallah Adejare",
      email: "mmm@gmail.com",
      image: "/images/client1.jpg",
      lastVisit: "12/02025",
    },
    {
      name: "Dhkruallah Adejare",
      email: "habbeb@gmail.com",
      image: "/images/client2.jpg",
      lastVisit: "12/02025",
    },
    {
      name: "Dhkruallah Adejare",
      email: "jacob.44@gmail.com",
      image: "/images/client3.jpg",
      lastVisit: "12/02025",
    },
    {
      name: "Dhkruallah Adejare",
      email: "basid.47@gmail.com",
      image: "/images/client4.jpg",
      lastVisit: "12/02025",
    },
    {
      name: "Dhkruallah Adejare",
      email: "zainab@gmail.com",
      image: "/images/client5.jpg",
      lastVisit: "12/02025",
    },
    {
      name: "Dhkruallah Adejare",
      email: "umar77@gmail.com",
      image: "/images/client6.jpg",
      lastVisit: "12/02025",
    },
    {
      name: "Dhkruallah Adejare",
      email: "joan.den@gmail.com",
      image: "/images/client7.jpg",
      lastVisit: "12/02025",
    },
  ];

  const filteredClients = clients.filter((client) =>
    client.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleFocus = () => {
    setIsSearching(true);
    setScanState(null);
  };

  const handleBlur = () => {
    if (searchText.trim() === "") setIsSearching(false);
  };

  const handleScanClick = () => {
    setIsSearching(false);
    setSearchText("");
    setScanState("idle");

    setTimeout(() => setScanState("scanning"), 1000);
    setTimeout(() => setScanState("success"), 3000);
  };

  return (
    <div
      className={`home-container ${
        isSearching || scanState ? "search-active" : ""
      }`}
    >
      {/* Navbar */}
      <nav className="home-navbar">
        <h1 className="home-logo">Heather</h1>
        <ul className="home-nav-links">
          <li className="active">Home</li>
          <li>Explore</li>
          <li>About</li>
        </ul>
      </nav>

      <div
        className={`home-body ${
          isSearching || scanState ? "search-active" : ""
        }`}
      >
        {/* Search Bar */}
        <div className="home-search-bar">
          <input
            type="text"
            placeholder="Search patient details with mail"
            className="home-search-input"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button className="home-scan-button" onClick={handleScanClick}>
            <span>Scan ID</span>
          </button>
        </div>

        {/* Hero */}
        {!isSearching && !scanState && (
          <div className="home-hero">
            <div className="home-hero-content">
              <h2 className="home-title">
                Welcome TO <br />
                Heather
              </h2>
              <p className="home-subtitle">
                Heather is a secure digital platform that helps hospitals and
                healthcare providers easily access patient medical records
              </p>
              <button className="home-cta-button">Learn more</button>
            </div>
          </div>
        )}

        {/* Client Cards */}
        {isSearching && (
          <div className="client-list">
            {(searchText === "" ? clients : filteredClients).map(
              (client, index) => (
                <div className="client-card" key={index}>
                  <img
                    src={client.image}
                    alt={client.name}
                    className="client-image"
                  />
                  <div className="client-info">
                    <p>
                      <strong>Name:</strong> {client.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {client.email}
                    </p>
                    <p>
                      <strong>Last visit:</strong> {client.lastVisit}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* Scan ID Section */}
        {scanState && (
          <div className="scan-container">
            <img
                src={
                    scanState === "idle"
                    ? fpIdle
                    : scanState === "scanning"
                    ? fpHalf
                    : fpSuccess
                }
                alt="Fingerprint scan"
                className="scan-icon"
            />

            <p className="scan-text">
              {scanState === "idle" && "Place the finger in the Bio-metric device to search"}
              {scanState === "scanning" && (
                <>
                  Scanning your fingerprint
                  <br />
                  <small>Note: place your finger until it’s scanned</small>
                </>
              )}
              {scanState === "success" && "Scanned successful"}
            </p>
            
          </div>
          
        )}
      </div>
    </div>
  );
};

export default HomePage;
