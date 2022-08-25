import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Button from "../../components/ui/button.js";
import Comments from "../../components/input/comments";

export default function EventDetailPage() {
  const router = useRouter();
  const [event, setEvent] = useState();
  const eventId = router.query.eventId;

  useEffect(() => {
    if (eventId) {
      fetch(`/api/events/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setEvent(data.event);
        });
    }
  }, [router.query]);

  if (!event) {
    return (
      <Fragment>
        <Head>
          <title>Loading...</title>
        </Head>
        <div className="center">
          <p>Loading...</p>
        </div>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}
