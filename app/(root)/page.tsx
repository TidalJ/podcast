"use client";
import PodcastCard from "@/components/PodcastCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";
import { podcastData } from "@/constants";

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  if (!trendingPodcasts) return <LoaderSpinner />;

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {trendingPodcasts?.map(
            ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
              <PodcastCard
                key={_id}
                imgUrl={imageUrl as string}
                title={podcastTitle}
                description={podcastDescription}
                podcastId={_id}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;

// const Home = () => {
//   const tasks = useQuery(api.tasks.get);

//   return (
//     <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
//       <section className="flex flex-col gap-5">
//         <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

//         <div className="flex flex-col min-h-screen items-center justify-between text-white-1 p-24">
//           {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
//         </div>

//         <div className="podcast_grid">
//           {podcastData.map(({ id, title, description, imgURL }) => (
//             <PodcastCard
//               key={id}
//               imgUrl={imgURL}
//               title={title}
//               description={description}
//               podcastId={id}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
