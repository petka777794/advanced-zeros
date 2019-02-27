module.exports =  function getZerosCount(number, base) {
  // if (base == 10) {
  //   let zerosNumber = 0;

  //   while (number > 0) {
  //     number = Math.floor(number / 5);

  //     zerosNumber += number;
  //   }

  //   return zerosNumber;
  // }

  let i, j, p, c, noz, k;

  noz = number;
  j = base;

  for (i = 2; i <= base; i++) {
    if (j % i == 0) {
      p = 0;

      while (j % i == 0) {
        p++;
        j /= i;
      }

      c = 0;
      k = number;

      while (k / i > 0) {
        k = Math.floor(k / i);
        c += k;
      }

      noz = Math.min(noz, Math.floor(c / p));
    }
  }

  return noz;
};


// getZerosCount(10, 10);