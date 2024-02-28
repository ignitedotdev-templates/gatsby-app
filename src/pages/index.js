import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: 36,
  fontWeight: 400,
  color: "#344054",
};
const pathnameStyles = {
  color: "#004eeb",
  fontSize: 20,
};

const footerStyles = {
  fontSize: 20,
  fontWeight: 500,
  color: "#344054",
};

const libraryStyles = {
  color: "#673399",
  fontWeight: 600,
};

const mainStyles = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "7px",
  alignItems: "center",
  justifyContent: "center",
};

const logoStyles = {
  width: 200,
  height: 200,
};

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: "10px",
};

const innerContainerStyles = {
  display: "flex",
  flexDirection: "column",
  lineHeight: 1,
};

const IndexPage = () => {
  const currentPath = typeof window !== "undefined" ? window.location.href : "";
  return (
    <main style={mainStyles}>
      <div>
        <img
          style={logoStyles}
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </div>
      <div style={containerStyles}>
        <div style={innerContainerStyles}>
          <h2 style={headingStyles}>
            You’ve just ignited a new <span style={libraryStyles}>Gatsby</span>{" "}
            static site!
          </h2>
          <span style={pathnameStyles}>{currentPath}</span>
        </div>
        <p style={footerStyles} className="footer">
          Made in Nigeria with 💖
        </p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
