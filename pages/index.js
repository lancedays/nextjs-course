import { getFeaturedEvents } from "../helpers/api-util";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import EventList from "../components/events/event-list";
import ResultsTitle from "../components/events/results-title";
import NewsletterRegistration from "../components/input/newsletter-registration";

export default function HomePage(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (events) {
      fetch("/api/events")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setEvents(data.events);
        });
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Featured Events</title>
      </Head>
      <ResultsTitle pageTitle="Featured Events" />
      <NewsletterRegistration />
      <EventList events={events} />
    </Fragment>
  );
}
