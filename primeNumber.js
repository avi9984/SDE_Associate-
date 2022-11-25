function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return x > 1;
}

function nextPrime(x) {
  for (let i = x + 1; ; i++) {
    if (isPrime(i)) return i;
  }
}

function prime(x) {
  if (isPrime(x)) {
    console.log(`${x} is a prime number`);
    console.log(`Next prime number after ${x} is ${nextPrime(x)}`);
  } else {
    console.log(`${x} is not a prime number`);
  }
}
prime(3);
