import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobsListings from '../components/JobsListings';
import ViewAllJobs from '../components/ViewAllJobs';


const Homepage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobsListings />
        <ViewAllJobs />
    </>
  );
};
export default Homepage
