
import {Hero} from "../Hero"
import { HomeCards } from '../HomeCards';
import { JobsListing } from '../JobsListings';
import ViewAllJobs from '../ViewAllJobs';

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
