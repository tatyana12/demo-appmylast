import React, { Component } from 'react';

import data from './events.json';

class Two extends Component {
        render () {
                return (
                        <div>
                                {
                                        data.map(function(people) {
                                                // assuming if you want people with
                                                // id=1 only on page 1
                                                if (people.id === 2) {
                                                        return (
                                                                <ul>
                  <li>Name: {people.name}</li>
                  <li>Relationship: {people.presenter}</li>
                  <li>Like/hate: {people.like}</li>
                  <li>Favorite color: {people.color}</li>
                  <li>Birthplace: {people.birthinfo}</li>
                  Date: {people.date}<br></br>
                  Time: {people.time}

                </ul>
                                                        )
                                                }
                                        })
                                }
                        </div>
                )
        }
}

export default Two;



