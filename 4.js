const intervalId = function (a, b) {
  timer = setInterval(function () {
      if (a <= b) {
          console.log(a)
          a++;
      } else {
          clearInterval(timer)
      }
  }, 1000);
}
sum(5, 15);