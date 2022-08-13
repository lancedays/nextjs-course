import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import { Fragment } from "react";
import ResultsTitle from "../components/events/results-title";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Fragment>
      <ResultsTitle pageTitle="Featured Events"/>
      <EventList events={featuredEvents} />
    </Fragment>
  );
}
