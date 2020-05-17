import React from 'react';
import styled from 'styled-components';

const NotificationsList = styled.div`
    flex-grow: 2;
    border: 1px solid black;
`;

const Notifications = () => {
    return (
        <NotificationsList>
            <p>notifications...</p>
        </NotificationsList>
    )
}

export default Notifications;