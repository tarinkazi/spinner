let i = 100;
let array = ['\r|   ','\r|   ','\r/   ','\r-   ','\r\\   ']




for(let spin of array) {
  setTimeout(() => {
    process.stdout.write('spin');
  }, i += 200);
}
