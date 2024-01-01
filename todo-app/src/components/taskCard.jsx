

function TaskCard({taskname , startdate , enddate , theme , textcolor}) {
  
  return (
    <div className="task-card">
        <div className="card-name" >
{
  taskname
}        </div>
        <div className="date">
        <div className="date-container">
            <span className="date-head">
Start date
            </span>
            <span className="date-value" style={{background:theme , color:textcolor}}>
            {startdate}
            </span>
        </div>
        <div className="date-container">
            <span className="date-head">
            Deadline            </span>
            <span className="date-value" style={{background:theme, color:textcolor}}>
           {enddate}
            </span>
        </div>
        </div>
    </div>
  );
}

export default TaskCard;
