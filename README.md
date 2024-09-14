# 3D Portfolio

This project is a **3D portfolio** website built with **React** and **Vite**, featuring 3D models in **GLTF** format to showcase your work interactively.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [GLTF Models](#gltf-models)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/3d-portfolio.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd 3d-portfolio
   ```

3. **Install dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   This will start the Vite development server. Your project will be available at `http://localhost:3000`.

## Features

- **3D GLTF Models**: Use **GLTF** models for efficient 3D asset representation, optimized for the web.
- **Interactive Animations**: The portfolio includes WebGL-powered visuals with real-time rendering and animations.
- **Fast Development**: Powered by **Vite** for a fast development experience and optimized production builds.
- **Responsive Design**: The design adjusts to mobile, tablet, and desktop screen sizes.
- **Modular Structure**: Easily extend or customize components and scenes.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Vite**: High-performance frontend build tool.
- **Three.js**: JavaScript library for creating 3D graphics, used to render GLTF models.
- **GLTF (GL Transmission Format)**: A popular format for transmitting 3D models, optimized for efficient real-time rendering.
- **React Three Fiber**: A React renderer for Three.js, making 3D rendering easier to integrate with React components.
- **GSAP**: Animation library for smooth transitions and effects.
- **SCSS**: For styling with modular and reusable CSS.

## Project Structure

The project's file structure is as follows:

```bash
3d-portfolio/
├── public/             # Static assets like images, fonts, etc.
├── src/
│   ├── assets/         # GLTF models, textures, and other assets
│   ├── components/     # Reusable components (e.g., NavBar, Footer)
│   ├── pages/          # Main pages (Home, Portfolio, About, etc.)
│   ├── threejs/        # 3D-related files (e.g., GLTF loaders, scene setups)
│   ├── App.jsx         # Main application entry
│   ├── index.jsx       # Entry point for React and Vite
│   └── styles/         # Global and component-specific styles
├── package.json        # Project metadata and dependencies
└── vite.config.js      # Vite configuration file
```

## Usage

Once the development server is running, you can view your portfolio and customize it to include your own 3D models and personal information.

### Build for Production

To build the project for production:

```bash
npm run build
```

This will generate the optimized files in the `dist/` directory.

## GLTF Models

The project uses **GLTF** models to display 3D content. To add your own models:

1. Place your `.gltf` or `.glb` files in the `src/assets/models/` directory.
2. Load them using `GLTFLoader` from **Three.js**:

   ```javascript
   import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

   const loader = new GLTFLoader();
   loader.load('/path/to/model.gltf', (gltf) => {
     scene.add(gltf.scene);
   });
   ```

3. Use **React Three Fiber** to integrate the model into your React components for a seamless experience:

   ```javascript
   import { useLoader } from '@react-three/fiber';
   import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

   function MyModel() {
     const gltf = useLoader(GLTFLoader, '/path/to/model.gltf');
     return <primitive object={gltf.scene} />;
   }
   ```

## Contributing

If you'd like to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---