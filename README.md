# Digital Voter Info Helper

A bilingual (English/Bangla) web application that provides step-by-step guides for Bangladesh voter services, including NID registration, voter information updates, and first-time voter registration.

## Features

- **Bilingual Support**: Full support for both English and Bangla languages
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Dark/Light Mode**: Support for both light and dark themes
- **Step-by-Step Guides**: Detailed instructions for all voter services
- **External Links**: Integration with official government resources
- **Modern UI**: Built with Material-UI for a clean, modern look

## Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router v6
- **Internationalization**: react-i18next
- **Build Tool**: Vite
- **Deployment**: Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/voter-helper.git
cd voter-helper
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues
- `npm run test` - Run tests (when added)

## Project Structure

```
voter-helper/
├── public/              # Static assets
├── src/                 # Source code
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components
│   ├── locales/         # Translation files
│   │   ├── en.json      # English translations
│   │   └── bn.json      # Bangla translations
│   ├── routes/          # Page components
│   ├── App.tsx          # Main application component
│   ├── i18n.ts          # i18n configuration
│   └── main.tsx         # Application entry point
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Deploying to Cloudflare Pages

1. Push your code to a GitHub repository.

2. Log in to the Cloudflare dashboard and go to Pages.

3. Connect your GitHub account and select the repository.

4. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables (if needed)

5. Deploy the site.

6. Your site will be available at `https://your-project-name.pages.dev`.

## Adding Content

### Adding New Services

1. Add the service information to both language files in `src/locales/`.
2. Update the home page to include the new service card.
3. Create any new components needed for the service.

### Updating Translations

Edit the translation files in `src/locales/` to update or add new translations.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
