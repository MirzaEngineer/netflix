import Image from 'next/image';
import styles from "@/app/styles/common.module.css"

const DynamicRouts = async ({ params }) => {
  const id = params.id;
  
  // API call to get movie details using ID
  // const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=100&search=&genres=&sortBy=ranking&sortOrder=asc`;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'x-rapidapi-key': 'e7c5b13e50mshc0b97346c2d8ac9p11a74bjsnd09ee96bac59',
  //     'x-rapidapi-host': 'anime-db.p.rapidapi.com'
  //   }
  // };

  // // let main = [];
  // const response = await fetch(url, options);
  //   const result = await response.json();
  //   console.log("RESULT",result);
    
    // main = result.data[0]._id; // API response ka data
    // main = result.data; // API response ka data
    // console.log(main);
  


  // Check if movie or image is undefined/null


  return (
    <>
    {/* <div className={styles.container}>
      <h2 className={styles.movie_title}>NetFlix</h2>
      <div className={styles.card_section}>
        <div>
          <Image src="" alt='' />
        </div>
        <div>
          <h1>Hello Sir</h1>
          <p>Ok sir</p>
        </div>
      </div>
    </div> */}
    <h1>Create a Dynamic id :{id}</h1>
    
    </>
  );
};

export default DynamicRouts;
