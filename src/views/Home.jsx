import { useState } from 'react'
import plant1 from '../assets/plant1.jpg'
import plant2 from '../assets/plant2.jpg'

const STORAGE_KEY = 'flowerplant-my-plants'

const plantLibrary = [
    { id: 1, 
    name: 'Aloe Vera', 
    scientificName: 'Aloe barbadensis Miller',
    difficulty: 'Easy',
    sun: 'Full to bright light', 
    water: 'Water every 3 weeks, more in summer; ensure good drainage.',
    soil: 'Use a well-draining cactus or succulent mix.',
    image: 'https://media.istockphoto.com/id/2206960261/photo/aloe-vera-plants.jpg?s=2048x2048&w=is&k=20&c=3LXPt_epr_8X2mECVH57EbD8dcYe_wxqHta-Xlkn2xk=' },

    { id: 2, 
    name: 'African Violet', 
    scientificName: 'Saintpaulia',
    difficulty: 'Moderate',
    sun: 'Bright indirect light',
    water: 'Keep soil evenly moist.', 
    soil: 'Use a light, well-draining potting mix formulated for African violets.',
    image: 'https://media.istockphoto.com/id/807388144/photo/violet-saintpaulias-flowers.jpg?s=2048x2048&w=is&k=20&c=3X5RQAMyUy9D2XzXgNx_u2Bg6DnsYPWfUcyYY305EWk=' },

    { id: 3, 
    name: 'Fiddle Leaf Fig', 
    scientificName: 'Ficus lyrata',
    difficulty: 'Moderate',
    sun: 'Bright light',
    water: 'Water when top 2 inches of soil are dry.', 
    soil: 'Use a well-draining potting mix rich in organic matter.',
    image: 'https://media.istockphoto.com/id/1155459956/photo/big-fiddle-leaf-fig-tree-in-stylish-modern-pot-near-kitchen-furniture-ficus-lyrata-leaves.jpg?s=2048x2048&w=is&k=20&c=5R0mN_E8WuwBlRS-CsJkXbWVoUdL7RqZLuG5vu_2g6c=' },

    { id: 4, 
    name: 'Monstera', 
    scientificName: 'Monstera deliciosa',
    difficulty: 'Easy',
    sun: 'Bright indirect light', 
    water: 'Water when top 1-2 inches of soil are dry.',
    soil: 'Use a well-draining potting mix with peat moss and perlite.',
    image: 'https://media.istockphoto.com/id/1441770076/photo/interior-of-cozy-home-garden-with-fresh-green-monstera-houseplant.jpg?s=2048x2048&w=is&k=20&c=3EJSBd_oF6BdF3XLNIWoAv-uf3hRYIQUHPa0mnkUrxQ=' },
  
    { id: 5, 
    name: 'Moth Orchid', 
    scientificName: 'Phalaenopsis',
    difficulty: 'Moderate',
    sun: 'Bright indirect light',
    water: 'Water when potting mix is dry to the touch.', 
    soil: 'Use a well-draining orchid mix.',
    image: 'https://media.istockphoto.com/id/2154854420/photo/phalaenopsis-mini-stands-in-a-white-pot-on-a-shelf-near-the-window.jpg?s=2048x2048&w=is&k=20&c=4uo9SFAuVyg_cKxp34cu7xxKnVuVh8K668B1PA7FwRY=' },

    { id: 6, 
    name: 'Philodendron', 
    scientificName: 'Philodendron hederaceum',
    difficulty: 'Easy',
    sun: 'Medium to bright light',
    water: 'Keep soil slightly moist.', 
    soil: 'Use a well-draining potting mix.',
    image: 'https://media.istockphoto.com/id/1399358002/photo/lush-topical-philodendron-verrucosum-houseplant.jpg?s=2048x2048&w=is&k=20&c=o-o5fgHchFeRQRkndOI8TQFEHFWCQQwa_ZJaNUSr9sA=' },

    { id: 7, 
    name: 'Pink Princess Philodendron', 
    scientificName: 'Philodendron erubescens',
    difficulty: 'Moderate',
    sun: 'Bright indirect light',
    water: 'Water when top inch of soil is dry; avoid letting it dry out completely.', 
    soil: 'Use a well-draining potting mix.', 
    image: 'https://media.istockphoto.com/id/2258671102/photo/plant-with-pink-and-green-leaves-in-a-pot-sits-on-a-windowsill-during-daylight.jpg?s=2048x2048&w=is&k=20&c=rw2hY15zSGsxqWYEUGWLAAeJVDcJecFu6aahtDa4cjk=' },

    { id: 8, 
    name: 'Pothos', 
    scientificName: 'Epipremnum aureum',
    difficulty: 'Easy',
    sun: 'Medium light',
    water: 'Water when top inch of soil feels dry to the touch.', 
    soil: 'Use a well-draining potting mix.',
    image: 'https://media.istockphoto.com/id/1320269359/photo/tropical-epipremnum-aureum-marble-queen-pothos-houseplant-in-flower-pot.jpg?s=2048x2048&w=is&k=20&c=0GRZPrD4pY8k5nyEExvkyEU110EKLszobhq2i9xG6js=' },

    { id: 9, 
    name: 'Spider Plant', 
    scientificName: 'Chlorophytum comosum',
    difficulty: 'Easy',
    sun: 'Bright indirect light',
    water: 'water when top soil dries out; avoid overwatering to prevent root rot.', 
    soil: 'Use a well-draining potting mix.',
    image: 'https://media.istockphoto.com/id/2192648024/photo/chlorophytum-comosum.jpg?s=2048x2048&w=is&k=20&c=sTBYKYKhmLf9L2IZyFHQlUUNVM1xlVT-dH4wu5fQ2Ho=' },

  { id: 10, 
    name: 'Snake Plant', 
    scientificName: 'Sansevieria trifasciata',
    difficulty: 'Easy',
    sun: 'Low to bright light',
    water: 'Allow soil to dry completely between waterings.',
    soil: 'Use a well-draining cactus or succulent mix.',
    image: 'https://media.istockphoto.com/id/1268045137/photo/potted-snake-plants-inside-a-beautiful-new-flat-or-apartment.jpg?s=2048x2048&w=is&k=20&c=IKLOQOW7CwmrxdhzBU2vwHR20EY6rLdmBhonfSM0tKk=' },

  { id: 11, 
    name: 'String of Hearts', 
    scientificName: 'Ceropegia woodii',
    difficulty: 'Easy',
    sun: 'Bright indirect light',
    water: 'Water when soil is dry.', 
    soil: 'Use a well-draining potting mix with perlite.',
    image: 'https://media.istockphoto.com/id/1750118294/photo/ceropegia-woodii-houseplant-with-long-heart-shaped-leaves-in-terracotta-pot-at-sunlight.jpg?s=2048x2048&w=is&k=20&c=GCv65B4MnPef2zoTrkfy4Jz1Jm6ePIujIAOQ927MTqo=' },

  { id: 12, 
    name: 'ZZ Plant', 
    scientificName: 'Zamioculcas zamiifolia',
    difficulty: 'Easy',
    sun: 'Low to bright light',
    water: 'Allow soil to dry completely between waterings.',
    soil: 'Use a well-draining potting mix.',
    image: 'https://media.istockphoto.com/id/2199455412/photo/zamioculcas-zamiifolia-plant-in-white-flower-pot-on-the-wooden-table-against-the-white-brick.jpg?s=2048x2048&w=is&k=20&c=QZSf6iBbAmZCnl1mvYC5LgMd1SzY8RQZmPuP8_gu_Ac='},

  ]


function Home() {
  const [savedPlants, setSavedPlants] = useState(() => {
    const storedPlants = localStorage.getItem(STORAGE_KEY)
    return storedPlants ? JSON.parse(storedPlants) : []
  })

  const toggleMyPlant = (plant) => {
    const isAlreadyAdded = savedPlants.some((savedPlant) => savedPlant.id === plant.id)

    const updatedPlants = isAlreadyAdded
      ? savedPlants.filter((savedPlant) => savedPlant.id !== plant.id)
      : [...savedPlants, plant]

    setSavedPlants(updatedPlants)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPlants))
  }

  return (
    <div className="home-page">
      <section className="home-intro">
        <h1>Welcome to FlowerPlant</h1>
        <p>
          FlowerPlant is your plant care and guidance tool for everyday plant care.
          Explore simple guidance, build healthy routines, and help every leaf thrive.
        </p>
      </section>

      <section className="plant-media" aria-label="Atmospheric plant imagery">
        <img
          src={plant2}
          alt="Close-up of a potted plant with purple flower petals"
        />
        <img
          src={plant1}
          alt="Sunlight falling on houseplants by a bright window"
        />
      </section>

      <section className="plant-care-basics">
        <div className="info-with-image">
          <div className="plant-care-card">
            <h2>Plant Care Basics</h2>
            <p>Start with these essential tips to keep your plants healthy and thriving.</p>
            <br></br>
            <ul>
              <li>Light Needs: Match each plant with bright, medium, or low-light spaces.</li>
              <li>Water Routine: Water when the top soil feels dry instead of by strict dates.</li>
              <li>Soil & Drainage: Use well-draining soil and pots with drainage holes.</li>
              <li>Humidity: Mist tropical plants or use a pebble tray in dry rooms.</li>
              <li>Feeding: Fertilize lightly during spring and summer growing months.</li>
              <li>Troubleshooting: Watch for yellow leaves, pests, and root-bound growth.</li>
            </ul>
          </div>
          <img
            className="section-side-image"
            src="https://media.istockphoto.com/id/2184901070/photo/planting-wild-strawberries-in-pots.jpg?s=2048x2048&w=is&k=20&c=g3nOacTSY5bj5X4oEeGhVlFuvUd2Hu8hlwX4dLNe1fE="
            alt="Healthy indoor plant leaves in bright natural light"
          />
        </div>
      </section>

      <section className="plant-recovery-section">
        <div className="info-with-image">
          <img
            className="section-side-image"
            src="https://media.istockphoto.com/id/1286441510/photo/septoria-leaf-spot-on-tomato-damaged-by-disease-and-pests-of-tomato-leaves.jpg?s=2048x2048&w=is&k=20&c=Ola42-1MIxA7FZiAmlmIrX-8XXlvvIOOXjX47gELP_U="
            alt="Person trimming and caring for a struggling houseplant"
          />
          <div className="plant-recovery-card">
            <h2>Plant Recovery: Healing Damaged or Sick Plants</h2>
            <p>If a plant is struggling, start with a calm reset and fix one cause at a time.</p>
            <ul>
              <li>Inspect first: check leaves, stems, and soil for pests, mold, or rot.</li>
              <li>Trim damage: remove yellow, brown, or diseased leaves with clean scissors.</li>
              <li>Adjust watering: let soggy soil dry out, or water deeply if soil is bone dry.</li>
              <li>Improve light: move plants to the correct light level (avoid sudden harsh sun).</li>
              <li>Refresh roots/soil: repot if roots are crowded or soil smells sour and compacted.</li>
              <li>Quarantine sick plants: keep them away from healthy plants until recovered.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="plant-library-section">
        <h2>Popular Plants</h2>
        <div className="plant-library-grid">
          {plantLibrary.map((plant) => {
            const isAdded = savedPlants.some((savedPlant) => savedPlant.id === plant.id)

            return (
              <article className="plant-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p className="scientific-name"><em>{plant.scientificName}</em></p>
                <p>Difficulty: {plant.difficulty}</p>
                <p>{plant.sun}</p>
                <p>{plant.water}</p>
                <p>{plant.soil}</p>
                <button
                  type="button"
                  onClick={() => toggleMyPlant(plant)}
                >
                  {isAdded ? 'Undo Added' : 'Add to My Plants'}
                </button>
              </article>
            )
          })}
        </div>
      </section>

      <section className="plant-care-tips">
        <h2>Plant Care Video Guide</h2>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/LZhnCxG5c6s"
          title="Plant Care Tips"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  )
}

export default Home