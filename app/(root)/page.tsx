import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query: string }>
}) {
  const query = (await searchParams).query;
  

  return (
    <>
    <section className="pink_container">
       <h1 className="heading">Pitch Your Startup, <br/> Connect With Entrepeuner
       </h1>

       <p className="sub-heading !max-w-3-xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
       </p>
      
    <SearchForm  query={query} />
       
    </section>

    </>
  );
}