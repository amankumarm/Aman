// gsap.from(".intro_illus", {opacity: 0, y: -30, duration: 0.7});
// gsap.from(".mynav", {opacity: 0, y: -30, duration: 1,delay:1});
// gsap.from("#name", {opacity: 0, x: -40, duration: 1,delay:1});
// gsap.from(".desc", {opacity: 0, y: -40, duration: 1,delay:2});
// gsap.from("#work_btn", {opacity: 0, y: -30, duration: 1,delay:2});



// class node{
//     constructor({order,stack,desc,link,img}){
//         this.order=order,
//         this.stack=stack,
//         this.desc=desc,
//         this.link=link,
//         this.img=img
//         this.next=null,
//         this.prev=null
//     }
// }

// const left_btn=document.getElementById("left_proj")
// const right_btn=document.getElementById("right_btn")

// let thinn=new node({
//     order:"01/03",
//     stack:"Stack-<br>React Node+express mongodb",
//     desc:"Thinn allows you to seamlessly track your audience with simple and easy to remember yet powerful links and provide your customers a unique tailored expeience",
//     link:"http://thinn.herokuapp.com",
//     img:"assets/img/shotsnapp-1623221328.255.png"
// })

// let hashus=new node({
//     order:"02/03",
//     stack:"Stack-<br>React Node+express mongodb",
//     desc:"Hashtag-us is a node based chat application which allows users to interact online with the people they know. ",
//     link:"https://hashtag-us.herokuapp.com/",
//     img:"assets/img/hashus.png"
// })

// let alg=new node({
//     order:"03/03",
//     stack:"Stack-<br>React Node+express mongodb",
//     desc:"Worked as an Intern on a project that aims to visualizedifferent Sorting, ML, and Graph Algorithms.Also, Users can publish algorithms that they have developed.",
//     img:"assets/img/certificate.png"
// })
// alg.prev=hashus
// alg.next=thinn
// hashus.next=alg
// hashus.prev=thinn
// thinn.prev=alg
// thinn.next=hashus





function render_changes(){
    var ord=document.getElementsByClassName("order")[0]
    var name=document.getElementsByClassName("p_n")[0]
    var stk=document.getElementsByClassName("stack")[0]
    var view=document.getElementsByClassName("view_proj")[0]
    var anc=view.getElementsByTagName('a')[0].href
    


    let count=1

    let img=["assets/img/shotsnapp-1623221328.255.png","assets/img/hashus.png","assets/img/certificate.png"]
    let desc=["Thinn allows you to seamlessly track your audience with simple and easy to remember yet powerful links and provide your customers a unique tailored expeience",
        "Hashtag-us is a node based chat application which allows users to interact online with the people they know. ",
        "Worked as an Intern on a project that aims to visualizedifferent Sorting, ML, and Graph Algorithms.Also, Users can publish algorithms that they have developed.",
        ]
    let stack="Stack-<br>React Node+express mongodb"
    let names=["Thinn","Hashtag","Algovizz"]
    let link=["http://thinn.herokuapp.com","https://hashtag-us.herokuapp.com/#/","8.8.8.8"]
    name.textContent=names[count]
    stk.innerHTML=stack
    anc.href=link[count]
}
render_changes()