import { getFeaturedEvents } from "../helpers/api-util";
import { Fragment } from "react";
import Head from "next/head";
import EventList from "../components/events/event-list";
import ResultsTitle from "../components/events/results-title";
import NewsletterRegistration from "../components/input/newsletter-registration";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Featured Events</title>
      </Head>
      <ResultsTitle pageTitle="Featured Events" />
      <NewsletterRegistration />
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
    revalidate: 60,
  };
}
