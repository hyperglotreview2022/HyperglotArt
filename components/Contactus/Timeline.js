import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHourglassStart } from "react-icons/fa6";
import styles from '../../styles/about.module.css'

export default function Timeline() {
  return (
    <div className={styles.container3}>
      <VerticalTimeline>
      <VerticalTimelineElement
        className={styles.container2}
        contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
        date="2050 - present"
        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
        icon={<FaHourglassStart />}
      >
        <h3 className={styles.topic1}>Lorem Ipsum</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={styles.container2}
        contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
        date="2040 - 2050"
        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
        icon={<FaHourglassStart />}
      >
        <h3 className={styles.topic1}>Lorem Ipsum</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={styles.container2}
        contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
        date="2030 - 2040"
        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
        icon={<FaHourglassStart />}
      >
        <h3 className={styles.topic1}>Lorem Ipsum</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
