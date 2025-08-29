# Felipe Dessoy Caraballo - Portfolio Website

A modern, interactive portfolio website showcasing the work and skills of Felipe Dessoy Caraballo, a full-stack software engineer and political scientist.

![Portfolio Preview](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Elements**: Engaging hover effects and interactive project showcases
- **Modern Tech Stack**: Built with the latest React, TypeScript, and Tailwind CSS
- **Retro Aesthetic**: Vintage-inspired design with VT323 font and custom color palette
- **Project Showcase**: Interactive gallery of personal projects with detailed descriptions
- **Contact Integration**: Easy-to-use contact section with social media links

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 7.1.3** - Fast build tool and dev server
- **Tailwind CSS 4.1.12** - Utility-first CSS framework

### Animations & UI
- **Framer Motion** (`motion` package) - Smooth animations and transitions
- **React Icons** - Comprehensive icon library
- **@tabler/icons-react** - Additional icon set

### Routing & Navigation
- **React Router DOM 7.8.1** - Client-side routing

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
fdessoy/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # React components
│   │   ├── App.tsx     # Main application component
│   │   ├── TextBox.tsx # Reusable text section component
│   │   ├── Projects.tsx # Project showcase component
│   │   ├── Contact.tsx  # Contact section component
│   │   └── Types.tsx    # TypeScript type definitions
│   ├── data/
│   │   ├── Content.ts   # Static content and text
│   │   └── ProjectsList.ts # Project data and descriptions
│   ├── styles/
│   │   └── index.css    # Global styles and Tailwind imports
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
└── vite.config.ts       # Vite configuration
```

## 🎨 Design Features

- **Retro Typography**: VT323 monospace font for a vintage coding aesthetic
- **Custom Color Palette**: Blush pink theme (#F0DCDC) with complementary colors
- **Smooth Scrolling**: Native smooth scroll behavior between sections
- **Interactive Projects**: Clickable project galleries with zoom effects showcasing diverse tech stacks from systems programming to modern APIs
- **Responsive Navigation**: Fixed navigation buttons for easy section jumping
- **Project Diversity**: Visual presentation of projects spanning C/C++, Python, JavaScript, and various frameworks

## 🏆 Featured Projects

The portfolio showcases several impressive projects:

1. **Airguardian** - Real-time drone monitoring API with FastAPI, PostgreSQL, and Celery for no-fly zone violation detection
2. **Webcrawler** - Python-based web crawler with async HTTP requests and SQLite storage
3. **ft_transcendence** - Full-stack multiplayer gaming platform with Socket.IO and React
4. **Minishell** - Bash shell recreation in C with pipes, redirections, and built-in commands
5. **ft_irc** - IRC server implementation in C++ with network programming
6. **Ezra** - Python GUI application for web archiving with Tkinter

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.19.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fdessoy-portfolio.git
   cd fdessoy-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Type checking
npm run type-check
```

## 🏗️ Build & Deployment

### Production Build
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any static hosting**: Upload the contents of `dist/` folder

## 🎨 Customization

### Colors
The main color scheme can be customized in `src/Types.tsx`:
```typescript
export const blushPink: string = "#F0DCDC"
```

### Content
Update personal information in `src/Content.ts` and project details in `src/ProjectsList.ts`.

To add the Airguardian project, update `src/ProjectsList.ts`:
```typescript
airguardian: {
  project: "Airguardian",
  description1: "Real-time drone monitoring API middleware built with FastAPI and PostgreSQL. The system detects drones violating no-fly zones within a 1000m radius, automatically logs offenders, and retrieves owner details through external APIs.",
  description2: "Features background task processing with Celery and RabbitMQ for continuous airspace monitoring. Includes secure authentication, comprehensive logging, and RESTful API endpoints for health checks, drone data, and violation reports.",
  description3: "Containerized with Docker for easy deployment, uses Poetry for dependency management, and implements proper error handling and database operations with PostgreSQL for persistent storage.",
  gifPath: airguardian // Add corresponding GIF/image
}
```

### Styling
The project uses Tailwind CSS. Customize styles by:
- Modifying `src/index.css` for global styles
- Using Tailwind utility classes in components
- Extending the Tailwind configuration in `tailwind.config.js`

## 👨‍💻 About Felipe

Felipe Justo José Dessoy Caraballo is a Brazilian software engineer and political scientist with expertise in:
- **Languages**: Portuguese, English, Spanish, Finnish
- **Programming**: Full-stack development with focus on C/C++, Python, JavaScript/TypeScript
- **Specializations**: Systems programming, web development, API design, real-time monitoring systems, quantitative analysis
- **Background**: Graduate of Hive Helsinki coding school with experience in low-level systems programming and modern web technologies

## 📞 Contact & Social Links

- **Email**: fdessoycaraballo@gmail.com
- **LinkedIn**: [linkedin.com/in/fdessoy](https://linkedin.com/in/fdessoy)
- **GitHub**: [github.com/fjjdessoycaraballo](https://github.com/fjjdessoycaraballo)
- **Linktree**: [linktr.ee/fdessoy](https://linktr.ee/fdessoy)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

**Built with ❤️ by Felipe Dessoy Caraballo**