import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import Post from "./components/Posts/Post";
import featured from "../public/featured/fatured.jpg";
import Cardsm from "./components/Cards/Cardsm";
import Pagination from "./components/Pagination/Pagination";

const ft = {
  title: '"Cloud" The next generation of Computing',
  img: featured,
  dsc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  url: "/",
  alt: "Testing",
};

export default function Home() {
  return (
    <main className="min-w-full">
      <Hero />
      <Featured
        title={ft.title}
        img={ft.img}
        dsc={ft.dsc}
        alt={ft.alt}
        url={ft.url}
      />
      <h1 className="text-5xl md:text-6xl font-black text-txt font-raleway mt-16">
        Recent Posts
      </h1>
      <div className="frm gap-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 w-full md:w-2/3">
          <Post
            title={ft.title}
            img={ft.img}
            dsc={ft.dsc}
            alt={ft.alt}
            url={ft.url}
            tag="tech"
            date="1-22-22"
          />
          <Post
            title={ft.title}
            img={ft.img}
            dsc={ft.dsc}
            alt={ft.alt}
            url={ft.url}
            tag="tech"
            date="1-22-22"
          />
          <Post
            title={ft.title}
            img={ft.img}
            dsc={ft.dsc}
            alt={ft.alt}
            url={ft.url}
            tag="tech"
            date="1-22-22"
          />
          <Post
            title={ft.title}
            img={ft.img}
            dsc={ft.dsc}
            alt={ft.alt}
            url={ft.url}
            tag="tech"
            date="1-22-22"
          />
          <Post
            title={ft.title}
            img={ft.img}
            dsc={ft.dsc}
            alt={ft.alt}
            url={ft.url}
            tag="tech"
            date="1-22-22"
          />
          <Post
            title={ft.title}
            img={ft.img}
            dsc={ft.dsc}
            alt={ft.alt}
            url={ft.url}
            tag="tech"
            date="1-22-22"
          />
        </div>
        <div className="hidden md:flex md:flex-col justify-center items-start self-start w-1/3 my-8">
          <h1 className="font-raleway font-bold text-4xl text-txt">Editors Choice</h1>
          <Cardsm author="Junaeid" tag="Networking" title="Proxy, Proxy and Privacy and there is more to it then this!!" url="/" />
        </div>
      </div>
      <Pagination/>
    </main>
  );
}
