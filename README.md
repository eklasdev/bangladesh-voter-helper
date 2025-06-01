# Bangladesh Voter Information Helper

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

4. Open [http://localhost:5173](http://localhost:5173) in your browser

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
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deploying to Cloudflare Pages

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Log in to the Cloudflare Dashboard
3. Navigate to Pages
4. Create a new project and upload the `dist` directory

### Automatic Deployment with GitHub

1. Push your code to GitHub
2. Connect your GitHub repository to Cloudflare Pages
3. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Configure environment variables if needed
5. Deploy the site

Your site will be available at `https://your-project-name.pages.dev`.

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

MIT

## Credits

- Powered by [ksmp.pages.dev](https://ksmp.pages.dev)
- Supported by [eklas.tech](https://eklas.tech)
