import React,{useState,useEffect} from 'react';


 const ReactPdfBody = ({addChildDataToParent }) =>{

    const [formsData, setFormsData] = useState([
        {
            name:"",
          companyName: "",
          location: "",
          jobTitle: "",
          duration: "",
          bulletPoints: [""],
        },
      ]);

      const handleChange = (e, formIndex, bulletIndex) => {
        const { name, value } = e.target;
        if (name === "bulletPoints") {
          const updatedFormsData = [...formsData];
          updatedFormsData[formIndex].bulletPoints[bulletIndex] = value;
          setFormsData(updatedFormsData);
        } else {
          const updatedFormsData = [...formsData];
          updatedFormsData[formIndex][name] = value;
          setFormsData(updatedFormsData);
        }
      };
    
      const addBulletPoint = (formIndex) => {
        const updatedFormsData = [...formsData];
        updatedFormsData[formIndex].bulletPoints.push("");
        setFormsData(updatedFormsData);
      };
    
      const removeBulletPoint = (formIndex, bulletIndex) => {
        const updatedFormsData = [...formsData];
        updatedFormsData[formIndex].bulletPoints.splice(bulletIndex, 1);
        setFormsData(updatedFormsData);
      };
    
      const addForm = () => {
        setFormsData([
          ...formsData,
          {
            name:"",
            companyName: "",
            location: "",
            jobTitle: "",
            duration: "",
            bulletPoints: [""],
          },
        ]);
        addChildDataToParent(formsData);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formsData);
      };

 

    

    return(
        <>
               <div>
        {formsData.map((formData, formIndex) => (
          <form key={formIndex} onSubmit={handleSubmit}>
             <input
              type="text"
              className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' 
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e, formIndex)}
              placeholder="Company Name"
            />
            <input
              type="text"
              className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' 
              name="companyName"
              value={formData.companyName}
              onChange={(e) => handleChange(e, formIndex)}
              placeholder="Company Name"
            />
            <input
              type="text"
              className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' 
              name="location"
              value={formData.location}
              onChange={(e) => handleChange(e, formIndex)}
              placeholder="Location"
            />
            <input
              type="text"
              className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' 
              name="jobTitle"
              value={formData.jobTitle}
              onChange={(e) => handleChange(e, formIndex)}
              placeholder="Job Title"
            />
            <input
              type="text"
              className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' 
              name="duration"
              value={formData.duration}
              onChange={(e) => handleChange(e, formIndex)}
              placeholder="Duration"
            />
            <div>
              {formData.bulletPoints.map((bulletPoint, bulletIndex) => (
                <div key={bulletIndex}>
                  <input
                    type="text"
                    className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' 
                    name="bulletPoints"
                    value={bulletPoint}
                    onChange={(e) => handleChange(e, formIndex, bulletIndex)}
                    placeholder="Bullet Point"
                  />
                  <button
                    type="button"
                    className='button button3'
                    onClick={() => removeBulletPoint(formIndex, bulletIndex)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" className='button button2' onClick={() => addBulletPoint(formIndex)}>
                Add Bullet Point
              </button>
            </div>
            <button type="submit" className='button button2'>Submit</button>
          </form>
        ))}
        <button  className='button button1' onClick={addForm}>
          Add Form
        </button>
        
      </div>
        </>
    );
}

export default ReactPdfBody