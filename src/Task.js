import React from 'react';
import {connect} from "react-redux";

const Task = (props) => {
    return (
        <div className="card" >

                <div className="card-body">
                    <h5 className="card-title">{props.task.name}</h5>
                    <p className="card-text">{props.task.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.task.priority}</li>
                    <button
                        type="button"
                        className="btn btn-outline-info"
                        disabled={props.task.priority==props.priorities[props.priorities.length-1]}
                    onClick={()=>{props.changePriority(props.task._id, 1)}}
                    >↑</button>
                    <button
                        type="button"
                        className="btn btn-outline-info"
                        disabled={props.task.priority==props.priorities[0]}
                        onClick={()=>{props.changePriority(props.task._id, -1)}}
                    >↓</button>
                    <li className="list-group-item">{props.task.status}</li>

                </ul>
                <div className="card-body">
                    <button type="button" className="btn btn-outline-info">←</button>
                    <button type="button" className="btn btn-outline-danger">Delete</button>
                    <button type="button" className="btn btn-outline-warning">Edit</button>
                    <button type="button" className="btn btn-outline-info">→</button>
                </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    priorities:state.priorities

})
const mapDispatchToProps = (dispatch) => ({
    changePriority:(id, direction)=>  dispatch ({type:"CHANGE_PRIORITY", payload:{id, direction}})
})

export default connect(mapStateToProps,mapDispatchToProps )(Task);