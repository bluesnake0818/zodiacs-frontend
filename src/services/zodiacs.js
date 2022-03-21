const BASE_URL = '/zodiacs'

function create(zodiac) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(zodiac)
  })
	.then(res => res.json())
}

function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {method: 'DELETE'})
  .then(res => res.json())
}

function update(zodiac) {
  return fetch(`${BASE_URL}/${zodiac._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(zodiac)
  })
	.then(res => res.json())
}

export {
	create,
  getAll,
  deleteOne,
  update,
}