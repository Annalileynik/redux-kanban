import Column from "./Column";
import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from "react-redux";

function App(props) {
    return (
        <div>
            <h1>{props.appName}</h1>

            <button type="button" className="btn btn-outline-info"> Create Task</button>
            <div className="container">
                <div className="row align-items-start">
                    {props.statuses.map(status=>
                    <Column
                    key={status._id}
                    status={status}
                    />)}
                </div>
            </div>
            </div>
            );
            }

            const mapStateToProps = (state) => ({
            appName:state.appName,
            statuses:state.statuses
        })
            export default connect(mapStateToProps)(App);
