import React from "react";

export default function ActualDate(props) {
  const date = props.date;
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="lastUpdated">
      {date.toLocaleDateString(undefined, options)}
    </div>
  );
}
