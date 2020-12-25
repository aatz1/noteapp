import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react'
import styles from '../styles/index.module.css'


function Page1({ notes }) {
    return (
        <>  
            <div className={styles.notes_container}>
                <h1>Notes</h1>
            </div>
            <div className={styles.grid}>
                <div className={styles.wrapper}>
                    {notes.map(note => {
                        return (
                            <div key={note._id}>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>
                                            <Link href={`/${note._id}`}>
                                                <a href="">{note.title}</a>
                                            </Link>
                                        </Card.Header>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Link href={`/${note._id}`}>
                                            <Button primary>View Note</Button>
                                        </Link>
                                    </Card.Content>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>   
    )
}

Page1.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/notes');
    const { data } = await res.json();

    return { notes: data };
}