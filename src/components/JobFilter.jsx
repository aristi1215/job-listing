
export const JobFilter = ({title, handleRemoveFilter}) => {
  return (
    <div className="inline-block mr-3 mt-2 md:mt-0 cursor-pointer" onClick={() => handleRemoveFilter(title)}>
    <div className="flex bg-light-cyan w-fit rounded items-center gap-2 pl-2 hover:bg-dark-cyan hover:text-light-cyan transition-colors duration-150 text-dark-cyan ">
        <h5 className="font-bold ">{title}</h5>
        <div className="bg-dark-cyan flex items-center justify-center h-[2rem] w-[2rem] rounded-r-lg ">            
            <img src="/images/icon-remove.svg" alt="" />
        </div>
    </div>
    </div>
  )
}
