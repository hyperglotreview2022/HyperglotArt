import React, { useState } from 'react'
import styles from '../../styles/piano.module.css'
import { FaAngleDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function Piano() {
    const[ans1, setAnsw1] = useState(false)
    const[ans2, setAnsw2] = useState(false)
    const[ans3, setAnsw3] = useState(false)
    const[ans4, setAnsw4] = useState(false)
    const[ans5, setAnsw5] = useState(false)
    const[ans6, setAnsw6] = useState(false)
    const[ans7, setAnsw7] = useState(false)
    const[ans8, setAnsw8] = useState(false)
    const[ans9, setAnsw9] = useState(false)
  return (
    <div className={styles.cont}>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw1(!ans1)}} className={styles.ques}><div>Conceptualising Artistic Vision</div><div><FaPlus className={ans1 ? styles.icon : styles.nicon}/></div></div>
            <div className={ans1 ? styles.ans : styles.answ}>
                <ul>
                    <li>Personalised brand strategy to reflect your unique style and vision.</li>
                    <li>Custom logo and brand elements design.</li>
                    <li>Development of artist statements and biographies.</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw2(!ans2)}} className={styles.ques1}><div>Gallery Representations</div><div><FaPlus className={ans2 ? styles.icon : styles.nicon}/></div></div>
            <div className={ans2 ? styles.ans : styles.answ}>
                <ul>
                    <li>Identification and selection of suitable galleries.</li>
                    <li>Professional submission packages tailored to each gallery’s requirements.</li>
                    <li>Direct communication and follow-up with gallery representatives.</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw3(!ans3)}} className={styles.ques}><div>Organising Exhibitions and Promotional Events</div><div><FaPlus className={ans3 ? styles.icon : styles.nicon}/></div></div>
            <div className={ans3 ? styles.ans : styles.answ}>
                <ul>
                    <li>Planning and coordination of solo and group exhibitions.</li>
                    <li>Promotion of artwork through various channels.</li>
                    <li>Arrangement of opening receptions and artist talks.</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw4(!ans4)}} className={styles.ques1}><div>Negotiating Contracts and Terms</div><div><FaPlus className={ans4 ? styles.icon : styles.nicon}/></div></div>
            <div className={ans4 ? styles.ans : styles.answ}>
                <ul>
                    <li>Expert negotiation of exhibition terms and conditions.</li>
                    <li>Ensuring fair and favourable terms for the artist.</li>
                    <li>Contract review and legal consultation.</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw5(!ans5)}} className={styles.ques}><div>Ensuring Optimal Exposure and Sales</div><div><FaPlus className={ans5 ? styles.icon : styles.nicon}/></div></div>
            <div className={ans5 ? styles.ans : styles.answ}>
                <ul>
                    <li>Strategic presentation of your artwork.</li>
                    <li>Coordination of marketing materials and promotional activities.</li>
                    <li>On-site support during exhibitions to maximize sales</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw6(!ans6)}} className={styles.ques1}><div>Content Creation and Editorial Support</div><div><FaPlus className={ans6 ? styles.icon : styles.nicon}/></div></div>
            <div className={ans6 ? styles.ans : styles.answ}>
                <ul>
                    <li>Professional photoshoots of your artwork.</li>
                    <li>High-quality video production including artist interviews and studio tours.</li>
                    <li>Blog content creation to engage and inform your audience.</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw7(!ans7)}} className={styles.ques}><div>Aiming for a global reach</div><div><FaPlus className={ans7 ? styles.icon : styles.nicon}/></div></div>
            <div className={ans7 ? styles.ans : styles.answ}>
                <ul>
                    <li>Application for international fellowships and exchange programs.</li>
                    <li>Collaborations with foreign art galleries and institutions.</li>
                    <li>Funding assistance for international art events.</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw8(!ans8)}} className={styles.ques1}><div>Professional Website Creation and Maintenance</div><div><FaPlus className={ans8 ? styles.icon : styles.nicon}/></div></div>
            <div className={ans8 ? styles.ans : styles.answ}>
                <ul>
                    <li>Custom-designed artist websites that showcase your portfolio.</li>
                    <li>Regular updates and maintenance to ensure optimal performance.</li>
                    <li>Integrating 3D virtual galleries to showcase works of art.</li>
                </ul>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw9(!ans9)}} className={styles.ques}><div>Social Media Strategy and Management</div><div><FaPlus className={ans9 ? styles.icon : styles.nicon}/></div></div>
            <div className={ans9 ? styles.ans : styles.answ}>
                <ul>
                    <li>Tailored social media strategies to grow your audience.</li>
                    <li>Engagement with followers to build a loyal fan base.</li>
                    <li>Analytics and insights to track performance and adjust strategies.</li>
                </ul>
            </div>
        </div>

    </div>
  )
}
