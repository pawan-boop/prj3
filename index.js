gsap.registerPlugin(CSSRulePlugin)
document.querySelector("#nav").addEventListener("mousemove",function(dets){
  if(dets.target.id !== "nav"){
  dets.target.style.cursor = "pointer"
   gsap.to(dets.target,{width:"100%",ease:"power4.out",duration:1})
   var rule = CSSRulePlugin.getRule("#nav"+ " " +"#"+dets.target.id +":"+"before")
   gsap.to(rule,{ease:"power4.out",delay:0.3,duration:1,cssRule:{width:"1230px"}})
   var rule1 = CSSRulePlugin.getRule("#nav"+ " " +"#"+dets.target.id +":"+"after")
   gsap.to(rule1,{ease:"power4.out",delay:0.5,duration:1,cssRule:{width:"1230px"}})
  }
})
document.querySelector("#nav").addEventListener("mouseout",function(dets){
  if(dets.target.id !== "nav"){
   var rule3 = CSSRulePlugin.getRule("#nav"+ " " +"#"+dets.target.id +":"+"after")
   gsap.to(rule3,{ease:"power4.out",delay:0.5,duration:1,cssRule:{width:"0"}})
    var rule2 = CSSRulePlugin.getRule("#nav"+ " " +"#"+dets.target.id +":"+"before")
   gsap.to(rule2,{ease:"power4.out",delay:0.7,duration:1,cssRule:{width:"0"}})
   gsap.to(dets.target,{ease:"power4.out",delay:0.9,duration:1,width:"0"})
  }
})
var state = 0;
document.querySelector("#ml").addEventListener("click",function(){
if(state ===0){

   var a1 = anime({
    targets : "#ml",
    rotate:[0,90],
    duration:2000,
    easing: 'cubicBezier(.17,.67,0,.97)',
    
  })
  var a2 = anime({
    delay: anime.stagger(1000, {start: 1000}),
    
    targets:".lines:nth-child(3)",
    rotate:[0,-60],
    duration:2000,
    easing: 'cubicBezier(.17,.67,0,.97)',
    translateX:8,
    translateY:16,
  })

  var a3 = anime({
   
    delay: anime.stagger(1000, {start: 1000}),
    targets:".lines:nth-child(2)",
    rotate:[0,60],
    duration:2000,
    easing: 'cubicBezier(.17,.67,0,.97)',
    translateX:-4,
    translateY:9,
  })
  gsap.to("#p1",{
    delay:2.5,
    onUpdate:()=>{
      document.querySelector("#main").style.overflow = "visible";
      
    

      window.scrollBy(120,0);
    },
   duration:1,
   ease:"power4.out"
   })
   

   state++;

 
}

else{

var a6 = anime({
 
  
  targets:".lines:nth-child(3)",
  rotate:[-60,0],
  duration:2000,
  easing: 'cubicBezier(.17,.67,0,.97)',
  translateY:-1,
  translateX:-1

})
var a7 = anime({
   

  targets:".lines:nth-child(2)",
  rotate:[60,0],
  duration:2000,
  easing: 'cubicBezier(.17,.67,0,.97)',
  translateY:-1,
  translateX:-1
  
})
var a8 = anime({
  delay: anime.stagger(1000, {start: 1000}),
  targets : "#ml",
  rotate:[90,0],
  duration:2000,
  easing: 'cubicBezier(.17,.67,0,.97)',
  
})
gsap.to("#p1",{
  delay:2.5,
  onUpdate:()=>{
    document.querySelector("#main").style.overflow = "visible";

    window.scrollBy(-220,0);
  },

  ease:"power4.out"
 })

state = 0;
}
})
document.querySelector("#ml").addEventListener("mousemove",function(){
  document.querySelector(".lines:nth-child(1)").style.backgroundColor = "rgb(231, 70, 170)"
  document.querySelector(".lines:nth-child(2)").style.backgroundColor = "rgb(231, 70, 170)"
  document.querySelector(".lines:nth-child(3)").style.backgroundColor = "rgb(231, 70, 170)"
})
document.querySelector("#ml").addEventListener("mouseout",function(){
  document.querySelector(".lines:nth-child(1)").style.backgroundColor = "white"
  document.querySelector(".lines:nth-child(2)").style.backgroundColor = "white"
  document.querySelector(".lines:nth-child(3)").style.backgroundColor = "white"
})
gsap.from("#ah1",{
  opacity:0,
  x:"100%",
  ease:Expo.easeInOut,
  duration:1
})

gsap.from("#bh1",{
  opacity:0,
  x:"-200%",
  ease:Expo.easeInOut,
  duration:1
})

gsap.from("#loader",{
  opacity:0,
  y:"-50%",
  ease:Expo.easeInOut,
  duration:1
})


gsap.from("#ml",{
  opacity:0,
  y:"-50%",
  ease:Expo.easeInOut,
  duration:1
})
