import React, { useEffect, useState } from 'react';
import News from './News';
import News2 from './News2';

export default function NewsSection({category, country}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      //const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3f8c75cdfedd4788b75e96e6600a4f7d&page=${page}&pageSize=18`
      const response = await fetch(`./example.json`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      });
      const data = await response.json();

      setArticles(data.articles);
      console.log(data.articles); // Log the articles immediately after state update
      setIsLoading(false); // Set isLoading to false after fetching and updating the articles
      
    };

    fetchData();
  }, [page, country]);

  const nextClick = () => {
    setPage(page + 1)
    
  }

  const prevClick = () => {
    if(page > 1){
    setPage(page - 1)
    }
  }

  return (
    <div className='mb-5'>
      <div className="grid grid-cols-7 grid-flow-col gap-[0.5rem] tablet:gap-[0.5rem] tabletlg:gap-[0.5rem]">
        
        {screen.width < 474 ? (
          articles.map((article, index = articles.indexOf(article)) => (
            <div key={index} className='col-start-1 col-end-8 border-2 border-[#737373] rounded-md p-[0.5rem]'>
              <News
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                date={article.publishedAt}
              />
            </div>
          ))
        ) : screen.width >= 474 && screen.width < 767 ? (
          articles.map((article, index = articles.indexOf(article)) => (
            index < 9 ? (
              <div key={index} className='col-start-1 col-end-4 border-2 border-[#737373] rounded-md p-[0.5rem]'>
                <News
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  date={article.publishedAt}
                />
              </div>
            ) : (
              <div key={index} className='col-start-4 col-end-8 border-2 border-[#737373] rounded-md p-[0.5rem]'>
                <News2
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  date={article.publishedAt}
                />
              </div>
            )
          ))
        ) : (
          articles.map((article, index = articles.indexOf(article)) => (
            index < 6 ? (
              <div key={index} className='col-start-1 col-end-3 border-2 border-[#737373] rounded-md p-[0.5rem]'>
                <News
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  date={article.publishedAt}
                />
              </div>
            ) : index >= 6 && index < 12 ? (
              <div key={index} className='col-start-3 col-end-6 border-2 border-[#737373] rounded-md p-[0.5rem]'>
                <News2
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  date={article.publishedAt}
                />
              </div>
            ) : (
              <div key={index} className='col-start-6 col-end-8 border-2 border-[#737373] rounded-md p-[0.5rem]'>
                <News
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  date={article.publishedAt}
                />
              </div>
            )
          ))
        )}
  
      </div>

            <div className='w-[100%] flex justify-between my-4 text-white'>
              <button onClick={prevClick} className='rounded-md bg-[#737373] py-1 px-4 outline outline-1'>prev</button>
              <div className='rounded-full px-[1rem] pb-[0.2rem] text-center bg-[#737373] self-center'>{page}</div>
              <button onClick={nextClick} className='rounded-md bg-[#737373] py-1 px-4 outline outline-1'>next</button>
            </div>
    
    </div>
  );
}
