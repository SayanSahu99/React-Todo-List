import React, { Component } from 'react'
import { Badge } from 'reactstrap'

export default class TaskCompleted extends Component {
    
    render() {
        const { items, striked } = this.props;
        return (
           <div>
                {items.length !== 0 && 
                <div className="row justify-content-center mt-5">
                    <Badge color={items.length === striked.length ? "success" : "danger"} className="badge-pill">
                            <span className="text-capitalize mx-2">tasks completed</span>{`${striked.length} / ${items.length}`}
                    </Badge> 
                </div> } 
            </div>
        )
    }
}
