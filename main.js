var outer=document.getElementsByClassName('outer')[0]
var mobile=document.getElementsByClassName('mobile')[0]
if( window.innerWidth <= 900 ){
    outer.style.display='none'
    mobile.style.display='block'
}