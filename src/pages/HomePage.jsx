
import {Hero} from "../components/Hero"
import { HomeCards } from '../components/HomeCards';
import { JobsListing } from '../components/JobsListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobsListing/>
    <ViewAllJobs/>    
    </>
  )
};

export default HomePage;
