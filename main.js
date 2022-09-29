const email=prompt("Enter the E-mailID")
const letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers=['0','1','2','3','4','5','6','7','8','9','10']
var string=[];
var specialchar=[]
for(let i=0;i<email.length;i++){
if(letters.includes(email[i])|| numbers.includes(email[i])){
    string.push(email[i])
}else{
    specialchar.push(email[i])
}        
}
  
    console.log(string);
    console.log(specialchar);

