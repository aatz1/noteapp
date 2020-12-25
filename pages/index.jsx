import styles from '../styles/index.module.css' 
import Image from 'next/image'


function Index() {
    return (
        <div className={styles.body}>
            <h1>Docs</h1>
            <Image
            src="/../public/docs.jpg"
            alt="DOCS"
            width={1920}
            height={1080}

            />
        </div>
    )
}

export default Index