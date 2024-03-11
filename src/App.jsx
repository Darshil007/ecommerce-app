import styles from './style';
import {Navbar,Hero,Features,Shop,Deals, Testimonials, Feedback, Footer} from './components'
function App() {
  return (
    <div className='bg-dimWhite w-full overflow-hidden'>
      {/* Navbar section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      {/* Hero Section or Banner Section */}
      <div className={`bg-primary ${styles.marginX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`${styles.flexCenter} ${styles.marginX} bg-primary pt-4`}><hr className='w-[75%] bg-secondary opacity-[50%] h-[1.75px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]'/></div>
      {/* Remaining Features and Sections  */}
      <div className={`bg-dimWhite ${styles.marginX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Shop/>
          <div className={`${styles.flexCenter} pt-6 text-[45px] font-outfit font-semibold`}>Best Deals</div>
          <Deals/>
          <div className={`${styles.flexCenter} ${styles.marginX} bg-primary rounded-xl`}><hr className='w-[75%] bg-secondary opacity-[50%] h-[1.75px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]'/></div>
          <Features/>
          <Testimonials/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
