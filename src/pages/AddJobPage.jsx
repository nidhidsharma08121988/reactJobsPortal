import { Form } from "react-router-dom";


const AddJobPage = () => {
  return <Form className="flex flex-col max-w-full justify-center align-middle mr-12 ml-12">
    <div>
    <div className="text-center text-3xl m-2">Add Job</div>
    <div className="p-2 m-2 flex  align-top ">
      <label htmlFor="title" className="p-2 w-60">
        Title   
      <textarea name="title" id="title" cols="30" rows="50" className="text-left p-2 w-25 h-20 border-solid border-2 border-gray-100" />
      </label>
    </div>
    <div className="p-2 m-2 flex align-top  ">
      <label htmlFor="description" className="p-2 w-60">
        Job Description   
      <textarea name="description" id="description" cols="30" rows="50" className="text-left p-2 w-25 h-20 border-solid border-2 border-gray-100" />
      </label>
    </div>
    <div className="p-2 m-2 flex align-top  max-w-full">
      <label htmlFor="salary" className="p-2 w-60">
       Salary Range  
      <textarea name="salary" id="salary" cols="30" rows="50" className="text-left p-2 w-25 h-20 border-solid border-2 border-gray-100" />
      </label>
    </div>
    <div className="p-2 m-2 flex align-top  max-w-full">
      <label htmlFor="location" className="p-2 w-60">
        location      
      <textarea name="location" id="location" cols="30" rows="50" className="text-left p-2 w-25 h-20 border-solid border-2 border-gray-100" />
      </label>
    </div>
    <div className="p-2 m-2 flex align-top  max-w-full">
      <label htmlFor="type" className="p-2 w-60">
        Type      
      <textarea name="type" id="type" cols="30" rows="50" className="text-left p-2 w-25 h-20 border-solid border-2 border-gray-100" />
      </label>
    </div>
    </div>
    </Form>;
};

export default AddJobPage;
   