import { useState, useEffect } from 'react';
import JobListing from './JobListing';


const JobsListings = ({ isHome = false }) => {
  // Jobs State and a function to update the state
  const [jobs, setJobs] = useState([]);

  // Loading Spinner
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    try {
      const fetchJobs = async () => {
        const res = await fetch('http://localhost:8000/jobs');
        const data = await res.json();
        setJobs(data);
    } catch (error) {
      console.log('Error fetching data', error);
    } finally {
      setLoading(false);
    }
    
    }
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        { isHome ? 'Recent Jobs' : 'Browse Jobs' }
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {JobsListings.map((job) => (
            <JobListing key={job.id} job= { job } /> 
       ))}
       
          
        
      </div>
    </div>
  </section>
  )
}

export default JobsListings
