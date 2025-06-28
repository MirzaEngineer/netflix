// "use client"
import styles from "@/app/styles/common.module.css"
// import styles from "../styles/common.module.css";

import MovieCards from "../components/MovieCards";
const Movie = async () => {
  // await new Promise(executor:resolve =>setTimeout={resolve,timeout:2000})
  await new Promise((resolve) => setTimeout(resolve, 1000));





  const url = "https://anime-db.p.rapidapi.com/anime?page=1&size=100&search=&genres=&sortBy=ranking&sortOrder=asc";
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e7c5b13e50mshc0b97346c2d8ac9p11a74bjsnd09ee96bac59',
      'x-rapidapi-host': 'anime-db.p.rapidapi.com'
    }
  };

  let main = [];

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // main = result.data[0]._id; // API response ka data
    main = result.data; // API response ka data
    console.log(main);

  } catch (error) {
    console.error(error);
  }

  return (

    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Anima</h1>
          <div className={styles.card_section}>
            {
              main.map((movie) => {
                return (
                  <MovieCards key={movie._id} {...movie} />
                )
              })
            }
          </div>
        </div>
      </section>
      <h1>OK</h1>


    </>
  );
};

export default Movie;

