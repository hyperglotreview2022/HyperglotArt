import React, { useState } from 'react'
import styles from '../../styles/piano.module.css'
import { FaAngleDown } from "react-icons/fa";

export default function Piano() {
    const[ans1, setAnsw1] = useState(false)
    const[ans2, setAnsw2] = useState(false)
    const[ans3, setAnsw3] = useState(false)
    const[ans4, setAnsw4] = useState(false)
    const[ans5, setAnsw5] = useState(false)
  return (
    <div className={styles.cont}>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw1(!ans1)}} className={styles.ques}><div>Conceptualising Artistic Vision</div><div><FaAngleDown /></div></div>
            <div className={ans1 ? styles.ans : styles.answ}>
                <ul>
                    <li>Personalised brand strategy to reflect your unique style and vision</li>
                    <li>Custom logo and brand elements design</li>
                    <li>Development of artist statements and biographies</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw2(!ans2)}} className={styles.ques1}><div>Gallery Representations</div><div><FaAngleDown /></div></div>
            <div className={ans2 ? styles.ans : styles.answ}>
                <ul>
                    <li>Identification and selection of suitable galleries</li>
                    <li>Professional submission packages tailored to each gallery’s requirements</li>
                    <li>Direct communication and follow-up with gallery representatives</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw3(!ans3)}} className={styles.ques}><div>Organising Exhibitions and Promotional Events</div><div><FaAngleDown /></div></div>
            <div className={ans3 ? styles.ans : styles.answ}>
                <ul>
                    <li>Planning and coordination of solo and group exhibitions</li>
                    <li>Promotion of artwork through various channels</li>
                    <li>Arrangement of opening receptions and artist talks</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw4(!ans4)}} className={styles.ques1}><div>Negotiating Contracts and Terms</div><div><FaAngleDown /></div></div>
            <div className={ans4 ? styles.ans : styles.answ}>
                <ul>
                    <li>Expert negotiation of exhibition terms and conditions</li>
                    <li>Ensuring fair and favourable terms for the artist</li>
                    <li>Contract review and legal consultation</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw5(!ans5)}} className={styles.ques}><div>Ensuring Optimal Exposure and Sales</div><div><FaAngleDown /></div></div>
            <div className={ans5 ? styles.ans : styles.answ}>
                <ul>
                    <li>Strategic presentation of your artwork</li>
                    <li>Coordination of marketing materials and promotional activities</li>
                    <li>On-site support during exhibitions to maximize sales</li>
                </ul>
            </div>
        </div>

    </div>
  )
}
