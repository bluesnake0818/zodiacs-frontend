import { useState } from "react"

function AddZodiac(props) {
  const [formData, setFormData] = useState({
		name: '',
		breed: '',
		age: 0
	})

  const handleChange = evt => {
		// console.log(evt)
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

	return (
		<>
			<h1>Add Zodiac</h1>
			<form autoComplete="off">
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
						required
            onChange={handleChange}
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
						required
            onChange={handleChange}
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
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Zodiac
					</button>
				</div>
			</form>
		</>
	)
}

export default AddZodiac