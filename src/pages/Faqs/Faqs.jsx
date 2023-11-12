import { useState } from 'react';
import Accordions from './component/Accordion'; 
function Faqs() {
    const [accordions, setAccordion] = useState([ 
        { 
            key: 1, 
            title: 'What is GeeksforGeeks?', 
            data: `GeeksforGeeks is a one stop solution  
                      for all computer science students.`, 
            isOpen: false
        }, 
        { 
            key: 2, 
            title: 'What GeeksforGeeks offer us?', 
            data: `GeeksforGeeks offers Free Tutorials,  
                      Millions of Articles, Live, Online and  
                      Classroom Courses,Frequent Coding Competitions,  
                      Webinars by Industry Experts, Internship  
                      opportunities and Job Opportunities.`, 
            isOpen: false
        }, 
        { 
            key: 3, 
            title: 'Which is the best portal to study Computer Science?', 
            data: `GeeksforGeeks is the best Computer Science portal  
                      for geeks. It contains well written, well thought  
                      and well explained computer science and programming  
                      articles.`, 
            isOpen: false
        }, 
        { 
            key: 4, 
            title: 'Which is the best portal to study Computer Science?', 
            data: `GeeksforGeeks is the best Computer Science portal  
                      for geeks. It contains well written, well thought  
                      and well explained computer science and programming  
                      articles.`, 
            isOpen: false
        }, 
    ]); 
    const toggleAccordion = (accordionkey) => { 
        const updatedAccordions = accordions.map((accord) => { 
            if (accord.key === accordionkey) { 
                return { ...accord, isOpen: !accord.isOpen }; 
            } else { 
                return { ...accord, isOpen: false }; 
            } 
        }); 
  
        setAccordion(updatedAccordions); 
    };
  return (
    <div>
        <div className="container">
   <div className="flex justify-center items-center mt-[40px]">
 <div>
    <h1 className="w-[532px] text-[48px] text-[#1A1A1A] font-semibold">Welcome, Let’s Talk About Our Ecobazar</h1>
    <div className='h-[300px]'> 
            <div className="mt-[30px]"> 
                {accordions.map((accordion) => (   
                    <Accordions 
                        key={accordion.key} 
                        title={accordion.title} 
                        data={accordion.data} 
                        isOpen={accordion.isOpen} 
                        toggleAccordion={() => toggleAccordion(accordion.key)} 
                    /> 
                ))} 
            </div> 
        </div> 
 </div>
 <img src="https://cdn.arabsstock.com/uploads/images/53173/image-53173-portrait-saudi-arabian-gulf-man-holding-pineapple-fruit-hi-remove-bg-preview.png" alt="faqs-image" className="w-[650px] h-[700px] " />
   </div>
        </div>
    </div>
  )
}

export default Faqs