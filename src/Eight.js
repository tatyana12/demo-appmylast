import React, { Component } from 'react';

import data from './events.json';

class Eight extends Component {
        render () {
                return (
                        <div>
                                {
                                        data.map(function(people) {
                                                // assuming if you want people with
                                                // id=1 only on page 1
                                                if (people.id === 8) {
                                                        return (
                                                                <ul>
                  <li>Name: {people.name}</li>
                  <li>Relationship: {people.presenter}</li>
                  <li>Room: {people.room}</li>
                  <li>Like/hate: {people.like}</li>
                  <li>Sumary: {people.summary}</li>
                  <li>Date: {people.date}</li><br>
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

export default Eight;


