import './App.css'
import { JobListing } from './components/JobListing'
import data from '../data.json'
import { JobFilter } from './components/JobFilter'
import { useState } from 'react'

function App() {

  const [selectedFilters, setSelectedFilters] = useState([])

  const handleAddFilters = (filter) => {
    if(!selectedFilters.includes(filter)){
      setSelectedFilters(prev => [...prev, filter])
    }
  }
  const handleRemoveFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter(item => item !== filter))
  }

  const filterBy = () => {
    const filteredData = data
      .map(data => {
        const filters = [data.role, data.level, ...data.languages];
        return { ...data, filters };
      })
      .filter(item => {
        if(selectedFilters.length === 0){
          return true
        }
        return selectedFilters.every(filter => item.filters.includes(filter));
      });
  
    return filteredData;
  };
  

  return (
    <>
      <header className='bg-[url(/images/bg-header-mobile.svg)] h-[20vh] bg-no-repeat bg-cover bg-dark-cyan relative'>
        <div className={`rounded-lg p-5 bottom-0 absolute left-[50%] translate-x-[-50%] translate-y-[50%] bg-white w-[90%] shadow-xl justify-between items-center ${selectedFilters.length === 0 ? 'hidden' : 'flex'}`}>
          <div>
            {
            selectedFilters?.map((filter,i) => (
            <JobFilter handleRemoveFilter={handleRemoveFilter} key={i} title={filter}/>
            ))
            }
          </div>
          <div className='w-[20%] flex items-center justify-center'>
            <h4 className='font-bold text-dark-grayish-cyan cursor-pointer' onClick={() => setSelectedFilters([])}>Clear</h4>
          </div>
        </div>
      </header>
      <main className={`px-6 pb-[2rem] flex flex-col gap-10 ${selectedFilters.length === 0 ? 'pt-[2rem]' : 'pt-[8rem]'} bg-cyan-bg`}>
        {
          filterBy().map(job => (
            <JobListing key={job.id} job={job} handleAddFilters={handleAddFilters} />
          ))
        }
      </main>
    </>
  )
}

export default App
