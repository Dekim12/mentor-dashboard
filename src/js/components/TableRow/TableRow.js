import React from 'react';
import { keyGen, defineClassName } from '../../appLogic';

import './TableRow.css';

const TableRow = ({ taskName, students, taskUrl }) => {
    const tableData = Object.keys(students).map(student => {
        const studentInfo = students[student];
        const status = studentInfo[taskName];
        return <td className={defineClassName(status)} key={keyGen()} />;
    });

    return (
        <tr className="table-row">
            <td key={keyGen()}>
                <a href={taskUrl} target="_blank" rel="noopener noreferrer">
                    {taskName}
                </a>
            </td>
            {tableData}
        </tr>
    );
};

export default TableRow;
