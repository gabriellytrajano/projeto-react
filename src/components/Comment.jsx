import styles from './Comment.module.css'

import { ThumbsUp, Trash} from 'phosphor-react'
import { Avatar } from './Avatar'


export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
      onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/55569350?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabrielly Trajano</strong>
                            <time title="11 de Maio às 8:12h"dateTime="2022-05-11 08:13:38">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}></Trash>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>24</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}