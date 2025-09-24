import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import apiService from "../../Apiservice/apiService";
import { Link } from "react-router-dom";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const AdminCalender = () => {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("month");

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await apiService.getAllReservationCalender();
        const formattedEvents = response.data.data.map((reservation) => ({
          id: reservation._id,
          title: `Car Reservation - ${reservation.car.carName}`,
          start: new Date(reservation.pickupDate),
          end: new Date(reservation.dropDate),
          allDay: true,
          resource: reservation,
        }));
        setEvents(formattedEvents);
      } catch (err) {
        console.error("Error fetching reservations:", err);
      }
    };
    fetchReservations();
  }, []);

  // Custom toolbar component
  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      toolbar.onNavigate("PREV");
    };

    const goToNext = () => {
      toolbar.onNavigate("NEXT");
    };

    const goToCurrent = () => {
      toolbar.onNavigate("TODAY");
    };

    const changeView = (viewName) => {
      toolbar.onView(viewName);
    };

    const label = () => {
      const date = toolbar.date;
      switch (toolbar.view) {
        case "month":
          return format(date, "MMMM yyyy");
        case "week":
          return `${format(startOfWeek(date), "MMM d")} - ${format(
            new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6),
            "MMM d, yyyy"
          )}`;
        case "day":
          return format(date, "MMMM d, yyyy");
        case "agenda":
          return `${format(startOfWeek(date), "MMM d")} - ${format(
            new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6),
            "MMM d, yyyy"
          )}`;
        default:
          return format(date, "MMMM yyyy");
      }
    };

    return (
      <div className="rbc-toolbar">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
          {/* Left controls */}
          <div className="d-flex align-items-center mb-2">
            <button
              className="btn btn-primary me-2"
              onClick={goToCurrent}
            >
              Today
            </button>
            <div className="btn-group me-2">
              <button
                className="btn btn-outline-secondary"
                onClick={goToBack}
              >
                ‹
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={goToNext}
              >
                ›
              </button>
            </div>
            <span className="h5 mb-0 ms-2">{label()}</span>
          </div>

          {/* View controls */}
          <div className="btn-group mb-2">
            <button
              className={`btn ${toolbar.view === "month" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => changeView("month")}
            >
              Month
            </button>
            <button
              className={`btn ${toolbar.view === "week" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => changeView("week")}
            >
              Week
            </button>
            <button
              className={`btn ${toolbar.view === "day" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => changeView("day")}
            >
              Day
            </button>
            <button
              className={`btn ${toolbar.view === "agenda" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => changeView("agenda")}
            >
              Agenda
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Custom event component
  const EventComponent = ({ event }) => (
    <div className="rbc-event-content">
      <strong>{event.title}</strong>
      <br />
      <small>
        {format(event.start, "MMM d")} - {format(event.end, "MMM d, yyyy")}
      </small>
    </div>
  );

  // Date navigation handler
  const handleNavigate = (newDate) => {
    setCurrentDate(newDate);
  };

  // View change handler
  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="page-wrapper">
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Booking Calendar</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/admin-dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Booking Calendar
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Calendar Filters */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-md-3">
                <label className="form-label">Quick Navigation</label>
                <select 
                  className="form-select"
                  value={view}
                  onChange={(e) => handleViewChange(e.target.value)}
                >
                  <option value="month">Month View</option>
                  <option value="week">Week View</option>
                  <option value="day">Day View</option>
                  <option value="agenda">Agenda View</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Jump to Month</label>
                <input
                  type="month"
                  className="form-control"
                  value={format(currentDate, "yyyy-MM")}
                  onChange={(e) => {
                    const [year, month] = e.target.value.split("-");
                    setCurrentDate(new Date(year, month - 1));
                  }}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Jump to Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={format(currentDate, "yyyy-MM-dd")}
                  onChange={(e) => setCurrentDate(new Date(e.target.value))}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Events Count</label>
                <div className="form-control bg-light">
                  {events.length} reservations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="card">
          <div className="card-body">
            <div style={{ height: 600 }}>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                date={currentDate}
                view={view}
                onNavigate={handleNavigate}
                onView={handleViewChange}
                components={{
                  toolbar: CustomToolbar,
                  event: EventComponent,
                }}
                views={["month", "week", "day", "agenda"]}
                step={60}
                showMultiDayTimes
                popup
                eventPropGetter={(event) => ({
                  className: "rbc-custom-event",
                  style: {
                    backgroundColor: "#0d6efd",
                    borderColor: "#0d6efd",
                  },
                })}
                messages={{
                  next: "Next",
                  previous: "Prev",
                  today: "Today",
                  month: "Month",
                  week: "Week",
                  day: "Day",
                  agenda: "Agenda",
                  date: "Date",
                  time: "Time",
                  event: "Event",
                  noEventsInRange: "No reservations in this range",
                }}
              />
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="card mt-4">
          <div className="card-body">
            <h6 className="mb-3">Calendar Legend</h6>
            <div className="d-flex flex-wrap gap-3">
              <div className="d-flex align-items-center">
                <div 
                  className="badge me-2" 
                  style={{ 
                    backgroundColor: "#0d6efd", 
                    width: "15px", 
                    height: "15px" 
                  }}
                ></div>
                <span>Car Reservations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add some custom CSS */}
      <style>
        {`
          .rbc-toolbar {
            display: block !important;
          }
          
          .rbc-custom-event {
            border-radius: 4px;
            padding: 2px 5px;
            font-size: 0.85em;
            color: white;
          }
          
          .rbc-event-content {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          .rbc-toolbar button {
            border: 1px solid #dee2e6;
            background: white;
            padding: 0.375rem 0.75rem;
          }
          
          .rbc-toolbar button:hover {
            background-color: #f8f9fa;
          }
          
          .rbc-toolbar button.rbc-active {
            background-color: #0d6efd;
            color: white;
            border-color: #0d6efd;
          }
        `}
      </style>
    </div>
  );
};

export default AdminCalender;