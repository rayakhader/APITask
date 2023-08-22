import * as fun from "./usageFunctions.js";
fun.createElements();
window.addEventListener('load',()=>{
    fun.addStyle(1)
    fun.sendRequest()
})
for (let i= 0 ;i< fun.button.length;i++) {
    fun.button[i].addEventListener('click', () => {
        fun.addStyle(i)
    })
}