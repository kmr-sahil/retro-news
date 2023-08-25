import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function Navbar({change, setChange}) {
  const handleCountryChange = (event) => {
    setChange(event.target.value);
  };
  return (
    <div className='flex flex-col my-[1rem] '>

        <a target='_blank' href='https://github.com/kmr-sahil/retro-news#readme' className='bg-[#737373] w-[100%] absolute left-0 top-0'>
          <p className='animate-marquee hover:pause hover:ease-in whitespace-nowrap text-[#e6e6e6] text-[12px] py-[2px]'> Free news API not available in production. Please run the code locally or <span className='underline underline-offset-2'> view the demo </span> ------- Free news API not available in production. Please run the code locally or <span className='underline underline-offset-2'> view the demo </span> ------- Free news API not available in production. Please run the code locally or <span className='underline underline-offset-2'> view the demo </span> ------- Free news API not available in production. Please run the code locally or <span className='underline underline-offset-2'> view the demo </span> ------- Free news API not available in production. Please run the code locally or <span className='underline underline-offset-2'> view the demo </span> Free news API not available in production. Please run the code locally or <span className='underline underline-offset-2'> view the demo </span> ------- Free news API not available in production. Please run the code locally or <span className='underline underline-offset-2'> view the demo </span> ------- Free news API not available in production. Please run the code locally or <span className='underline underline-offset-2'> view the demo </span> ------- Free news API not available in production. Please run the code locally or <span className='underline underline-offset-2'> view the demo </span> ------- Free news API not available in production. Please run the code locally or <span className='underline underline-offset-2'> view the demo </span></p>
        </a>

        <h2 className=' text-5xl text-[#393939] font-play font-bold mb-5 mt-4'>Gotham News</h2>
        <span className='w-[100%] h-[0.2em] bg-[#393939] rounded-md'/>
        
          <div className=' flex gap-x-5 gap-y-1 flex-wrap font-play text-[0.8rem] text-[#393939] underline my-[0.5rem]'>
            <Link to="/">General</Link>
            <Link to="/business">Business</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/science">Science</Link>
            <Link to="/sports">Sports</Link>
            <Link to="/entertainment">Entertainment</Link>
            <Link to="/health">Health</Link>
            <div className='self-center text-[0.8rem] ml-auto font-sans'>
            <select className='bg-transparent border border-[#393939] rounded-md focus:border-[0.1rem]' value={change} onChange={handleCountryChange}>
              <option className='bg-[#e6e6e6] hover:bg-[#393939] hover:text-white' value="in">India</option>
              <option className='bg-[#e6e6e6] hover:bg-[#393939] hover:text-white' value="us">United States</option>
              <option className='bg-[#e6e6e6] hover:bg-[#393939] hover:text-white' value="au">Australia</option>
              <option className='bg-[#e6e6e6] hover:bg-[#393939] hover:text-white' value="ca">Canada</option>
              <option className='bg-[#e6e6e6] hover:bg-[#393939] hover:text-white' value="jp">Japan</option>
              <option className='bg-[#e6e6e6] hover:bg-[#393939] hover:text-white' value="cn">China</option>
              <option className='bg-[#e6e6e6] hover:bg-[#393939] hover:text-white' value="sg">Singapore</option>
            </select>
          </div>
          
          

        </div>
        <span className='w-[100%] h-[0.2rem] bg-[#393939] rounded-md'/>
    </div>
  )
}