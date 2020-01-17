export function getFormDataFromIds(formEls) {
  return Array.from(formEls)
    .filter(element => element.id)
    .map(({ id, value }) => ({ [id]: value }))
    .reduce((accumulator, data) => ({ ...accumulator, ...data }));
}
