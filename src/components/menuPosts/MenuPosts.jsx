import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            ¿Porque ir a brazil ?
          </h3>
          <div className={styles.detail}>
            
            <span className={styles.username}>Bruno</span>
            <span className={styles.date}> - 10.10.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Dia de los muertos
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>chuwiii</span>
            <span className={styles.date}> - 05.11.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            ¿Cual es mejor la comida ecuatoriana o peruana?
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Carlitos</span>
            <span className={styles.date}> - 11.11.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            El juego en moda Dress in press
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Gisell</span>
            <span className={styles.date}> - 11.11.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
