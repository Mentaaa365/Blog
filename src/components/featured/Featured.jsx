import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Un dia más vivo</b> Recuerda lo que hiciste hoy.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>¿Porque europa es una de los destinos mas deseados?</h1>
          <p className={styles.postDesc}>
          Europa ofrece una variedad de paisajes, desde las montañas de los Alpes y los Pirineos, hasta los fiordos de Noruega y las playas mediterráneas de Grecia y España. Esta diversidad natural permite disfrutar tanto de actividades de aventura como de descanso en playas paradisíacas.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
