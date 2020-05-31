function calculateAge(userDate, name){
    let now = new Date()

    let age = now.getFullYear - userDate.getFullYear;
    if(now.getFullYear < userDate.getFullYear) age--;

    let month = now.getMonth - userDate.getMonth;
    let day = now.getDay - userDate.getDay;

    return {
        name,
        age,
        month,
        day
    }
}

export default calculateAge;