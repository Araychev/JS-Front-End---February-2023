function charInRange(a,b){
 

    let aAskii =a.charCodeAt(0)
    let bAskii =b.charCodeAt(0)
     arr=[];

    output='';

    if(aAskii<bAskii){
     for (let index = aAskii; index < bAskii-1; index++) {
        
        arr.push(String.fromCharCode(index+1))
 
    }
    }else{
        for (let index = bAskii; index < aAskii-1; index++) {
        
            arr.push(String.fromCharCode(index+1))
        }
    }

    for (let numer of arr) {
        output += `${numer} `;
      }
  
      console.log(output)
    
}

charInRange('C',
'#')