# TJ Portfolio

A modern, responsive portfolio website built with React and TypeScript.

## Features

- Modern, responsive design
- Dark/Light theme toggle
- Smooth animations and transitions
- Project showcase with detailed views
- Skills section
- Contact information
- GitHub Pages deployment ready

## Tech Stack

- React 18
- TypeScript
- CSS3 with custom properties
- React Router for navigation
- GitHub Pages for hosting

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tj88888/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. Push your code to the `main` branch
2. The GitHub Actions workflow will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://tj88888.github.io/Portfolio`

### Manual Deployment

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
src/
├── components/          # React components
├── contexts/           # React contexts (theme)
├── hooks/              # Custom React hooks
├── App.tsx             # Main App component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## Customization

### Adding Projects

Edit the `projects` array in `src/components/ProjectsSection.tsx` and `src/components/ProjectDetail.tsx` to add your own projects.

### Styling

The project uses CSS custom properties for theming. Main color variables are defined in `src/index.css`.

### Content

Update the content in the respective component files:
- `HeroSection.tsx` - Hero section content
- `AboutSection.tsx` - About section content
- `SkillsSection.tsx` - Skills section content
- `ContactSection.tsx` - Contact information

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
