import { getFilteredEvents } from "../../helpers/api-util";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

export default function FilteredEventsPage(props) {
  const { events } = props;
  const date = new Date(props.date.year, props.date.month - 1);

  if (props.hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Invalid Filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">No events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={events} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;
  const filteredEvents = await getFilteredEvents({ year: year, month: month });
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
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      events: filteredEvents,
      date: {
        year: year,
        month: month,
      },
    },
  };
}
