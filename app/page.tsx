import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import featured from "../public/featured/fatured.jpg";
import Cardsm from "./components/Cards/Cardsm";
import CardList from "./components/Cards/CardList";

const ft = {
  title: '"Cloud" The next generation of Computing',
  img: featured,
  dsc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  url: "/",
  alt: "Testing",
};

export default function Home({
  searchParams,
}: {
  searchParams: {
    query: string;
    page: string;
  };
}) {
  const currentPage = searchParams.page || "1";
  console.log(currentPage)
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
        <CardList pageNumber={currentPage} cat=""/>

        <div className="hidden md:flex md:flex-col justify-center items-start self-start w-1/3 my-8">
          <h1 className="font-raleway font-bold text-4xl text-txt">
            Editors Choice
          </h1>

          <Cardsm
            author="Junaeid"
            tag="Networking"
            title="Proxy, Proxy and Privacy and there is more to it then this!!"
            url="/"
          />
        </div>
      </div>
    </main>
  );
}
