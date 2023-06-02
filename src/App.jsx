import { Header } from './components/header';
import {Post} from './components/Post';
import './global.css';
import styles from './app.module.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1, 
    author: {
      avatarUrl: 'https://github.com/ghennings3.png',
      name: 'Gustavo Hennings',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      { type: 'paragraph', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-05-18 20:00:00'),
  },
  {
    id: 2, 
    author: {
      avatarUrl: 'https://github.com/luanrsf.png',
      name: 'Luan Ramos',
      role: 'FullStack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      { type: 'paragraph', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-05-21 20:00:00')
  }
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=>{
            return(<Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}      
        </main>
      </div>
    </div>
  )
}

export default App
