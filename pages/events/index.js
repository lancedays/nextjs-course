import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

export default function EventsPage(props) {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const path = `/events/${year}/${month}`;
    router.push(path);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const allEvents = await getAllEvents();
  return {
    props: { events: allEvents },
    revalidate: 60,
  };
}
