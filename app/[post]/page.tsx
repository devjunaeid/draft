import React from "react";
import Categories from "../components/Cards/Categories";
import Image from "next/image";
import img from "@/public/home/hero1.png";
import Cardsm from "../components/Cards/Cardsm";

function page() {
  return (
    <div className="fcm w-full gap-8">
      <div className="frm gap-10 w-full h-fit">
        <div className="w-1/3">
          <Image
            src={img}
            className="w-full h-[500px] object-cover"
            alt="Post Hero Img"
          />
        </div>
        <div className="w-2/3 flex-col gap-8 justify-start">
          <div className="frm w-full">
            <Categories name="tech" size="sm" />
            <span className="text-2xl mr-6">|</span>
            <div className="frm gap-2">
              <Image
                src={img}
                className="w-8 h-8 object-cover rounded-full"
                alt="Post Hero Img"
              />
              <span className="text-xl mr-6">Juaneid</span>
              <span className="text-2xl mr-6">|</span>
              <span className="text-xl">11-2-22</span>
            </div>
          </div>
          <h1 className="text:4xl md:text-6xl font-black text-center">
            This the Start of my Journey
          </h1>
        </div>
      </div>
      <div className="flex w-full gap-8">
        <div className="flex flex-col w-1/3">
          <h1 className="my-8 text-4xl font-bold">Releted Post</h1>
          <Cardsm
            author="Juaneid"
            img={img}
            tag="tech"
            title="Hello world here I come"
            url="/world"
          />
        </div>
        <div className="flex flex-col gap-6 text-xl text-justify justify-start p-4 w-2/3">
          <p>
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?"
          </p>

          <h3 className="text-2xl font-bold">More on the Moves and Runs.</h3>
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
        </div>
        <div className="hidden">
          {/* future comment section */}
        </div>
      </div>
    </div>
  );
}

export default page;
