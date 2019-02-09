import React from 'react';
import { TableHead, TableBody, InfoPanel } from '../../components';
import { selectData } from '../../appLogic';

import './ResultsTable.css';

const ResultsTable = ({ mentorName, data }) => {
    const requiredData = selectData(mentorName, data);
    const students = Object.keys(requiredData.studentsResults);

    return (
        <article className="search-content">
            <table className="result-table">
                <TableHead mentorName={mentorName} students={students} />
                <TableBody
                    allTasks={requiredData.tasks}
                    students={requiredData.studentsResults}
                />
            </table>
            <InfoPanel />
        </article>
    );
};

export default ResultsTable;
