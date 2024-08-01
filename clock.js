setInterval(()=>{
    display_Clock ()
},1)

let display_Clock = ()=>{
    let date = new Date()
    hrs.innerHTML = `${date.getHours()}`;
    min.innerHTML = `${date.getMinutes()}`;
    sec.innerHTML = `${date.getSeconds()}`;
    msec.innerHTML = `${date.getMilliseconds()}`;
}