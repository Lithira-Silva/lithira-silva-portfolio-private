# Lithira Silva Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, and provides a way to get in touch.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode Ready**: Built with dark mode support using Tailwind CSS
- **Smooth Animations**: Engaging animations and transitions
- **Interactive Components**: Dynamic project filtering, contact form, and more
- **Performance Optimized**: Fast loading with Vite and optimized assets
- **Type Safety**: Built with TypeScript for better development experience
- **SEO Friendly**: Semantic HTML and proper meta tags

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS animations
- **Build Tool**: Vite
- **Icons**: Custom SVG icons
- **Fonts**: Inter, JetBrains Mono (Google Fonts)

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main App component
├── main.tsx            # Entry point
└── index.css           # Global styles

```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lithirasilva/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Sections

- **Hero**: Welcome section with introduction and call-to-action
- **About**: Personal information and key highlights
- **Skills**: Technical skills with progress indicators
- **Projects**: Portfolio of featured projects with filtering
- **Contact**: Contact form and social links
- **Footer**: Additional links and information

## 🎨 Customization

### Colors
The primary color scheme can be customized in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Customize your primary colors here
        500: '#0ea5e9',
        600: '#0284c7',
        // ...
      },
    },
  },
},
```

### Content
Update the content in each component file to reflect your personal information:

- **Personal Info**: Update name, title, description in `Hero.tsx` and `About.tsx`
- **Skills**: Modify the skills array in `Skills.tsx`
- **Projects**: Update the projects array in `Projects.tsx`
- **Contact**: Update contact information in `Contact.tsx` and `Footer.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/lithirasilva/portfolio/issues).

## 📞 Contact

Lithira Silva - [lithira@example.com](mailto:lithira@example.com)

Project Link: [https://github.com/lithirasilva/portfolio](https://github.com/lithirasilva/portfolio)
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
