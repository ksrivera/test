import BackToTop from "@/components/BackToTop/BackToTop";

export default function ToSPage(){
/*   const res = await fetch('https://127.0.0.1:3000/api/tos');

  if(!res.ok){
      throw new Error('Something went wrong while fetching data.');
  }

  const data = await res.json(); */

  const data = [
    {
      title: 'Scope of Services',
      description: 'The School Clinic provides medical services, treatment, and support to students enrolled in WD University students during regular school hours. The services may include, but are not limited to, general medical care, first aid, health assessments, and referrals to appropriate healthcare professionals.'
    },    
    {
      title: 'Eligibility',
      description: 'The School Clinic services are available exclusively to enrolled Students of WD University. Individuals who are not enrolled students are not eligible to use the School Clinic.'
    },
    {
      title: 'Consent and Confidentiality',
      description: 'The School Clinic will handle all personal health information in accordance with applicable privacy laws. All information shared with the School Clinic will be treated as confidential and will not be disclosed to any third parties without consent, except as required by law or when there is a risk to the student safety or the safety of others.',
    },
    {
      title: 'Limitations of Services',
      description: 'Emergency Situations: In the case of a medical emergency, the School Clinic staff will provide immediate care to the best of their abilities. However, if the situation requires specialized care beyond the capabilities of the School Clinic, emergency medical services will be contacted.'
    },
  ];

  let i = 0;
  return (
    <div className='max-w-full mx-auto bg-emerald-200'>
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-emerald-900 md:text-5xl lg:text-6xl ">Terms & Conditions</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">UCode School Clinic License</p>
            </div>
        </section>
        <div className='bg-green-200 pt-10'>
          {data?.map(item => (
              <div className='max-w-screen-2xl mx-auto pb-10' key={i++}>
                  <p className="mb-3 text-lg md:text-xl text-green-500"><strong>{item.title}</strong></p>
                  <p className="text-gray-500">{item.description}</p>
              </div>
          ))}
        </div>
        <BackToTop/>
    </div>
  )
}