export function kgToLbs(kg: number) {
  const convert = kg * 2.20462;
  return (convert / 10).toFixed(1);
}
