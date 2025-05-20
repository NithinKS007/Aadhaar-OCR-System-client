# Aadhaar OCR System

A React-based web application that allows users to upload images of their Aadhaar card (both front and back), view the individual pages, and extract the details into a new structured format using an OCR system. This client interacts with a Node.js backend to handle image uploads and extract data using OCR.

### Screen Shots

### Home Page

![Upload Aadhaar Image](./assets/Screenshot%202025-05-20%20093629.png)

## 🌟 Features

- Aadhaar images Upload
- Upload images Preview
- View extracted details
- Responsive Design
- Toast Notifications for User Feedback

## 📁 Project Structure

```
client/
│
├── .env                          # Environment variables
├── .gitignore                    # Git ignore configuration
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML template
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Package lock for npm
├── README.md                     # Project documentation
├── tsconfig.app.json             # TypeScript configuration for app-specific settings
├── tsconfig.json                 # General TypeScript configuration
├── tsconfig.node.json            # General TypeScript configuration
├── vite-config.ts                # Vite general configuration file
├── src/                          # Source code folder
│   ├── api/                      # API service folder
│   │   ├── ocr.ts                # OCR Extraction API requests
│   │
│   ├── components/               # Folder containing React components
│   │
│   ├── recapture-buttons/        # Folder for image recapture button components
│   │   ├── RecaptureBackButton.tsx  # Image recapture button component (back side)
│   │   ├── RecaptureFrontButton.tsx # Image recapture button component (front side)
│   │
│   ├── aadhaar-upload/           # Folder for image upload components
│   │   ├── AadhaarBack.tsx       # Image upload component (back side of Aadhaar card)
│   │   ├── AadhaarFront.tsx      # Image upload component (front side of Aadhaar card)
│   │
│   ├── ApiResponse.tsx           # Show backend response component
│   ├── ImagePreview.tsx          # Show uploaded image preview component
│   ├── ParseAadhaarButton.tsx    # Button component
│   ├── ParsedData.tsx            # Show parsed data component
│   │
│   ├── config/                   # Configuration files
│   │   ├── axios.ts              # Axios configuration for API requests
│   │
│   ├── pages/                    # Page components
│   │   ├── HomePage.tsx          # Homepage
│   │
│   ├── utils/                    # Utility functions
│   │   ├── toast.ts              # Toast notification utility
│   │   └── validationSchema.ts   # Validation functions
│   ├── vite-env.d.ts             # Vite build configuration
│   ├── App.tsx                   # Main App component
│   ├── Main.tsx                  # Main entry point for React app
│   ├── index.css                 # Global CSS for the app
├── node_modules/                 # Node.js dependencies (auto-generated)
│
├── dist/                         # Compiled JavaScript files (after TypeScript transpilation)

```

## 🚀 Getting Started

### Prerequisites

- Node.js (v22.15.0 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Aadhaar-OCR-System-client.git
cd Aadhaar-OCR-System-client
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 📦 Package Analysis

### Current Dependencies Analysis

#### Required Packages (Keep)

```json
{
  "@tailwindcss/vite": "^4.1.6", // For Tailwind CSS integration with Vite
  "axios": "^1.9.0", // For making HTTP requests
  "formik": "^2.4.6", // For form management
  "react": "^19.1.0", // Core React library
  "react-dom": "^19.1.0", // Core React DOM for rendering React components
  "react-hot-toast": "^2.5.2", // For toast notifications (consider custom implementation)
  "react-icons": "^5.5.0", // For including popular icons in React
  "react-router-dom": "^7.6.0", // For navigation and routing in React apps
  "tailwindcss": "^4.1.6", // For utility-first CSS framework
  "yup": "^1.6.1" // For schema validation (used with Formik)
}

```

#### Development Dependencies (Keep)

```json

{
  "@eslint/js": "^9.25.0", // ESLint JavaScript linting configuration
  "@types/axios": "^0.9.36", // TypeScript type definitions for axios
  "@types/react": "^19.1.2", // TypeScript type definitions for React
  "@types/react-dom": "^19.1.2", // TypeScript type definitions for React DOM
  "@vitejs/plugin-react": "^4.4.1", // Vite plugin for React support
  "eslint": "^9.25.0", // JavaScript linting tool to ensure code quality
  "eslint-plugin-react-hooks": "^5.2.0", // ESLint plugin for enforcing React hooks best practices
  "eslint-plugin-react-refresh": "^0.4.19", // ESLint plugin for React fast refresh support
  "globals": "^16.0.0", // Provides global variables for various environments (e.g., Node.js, browser)
  "typescript": "~5.8.3", // TypeScript compiler for adding type safety to JavaScript code
  "typescript-eslint": "^8.30.1", // TypeScript support for ESLint
  "vite": "^6.3.5" // Vite is a fast build tool for modern web apps, optimizing the development workflow
}

```

#### 🛠️ Technology Stack

**Tailwind CSS** – Utility-first CSS framework (tailwindcss, @tailwindcss/vite)
**Axios** – HTTP client for making API requests (axios)
**Formik** – Form management (formik, yup)
**React** – Core UI library (react, react-dom)
**React Router** – Navigation and routing in React apps (react-router-dom)
**React Hot Toast** – Toast notifications (react-hot-toast)
**React Icons** – Icon library for React (react-icons)
**Yup** – Schema validation (used with Formik) (yup)

## 📄 API Endpoints

The application expects the following API endpoints:

📄 PDF API Endpoints

- `POST /api/v1/aadhaar/extract` - Upload a aadhaar images

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-Feature`)
3. Commit your changes (`git commit -m 'Add some my-Feature'`)
4. Push to the branch (`git push origin feature/my-Feature`)
5. Open a Pull Request

