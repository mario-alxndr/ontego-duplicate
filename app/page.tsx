// Component
import { NavBar } from '@/components/Navbar/index';
import { Body } from '@/components/Body';
import { Footer } from '@/components/Footer';

// Styles
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.top_figure}>
        <h1 className={styles.title_popup}>
          How do I find the<br/>
          <span>best mobile devices</span><br/>
          for my employees?
        </h1>
        <div className={styles.image_wrapper}>
          <div className={styles.image_content}/>
        </div>
      </div>
      <p className={styles.caption}>
        Mobile applications are now part of everyday life in companies: in production,<br/> 
        warehouse logistics, maintenance or delivery. We give you an overview of mobile<br/>
        hardware from handheld computers to mobile scanners, forklift terminals and <br/>
        tablets to robust smartphones and mobile printers.
      </p>
      <Body />
      <Footer />
    </main>
  );
}
