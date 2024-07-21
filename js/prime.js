var n =59
// 1 to 24
// divisibe by 1 and 24 only
var divisible_count = 0
for (i = 1; i <= n; i++) {
    if (n % i == 0) {
        divisible_count++
    }
}

if (divisible_count == 2) {
    console.log(n, "is prime numebr")
}
else {
    console.log(n, 'is not a prime numebr')
}