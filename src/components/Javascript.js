import React from 'react'

const Javascript = () => {
    let a;
    let date;
    let time;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setInterval(() => {
        a = new Date();
        date = a.toLocaleDateString(undefined, options);
        time = a.getHours() + ':' + a.getMinutes() + ":" + a.getSeconds();
        document.getElementById('root').innerHTML = date + "<br> " + time;
    }, 1000)

    return (
        <div>
            <h2>Javascript</h2>
            <h2>`Current time is : ${setInterval}`</h2>

        </div>
    )
}

export default Javascript