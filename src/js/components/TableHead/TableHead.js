import React from 'react';
import { keyGen } from '../../appLogic';

import './TableHead.css';

const TableHead = ({ students }) => {
    const generateElements = () =>
        students.map(elem => (
            <th key={keyGen()}>
                <a
                    href={`https://github.com/${elem}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {elem}
                </a>
            </th>
        ));

    return (
        <thead className="students-name">
            <tr>
                <th key={keyGen()} />
                {generateElements()}
            </tr>
        </thead>
    );
};

export default TableHead;
