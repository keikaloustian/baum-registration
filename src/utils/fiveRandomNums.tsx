export default function fiveRandomNumsBetween(
  min: number,
  max: number
): number[] {
  const randomNumbers: number[] = [];

  while (randomNumbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
}
