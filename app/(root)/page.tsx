import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";


export default async function Home({searchParams}) {
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {_id: 1, name: 'saidur'},
      _id: 1,
      description: 'This is a description',
      image: 'https://i.ibb.co.com/vCGLcgTg/pexels-tuurt-812264.jpg',
      category: 'Robots',
      title: 'We Robots'
    }
  ]
  const query = (await searchParams).query
  return (
    <>
  <section className="w-full  bg-[#EE2B69] min-h-[530px]  flex justify-center items-center flex-col py-10 px-6 pattern">
    <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5g">Pitch Your Startup, <br />Connect With Entrepreneurs</h1>
    <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on pitches, and Get Noticed in Virtual Competitions.</p>
    <SearchForm query = {query}></SearchForm>
  </section>
  <section className="section_container">
    <p className="text-30-semibold">
      {query ? `Search Results For ${query}`: 'All Startups'}
    </p>
    <ul className="mt-7 card_grid grid grid-cols-1 md:grid-cols-3"></ul>
      {
        posts?.length>0 ?(
          posts.map((post: StartupCardType, index: number) => <StartupCard post= {post} key={index}/>)

        ): (
          <p className="no-results">No Startups found</p>
        )
      }
  </section>
    </>
  );
}
