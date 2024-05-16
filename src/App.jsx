import { HomeCards } from "./HomeCards";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { JobsListing } from "./JobsListing";


const ViewJobs = <section className="m-auto max-w-lg my-10 px-6">
  <a
    href="jobs.html"
    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
  >View All Jobs</a>
</section>;


const App = () => {
  
  return (<>
    <NavBar/>

    {/* <!-- Hero --> */}
    <Hero/>

    {/* <!-- Developers and Employers --> */}
    <HomeCards/>

    {/* <!-- Browse Jobs --> */}
    <JobsListing/>

    {ViewJobs}

  </>);
};

export default App;