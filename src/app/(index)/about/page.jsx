import BackToTop from "@/components/BackToTop/BackToTop";
/* 
async function getData(){
  const res = await fetch('https://127.0.0.1:3000/api/timeline');

  if(!res.ok){
      throw new Error('Something went wrong while fetching the timeline data');
  }

  return res.json();
} 
 */
export default async function EventPage() {
  const data = [
    {
      year: '2010',
      event: 'The UCode School Clinic opened its doors, providing accessible healthcare services to students.',
      title: 'Establishment and Opening'
    },
    {      
      year: '2011',
      event: 'Additional medical staff were hired to enhance the clinic\'s capacity and improve patient care.  ',
      title: 'Expansion of Medical Staff'
    },
    {      
      year: '2012',
      event: 'Electronic health records system was introduced, streamlining patient information management.    ',
      title: 'Implementation of Electronic Health Records'
      },
      {      
        year: '2013',
        event: 'Conducted educational workshops to promote health awareness and empower students with essential healthcare knowledge.',
        title: 'Health Education Workshops'
      },
      {      
        year: '2014',
        event: 'Established a partnership with a local hospital to facilitate specialized care and referrals when needed.',
        title: 'Collaboration with Local Hospital'
      },
      {      
        year: '2015',
        event: 'The clinic underwent renovations and upgraded its medical equipment to ensure top-notch care and comfort for students.',
        title: 'Upgraded Facilities and Equipment'
      },
      {      
        year: '2016',
        event: 'Introduced an online system for students to conveniently schedule clinic appointments and manage their healthcare needs.',
        title: 'Launch of Online Appointment Scheduling'
      },
      {      
        year: '2017',
        event: 'Extended operating hours of the clinic to better accommodate student schedules and provide timely medical assistance.',
        title: 'Extended Clinic Hours'
      },
      {      
        year: '2018',
        event: 'Organized an annual flu vaccination campaign to promote preventive healthcare and protect students from seasonal influenza.',
        title: 'Annual Flu Vaccination Campaign.'
      },
      {      
        year: '2019',
        event: 'Initiated a community health outreach program',
        title: 'Community Health Outreach Program'
      },
      {      
        year: '2020',
        event: 'Celebrated a decade of service by organizing special events and expressing gratitude to the students and staff for their support.',
        title: '10th Year Anniversary Celebration'
      },
      {      
        year: '2021',
        event: 'Conducted a comprehensive campaign to raise awareness about mental health and provide support to students in need.',
        title: 'Mental Health Awareness Campaign'
      },
      {      
        year: '2022',
        event: 'Introduced programs focused on nutrition, physical fitness, and overall wellness to promote a healthy lifestyle among students.',
        title: 'Introduced programs focused on nutrition, physical fitness, and overall wellness to promote a healthy lifestyle among students.'
      },
      {      
        year: '2023',
        event: 'Upgraded the clinic\'s medical records system to a more advanced electronic platform for efficient data management and improved patient care.',
        title: 'Implementation of New Electronic Medical Records System'
      }
];
  let i = 0;

  return (
    <div className='max-w-screen-xl mx-auto pt-10 pb-10'>
      
        <div>
          <ol className="relative border-l border-green-800">         
              {data.map((item) => (
                  <li className="mb-10 ml-4" key={i++}>
                      <div className="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -left-1.5 border border-green-500"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-emerald-800 bg-red-200 rounded-lg p-1">Year: {item.year}</time>
                      <h3 className="text-lg font-semibold text-emerald-900 ">{item.title}</h3>
                      <p className="text-base font-normal text-gray-500 ">{item.event}</p>
                  </li>
              ))}
          </ol>
        </div>
      <BackToTop />
    </div>
  )
}
