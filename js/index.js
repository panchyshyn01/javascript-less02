var n = Number(prompt('Введіть n'));

function fib(n) {
    var a = 1;
    var b = 1;
    for (var i = 1; i < n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

document.write('n=' + n + '<br>' + 'Число Фібоначчі:');
document.write(fib(n));