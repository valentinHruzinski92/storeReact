import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default function Categories({categories,...props}) {
    return(
        <div>
            {this.props.location.query.id}
        </div>
    );
}