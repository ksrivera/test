import BackToTop from "@/components/BackToTop/BackToTop";

export const metadata = {
    title: 'EULA | UCode Clinic',
    description: 'UCode Clinic EULA Page'
};
  

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/eula', {
        next: { revalidate: 10}
    })

    if(!res.ok){
        throw new Error('Something went wrong while fetching data.');
    }

    return res.json();
}

const LicensePage = async () => {
  const data = await getData();

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
                <div className='max-w-screen-2xl mx-auto pb-10' key={item._id}>
                    <p className="mb-3 text-lg  md:text-xl text-green-500"><strong>{item.title}</strong></p>
                    <p className="text-gray-500">{item.description}</p>
                </div>
            ))}
        </div>
        <BackToTop/>
    </div>
  )
}

export default LicensePage