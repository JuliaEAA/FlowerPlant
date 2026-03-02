import { useState } from 'react'

const STORAGE_KEY = 'flowerplant-my-plants'

const emptyForm = {
	name: '',
	scientificName: '',
	difficulty: '',
	sun: '',
	soil: '',
	water: '',
	care: '',
	image: ''
}

function MyPlants() {
	const [myPlants, setMyPlants] = useState(() => {
		const storedPlants = localStorage.getItem(STORAGE_KEY)
		return storedPlants ? JSON.parse(storedPlants) : []
	})
	const [formValues, setFormValues] = useState(emptyForm)
	const [editingId, setEditingId] = useState(null)
	const [isFormOpen, setIsFormOpen] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const [difficultyFilter, setDifficultyFilter] = useState('all')
	const [sunFilter, setSunFilter] = useState('all')

	const difficultyOptions = [...new Set(myPlants.map((plant) => (plant.difficulty || '').trim()).filter(Boolean))]
	const sunOptions = [...new Set(myPlants.map((plant) => (plant.sun || '').trim()).filter(Boolean))]

	const filteredPlants = myPlants.filter((plant) => {
		const searchValue = searchTerm.toLowerCase().trim()
		const matchesText =
			!searchValue ||
			plant.name?.toLowerCase().includes(searchValue) ||
			plant.scientificName?.toLowerCase().includes(searchValue) ||
			plant.soil?.toLowerCase().includes(searchValue)
		const matchesDifficulty = difficultyFilter === 'all' || (plant.difficulty || '').toLowerCase() === difficultyFilter
		const matchesSun = sunFilter === 'all' || (plant.sun || '').toLowerCase() === sunFilter
		return matchesText && matchesDifficulty && matchesSun
	})

	const persistPlants = (updatedPlants) => {
		setMyPlants(updatedPlants)
		localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPlants))
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormValues((previousValues) => ({
			...previousValues,
			[name]: value
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (!formValues.name.trim()) {
			return
		}

		if (editingId !== null) {
			const updatedPlants = myPlants.map((plant) =>
				plant.id === editingId
					? {
							...plant,
							...formValues,
							name: formValues.name.trim(),
							scientificName: formValues.scientificName.trim(),
							difficulty: formValues.difficulty.trim(),
							sun: formValues.sun.trim(),
							soil: formValues.soil.trim(),
							water: formValues.water.trim(),
							care: formValues.care.trim(),
							image: formValues.image.trim() || plant.image
						}
					: plant
			)
			persistPlants(updatedPlants)
			setEditingId(null)
			setFormValues(emptyForm)
			setIsFormOpen(false)
			return
		}

		const nextId = myPlants.length
			? Math.max(...myPlants.map((plant) => Number(plant.id) || 0)) + 1
			: 1

		const newPlant = {
			id: nextId,
			name: formValues.name.trim(),
			scientificName: formValues.scientificName.trim(),
			difficulty: formValues.difficulty.trim(),
			sun: formValues.sun.trim(),
			soil: formValues.soil.trim(),
			water: formValues.water.trim(),
			care: formValues.care.trim(),
			image: formValues.image.trim()
		}

		persistPlants([...myPlants, newPlant])
		setFormValues(emptyForm)
		setIsFormOpen(false)
	}

	const handleImageUpload = (event) => {
		const file = event.target.files?.[0]
		if (!file) {
			return
		}

		const reader = new FileReader()
		reader.onload = () => {
			setFormValues((previousValues) => ({
				...previousValues,
				image: typeof reader.result === 'string' ? reader.result : ''
			}))
		}
		reader.readAsDataURL(file)
	}

	const handleEdit = (plant) => {
		setEditingId(plant.id)
		setIsFormOpen(true)
		setFormValues({
			name: plant.name || '',
			scientificName: plant.scientificName || '',
			difficulty: plant.difficulty || '',
			sun: plant.sun || '',
			soil: plant.soil || '',
			water: plant.water || plant.care || '',
			care: plant.care || '',
			image: plant.image || ''
		})
	}

	const handleDelete = (plantId) => {
		const updatedPlants = myPlants.filter((plant) => plant.id !== plantId)
		persistPlants(updatedPlants)
		if (editingId === plantId) {
			setEditingId(null)
			setFormValues(emptyForm)
		}
	}

	const handleOpenNewCard = () => {
		setEditingId(null)
		setFormValues(emptyForm)
		setIsFormOpen(true)
	}

	return (
		<section className="my-plants-page">
			<h1>My Plants</h1>

			<div className="my-plants-filters">
				<div className="filter-field">
					<label className="filter-label" htmlFor="search-filter">Search</label>
					<input
						id="search-filter"
						type="text"
						placeholder="Name, scientific name, or soil"
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
				</div>
				<div className="filter-field">
					<label className="filter-label" htmlFor="difficulty-filter">Difficulty</label>
					<select
						id="difficulty-filter"
						value={difficultyFilter}
						onChange={(event) => setDifficultyFilter(event.target.value)}
					>
						<option value="all">All difficulties</option>
						{difficultyOptions.map((difficulty) => (
							<option key={difficulty} value={difficulty.toLowerCase()}>
								{difficulty}
							</option>
						))}
					</select>
				</div>
				<div className="filter-field">
					<label className="filter-label" htmlFor="sun-filter">Light</label>
					<select
						id="sun-filter"
						value={sunFilter}
						onChange={(event) => setSunFilter(event.target.value)}
					>
						<option value="all">All light needs</option>
						{sunOptions.map((sunValue) => (
							<option key={sunValue} value={sunValue.toLowerCase()}>
								{sunValue}
							</option>
						))}
					</select>
				</div>
				<button
					className="filter-reset"
					type="button"
					onClick={() => {
						setSearchTerm('')
						setDifficultyFilter('all')
						setSunFilter('all')
					}}
				>
					Reset Filters
				</button>
			</div>

			<div className="my-plants-add-row">
				<article
					className={`plant-card plant-form-card ${!isFormOpen ? 'add-card-closed' : ''}`}
					onClick={!isFormOpen ? handleOpenNewCard : undefined}
				>
					{!isFormOpen ? (
						<>
							<div className="add-plant-icon">＋</div>
							<h3>Add New Plant</h3>
							<p>Click to create a new plant card</p>
						</>
					) : (
						<>
							<h3 className="plant-form-title">{editingId !== null ? 'Edit Plant Card' : 'Add New Plant Card'}</h3>
							<form className="plant-form" onSubmit={handleSubmit}>
								<input
									name="name"
									placeholder="Plant name"
									value={formValues.name}
									onChange={handleChange}
									required
								/>
                                <input
                                    name="scientificName"
                                    placeholder="Scientific name (optional)"
                                    value={formValues.scientificName}
                                    onChange={handleChange}
								/>
								<input
									name="difficulty"
									placeholder="Difficulty"
									value={formValues.difficulty}
									onChange={handleChange}
								/>
								<input
									name="sun"
									placeholder="Light needs"
									value={formValues.sun}
									onChange={handleChange}
								/>
								<input
									name="soil"
									placeholder="Soil type"
									value={formValues.soil}
									onChange={handleChange}
								/>
								<textarea
									name="water"
									placeholder="Watering schedule"
									value={formValues.water}
									onChange={handleChange}
								/>
                                <textarea
                                    name="care"
                                    placeholder="Care instructions (optional)"
                                    value={formValues.care}
                                    onChange={handleChange}
                                />
								<input
									type="file"
									accept="image/*"
									onChange={handleImageUpload}
								/>
								{formValues.image && (
									<img src={formValues.image} alt="Plant preview" className="plant-form-preview" />
								)}

								<div className="plant-form-actions">
									<button type="submit">{editingId !== null ? 'Update Plant' : 'Add Plant'}</button>
									<button
										type="button"
										onClick={() => {
											setEditingId(null)
											setFormValues(emptyForm)
											setIsFormOpen(false)
										}}
									>
										Cancel
									</button>
								</div>
							</form>
						</>
					)}
				</article>
			</div>

			<div className="my-plants-grid">
				{filteredPlants.map((plant) => (
					<article className="plant-card" key={plant.id}>
						<img src={plant.image} alt={plant.name} />
						<h3>{plant.name}</h3>
						{plant.scientificName && <p className="scientific-name"><em>{plant.scientificName}</em></p>}
						{plant.difficulty && <p>Difficulty: {plant.difficulty}</p>}
						{plant.sun && <p>Sun: {plant.sun}</p>}
						{plant.soil && <p>Soil: {plant.soil}</p>}
						{plant.water && <p>Watering: {plant.water}</p>}
						{plant.care && <p>Care: {plant.care}</p>}
						<div className="plant-card-actions">
							<button type="button" onClick={() => handleEdit(plant)}>Edit</button>
							<button type="button" onClick={() => handleDelete(plant.id)}>Delete</button>
						</div>
					</article>
				))}
			</div>

			{filteredPlants.length === 0 && (
				<p>No plants match the current filters.</p>
			)}
		</section>
	)
}

export default MyPlants
