import Result from "@/Components/Result";
const API_KEY =process.env.API_KEY
export default async function Home({searchParams}) {
  const genere = searchParams.genere || 'fetchTrending';
  const data = await fetch(`https://api.themoviedb.org/3${genere === 'TopRated' ?'/movie/top_rated':'/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`);
  const result = await data.json();
  if(!data.ok){
    throw new Error('Failed to Fetch data');
  }
  const upDatedData = result.results;
  console.log(result);
  return (
    < >
      <div>
      <Result upDatedData={upDatedData}/>
      </div>
    </>
  );
}
