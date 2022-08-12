import EventItem from "./event-item";
import styles from "./event-list.module.css";
export default function EventList(props) {
  const { events, listTitle } = props;
  return (
    <div>
      <h1 className={styles.listTitle}>{listTitle}</h1>
      <ul className={styles.list}>
        {events.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
    </div>
  );
}
