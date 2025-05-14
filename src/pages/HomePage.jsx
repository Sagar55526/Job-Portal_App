import React from "react";
import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import HomeCards from "../components/HomeCards";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero
        title="this is title for hero"
        subtitle="this is subtitlte for hero"
      />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
