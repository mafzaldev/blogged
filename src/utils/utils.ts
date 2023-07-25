

const getCurrentDate = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const today = new Date();
    let month = monthNames[today.getMonth()];
    let day = today.getDate();
    let year = today.getFullYear();
    return `${day} ${month} ${year}`
}

const isObjectEmpty = (objectName: Object) => {
    return Object.keys(objectName).length === 0
}

export { getCurrentDate, isObjectEmpty };

