import React from "react";

const ContactMe = () => {
  return (
    <section className="bg-sky-900 text-black h-20 ">
      <div className="uppercase px-4">Pierre P.
      <a href="https://github.com/PierrePC300">
        <i className="bx bxl-github cursor-pointer hover:text-white px-4 text-2xl"></i>
      </a>
      </div>
      <div className="flex justify-center align-middle p-4 text-4xl font-semibold  bg-sky-900">Contáctame</div>
      <div
        id="contact"
        className=" flex justify-center 
     bg-sky-900 text-black text-xl py-6"
      >
        <br />
        <br />

        <footer className=" right-6 grid gap-2  sm:grid-cols-2 mx-auto">
          <div>
            <i className="bx bxl-gmail "> perezcastillopierre@gmail.com</i>


          </div>

          <br />
          {/* 
    <a href="">
    <i className='bx bxl-gmail cursor-pointer hover:text-white' ></i>
    </a>
  */}
          <div>
            <a href="https://www.linkedin.com/in/pierre-p%C3%A9rez-castillo-7a47a4277/">
              <i class="bx bxl-linkedin cursor-pointer hover:text-white"></i>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactMe;
