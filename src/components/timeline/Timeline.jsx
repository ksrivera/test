const getData = async () => {
    const res = await fetch('http://localhost:3000/api/timeline', {
        next: { revalidate: 10 }
    });

    if(!res.ok){
        throw new Error('Something went wrong while fetching the timeline data');
    }

    return res.json();
}

const Timeline = async () => {
    const data = await getData();
    console.log(data.year);
    
  return (
    <div>
        <ol className="relative border-l border-green-800">         
            {data.map((item) => (
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -left-1.5 border border-green-500"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-emerald-800 bg-red-200 rounded-lg p-1">Year: {item.year}</time>
                    <h3 className="text-lg font-semibold text-emerald-900 ">{item.title}</h3>
                    {console.log(item)}
                    <p className="text-base font-normal text-gray-500 ">{item.event}</p>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default Timeline