import React from 'react'

export default function News(props) {
    let {title, description, imageUrl, newsUrl, date} = props;
    let d = date.slice(0,-10);

  return (
    <div className='flex flex-col flex-grow text-[#393939]'>
        <img className='h-[10rem] aspect-auto object-cover' src={!imageUrl?"https://imagekit.io/blog/content/images/2020/06/Server_User.png":imageUrl} alt="..."/>
        <span className='text-[0.725rem] mt-[0.25rem]'>{d}</span>
        <h2 className='text-[1.2rem] font-play font-bold my-[8px]'>{title}</h2>
        
        <p className='text-[0.75rem] '>{description} 
          <a href={newsUrl} className='rounded-md ml-[0.5rem] px-[0.25rem] pb-[0.125rem] text-center text-white bg-[#737373] text-[0.75rem] inline-block'>read more</a>
        </p>
        
    </div>
  )
}