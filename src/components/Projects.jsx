import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-white p-12 py-10 grid gap-20
    sm:grid-cols-2 max-w-[1200px] mx-auto pt-20 "
    >
      {/*primera seccion */}
      <section className="grid gap-10 ">
        <div>
          <h3 className="uppercase text-2xl font-bold">
            Mis proyectos
          </h3>
          <h2 className="text-xl font-semibold text-gray-400 mt-2">
            Trabajo que he realizado durante el último año.{" "}
          </h2>
        </div>
        <div className="rounded-lg">
        <article className=" bg-gray-950 static shadow-xl shadow-sky-500">
          
           <div >
            <img src="/images/project1.png" alt="" />
          </div>
          <section className="p-6">
            <h4>Sitio web CRUD</h4>
            <p className="text-gray-400 text-sm pb-8">Este proyecto es un usuario CRUD en una página web responsive.</p>
            <div className="flex justify-center">
              <a
                href="https://eclectic-croquembouche-d3e0a7.netlify.app/"
                className=" transition ease-in-out delay-150 
                bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 
                hover:text-black duration-150 p-4 py-6 grid content-center text-lg rounded-md
                relative pt-0"  
               
              >
                <p className="translate-y-2">Ver proyecto</p>
                
              </a>
            </div>
          </section>
        </article>
        </div>

        <article className="bg-gray-950 static shadow-lg shadow-sky-500">
          <div className="">
            <img src="/images/project2.png" alt="" />
          </div>
          <section className="p-6">
            <h4>Sitio web de E-commerce</h4>
            <p className="text-gray-400 text-sm pb-8">
            Este proyecto es un E-commerce hecho con Javascript, HTML y CSS.</p>
            <div className="flex justify-center">
              <a
                href="https://proyecto-pri-perezcastillo.netlify.app/#"
                className=" transition ease-in-out delay-150 
              bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 
              hover:text-black duration-150 p-4 py-6 grid content-center text-lg rounded-md
              relative pt-0 "
              >
                <p className="translate-y-2">Ver proyecto</p>
                
              </a>
            </div>
          </section>
        </article>
      </section>

      {/*segunda seccion */}
      <section className="grid gap-10 ">
        <article className="bg-gray-950 static shadow-lg shadow-sky-500">
          <div>
            <img src="/images/project3.png" alt="" />
          </div>
          <section className="p-6">
            <h4>Página web</h4>
            <p className="text-gray-400 text-sm pb-8">
            Este es un proyecto donde se muestran frases aleatorias, 
            este proyecto se realizó con React y se utilizaron estados.</p>
            <div className="flex justify-center">
              <a
              
                href="https://creative-pony-22742e.netlify.app/"
                className=" transition ease-in-out delay-150 
              bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 
              hover:text-black duration-150 p-4 py-6 grid content-center text-lg rounded-md
              relative pt-0 "
              >
                <p className="translate-y-2">Ver proyecto</p>
                
              </a>
            </div>
          </section>
        </article>

        <article className="bg-gray-950 static shadow-lg shadow-sky-500">
          {/*EN PROCESO, CONTINUARA */}
          <div >
            <img src="/images/project4.png" alt="" />
          </div>
          <section className="p-6">
            <h4>Sitio Web</h4>
            <p className="text-gray-400 text-sm pb-8">
            Este proyecto utiliza la gestión de APIs, 
            React, States, Axios y Components.</p>
            <div className="flex justify-center">
              <a
                href="https://dazzling-truffle-ff62f2.netlify.app/"
                className=" transition ease-in-out delay-150 
              bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 
              hover:text-black duration-150 p-4 py-6 text-lg rounded-md
              relative pt-0 "
              >
                <p className="translate-y-2">Ver proyecto</p>
                
              </a>
            </div>
          </section>
        </article>
      </section>
    </section>
  );
};

export default Projects;
