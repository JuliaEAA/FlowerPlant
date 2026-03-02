function About() {
	return (
		<section className="about-page">
			<header className="about-hero">
				<h1>About FlowerPlant</h1>
				<p>
					FlowerPlant is a community for plant enthusiasts, gardeners, and beginners who want a
					simple and friendly place to learn plant care and grow with confidence.
				</p>
				<div className="about-hero-images">
                    <img
                        src="https://media.istockphoto.com/id/1325936801/photo/wild-herb-and-field-or-wild-flowers-with-iron-watering-can-english-cottage-style-gardening.jpg?s=2048x2048&w=is&k=20&c=gsCoHrSZ_HEtdGxwnybg90VYOxRebLQX4sx5tNiA-JQ="
                        alt="Wild herb and field of wild flowers with iron watering can in English cottage style gardening"
                        className="about-hero-image"
                    />  
					<img
						src="https://media.istockphoto.com/id/2150196882/photo/gardener-plants-flowers-in-the-garden-close-up-garden-care-gardening-concept.jpg?s=2048x2048&w=is&k=20&c=DZ4zjvlVyDuP46H41bAzztL2A9oPKkm7-UlpLk7t120="
						alt="Gardener planting flowers in a garden"
						className="about-hero-image"
					/>
					<img
						src="https://media.istockphoto.com/id/1305447687/photo/taking-care-of-my-plants.jpg?s=2048x2048&w=is&k=20&c=HXrcvkOWp8Qm06J-_Dp5_ecUBCw6avyqMkq8p1czUBE="
						alt="Person taking care of houseplants"
						className="about-hero-image"
					/>
				</div>
			</header>

			<section className="about-section">
				<h2>Our Background</h2>
				<p>
					FlowerPlant was created to make plant care easier for everyone. Our platform provides a
					user-friendly space where people can explore care guides and manage their personal plant
					collections in one place.
				</p>
			</section>

			<section className="about-section">
				<h2>Our Values</h2>
				<ul>
					<li><strong>Community:</strong> We grow better together by sharing tips, stories, and support.</li>
					<li><strong>Accessibility:</strong> Plant care should feel simple, practical, and welcoming to all levels.</li>
					<li><strong>Growth:</strong> We encourage steady learning and small habits that build healthy plants.</li>
					<li><strong>Care:</strong> We value mindful, sustainable plant care that respects nature.</li>
				</ul>
			</section>

			<section className="about-section about-contact">
				<h2>Contact Information</h2>
				<p><strong>Address:</strong> 123 Botanical Lane, Green City, 2345 Copenhagen, Denmark</p>
				<p><strong>Email:</strong> flowplant123@flowerplant2026.dk</p>
				<p><strong>Mobile:</strong> +452076765</p>
			</section>
		</section>
	)
}

export default About
