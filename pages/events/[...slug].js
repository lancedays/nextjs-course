import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const year = +filterData[0];
  const month = +filterData[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return <p className="center">Invalid Filter</p>;
  }

  const events = getFilteredEvents({ year: year, month: month });

  if (!events || events.length === 0) {
    return <p className="center">No events found</p>;
  }

  return (
    <div>
      <EventList events={events} listTitle="Event Search" />
    </div>
  );
}
