# 🌌 Hammad's 3D Interactive Cosmic Portfolio

Welcome to my interactive 3D-illusion developer portfolio! This application is designed to be an immersive, visually captivating experience that presents my development journey, technical skills, academic milestones, and certifications with cosmic/cyberpunk aesthetics and seamless, fluid animations.

🔗 **Live Demo:** [Insert Your Live Link Here]

---

## ✨ Features & Highlights

### 🕺 Persistent 3D-Illusion Character Migration
* Powered by advanced **Framer Motion (`layoutId`)** orchestration.
* As you scroll, the custom animated avatar seamlessly leaps, transitions, and **flips (3D rotate)** from one section's mockup canvas directly to the next, creating a continuous narrative illusion.

### 💬 Interactive Speech Bubble & WhatsApp Handshake
* Click the avatar in any section to display a dynamic, context-aware greeting bubble.
* Features a secure **"Tap to chat"** trigger that redirects directly to WhatsApp with a pre-formatted message contextually tracking which section the user engaged with.

### 📬 Seamless Web3Forms Integration
* Completely functional, secure contact form connected to **Web3Forms** for direct-to-inbox lead notifications.
* Set the key later in Vercel using the environment variable `VITE_WEB3FORMS_ACCESS_KEY`.
* For local testing, add the same key to a `.env.local` file in the project root.
* Example:
	```
	VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
	```
* Features sleek validation feedback and an automated smooth scrolling anchor that guides users to the footer after a successful submission.

### 🎨 Premium Dark Cosmic Theme & Adaptive Typography
* Styled with generous negative space, sleek translucent glassmorphism backdrop blurs, and interactive neon accents.
* Features a custom, responsive **glowing laser underline** matching desktop and mobile viewports.
* Elegant typography pairings using premium display fonts alongside a handwritten accent style for personal, human elements.

---

## 🛠️ Built With

* **Frontend:** React 18+ & TypeScript
* **Bundler & Tooling:** Vite (Supercharged local build & instant compilation)
* **Styling:** Tailwind CSS (Fluid responsive layouts, dark cosmic gradients, neon accents)
* **Animation Engine:** Framer Motion (Shared layouts, 3D flips, hover springs, micro-interactions)
* **Icons:** Lucide React
* **Backend Ingestion:** Web3Forms API