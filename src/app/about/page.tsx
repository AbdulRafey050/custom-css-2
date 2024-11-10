import React from "react";
import { MdOutlinePentagon } from "react-icons/md";

function About() {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: "150px", gap: "5%", justifyContent: "center" }}>

      <div
        style={{
          maxWidth: "380px",
          width: "100%",
          backgroundColor: "#8E44AD",
          marginTop: "20px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img src="/me.jpg" alt="About Me" style={{ width: "100%", height: "auto" }} />
      </div>

      <div style={{ maxWidth: "600px", width: "100%" }}>
        <div style={{ marginRight: "50px" }}>
          <p
            style={{
              fontSize: "22px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bolder",
              marginBottom: "0.5rem",
            }}
          >
            ABOUT ME
          </p>
          <h2
            style={{
              color: "#F98585",
              fontSize: "2.5rem",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              lineHeight: "50px",
            }}
          >
            Why You Hire Me
          </h2>
          <p
            style={{
              color: "#000000",
              lineHeight: "1.6",
              letterSpacing: "1.5px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              maxWidth: "600px",
              marginBottom: "2rem",
              fontSize: "17px",
            }}
          >
            You Should Hire Me As A FRONTEND DEVELOPER Because I Have A Strong
            Eye For Design and Development, A Deep Understanding Of User
            Psychology, And A Track Record Of Creating Intuitive And Visually
            Appealing Interfaces.
          </p>

          {[
            { label: "HTML", progress: 90 },
            { label: "CSS 3", progress: 75 },
            { label: "TYPESCRIPT", progress: 81 },
            { label: "NEXT JS", progress: 62 },
          ].map((skill, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <p
                style={{
                  fontSize: "23px",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                {skill.label}
              </p>
              <div
                style={{
                  position: "relative",
                  height: "8px",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    height: "8px",
                    width: `${skill.progress}%`,
                    backgroundColor: "#F98585",
                    borderRadius: "4px 0 0 4px",
                  }}
                ></div>
                <MdOutlinePentagon
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: `${100 - skill.progress}%`,
                    height: "20px",
                    width: "20px",
                    fontWeight: "bold",
                    backgroundColor: "#E0E0E0",
                    color: "#F98585",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
