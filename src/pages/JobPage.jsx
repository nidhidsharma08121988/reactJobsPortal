import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobListing from "../components/JobListing";
import Spinner from "../components/Spinner";

const JobPage = () => {
    const [job,setJob] = useState(null);
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchJob = async()=>{
            try {
                const res = await fetch(`/api/jobs/${id}`)
                const data = await res.json()
                setJob(data)
            } catch (error) {
                console.error(error);
            }finally{
                setLoading(false)  
            }
        }
        fetchJob()
    },[job,id])

  return isLoading?  <Spinner loading={isLoading}/> : <JobListing job={job} isJobPage={true}/>;
};

export default JobPage;
