
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NoFoundPage = () => {
  return <section className="text-center flex flex-col align-middle justify-items-center items-center gap-5 mt-5">
    <FaExclamationTriangle className="fas fa-exclamation-triangle text-4xl text-yellow-400 fa-4x mb-4"/>
    <h1 className="text-6xl font-bold ">40 Not Found</h1>
    <p className="text-xl ">This page does not exist</p>
    <Link to="/" className="text-white bg-indigo-700 justify-self-center  hover:indigo-900 rounded w-25  px-3 py-2 ">Go Back</Link>
  </section>;
};

export default NoFoundPage;
