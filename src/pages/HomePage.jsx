import React from "react";
import "../styles/home.css";


const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="home-navbar">
        <h1 className="home-logo">Heather</h1>
        <ul className="home-nav-links">
          <li className="active">Home</li>
          <li>Explore</li>
          <li>About</li>
        </ul>
      </nav>

        <div className="home-body">
            <div className="home-search-bar">
                <input
                type="text"
                placeholder="Search patient details with mail"
                className="home-search-input"
                />
                <button className="home-scan-button">
                    <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9946 15.1979V16.5795C21.9946 20.4066 20.9978 24.1024 19.1196 27.4197L18.7788 28L16.1574 26.6543C17.9109 23.761 18.8796 20.521 18.9814 17.2095L18.992 16.5795V15.1979H21.9946ZM12.9866 11.053H15.9893V16.5795L15.9818 17.1031C15.8684 20.8856 14.4538 24.5374 11.9417 27.533L11.5949 27.9337L9.26928 26.1873C11.5608 23.6118 12.8643 20.4122 12.9776 17.0852L12.9866 16.5795V11.053ZM14.4879 5.52651C16.4788 5.52651 18.3882 6.25433 19.796 7.54985C21.2038 8.84537 21.9946 10.6025 21.9946 12.4346H18.992C18.992 11.3353 18.5174 10.2811 17.6728 9.50376C16.8281 8.72645 15.6825 8.28976 14.4879 8.28976C13.2934 8.28976 12.1478 8.72645 11.3031 9.50376C10.4584 10.2811 9.98392 11.3353 9.98392 12.4346V16.5795C9.98392 19.6674 8.75282 22.5813 6.57587 24.8375L6.25759 25.1552L4.08365 23.2486C5.83949 21.5571 6.86626 19.3353 6.97223 16.9981L6.98123 16.5795V12.4346C6.98123 10.6025 7.77212 8.84537 9.1799 7.54985C10.5877 6.25433 12.497 5.52651 14.4879 5.52651ZM14.4879 1.51082e-05C18.0716 1.51082e-05 21.5084 1.31009 24.0424 3.64203C26.5764 5.97397 28 9.13676 28 12.4346V16.5795C28 18.9255 27.6982 21.2356 27.1052 23.4738L26.895 24.2185L23.9974 23.4918C24.586 21.5064 24.9193 19.4547 24.9853 17.3643L24.9973 16.5795V12.4346C24.9973 10.6397 24.4545 8.88021 23.4297 7.35302C22.4049 5.82584 20.9385 4.59123 19.1946 3.78738C17.4507 2.98352 15.4981 2.64213 13.5553 2.8014C11.6126 2.96068 9.75634 3.61435 8.19432 4.68925L6.05491 2.71905C8.44714 0.954908 11.4224 -0.00439064 14.4879 1.51082e-05ZM3.93051 4.67405L6.07142 6.64286C4.78412 8.22254 4.0556 10.1282 3.98456 12.1017L3.97855 12.4346L3.98456 15.1979C3.98456 16.7453 3.5882 18.2416 2.84204 19.5873L2.60633 19.988L0 18.6174C0.569008 17.6986 0.900804 16.6734 0.968365 15.6013L0.981877 15.1979V12.4346C0.97297 9.61381 2.01352 6.87517 3.93051 4.67405Z" fill="white"/>
                    </svg>

                    <span>Scan ID</span>
                </button>
            </div>

            {/* Hero Section */}
            <div className="home-hero">
               
                <div className="home-hero-content">
                    <h2 className="home-title">Welcome TO <br />Heather</h2>
                    <p className="home-subtitle">
                        Heather is a secure digital platform that helps hospitals and
                        healthcare providers easily access patient medical records
                    </p>
                    <button className="home-cta-button">Learn more</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomePage;
