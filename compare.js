/*

Given two strings s and t, which represents a sequence of keystrokes,
where # denotes a backspace, return whether or not the sequences produce
the same result.
Ex: Given the following strings...
s = "ABC#", t = "CD##AB", return true
s = "como#pur#ter", t = "computer", return true
s = "cof#dim#ng", t = "code", return false

*/

let s = "A8#B"
let t = "A7#BB#5"

function compare(str1, str2){
  
  let string1 = []
  let string2 = []
  
  s.split("").forEach((el, index)=>{
    
    if(el=="#"||s[index+1]=="#"){
      return
    }else{
      string1.push(el)  
    }
    
  })
  t.split("").forEach((el, index)=>{
    
    if(el=="#"||t[index+1]=="#"){
      return
    }else{
      string2.push(el)  
    }
    
  })
  
  return string2.join("")==string1.join("")
  
}


console.log(s,"--compare-to-->",t,"---->",compare(s, t));
