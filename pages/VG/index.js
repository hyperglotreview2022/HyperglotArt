import React, { useState } from 'react'
import VirtualGallery from '../../components/VirtualGallery/virtualgallery'
import Navbar from '../../components/navbarforpages'
import styles from '../../styles/VG.module.css'

export default function index() {
  return (
    <div>
      <Navbar />
      <div className={styles.vgcontainer}>
        <VirtualGallery />
      </div>

    </div>
  )
}
