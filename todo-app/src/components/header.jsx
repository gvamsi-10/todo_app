import MyComponent from "./dataColumn";
import { useState } from "react";
function Header({curr}){
    const [tasks, setTasks] = useState([]);
    return (
        <>
        <div>
        <div className="header">
            <span className="header-text">
                My Projects
            </span>
        </div>
        <div style={{flexDirection:"column"}}>
        <MyComponent fieldName="To Do" fieldColor="#EBEEFC" textColor="#3659E2" tasks={tasks} setTasks={setTasks} curr={curr} />
<MyComponent fieldName="In Progress" fieldColor="#FDF2FA" textColor="#EE46BC" tasks={tasks} setTasks={setTasks}curr={curr}/>
<MyComponent fieldName="In Review" fieldColor="#EFF8FF" textColor="#3FA1E3" tasks={tasks} setTasks={setTasks} curr={curr}/>
<MyComponent fieldName="Completed" fieldColor="#E7F8E9" textColor="#12BB23"tasks={tasks} setTasks={setTasks} curr={curr}/>

        </div>
        </div>
        </>
    )
}

export default Header;