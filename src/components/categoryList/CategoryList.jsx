'use client';

import React, { useState, useEffect } from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  const [data, setData] = useState([]);  // Eliminé la "s" extra aquí
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  // useEffect para obtener los datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/categories");
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        const result = await res.json();

        if (Array.isArray(result)) {
          setData(result);  
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        setError(error.message);  
      } finally {
        setLoading(false);  
      }
    };

    fetchData();  
  }, []);  

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (data.length === 0) return <div>No categories available.</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.title}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
