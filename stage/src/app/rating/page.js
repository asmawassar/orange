"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFaceAngry,
  faFaceSmile,
  faFaceMeh,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../styling.css";
import pages from "./page.module.css";
export default function Home() {
  library.add(faFaceAngry, faFaceSmile, faFaceMeh);
  const [isHovered, setIsHovered] = useState({});
  const [isClicked, setIsClicked] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleMouseEnter = (icon) => {
    setIsHovered((prevState) => ({ ...prevState, [icon]: true }));
  };
  const handleSubmit = () => {
    setIsSubmit(true);
  };
  const handleMouseLeave = (icon) => {
    setIsHovered((prevState) => ({ ...prevState, [icon]: false }));
  };

  const handleClick = (icon) => {
    setIsSubmit(false);
    setIsClicked((prevState) => ({
      [icon]: !prevState[icon],
    }));
  };

  return (
    <main className={pages.main}>
      <div className={pages.texts}>
        <p className={pages.red}>Did You Enjoy Your Experience Today?</p>
        <p className={pages.green} style={{ marginTop: "50px" }}>
          Leave us a rating!
        </p>
      </div>
      <div className={pages.icons}>
        <div
          className={pages.icon}
          onMouseEnter={() => handleMouseEnter("happy")}
          onMouseLeave={() => handleMouseLeave("happy")}
          onClick={() => handleClick("happy")}
        >
          <FontAwesomeIcon
            icon="face-smile"
            size={isClicked["happy"] ? "3x" : isHovered["happy"] ? "3x" : "2x"}
            style={{
              marginTop: "100px",
              color: "#1d9a32",
              transition: "size 0.3s ease",
              margin: "10px",
              transform: isClicked["happy"] ? "scale(1.5)" : "scale(1.5)",
              cursor: "pointer",
            }}
          />
        </div>
        <div
          className={pages.icon}
          onMouseEnter={() => handleMouseEnter("normal")}
          onMouseLeave={() => handleMouseLeave("normal")}
          onClick={() => handleClick("normal")}
        >
          <FontAwesomeIcon
            icon="face-meh"
            size={
              isClicked["normal"] ? "3x" : isHovered["normal"] ? "3x" : "2x"
            }
            style={{
              marginTop: "100px",
              color: "#ce9e36",
              transition: "size 0.3s ease",
              margin: "10px",
              transform: isClicked["normal"] ? "scale(1.5)" : "scale(1.5)",
              cursor: "pointer",
            }}
          />
        </div>
        <div
          onMouseEnter={() => handleMouseEnter("angry")}
          onMouseLeave={() => handleMouseLeave("angry")}
          onClick={() => handleClick("angry")}
        >
          <FontAwesomeIcon
            icon="face-angry"
            size={isClicked["angry"] ? "3x" : isHovered["angry"] ? "3x" : "2x"}
            style={{
              marginTop: "100px",
              color: "#941e1e",
              transition: "size 0.3s ease",
              margin: "10px",
              transform: isClicked["angry"] ? "scale(1.5)" : "scale(1.5)",
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <div
        className={pages.bouton}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "#fff",
            alignItems: "center",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          SUBMIT!
        </button>

        {isSubmit && (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              color: "green",
              marginTop: "10px",
            }}
          >
            Thank you for your time!
          </p>
        )}
      </div>

      <div
        className={styles.container}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Link href="/">
          <button className="button" style={{ marginTop: "150px" }}>
            Explore Offers
          </button>
        </Link>
      </div>
    </main>
  );
}
