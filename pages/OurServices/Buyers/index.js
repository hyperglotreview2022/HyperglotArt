import React from 'react'
import styles from '../../../styles/ourservicespages.module.css'
import Navbar from '@/components/navbarforpages'
import Footer from '@/components/footer'
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <Navbar />
      {/* <SmoothScroll> */}
          <div className={styles.container}>
            <div className={styles.banner}>
              <h1 className={styles.bannerheading}>Our Services - buyers</h1>
            </div>

            {/* <div className={styles.banner1}>
                <Image src={'/servicesimages/services (7).jpg'} className={styles.bimg} width={400} height={400} alt='image' />
                <div className={styles.border}/>
                <div className={styles.over}>
                  <div className={styles.btext2}>Our Services - Buyers</div>
                  <Link className={styles.button5} href={'/ContactUs'}>Contact Us</Link>
                </div>
            </div> */}
{/* 
            <div className={styles.lcont}>
              <div className={styles.lheading}>Why Hyperglot Art?</div>
              <div className={styles.ltext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div> */}

            <div className={styles.rflexcont}>
              <div className={styles.imgc1}>
                <Image src={'/servicesimages/services (7).jpg'} className={styles.img} width={400} height={400} alt='image' />
              </div>
              <div className={styles.right}>
                <div className={styles.heading7}>Become a Visionary</div>
                <div className={styles.subheading}>A Unique opportunity</div>
                <div className={styles.text}>This is your chance to become part of
the shift in perspective regarding the art
world. You too can become a patron or a
collector without participating in sales
and auctions that set astronomical
prices. If you are a brand, individual, or
an institution, by partnering with us, you
can be at the forefront of the next big
wave in the art world. <br/>
The Indian art market is still in its
growth phase and you can align yourself
in a way that will help you grow along
with the Indian art market itself. You will
not just be known as a leader for
supporting eminent as well as emerging
Indian artists but also a visionary for
promoting Indian art and culture at the
global stage.</div>
                <Link className={styles.button6} href={'/ContactUs'}>Raise Any Queries</Link>
              </div>
            </div>

            <div className={styles.flex7}>
            <div className={styles.imgc8}>
                <Image src={'/servicesimages/services (7).jpg'} className={styles.img8} width={400} height={400} alt='image' />
              </div>
              <div className={styles.right17}>
                <div className={styles.heading8}>Paradigm Shift</div>
                <div className={styles.text}>Art is inherently inclusive and universal.
Hyperglot Review is all set to make art
accessible and intelligible to anyone who
wishes to be informed about living artists
and their contributions to sculpting the
landscape of Indian art. <br/>
Art sales and auctions are an
indispensable part of any dialogues or
discussions around art. Art sales held
through exhibitions, fairs, and biennales
offer a wider variety of artistic
expressions, themes, and styles to
choose from. Art auctions, on the other
hand, are conducted mostly of artists
who are long deceased. While there
might be very few exceptions to the rule,
this is mostly true for all the auctions
held by prestigious galleries all across
the country. <br/>
Transparency and inclusivity are the
core goals of Hyperglot Review. Our
auctions will focus on listing solely the
works of living artists. This would
completely rule out the chance of listing
fakes at any stage of the process.<br/> Our valuations will not just be based on
artist quotes and the prices suggested
by curators and galleries. The price of
any artwork listed with us will be based
on data points compiled in at least the
2-3 years on the following parameters:
<ul>
  <li>The number and frequency of
  artworks sold by the artist.</li>
  <li>Average price of artworks sold per
  square feet.</li>
  <li>Projected increase in value over the
next 2-3 years based on sales track
record and curators as well art
experts.</li>
<li>Visibility in regional and national
shows and exhibitions.</li>
<li>Affiliations with art galleries, auction
houses and art websites.</li>
</ul>
</div>
              </div>
            </div>

            <div className={styles.flex8}>
            <div className={styles.imgc8}>
                <Image src={'/servicesimages/services (7).jpg'} className={styles.img9} width={400} height={400} alt='image' />
              </div>
              <div className={styles.right17}>
                <div className={styles.heading9}>A New Era</div>
                <div className={styles.subheading}>Art Belongs to Everyone</div>
                <div className={styles.text}>A huge part of the Indian population
perceives the art world and something
inaccessible. This is primarily due to the
misconception that in order to
appreciate art, one has to be an expert,
or a connoisseur. Nothing could be
further from the truth. Any appreciation
of art is purely subjective and each
individual responds to art in his own way.
The same goes for art sales and auctions.<br/>
The process has become so opaque that
even those who might be interested in
becoming a part of the process are
denied access. Art is inherently inclusive
and universal. Hyperglot Review is all set
to make the purchase and sale of
artworks completely transparent.<br/>
Within six months, we have gone from 20
clients to 100+ clients. Our clientele
consists of business owners, teachers,
doctors, lawyers, designers, and even
aspiring art patrons and collectors. The
most common trait among them is that
they all respond to art through their own
subjective lens. <br/>
Hyperglot Review isn’t just in the
business of sales and purchase of art.
We also offer memberships to our clients
with following features:

<ul>
  <li>List your current artworks for resale
after a period of 24 months.</li>
  <li>Acquire artworks on rent with the
facility to replace them after 12
months.</li>
  <li>Build your art collection with 1500
available artworks from approx. 100
eminent artists and 200 emerging
artists.</li>
<li>Avail of a complimentary Hyperglot
Memberships as per your
requirement.</li>
<li>Gain knowledge of the developments
in the art world by attending our
exhibitions, auctions, and panel
discussions as our honoured guest
with the opportunity to interact with
artists, curators, and leading figures
of the art world.</li>
</ul>
</div>
              </div>
            </div>

            <div className={styles.bottomcont}>
              <div className={styles.btmheading}>Work with experts for all your art needs</div>
              <div className={styles.btmflex}>
                <div className={styles.left11}>
                  <div className={styles.lefth}>Get in Touch with Us!</div>
                  <div className={styles.formflex}>
                  <input className={styles.linput} placeholder='Email Address'/>
                  <button className={styles.lbtn}>Subscribe</button>
                  </div>

                </div>
                <div className={styles.right11}>
                <div>
                  <Image src={'/servicesimages/services (7).jpg'} className={styles.img10} width={400} height={400} alt='image' />
                </div>
                <div>
                  <div className={styles.rh}>Browse the Hyperglot Art Trade Catalog</div>
                  <button className={styles.rbtn}>Download</button>
                </div>
                  
                </div>
              </div>
            </div>
            </div>
        <Footer />
      {/* </SmoothScroll> */}
    </div>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})