//dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
//actions
import { deleteEvent} from '../actions'

class EventShow extends Component {

    

    render() {
        const { event, history } = this.props;
        
        return (
            <div className="container-fluid text-center">
                <h1>Name: {event.name}</h1>
                <h1>Location: {event.location}</h1>
                <h1>Date: {event.date}</h1>
                <h1>Time: {event.time}</h1>
            
                <ButtonGroup>
                    <Button className="btn btn-outline-danger" onClick={() => this.props.deleteEvent(event.id, history) }>
                        <span className="glyphicon glyphicon-remove-circle"></span> Delete Event
                    </Button>

                    <Button className="btn btn-outline-secondary">
                        <Link key={event.id} to={`/events/${event.id}/edit`}>
                            <span className="glyphicon glyphicon-pencil"></span> Edit Event
                        </Link>
                    </Button>
                </ButtonGroup>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // debugger

    const id = +ownProps.match.params.showId;
    const event = state.events.events.find(event => event.id === id) || {};
    
    return {
        event: event
    }
}

export default connect(mapStateToProps, {deleteEvent})(EventShow);