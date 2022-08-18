import { getFeaturedEvents } from "../helpers/api-util";
import { Fragment } from "react";
import EventList from "../components/events/event-list";
import ResultsTitle from "../components/events/results-title";

export default function HomePage(props) {
  return (
    <Fragment>
      <ResultsTitle pageTitle="Featured Events" />
      <EventList events={props.featuredEvents} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}
