import Featured from './components/Featured/Featured';
import Hero from './components/Hero/Hero';
import Post from './components/Posts/Post';
import st from './home.module.css';

export default function Home() {
  return (
    <main className={st.container}>
      <Hero/>
      <Featured/>
      <div>
        <Post/>
      </div>
  </main>
  )
}
