import React from "react";

const Header = () => {
  return (
    <section id="presentation"
      className="text-white md:grid md:grid-cols-[1.5fr_1.5fr] 
        md:min-h-[500px] max-w-[1200px] mx-auto pb-16 "
    >
             {/*realizando el chat*/}
  {/*  <a className="translate-x-20 flex justify-center" href="">
    <i className="text-green-600 text-6xl absolute bx bxs-chat"></i>
    </a>
  */}
      <div className=" flex justify-center pt-20 ">

        <img
          className="p-8 max-w-xs shadow-lg shadow-cyan-500
          sm:opacity-60"
          src="/images/HeaderPerfil.jpg"
          alt=""
        />
      </div>

      <section className="p-8 py-10 md:grid md:place-content-center md:px-10 md:mt-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Yo soy Pierre Pérez Castillo. Un desarrollador fullStack
        </h2>
        <p className="mt-1 md:mt-1">
        Soy un desarrollador apasionado por el desarrollo web
         y que busca la innovación en este campo y siempre 
         me esfuerzo por realizar un proyecto de la mejor manera.
        </p>
      </section>
      <a href="https://drive.google.com/file/d/1-7K5PmxW4e8vjCOenXh5_NF80WEkOeFg/view?usp=sharing" 
      className=" border-b-2 flex justify-center pt-8 border-green-700 
      pb-1 text-green-600 text-xl font-semibold capitalize">
        click para ver mi CV</a>
    </section>


  );
};

export default Header;
