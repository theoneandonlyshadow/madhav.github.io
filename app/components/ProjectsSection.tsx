'use client';

import { motion } from 'framer-motion';

export const ProjectsSection: React.FC = () => {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="relative z-10 mb-16 flex flex-col items-center">
					<motion.h2 
						initial={{ opacity: 0 }} 
						whileInView={{ opacity: 1 }} 
						viewport={{ once: true }} 
						className="text-3xl font-bold text-center"
					>
						Call me showoff but I <span className="font-light">love to</span> build things
					</motion.h2>
				</div>
				<div className="space-y-16">
					{/* NetProbe */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">NetProbe Mk.II</h3>
										<p className="text-gray-400">
											A high-performance system tray internet connection monitor handling notifications and DNS cache removal with real-time advanced logging. Supports Windows, Debian Linux and MacOS.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Node.js Runtime</li>
												<li>• Toast Notification Component</li>
												<li>• File System</li>
												<li>• CLI Process Execution</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 55.56% Size Reduction</li>
											<li>• 250ms Average Response </li>
											<li>• ~5 MB Memory & ~3–5% RAM Overhead</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										{/* Add detailed system architecture diagram here */}
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
    											<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
    											<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
        										System Tray Application ( Node.js )
    											</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Connection Monitor
													<title>is-online  |  Intreval Checks</title>
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													System Interface
													<title>systrayv2  |  node-notifier</title>
												</text>
											</g>

											{/* Cache Layer */}
											<g>
												<rect x="20" y="140" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													System Resource Manager
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Log Management
													<title>file system   |  promises</title>
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													OS Process Execution
													<title>child_process  |  os</title>
												</text>
											</g>

											{/* Search Layer */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-400 text-[12px]">
													System Notification API
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="105" y1="170" x2="105" y2="190" />
												<line x1="295" y1="170" x2="295" y2="190" />
												<line x1="200" y1="230" x2="200" y2="250" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Real-time Analytics Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Express Relay</h3>
										<p className="text-gray-400">
											A scalable file sharing service. Secure AES256 encryption, real-time data processing, WebSocket chat UI and unlimited file upload.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Real-time Chat UI</li>
												<li>• Responsive Layout</li>
												<li>• Cached Assets</li>
												<li>• Data Export Tools</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Google Cloud API</li>
												<li>• MongoDB Data Validation</li>
												<li>• Node.js Data Processing</li>
												<li>• WebSocket Protocol</li>
												<li>• Cloudflare Traffic Control</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 1.28s Page Loading Time</li>
											<li>• Sub-second Query Response</li>
											<li>• </li>
										</ul>
									</div>
								</div>

								

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Data Flow Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Data Sources */}
											<g>
												<rect x="20" y="20" width="100" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="135" y="20" width="125" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="270" y="20" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="75" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Web UI
													<title>The Website Interface</title>
												</text>
												<text x="200" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
													File Upload Handler
													<title>Multer  |  Express.js</title>
												</text>
												<text x="325" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
													XPR-WSS
													<title>XPR-WSS: Express Relay Websocket Secure</title>
												</text>
											</g>

											{/* Event Processing */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Express.js Backend
												</text>
											</g>

											{/* Processing Layer */}
											<g>
												<rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="210" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="105" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													FRA-200
												</text>
												<text x="295" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													File Batch Processing
												</text>
											</g>

											{/* Storage Layer */}
											<g>
												<rect x="20" y="220" width="170" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="220" width="170" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Google Cloud Storage
												</text>
												<text x="295" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">
													MongoDB Database
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="270" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="290" textAnchor="middle" className="fill-gray-400 text-[12px]">
													RESTful API Layer - Cloudflare Traffic Control
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="75" y1="50" x2="75" y2="80" />
												<line x1="200" y1="50" x2="200" y2="80" />
												<line x1="325" y1="50" x2="325" y2="80" />
												<line x1="200" y1="120" x2="200" y2="150" />
												<line x1="105" y1="190" x2="105" y2="220" />
												<line x1="295" y1="190" x2="295" y2="220" />
												<line x1="200" y1="250" x2="200" y2="270" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Vermilion AI */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-10">
									<div>
										<h3 className="text-2xl font-bold mb-4">Vermilion AI</h3>
										<p className="text-gray-400">
											Downloadable AI model with unrestricted access to information. Trained on a custom dataset of 1.5 million documents, it provides a unique and powerful tool for automating tasks within your OS.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• JavaFX</li>
												<li>• Responsive Layout</li>
												<li>• Tailwind CSS</li>
												<li>• Content Generation Workflow</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Java Runtime</li>
												<li>• Python TensorFlow</li>
												<li>• Finetuned Deepseek R1 Model</li>
												<li>• XS1 Command Injection</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Target Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• ≥ 95% XS1 Accuracy.</li>
											<li>• ≤ 1.2 seconds Model Inference Time.</li>
											<li>• ≤ 500MB RAM, ≤ 15% CPU on idle</li>
											<li>• ≤ 1GB, ≤ 35% CPU under load</li>
											<li>• ≤ 2% XS1 Cmd Injection Error Rate</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[3/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Event Processing */}
											<g>
												<rect x="20" y="10" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="35" textAnchor="middle" className="fill-gray-400 text-[12px]">
													JavaFX UI
													<title>Java eXtention Framework</title>
												</text>
											</g>

											{/* Event Processing */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													XS1 System Automation Layer
													<title>Xerius Spectra v1.0</title>
												</text>
											</g>

											{/* Processing Layer */}
											<g>
												<rect x="20" y="150" width="113.3" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="145" y="150" width="113.3" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="265" y="150" width="113.3" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="77.5" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													DeepSeek R1
												</text>
												<text x="200" y="175" textAnchor="middle" className="fill-gray-400 text-[11px]">
													Uncensored Dataset
												</text>
												<text x="320" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Wolfram Alpha
												</text>
											</g>
											

											{/* Storage Layer */}
											<g>
												<rect x="20" y="220" width="113.3" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="145" y="220" width="113.3" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="265" y="220" width="113.3" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="77.5" y="240" textAnchor="middle" className="fill-gray-400 text-[11px]">
													Sentiment Analysis
												</text>
												<text x="200" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">
													ML Layer
												</text>
												<text x="320" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Wolfram Alpha
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="270" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="290" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Compromise Natural Language Processing
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="50" x2="200" y2="80" />
												<line x1="200" y1="120" x2="200" y2="150" />
												<line x1="105" y1="190" x2="105" y2="220" />
												<line x1="295" y1="190" x2="295" y2="220" />
												<line x1="200" y1="250" x2="200" y2="270" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
