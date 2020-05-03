import React from "react";

const Notifications = (props) => {
  const { notifications } = props;
  console.log(notifications);
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map((item) => {
                return (
                  <li key={item.id}>
                    <span className="black-text">{item.user} </span>
                    <span className="purple-text">{item.content}</span>
                    <div className="pink-text text-lighten-2">
                      {item.time.toDate().toString()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
