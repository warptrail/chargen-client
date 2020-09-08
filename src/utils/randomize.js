export default function getRandomStats(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
