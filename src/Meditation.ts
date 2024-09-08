class Meditation {
  count: number;

  constructor(count: number) {
    this.count = count;
  }


  start(): void {
      const intervalId = setInterval(() => {
        console.log(this.count);
        this.count -= 1;

        if(this.count == 0) {
          clearInterval(intervalId);
          console.log(`Jay Guru Dev`);
        }
      }, 1000)
  }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);
