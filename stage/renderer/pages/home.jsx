import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

export default function Home() {
  const slides = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

  useEffect(() => {
    SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
  }, []);

  return (
    <main
      className={styles.main}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.description}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          className="swiper_container"
        >
          <SwiperSlide>
            <img
              src={"../images/1.jpg"}
              alt="slide_image"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"../images/2.jpg"}
              alt="slide_image"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"../images/3.jpg"}
              alt="slide_image"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"../images/4.jpg"}
              alt="slide_image"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <div className="slider-controler">
            {/* Slider controls */}
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <div>
        <Link href="/rating">
          <button
            className="button"
            style={{
              padding: "10px 20px",
              background: "#007bff",
              color: "#fff",
              alignItems: "center",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "150px",
            }}
          >
            Go To Rating
          </button>
        </Link>
      </div>
    </main>
  );
}
