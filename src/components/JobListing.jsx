export const JobListing = ({job, handleAddFilters}) => {
    const positions = [job.role, job.level, job.languages].flat()
  return (
    <section className="relative border-l-8 border-l-dark-cyan rounded-l-lg rounded-r-sm p-[1rem] shadow-lg bg-white">

        <div className='lg:flex lg:items-center lg:justify-between'>
        <header className="absolute top-[-1rem] left-[1rem] lg:hidden">
            <img className="h-[3rem]" src={job.logo} alt="" />
        </header>

        <div className='lg:flex lg:items-center'>
            
        <img className="hidden lg:block h-[80%] mr-10" src={job.logo} alt="" />

        <main className="mt-[2rem] flex flex-col gap-4"> 
            <div className="flex w-full">
                <h2 className="text-dark-cyan font-bold mr-6 font-Primary text-lg md:text-xl">{job.company}</h2>
                <div className='flex gap-3'>
                    {
                        job.new ? (
                            <button className="rounded-full font-bold text-white bg-dark-cyan px-2 font-Primary pt-1 text-sm md:text-lg">NEW!</button>
                        ) : ''
                    }
                    { job.featured ? (
                            <button className="rounded-full font-bold text-white bg-black px-2 font-Primary pt-1 text-sm md:text-lg">FEATURED</button>
                        ) : ''}
                </div>

            </div> 
            <h3 className='font-bold'>{job.position}</h3>
            <div className='w-[80%]'>
                <ul className="flex justify-between font-Primary text-dark-grayish-cyan text-lg">
                    <li className="text-sm md:text-lg">{job.postedAt}</li>
                    <li className="list-disc text-sm md:text-lg">{job.contract}</li>
                    <li className="list-disc text-sm md:text-lg">{job.location}</li>
                </ul>
            </div>
            <hr className='lg:hidden' />
        </main>
        </div>

        <footer className='mt-3'>
            {
                positions?.map((position,i) => (
                    <div className="bg-light-cyan text-dark-cyan font-Primary font-[500] rounded-lg px-2 py-1 w-fit inline-block m-1 hover:bg-dark-cyan hover:text-light-cyan transition-colors duration-150 cursor-pointer " key={`item-${i}`} onClick={() => handleAddFilters(position)} >
                        <span className='font-bold font-Primary'>{position}</span>
                    </div>
                ))
            }
        </footer>
        </div>
    </section>
  )
}
