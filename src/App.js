import React, { useState, useEffect } from 'react';
import './App.css';
import ReactPdf from './ReactPdf'
import ReactPdfBody from './ReactPdfBody';
function App() {


  const [getUserInfo, setUserInfo] = useState([

    {
      "name": "First & Last Name (14pt-16pt font)",
      "professionalEmailAddress": "Professional Email Address",
      "phoneNumber": "phoneNumber",
      "portfolioLink": "portfolio",
      "websiteOrLinkedInAddress": "Website or LinkedIn Address (Optional)"
    },
    {
      "name": "education",
      "institution": "Southeastern Louisiana University",
      "location": "City, State",
      "degree": "Bachelor of Science / Arts in Name of Major",
      "completionDate": "Month and Year Received/Expected",
      "secondMajor": "Concentration Second Major , Minor , Emphasis",
      "gpa": "GPA:X.XX/4.00",
      "relatedCoursework": "Related Coursework",
      "studyAbroad": "Study Abroad (optional)"
    },
    {
      "company": [
        {
          "name": "relevantExperience",
          "companyName": "Name of Company",
          "location": "City, State",
          "jobTitle": "Job Title",
          "duration": "Month Year - Month Year",
          "bulletPoints": [
            "Include 3-5 bullet points demonstrating skills you have gained through this position that relate back to the job description. Emphasize accomplishments over day-to-day tasks.",
            "Place an action verb at the beginning of a bullet point statement to make the statement impactful.",
            "Use quantifiers such as numbers, money amounts, or percentages whenever possible."
          ]
        },
        {
          "name": "additionalExperience",
          "companyName": "Name of Company",
          "location": "City, State",
          "jobTitle": "Job Title",
          "duration": "Month Year - Month Year",
          "bulletPoints": [
            "Emphasize key skills that employers may want to see in your resume (sometimes found in job descriptions).",
            "Highlight your results and impact by reflecting on the purpose behind the action/task.",
            "Make sure to use past tense verbs to describe your experiences."
          ]
        },
      
      ]
    },
    {
      "name": "projectExperience",
      "projectName": "Name of Project",
      "location": "City, State",
      "courseName": "Name of Course",
      "duration": "Month Year - Month Year",
      "bulletPoints": [
        "Include 3-5 bullet points demonstrating skills you have gained through your project. Emphasize accomplishments over project tasks.",
        "Continue to place an action verb at the beginning of a bullet point statement to make the statement impactful.",
        "Feature a bullet point that describes your team collaboration and/or leadership skills if the project was within a group. If the project was a group project, note your specific contributions to the group."
      ]
    },
    {
      "name": "campusCommunityInvolvement",
      "title": "Your title (if applicable)",
      "organizationName": "Club/Organization Name",
      "duration": "Month Year - Month Year",
      "bulletPoints": [
        "As an option, add 2-3 bullet points to describe your role in the organization. Focus your contributions to the organization and quantify whenever possible.",
        "Similar to the experience sections, begin each bullet point with a strong action verb."
      ]
    }
    // ,
    // "skills": [
    //   "Skill 1",
    //   "Skill 2",
    //   "Skill 3",
    //   "Skill 4",
    //   "Skill 5",
    //   "Skill 6"
    // ],
    // "honorsAndAwards": [
    //   {
    //     "name": "Name of Honor/Award/Grant",
    //     "date": "Month and Year Given"
    //   }
    // ]
  ]);
console.log(getUserInfo);
  const handleChange = (e, index, fieldname) => {
    // const {name,value} = e.traget;
    const value = e.target.value;
    console.log(fieldname, value);
    setUserInfo(preState => {
      const newState = [...preState];
      console.log('newState',newState);
      newState[index] = { ...newState[index], [fieldname]: value };
      return newState;
    });
  }

  // const UserProfileChange = (e) =>{
  //   var fullPath = e.target.value; // Get the full path (if available)
  //   var fileName = e.target.files[0].name; // Get the file name
  // var reader = new FileReader();
  // reader.onload = function(){
  //   var blob = new Blob([reader.result],{type:e.target.files[0].type})
  //   var url = URL.createObjectURL(blob);

  //   // var output = document.getElementById('output');
  //   // output.src = dataURL;
  //   console.log(fullPath);
  //   console.log(fileName);
  //   SetUserProfile(url);
  // };
  // reader.readAsArrayBuffer(e.target.files[0]);
  //   // SetUserProfile(e.target.value);
  // }

  const addChildDataToParent = (childData) => {
    setUserInfo(prevUserInfo => {
      const updatedUserInfo = [...prevUserInfo];
      updatedUserInfo[2] = {
        ...updatedUserInfo[2],
        company: [
          ...updatedUserInfo[2].company,
          ...childData
        ]
      };
      return updatedUserInfo;
    });
  };


  return (
    <div className="App">
      <div className='grid grid-cols-2 gap-2'>
        <div>
          <ReactPdfBody addChildDataToParent={addChildDataToParent} />
          <div className='mt-5 bg-white rounded-lg shadow'>
          <div className='px-5 pb-5 grid grid-cols-2 gap-2'>
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='username' value={getUserInfo[0].name} onChange={(e) => handleChange(e, 0, 'name')} />
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='Email Address' value={getUserInfo[0].professionalEmailAddress} onChange={(e) => handleChange(e,0,'professionalEmailAddress')} />
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='Phone Number' value={getUserInfo[0].phoneNumber} onChange={(e) => handleChange(e,0,'phoneNumber')} />
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='Portfolio' value={getUserInfo[0].portfolioLink} onChange={(e) => handleChange(e,0,'portfolioLink')} />
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='Website or LinkedIn Address' value={getUserInfo[0].websiteOrLinkedInAddress} onChange={(e) => handleChange(e,0,'websiteOrLinkedInAddress')} />
            
            </div>
            <div className='px-5 pb-5 grid grid-cols-2 gap-2'>
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='username' value={getUserInfo[1].name} onChange={(e) => handleChange(e, 1, 'name')} />
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='Email Address' value={getUserInfo[1].institution} onChange={(e) => handleChange(e,1,'institution')} />
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='Phone Number' value={getUserInfo[1].degree} onChange={(e) => handleChange(e,1,'degree')} />
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='Portfolio' value={getUserInfo[1].completionDate} onChange={(e) => handleChange(e,1,'completionDate')} />
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='Website or LinkedIn Address' value={getUserInfo[1].secondMajor} onChange={(e) => handleChange(e,1,'secondMajor')} />
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='Website or LinkedIn Address' value={getUserInfo[1].gpa} onChange={(e) => handleChange(e,1,'gpa')} />
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='Website or LinkedIn Address' value={getUserInfo[1].relatedCoursework} onChange={(e) => handleChange(e,1,'relatedCoursework')} />
              <input type="text" className=' text-black placeholder-gray-600   px-4 py-4 mt-1 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' name="" id="" placeholder='Website or LinkedIn Address' value={getUserInfo[1].studyAbroad} onChange={(e) => handleChange(e,1,'studyAbroad')} />
            </div>
          </div>
          {/*          
          <input type="range" name="" id="" placeholder='Phone Number' value={getUserrange} onChange={(e)=>UserRangeChange(e)} />
          <input type="range" name="" id="" placeholder='Phone Number' value={getUserrange} onChange={(e)=>UserRangeChange(e)} />
          <input type="range" name="" id="" placeholder='Phone Number' value={getUserrange} onChange={(e)=>UserRangeChange(e)} /> <input type="range" name="" id="" placeholder='Phone Number' value={getUserrange} onChange={(e)=>UserRangeChange(e)} /> */}
          {/* <input type='file'   onChange={(e)=>UserProfileChange(e)} /> */}
        </div>
        <div><ReactPdf getUserInfo={getUserInfo} /></div>
      </div>
    </div>
  );
}

export default App;
