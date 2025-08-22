import React from "react"

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-10">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8">
					<div className="md:col-span-2">
						<div className="flex items-center space-x-2 mb-4">
							<img src="/logo2.png" alt="Orbitz Technology Logo" className="w-10 h-10 object-contain drop-shadow-lg bg-white rounded-lg p-2" />
							<span className="text-xl font-bold text-white align-middle">Orbitz Technology</span>
						</div>
						<p className="text-gray-400 text-sm mb-4 max-w-xs">Empowering businesses with innovative IT solutions, security, and digital transformation.</p>
						{/* Social Media Links */}
						<div className="flex space-x-4 mt-4">
							<a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.13 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.56 0-1.1-.03-1.64-.1A12.13 12.13 0 0 0 7.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg></a>
							<a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-1.72-.07-6.9-.07-8.62 0-1.72.07-2.88.36-3.8.77a6.56 6.56 0 0 0-2.36 1.54A6.56 6.56 0 0 0 .77 7.384c-.41.92-.7 2.08-.77 3.8-.07 1.72-.07 6.9 0 8.62.07 1.72.36 2.88.77 3.8a6.56 6.56 0 0 0 1.54 2.36 6.56 6.56 0 0 0 2.36 1.54c.92.41 2.08.7 3.8.77 1.72.07 6.9.07 8.62 0 1.72-.07 2.88-.36 3.8-.77a6.56 6.56 0 0 0 2.36-1.54 6.56 6.56 0 0 0 1.54-2.36c.41-.92.7-2.08.77-3.8.07-1.72.07-6.9 0-8.62-.07-1.72-.36-2.88-.77-3.8a6.56 6.56 0 0 0-1.54-2.36 6.56 6.56 0 0 0-2.36-1.54c-.92-.41-2.08-.7-3.8-.77zM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2zm6.4-10.8a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/></svg></a>
							<a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.5a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm15.11 12.95h-3.56v-5.59c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.68h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.49v6.25z"/></svg></a>
						</div>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-3">Company</h4>
						<ul className="space-y-2">
							<li><a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
							<li><a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a></li>
							<li><a href="/industries" className="text-gray-400 hover:text-white transition-colors text-sm">Industries</a></li>
							<li><a href="/resources" className="text-gray-400 hover:text-white transition-colors text-sm">Resources</a></li>
							<li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-3">Solutions</h4>
						<ul className="space-y-2">
							<li><a href="/services/managed-it" className="text-gray-400 hover:text-white transition-colors text-sm">Managed IT</a></li>
							<li><a href="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors text-sm">Cybersecurity</a></li>
							<li><a href="/services/software-development" className="text-gray-400 hover:text-white transition-colors text-sm">Software Development</a></li>
							<li><a href="/services/it-consulting" className="text-gray-400 hover:text-white transition-colors text-sm">IT Consulting</a></li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm">© 2024 Orbitz Technology. All rights reserved.</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
						<a href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
