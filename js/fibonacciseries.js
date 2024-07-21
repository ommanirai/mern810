var a = 0
var b = 1
var n = 8
// 0 1 1 2 3 5 8 13
if(n==1){
    console.log(a)
}
else if(n==2){
    console.log(a)
    console.log(b)
}
else{
    console.log(a)
    console.log(b)
    for(i=1;i<=n-2;i++){
        c = a + b;
        a = b
        b = c
        console.log(c)
    }
}
