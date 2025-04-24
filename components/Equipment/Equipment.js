import React from 'react'
import Image from 'next/image'
import styles from "./equipment.module.css"

export default function Equipment() {
  return (
    <section className={styles.container}>
      <div className={styles.column}>
        <div className={styles.box}>
                <Image
                    src="/parking.png"
                    alt="logo parking"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Parking Gratuit </p>
            </div>
            <div className={styles.box}>
                <Image
                    src="/wifi.png"
                    alt="logo wifi"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Wi-fi Gratuit </p>
            </div>
            <div className={styles.box}>
                <Image
                    src="/pool.png"
                    alt="logo pisicne"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Piscine </p>
            </div>
        </div>
        <div className={styles.column}>
        <div className={styles.box}>
                <Image
                    src="/bar2.png"
                    alt="logo bar"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Bar/Lounge </p>
            </div>
            <div className={styles.box}>
                <Image
                    src="/restaurant.png"
                    alt="logo restaurant"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Restaurant </p>
            </div>
            <div className={styles.box}>
                <Image
                    src="/service.png"
                    alt="logo service en chambre"
                    width={20}
                    height={20}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className={styles.txt}> Service en chambre </p>
            </div>
        </div>
    </section>
  )
}
