"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Slider from './slider'


export default function Home() {
 
  const slides = [ "1.jpg" ,  "2.jpg" ,  "3.jpg" , "4.jpg" ];
  return (
    <main className={styles.main} style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className={styles.description}  >
        <Slider autoSlide={true} >
          {slides.map((s)=>(
            <img src={`/images/${s}`} style={{width: "100%", height: "100%",}} />
          ))}  
        </Slider>
      </div>
    </main>
  )
}
