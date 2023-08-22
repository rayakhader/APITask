const num = 3;
export const button = document.getElementsByTagName('button')
export function createElements() {
    for (let i = 0; i < num; i++) {
        let span = document.createElement('span')
        span.innerHTML = `<img src="">
        <h4></h4>
        <h5></h5>
        <span class="skill"></span>
        <span class="skill"></span>`
        span.classList.add('card');
        document.querySelector('.container-one').appendChild(span)
    }
    for (let i = 0; i < num; i++) {
        let span = document.createElement('span')
        span.innerHTML = `<img src="">
        <h4></h4>
        <h5></h5>
        <span class="skill"></span>
        <span class="skill"></span>`
        span.classList.add('card');
        document.querySelector('.container-two').appendChild(span)
    }
}
function removeStyle(btnnum){
    button[btnnum].style.backgroundColor='white';
    button[btnnum].style.color='black';
}
export function addStyle(btnnum){
    for(let i =0 ;i<button.length;i++){
        removeStyle(i);
    }
    button[btnnum].style.backgroundColor='#6f87fc';
    button[btnnum].style.color='white';
}
export function sendRequest() {
    const type = 'users';
    const url = new URL(`https://random-data-api.com/api/v2/${type}`)
    let params = new URLSearchParams()
    params.set('size','3');
    params.set('response_type','json');
    url.search = params;
    fetchDataOne(url)
    fetchDataTwo(url)
}
function fetchDataOne(url){
    fetch(url)
        .then (res=>{
            if (!res.ok) throw new Error('Error')
            return res.json()
        })
        .then(buildContainerOne)
        .catch(err=>{
            console.error(err)
        })
}
function fetchDataTwo(url){
    fetch(url)
        .then (res=>{
            if (!res.ok) throw new Error('Error')
            return res.json()
        })
        .then(buildContainerTwo)
        .catch(err=>{
            console.error(err)
        })
}
function  buildContainerOne(data){
    let containerOne= document.querySelector('.container-one');
    containerOne.innerHTML= data.map(({first_name, last_name,gender,employment ,avatar})=>{
            return `<span class="card">
            <img src="${avatar}">
            <h4>${first_name+ ' ' +last_name}</h4>
            <h5>${gender}</h5>
            <span class="skill">${employment["key_skill"]}</span>
            <span class="skill">${employment["title"]}</span>
            </span>`
        }
    )
        .join('');

}
function buildContainerTwo(data){
    let containerTwo= document.querySelector('.container-two');
    containerTwo.innerHTML= data.map(({first_name, last_name,gender,employment,avatar})=>{
            return `<span class="card">
            <img src="${avatar}">
            <h4>${first_name + ' ' + last_name}</h4>
            <h5>${gender}</h5>
            <span class="skill">${employment["key_skill"]}</span>
            <span class="skill">${employment["title"]}</span>
            </span>`
        }
    )
        .join('');
}
