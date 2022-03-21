import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function EditZodiac(props) {
	const location = useLocation()
  // console.log(location)
	
	const [formData, setFormData] = useState(location.state.zodiac)
	const formElement = useRef()
	const [validForm, setValidForm] = useState(true)
	
	const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}
	
	useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])
	
	const handleSubmit = evt => {
		evt.preventDefault()
		props.handleUpdateZodiac(formData)
	}

	return (
		<>
			<h1>Edit Zodiac</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Zodiac's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Zodiac's Breed (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="breed-input"
						name="breed"
						value={formData.breed}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Zodiac's Age
					</label>
					<input 
						type="number"
						className="form-control"
						id="age-input"
						name="age"
						value={formData.age}
						onChange={handleChange}
					/>
				</div>
				<div className="d-grid mb-3">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
						disabled={!validForm}
					>
						Save Zodiac
					</button>
				</div>
        <div className="d-grid">
					<Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
			</form>
		</>
	)
}

export default EditZodiac