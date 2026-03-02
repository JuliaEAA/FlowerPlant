import FlowerPlantFooterLogo from '../assets/FlowerPlantFooterLogo.png'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="site-footer">
			<div className="site-footer-content">
				<div className="site-footer-columns">
					<div className="site-footer-column site-footer-info">
					<h2>Contact FlowerPlant</h2>
					<p><strong>Address:</strong> 123 Botanical Lane, Green City, 2345 Copenhagen, Denmark</p>
					<p><strong>Email:</strong> flowplant123@flowerplant2026.dk</p>
					<p><strong>Mobile:</strong> +452076765</p>
					</div>

					<div className="site-footer-column site-footer-company">
						<img src={FlowerPlantFooterLogo} alt="FlowerPlant logo" className="site-footer-company-logo" />
						<p>Helping plant enthusiasts, gardeners, and beginners grow with confidence.</p>
					</div>
				</div>
				<p className="site-footer-copy">© {currentYear} FlowerPlant. All rights reserved.</p>
			</div>
		</footer>
	)
}
