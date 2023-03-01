function oddAndEvenSum(num){

    let mainArr = num.toString().split('');
    let oddArr =[];
    let evenArr=[];

    let evenSum =0;
    let oddSum=0;

    for (const item of mainArr) {
        
        if(Number(item)%2===0){
            evenArr.push(Number(item));
        }else{
            oddArr.push(Number(item));
        }

    }
for (const item of oddArr) {
    oddSum+=item;
}

for (const item of evenArr) {

    evenSum+=item;
 
}

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}

oddAndEvenSum(3495892137259234)