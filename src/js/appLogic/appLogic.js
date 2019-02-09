const STATUSES = {
    checked: 'checked',
    checking: 'checking',
    'in progress': 'in-progress',
    todo: 'to-do',
    'not done': 'not-done'
};

let key = 0;
export const keyGen = () => {
    key += 1;
    return key;
};

export const fetchData = async addData => {
    const response = await fetch(
        'https://mentor-dashboard-server.herokuapp.com'
    );
    const data = await response.json();
    addData(data);
};

export const isNameExist = (name, data) => {
    const lowerName = name.toLowerCase();
    if (data.mentors[lowerName]) {
        localStorage.setItem('mentorName', name);
        return true;
    } else {
        return false;
    }
};

export const selectData = (mentorName, data) => {
    const requiredData = {};
    requiredData.tasks = Object.assign(data.tasks);
    const students = data.mentors[mentorName].students;
    requiredData.studentsResults = {};
    students.forEach(student => {
        requiredData.studentsResults[student] = data.students[student];
    });
    return requiredData;
};

export const defineClassName = status => STATUSES[status];
