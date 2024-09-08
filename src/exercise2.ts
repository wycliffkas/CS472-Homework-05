const isPrime = (n: number): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (n < 2) {
      reject(false);
    }
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) resolve(false);
    }

    resolve(true);
  });
};


const testIsPrime = async () => {
  try {
    const result = await isPrime(1);
    console.log(result)
  } catch(error) {
    console.error(error)
  }
};

testIsPrime();
