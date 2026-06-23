# LinkForgee Frontend

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)

**A modern, responsive React application for managing shortened URLs, QR codes, and click analytics.**

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Application Pages](#application-pages)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [Backend Integration](#backend-integration)
- [Security](#security)
- [Future Enhancements](#future-enhancements)
- [Author](#author)

---

## Overview

LinkForgee Frontend is a modern React application that provides a clean and responsive interface for the LinkForgee platform. It handles URL shortening, custom alias creation, QR code display, and analytics visualization — communicating seamlessly with the Spring Boot backend through REST APIs. The UI is designed to work fluidly across desktop, tablet, and mobile devices.

---

## Features

### Authentication
- User registration and login
- JWT-based session management
- Protected routes for authenticated users

### URL Management
- Create shortened URLs with automatic alias generation
- Set custom aliases
- Configure expiration dates
- Delete existing links

### Analytics Dashboard
- Total click tracking across all links
- Per-URL click analytics
- Interactive charts with click history visualization

### QR Code Support
- Display QR codes for every shortened URL
- Share QR codes directly
- Mobile scanning support

### Responsive Design
- Optimized for desktop, tablet, and mobile viewports

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React |
| Build Tool | Vite |
| Language | JavaScript |
| Styling | Tailwind CSS |
| State Management | React Context API |
| API Communication | Axios |
| Data Fetching | React Query |
| Forms | React Hook Form |
| Charts | Chart.js, React ChartJS 2 |
| Notifications | React Hot Toast |
| Routing | React Router DOM |

---

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/             # Application page views
├── hooks/             # Custom React hooks
├── api/               # Axios API service functions
├── contextApi/        # React Context providers
├── utils/             # Helper utilities
└── assets/            # Static assets (images, icons)
```

---

## Application Pages

### Home Page
- Platform introduction and feature overview
- Call-to-action for new users

### Authentication Pages
- **Register** — Create a new account
- **Login** — Authenticate and receive a JWT session

### Dashboard
- Create and manage shortened URLs
- View, delete, and track all links
- Access per-link analytics
- View and share QR codes

### About Page
- Project overview, features, and technology stack

---

## Environment Variables

Create a `.env` file in the project root with the following variables:

```env
VITE_BACKEND_URL=<your_spring_boot_backend_url>
VITE_REACT_FRONT_END_URL=<your_frontend_url>
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- LinkForgee Backend running and accessible

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/linkforgee-frontend.git
cd linkforgee-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Set up the required variables as described in the [Environment Variables](#environment-variables) section.

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at: **http://localhost:5173**

---

## Production Build

```bash
npm run build
```

The optimized production output will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

### Netlify

| Setting | Value |
|---|---|
| Build Command | `npm run build` |
| Publish Directory | `dist` |

> Make sure to add your environment variables in the Netlify dashboard under **Site Settings → Environment Variables**.

---

## Backend Integration

The frontend communicates with the [LinkForgee Spring Boot Backend](https://github.com/your-username/linkforgee-backend) using secure REST APIs.

Supported operations:

| Operation | Description |
|---|---|
| User Authentication | Register and login via JWT |
| URL Creation | Shorten URLs with optional custom aliases |
| URL Deletion | Remove links from the user's account |
| Analytics Retrieval | Fetch per-link and total click stats |
| Click Tracking | Record and aggregate click events |
| QR Code Retrieval | Fetch generated QR codes for each URL |

---

## Security

- **Protected Routes** — Authenticated-only pages redirect unauthenticated users to login
- **JWT Authentication** — Tokens are stored and sent securely with each API request
- **Input Validation** — Form inputs are validated client-side via React Hook Form
- **Secure API Communication** — All requests go through Axios with configured base URLs
- **CORS Protected Requests** — Requests conform to the backend's CORS policy

---

## Future Enhancements

- [ ] Dark mode
- [ ] Link editing support
- [ ] Advanced filtering and search
- [ ] Bulk URL operations
- [ ] Export analytics data
- [ ] Custom branding options
- [ ] Team workspaces

---

## Author

**Pritam Thopate**

Computer Engineering Student | Software Developer & Robotics Enthusiast

🏆 FIRST Global Challenge 2022 — Team India

---

<div align="center">

Developed By Pritam Thopate

</div>
