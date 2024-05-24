import  JobListing  from "./JobListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { PropTypes } from 'prop-types';
export const JobsListing = ({isHome=true})=>{
 const [jobs,setJobs] = useState([]) 
 
 
 const [isLoading, setLoading] = useState(true)

 useEffect(()=>{
  
  const fetchJobs = async ()=>{
    const apiURL = isHome ? 'http://localhost:5000/jobs?_limit=3' : "http://localhost:5000/jobs"

    try {
      const res = await fetch(apiURL)
      const data = await res.json()
      setJobs(data)
    } catch (error) {
      console.log("fetch data",error)
    } finally{
      setLoading(false)
    }
  }
   fetchJobs()
 },[])



  return (<section className="bg-blue-50 px-4 py-10">
  <div className="container-xl lg:container m-auto">
    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
      Browse Jobs 
    </h2>
      {
      isLoading? 
      (<Spinner loading={isLoading}/>) :
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {jobs.map(job => (<JobListing key={job.id} job={job}/>))}
      </div>
      }
 
  </div>
</section>)};


JobsListing.propTypes = {
  isHome: PropTypes.bool,
}