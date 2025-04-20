export function upperCaseFirstChar(name: string) {
  const formattedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return formattedName;
}
