import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar({ children }){
    return (
        <aside className={styles.sidebar}>
            <img 
            className = {styles.cover} src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxMXx8dGVjaG5vbG9neXxlbnwwfHx8fDE2Njk3NDEzNDE&ixlib=rb-4.0.3&q=50&w=500"
            />
            <div className={styles.profile}>
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/55569350?v=4"/>
                <strong>Gabrielly Trajano</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#' >
                    <PencilLine size={20}/>
                    Editar seu perfil 
                </a>
            </footer>
        </aside>
    )

}