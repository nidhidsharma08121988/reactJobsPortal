import { HomeCards } from "./HomeCards";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { JobsListing } from "./JobsListings";
import ViewAllJobs from "./ViewAllJobs";




const App = () => {
  
  return (<>
    <NavBar/>

    {/* <!-- Hero --> */}
    <Hero/>

    {/* <!-- Developers and Employers --> */}
    <HomeCards/>

    {/* <!-- Browse Jobs --> */}
    <JobsListing/>

    <ViewAllJobs/>

  </>);
};

export default App;