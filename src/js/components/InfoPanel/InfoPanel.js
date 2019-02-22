import React from 'react';

import './InfoPanel.css';

const InfoPanel = () => (
    <article className="info-panel">
        <h2>Tasks status</h2>
        <ul className="status-list">
            <li>
                <div className="checked" />- checked
            </li>
            <li>
                <div className="checking" />- checking
            </li>
            <li>
                <div className="in-progress" />- in progress
            </li>
            <li>
                <div className="not-done" />- not done
            </li>
            <li>
                <div className="to-do" />- will be
            </li>
        </ul>
    </article>
);

export default InfoPanel;
