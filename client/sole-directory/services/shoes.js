export async function fetchShoes() {
  const response = await fetch("/");
  const data = await response.json();
  console.log(data);
}
