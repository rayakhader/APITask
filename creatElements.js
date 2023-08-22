 const num = 3 ;
for (let i =0 ;i<num;i++){
    let span = document.createElement('span')
    span.innerHTML= `<img src="">
        <h4></h4>
        <h5></h5>
        <span class="skill"></span>
        <span class="skill"></span>`
    span.classList.add('card');
    document.querySelector('.container-one').appendChild(span)
}
 for (let i =0 ;i<num;i++){
     let span = document.createElement('span')
     span.innerHTML= `<img src="">
        <h4></h4>
        <h5></h5>
        <span class="skill"></span>
        <span class="skill"></span>`
     span.classList.add('card');
     document.querySelector('.container-two').appendChild(span)
 }