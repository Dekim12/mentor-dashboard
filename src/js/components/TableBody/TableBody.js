import React from 'react';
import { TableRow } from '../../components';
import { keyGen } from '../../appLogic';

import './TableBody.css';

const TableBody = ({ allTasks, students }) => {
    const generateRows = (tasks, students) =>
        tasks.map(taskName => (
            <TableRow
                key={keyGen()}
                taskName={taskName}
                students={students}
                taskUrl={allTasks[taskName].taskLink}
            />
        ));

    const rows = generateRows(Object.keys(allTasks), students);

    return <tbody>{rows}</tbody>;
};

export default TableBody;
