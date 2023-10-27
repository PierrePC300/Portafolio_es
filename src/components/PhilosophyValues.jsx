import React from 'react'

const PhilosophyValues = () => {
  return (
    <section className='max-w-[1200px] mx-auto text-white 
    sm:grid sm:grid-cols-2 pb-28 p-6'>
      <article className='bg-gray-700 text-black py-10 px-2
      grid gap-12 sm:grid sm:content-between'>
        <div>
        <h3 className='text-2xl font-bold
        mb-4'>Filosofía-Valores</h3>
      
      <p className='text-gray-300'>
       Luchar por un buen trabajo es lo que ayuda a mejorar el mundo. 
      </p>
        </div> 

      <a href='https://www.linkedin.com/in/pierre-p%C3%A9rez-castillo-7a47a4277/' 
      className='border-b-2 border-green-700 max-w-max 
      pb-1 text-green-600 text-xl font-semibold'>Revisa mi LinkedIn</a>
      </article>
      <article>
        <img className='w-full' src="/images/Trabajo_grupo.jpg" alt="" />
      </article>
    </section>
  )
}

export default PhilosophyValues