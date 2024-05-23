import Card from '@/Components/Card';
import Result from '@/Components/Result';
import React from 'react'

const page =async({params}) => {
    const term = params.searchTerm;
    console.log(term);
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${term}&language=en-US&page=1&include_adult=false`);
    const data = await res.json();
    console.log(data);
    const upDatedData = data.results;
  return (
    <div>
        <Result upDatedData={upDatedData}/>
    </div>
  )
}

export default page