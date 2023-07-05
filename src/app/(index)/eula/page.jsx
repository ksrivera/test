import BackToTop from "@/components/BackToTop/BackToTop";

export default async function LicensePage(){
/*   const res = await fetch('https://127.0.0.1:3000/api/eula');

  if(!res.ok){
      throw new Error('Something went wrong while fetching data.');
  }

  const data = await res.json(); */

  const data = [
    {
        title: 'License Grant',
        description: 'The software application, including any updates or enhancements ("Software"), is licensed, not sold, to the User by [School Name] ("Licensor") for use solely in the context of the School Clinic. Licensor grants the User a non-exclusive, non-transferable license to use the Software subject to the terms and conditions of this EULA.'
    },
    {
        title: 'Permitted Use',
        description: 'The User may use the Software solely for internal purposes related to the management, administration, and operation of the School Clinic. The User may install and use the Software on the number of devices authorized by the Licensor, provided that each device is used exclusively by authorized personnel within the School Clinic.'
    },
    {
        title: 'Prohibited Actions',
        description: 'Copy, modify, or distribute the Software, in whole or in part, without the prior written consent of the Licensor. Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Software\;iii. Remove or alter any copyright, trademark, or other proprietary notices contained in the Software\;iv. Use the Software for any illegal, unauthorized, or unethical purposes.'
    },
    {
        title: 'Disclaimer of Warranty',
        description: 'The Software is provided \"as is\" without warranty of any kind, either express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. The Licensor does not warrant that the Software will be error-free, uninterrupted, or free from viruses or other harmful components.'
    },
    {
        title: 'Limitation of Liability',
        description: 'In no event shall the Licensor be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the Software, even if the Licensor has been advised of the possibility of such damages.'
    },
    {
        title: 'Termination',
        description: 'This EULA is effective until terminated. The Licensor may terminate this EULA immediately if the User breaches any of its terms. Upon termination, the User must cease all use of the Software and destroy all copies in their possession.'
    },
    {
        title: 'Governing Law and Jurisdiction',
        description: 'Any disputes arising out of or in connection with this EULA shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].'
    }
  ];

  return (
    <div className='max-w-full mx-auto bg-emerald-200'>
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-emerald-900 md:text-5xl lg:text-6xl ">UCode School Clinic EULA</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">End User License Agreement</p>
            </div>
        </section>
        <div className='bg-green-200 pt-10'>
            {data.map(item => (
                <div className='max-w-screen-2xl mx-auto pb-10' key={item.title}>
                    <p className="mb-3 text-lg  md:text-xl text-green-500"><strong>{item.title}</strong></p>
                    <p className="text-gray-500">{item.description}</p>
                </div>
            ))}
        </div>
        <BackToTop/>
    </div>
  )
}

