import React, { useState } from 'react'
import styles from '../styles/Speakers.module.css'
import SpeakerCard from './SpeakerCard'
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
// import img2 from "../components/Images/sampleImg.jpg";

const Speakers = () => {
    const speakersList = [
        {
            image: img1,
            title:'Naoko Okiyama',
            description:'A.C.O. by Monsterlab COO / Art Director'
        },
        {
            image:img2,
            title:'Naoko Okiyama',
            description:'A.C.O. by Monsterlab COO / Art Director'
        },

        {
            image: img3,
            title:'Naoko Okiyama',
            description:'A.C.O. by Monsterlab COO / Art Director'
        },
        {
            image:img4,
            title:'Naoko Okiyama',
            description:'A.C.O. by Monsterlab COO / Art Director'
        },

        {
            image: img5,
            title:'Naoko Okiyama',
            description:'A.C.O. by Monsterlab COO / Art Director'
        },
        {
            image:img6,
            title:'Naoko Okiyama',
            description:'A.C.O. by Monsterlab COO / Art Director'
        },

        {
            image: img7,
            title:'Naoko Okiyama',
            description:'A.C.O. by Monsterlab COO / Art Director'
        },
        {
            image:img8,
            title:'Naoko Okiyama',
            description:'A.C.O. by Monsterlab COO / Art Director'
        }
    ];

  return (
    <div style={{width:"100%",display:"flex",justifyContent:"center",backgroundColor:"#F2EFEB"}}>
    <div className={styles.SpeakersContainer}>
            <div className= {styles.title}>
                <h1>
                    Speakers
                </h1>
            </div>

        <div className={styles.SpeakerCards}>

            {speakersList.map((item, index) => {
                return <SpeakerCard  speaker={item} />
            })}

        
        </div>
    </div>
    </div>
    
  )
}

export default Speakers
