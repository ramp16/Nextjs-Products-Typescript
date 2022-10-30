import React, { NextPage } from "next";
import { ApplicationWrapper } from "../components/layout/ApplicationWrapper";

type HomeProps = {
  response: string;
};

const Home: NextPage<HomeProps> = () => {
  return (
    <ApplicationWrapper
      title="Home"
      description="Home of the rootlab movies website"
    >
      <div className="grow flex flex-col justify-center items-center bg-[url('/images/home-bg.jpg')]">
        <div className="grow bg-black w-full justify-center items-center flex opacity-70">
          <h1 className="text-7xl font-bold underline text-white">
            Bienvenidos a Rootlab Movies
          </h1>
          <span>Nombre: Raul Martinez </span>
          <span>email: ra916mp@gmail.com</span>
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export default Home;
