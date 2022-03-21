import { Link } from 'react-router-dom'

function ZodiacCard({zodiac, randDogImgId, handleDeleteZodiac}) {
  return(
    <div className="card">
      <img 
        src={`https://picsum.photos/id/${randDogImgId}/640/480`} 
        alt="A happy puppy"
        className="card-img-top" 
      />
      <div className="card-body">
        <h2 className="card-text">{zodiac.name}</h2>
        <p className="card-text">A {zodiac.age}-year-old {zodiac.breed}</p>
      </div>
      <div className="card-footer">
        <Link
          className='btn btn-sm btn-warning'
          to='/edit'
          state={{zodiac}}
        >
          Edit
        </Link>
        <button 
          className="btn btn-sm btn-danger m-left"
          onClick={() => handleDeleteZodiac(zodiac._id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ZodiacCard