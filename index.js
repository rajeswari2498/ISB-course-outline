// $(document).ready(function(){
//     $.getJSON("_hierarchy.json", function(data){
//         console.log(data)

//         $('.children').html(data.children);
//         $('.children').html(data.children);
//         $('.children').html(data.children);
//     }).fail(function(){
//         console.log("Check your code")
//     })
// })


const root = document.getElementById('root');

//fetching

fetch('./_hierarchy.json').then(res=> res.json()).then(data => data.children.map(item=>{
    //map chesi titles extract cheyali at the same time you have to focus on objects
    if(item.children.length>0){
        item.children.map(data=>{
            root.innerHTML+=`<h2>${data.title}</h2>`
        })
    }
    root.innerHTML+=`<h1>${item.title}</h1>`;
}))