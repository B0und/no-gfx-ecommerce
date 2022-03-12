const fetchGraphicsCards = async () => {
  const res = await fetch(
    'https://gfx-backend.herokuapp.com/api/products?populate=*'
  )
  return res.json()
}
export default fetchGraphicsCards

// http://localhost:1337/api/graphics-cards?filters[developer][$eq]=nvidia

// http://localhost:1337/api/developers?fields[0]=name

// https://gfx-backend.herokuapp.com/api/products?pagination[page]=1&pagination[pageSize]=5