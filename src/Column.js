import React from 'react';
import {connect} from "react-redux";
import Task from "./Task";

const Column = (props) => {
    return (

            <div className="col">
                <h3>{props.status.title}</h3>
                {props.tasks.filter(el=>
                    props.status.title===el.status).map(el=>
                <Task
                key={el._id}
                task={el}/>)}
            </div>

    );
};
const mapStateToProps = state=>({
    tasks:state.tasks
})
export default connect(mapStateToProps)(Column);