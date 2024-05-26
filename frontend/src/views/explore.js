import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './explore.css';

const Explore = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const person_name = localStorage.getItem('username');
        if (!person_name) {
            setError('No username found in local storage');
            setLoading(false);
            return;
        }

        fetch('http://localhost:8000/obtain_info_for_activities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ person_name }),
        })
        .then(response => response.json())
        .then(userInfo => {
            console.log('userInfo:', userInfo); // Check the format of userInfo
            if (Array.isArray(userInfo) && userInfo.length > 0 && Array.isArray(userInfo[0])) {
                // Extract values using array indexing
                const age = userInfo[0][0];
                const work = userInfo[0][1];
                const interest = userInfo[0][2];

                return fetch('http://localhost:8000/find_activities', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ age, work, interest }),
                });
            } else {
                throw new Error('Invalid userInfo format');
            }
        })
        .then(response => response.json())
        .then(activitiesData => {
            setActivities(activitiesData);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error:', error);
            setError('Error fetching data');
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <Helmet>
                <style>{`
                    /* Nice purple background for the page */
                    body {
                        background-color: #8e44ad; /* Purple shade */
                        font-family: Arial, sans-serif;
                    }

                    /* Style for activity blocks */
                    .activity {
                        background-color: #3498db; /* Light blue shade */
                        border: 1px solid #3498db; /* Blue shade */
                        border-radius: 5px;
                        padding: 15px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }

                    /* Style for activity title */
                    .activity-title {
                        font-weight: bold;
                        margin-bottom: 5px;
                        color: #fff; /* Text color */
                    }

                    /* Style for activity description */
                    .activity-description {
                        color: #eee; /* Text color */
                        margin-bottom: 10px;
                    }

                    /* Hover effect */
                    .activity:hover {
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        transform: translateY(-2px);
                        transition: box-shadow 0.3s ease, transform 0.3s ease;
                    }

                `}</style>
            </Helmet>
            <h1>Recommended Activities</h1>
            <div id="activities-container">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {activities.length > 0 && activities.map((activity, index) => (
                    <div key={index} className="activity">
                        <div className="activity-title">{activity[0] || 'Untitled Activity'}</div>
                        <div className="activity-description">{activity[1] || 'No description available.'}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;
