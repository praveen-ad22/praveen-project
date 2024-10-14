const input=document.getElementById("input-el")
let leadstorage=[]
const inputbtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const leadsfromlocalstorage=JSON.parse(localStorage.getItem("leadstorage"))
const delel=document.getElementById("del-el")
const tabbtn=document.getElementById("tab-btn")

delel.addEventListener("dblclick",function(){
    localStorage.clear()
    leadstorage.length=0

    render(leadstorage)
})

tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    leadstorage.push(tabs[0].url)
    localStorage.setItem("leadstorage",JSON.stringify(leadstorage))
    render(leadstorage)
    })
   
    
})

if(leadsfromlocalstorage){
    leadstorage=leadsfromlocalstorage
    render(leadstorage)
}

inputbtn.addEventListener("click",function(){
    leadstorage.push(input.value)
    input.value=""
  leadstorage=JSON.stringify(leadstorage)
  localStorage.setItem("leadstorage",leadstorage)
  leadstorage=JSON.parse(leadstorage)

 render(leadstorage)

})
function render(leads){
let listItems=""
for(let i=0;i<leads.length;i++){
   // listItems+="<li><a target='-blank' href='"+leadstorage[i] +"'>"+leadstorage[i]+"</a></li>"
    
    listItems+=`<li>
    <a target='_blank' href='${leads[i]}'> ${leads[i]} </a>
    </li>`
}

ulEl.innerHTML=listItems
}
