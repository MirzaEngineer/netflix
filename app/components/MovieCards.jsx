import React from 'react'
import styles from "@/app/styles/common.module.css"
// import styles from "@/app/styles/"
import Image from 'next/image';
import Link from 'next/link';

const MovieCards = (movie) => {
  const {_id,title,synopsis,image} = movie;
  
  return (
    <>
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image src={image} alt='title' width={260} height={200} />

      </div>
      <div className={styles.card_data}>
        <h2>{title.substring(0,20)}</h2>
        <p>
          {synopsis.substring(0,90)}
        </p>
        <Link href={`/movie/${_id}`}>
        <button>
          Read More
        </button>
        </Link>
      </div>
    </div>
   
   
    
      
    </>
  )
}

export default MovieCards

