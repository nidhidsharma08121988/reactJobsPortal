import { JobsListing } from "../components/JobsListings";

const JobsPage = () => {
  return <section className="bg-blue-50 px-4 py-10">
  <div className="container-xl lg:container m-auto">
   <JobsListing isHome={false}/>
  </div>
</section>;
};

export default JobsPage;
