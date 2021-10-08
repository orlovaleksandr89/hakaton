export const getMemberById = (arrays, id) => {
  return arrays.find((array) => array.id.toString() === id)
}
