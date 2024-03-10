const React = require('react');

function Room(props) {
    return(
        <div className="row">
            <div className="col-md-4">
                {/* Check if props.room.imageurls exists before rendering */}
                {props.room.imageurls && props.room.imageurls.length > 0 && (
                    <img src={props.room.imageurls[0]} className='smallimg' alt="Room"/>
                )}
            </div>
            <div className="col-md-7">
                {/* Add other room details here */}
                {/* Display room name if available */}
                {props.room.name && <h1>{props.room.name}</h1>}
            </div>
        </div>
    )
}

export default Room;
