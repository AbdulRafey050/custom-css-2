'use client'
import Image from "next/image";
export default function Hero() {
  return (
   <>
 
 <div
  style={{
    height: "100vh",
    width: "100%",
    backgroundColor: "#CFA6A61C",
    padding: "0px",
    margin: "0px",
    boxSizing: "border-box",
    overflowX: "hidden",
  }}
>
  <div
    style={{
      position: "relative",
      maxWidth: "1030px",
      height: "308px",
      top: "220px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
    }}
  >
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "521px",
          height: "auto",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontFamily: "heebo",
            fontWeight: "900",
            fontSize: "48px",
            lineHeight: "61px",
            letterSpacing: "2px",
            color: "#21243D",
          }}
        >
          Hi, I am Abdul Rafey <br />
          Frontend Developer
        </h1>
        <p
          style={{
            width: "100%",
            maxWidth: "497px",
            height: "auto",
            marginTop: "24px",
            color: "#21243D",
            fontFamily: "Heebo",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "23.5px",
            textAlign: "left",
            opacity: "1",
          }}
        >
          Designing Clean, Modern UIs for Flawless User Interactions <br /> Where
          Functionality Meets Visual Appeal. <br /> Delivering Intuitive,
          Easy-to-Navigate Experiences That Users Love.
        </p>

        <button
          style={{
            width: "100%",
            maxWidth: "205px",
            height: "50px",
            borderRadius: "2px",
            backgroundColor: "#F98585",
            boxShadow: "0px 4px 4px 0px #4141418A",
            marginTop: "24px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>

    <div
      style={{
        width: "100%",
        maxWidth: "298px",
        height: "auto",
        marginLeft: "0px",
        opacity: "1",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "300px",
          position: "relative",
          height: "auto",
          top: "-10px",
        }}
      >
        <Image
          src="/me.jpg"
          alt="Abdul Rafey's Picture"
          height={300}
          width={300}
          style={{
            borderRadius: "50%",
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            objectFit: "cover",
            
          }}
        />
      </div>
    </div>
  </div>
</div>

<style jsx>{`
  @media (max-width: 768px) {
    div {
      height: auto;
      padding: 20px;
    }

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 14px;
    }

    button {
      width: 100%;
      max-width: 150px;
    }

    .image-container {
      max-width: 250px;
    }

    .image-container img {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 12px;
    }

    button {
      width: 100%;
      max-width: 120px;
    }

    .image-container {
      max-width: 200px;
    }

    .image-container img {
      width: 100%;
    }
  }
`}</style>

      <div>
        <div
          style={{
            backgroundColor: "#f9e8e6",
            padding: "20px",
            width: "100%",
            height: "502px",
            marginTop: "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",

              alignItems: "center",
            }}
          >
            <h2
              style={{
                color: "#000000",
                fontFamily: "Heebo",
                fontSize: "22px",
                paddingLeft: "137px",
                fontWeight: "500",
                lineHeight: "32.31px",
                textAlign: "left",
              }}
            >
              Recent Post
            </h2>
            <a
              href="#"
              style={{
                fontWeight: "500px",
                textDecoration: "none",
                lineHeight: "32.31px",
                paddingRight: "137px",
                color: " rgb(249, 133, 133)",
                fontFamily: "Heebo",
                fontSize: "22px",
              }}
            >
              View all
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "15px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                height: "356px",
                top: "742",
                left: "238px",

                width: "483px",
              }}
            >
              <div
                style={{
                  width: "391px",
                  marginLeft: "10px",

                  height: " 286px",
                  top: "38px",
                  left: "35px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Heebo",
                    fontSize: "26px",
                    marginTop: "10px",
                    fontWeight: "700",
                    lineHeight: "38px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                  }}
                >
                  Making a design system from scratch
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    justifyContent: "left",
                    alignItems: "center",
                    fontFamily: "Heebo",
                    fontSize: "18px",
                    fontWeight: " 400",
                    lineHeight: "38px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                  }}
                >
                  <p>12 Feb 2020</p> &nbsp; &nbsp; |&nbsp; &nbsp;
                  <p>Design, Pattern</p>
                </div>
                <p style={{ marginTop: "20px" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "15px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                height: "356px",
                top: "742",
                left: "238px",

                width: "483px",
              }}
            >
              <div
                style={{
                  width: "391px",
                  marginLeft: "10px",

                  height: " 286px",
                  top: "38px",
                  left: "35px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Heebo",
                    fontSize: "26px",
                    marginTop: "10px",
                    fontWeight: "700",
                    lineHeight: "38px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                  }}
                >
                  Making a design system from scratch
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    justifyContent: "left",
                    alignItems: "center",
                    fontFamily: "Heebo",
                    fontSize: "18px",
                    fontWeight: " 400",
                    lineHeight: "38px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                  }}
                >
                  <p>12 Feb 2020</p> &nbsp; &nbsp; |&nbsp; &nbsp;
                  <p>Design, Pattern</p>
                </div>
                <p style={{ marginTop: "20px" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#FAF4F4", }}
        >
         
          <h2
            style={{
              marginLeft: "273px",
              paddingTop: "30px",
              color: "#000000",
              fontFamily: "Heebo",
              fontSize: "22px",
              fontWeight: "500",
              lineHeight: "32.31px",
            }}
          >
            Featured works
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start", 
              marginTop: "30px",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                gap: "30px",
              }}
            >
              
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={"/dashboard1.png"}
                  alt="Dashboard Design 1"
                  width={246}
                  height={180}
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>

          
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={"/dashboard2.png"}
                  alt="Dashboard Design 2"
                  width={246}
                  height={180}
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>

            
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={"/dashboard3.png"}
                  alt="Dashboard Design 3"
                  width={246}
                  height={180}
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>

            
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
              }}
            >
              
              <div
                style={{
                  width: "500px",
                  padding: "10px",
                  backgroundColor: "#FAF4F4",
                }}
              >
                <h3 style={{ marginBottom: "10px", color: "#000" }}>
                  Designing Dashboards
                </h3>
                <p style={{ marginBottom: "10px" }}>
                  <span
                    style={{
                      backgroundColor: "#f98585",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "50px",
                      marginRight: "10px",
                    }}
                  >
                    2020
                  </span>
                  Dashboard
                </p>
                <p style={{ color: "#555" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              
              <div
                style={{
                  width: "500px",
                  padding: "10px",
                  backgroundColor: "#FAF4F4",
                }}
              >
                <h3 style={{ marginBottom: "10px", color: "#000" }}>
                  Designing Dashboards
                </h3>
                <p style={{ marginBottom: "10px" }}>
                  <span
                    style={{
                      backgroundColor: "#f98585",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "50px",
                      marginRight: "10px",
                    }}
                  >
                    2020
                  </span>
                  Dashboard
                </p>
                <p style={{ color: "#555" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              
              <div
                style={{
                  width: "500px",
                  padding: "10px",
                  backgroundColor: "#FAF4F4",
                }}
              >
                <h3 style={{ marginBottom: "10px", color: "#000" }}>
                  Designing Dashboards
                </h3>
                <p style={{ marginBottom: "10px" }}>
                  <span
                    style={{
                      backgroundColor: "#f98585",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "50px",
                      marginRight: "10px",
                    }}
                  >
                    2020
                  </span>
                  Dashboard
                </p>
                <p style={{ color: "#555" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
