# Z-Swaye3 Frontend

A modern React-based frontend application for an educational platform, built with TypeScript and Vite. This application provides a comprehensive interface for students, teachers, and administrators to manage educational sessions, video calls, and various administrative tasks.

## Features

### Public Features
- **Home Page**: Landing page with platform overview
- **About**: Information about the platform
- **Contact**: Contact details and support
- **Pricing**: Subscription and pricing information

### Authentication
- **User Registration**: Multi-step registration process
- **Login**: Secure user authentication
- **Branch Selection**: Choose educational branch during onboarding
- **Subject Onboarding**: Select subjects of interest

### Student Dashboard
- **Dashboard**: Overview of student's activities
- **My Packs**: Manage purchased learning packages
- **My Subjects**: View enrolled subjects
- **Sessions**: Schedule and manage learning sessions
- **SOS**: Emergency assistance feature
- **Teachers List**: Browse available teachers
- **Teacher Profile**: Detailed teacher information
- **Video Call**: Real-time video communication

### Teacher Dashboard
- **Dashboard**: Teacher's activity overview
- **Create Session**: Schedule new teaching sessions
- **My Students**: Manage student relationships
- **Planning**: Session and schedule management
- **Replacement Requests**: Handle session replacements
- **Sessions List**: View all scheduled sessions
- **SOS Alerts**: Respond to student emergencies
- **Video Call**: Conduct online teaching sessions

### Admin Dashboard
- **Dashboard**: Administrative overview
- **Analytics**: Platform usage statistics
- **Branch Subjects Editor**: Manage subjects by branch
- **Replacement Hub**: Oversee session replacements
- **Sessions Monitor**: Monitor all platform sessions
- **SOS Control**: Manage emergency response system
- **Teachers Management**: Administer teacher accounts
- **Users Management**: Manage all user accounts

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript
- **Build Tool**: Vite (with Rolldown)
- **Routing**: React Router DOM 7.9.6
- **Styling**: CSS-in-JS (inline styles in components)
- **Linting**: ESLint with TypeScript support
- **Package Manager**: npm

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## Project Structure

```
frontend/
├── .gitignore           # Git ignore rules
├── eslint.config.js     # ESLint configuration
├── index.html           # Main HTML entry point
├── package-lock.json    # NPM lock file
├── package.json         # NPM package configuration
├── README.md            # Project documentation
├── TODO.md              # Project tasks and notes
├── tsconfig.app.json    # TypeScript config for app
├── tsconfig.json        # Main TypeScript configuration
├── tsconfig.node.json   # TypeScript config for Node.js
├── vite.config.ts       # Vite build configuration
├── public/              # Static assets
│   └── vite.svg         # Vite logo
└── src/                 # Source code
    ├── components/      # Reusable UI components
    │   ├── Calendar.tsx
    │   ├── Navbar.tsx
    │   ├── Sidebar.tsx
    │   ├── SessionCard.tsx
    │   ├── SOSForm.tsx
    │   ├── SubjectCard.tsx
    │   ├── TeacherCard.tsx
    │   └── VideoMeeting.tsx
    ├── contexts/        # React contexts for state management
    │   └── AuthContext.tsx
    ├── hooks/           # Custom React hooks
    │   └── useAuth.ts
    ├── pages/           # Page components organized by role
    │   ├── assents/     # Public pages (Home, About, Contact, Pricing)
    │   │   ├── About.tsx
    │   │   ├── Contact.tsx
    │   │   ├── Home.tsx
    │   │   └── Pricing.tsx
    │   ├── auth/        # Authentication pages
    │   │   ├── ChooseBranch.tsx
    │   │   ├── Login.tsx
    │   │   ├── OnboardingSubjects.tsx
    │   │   └── Register.tsx
    │   ├── admin/       # Admin dashboard pages
    │   │   ├── Analytics.tsx
    │   │   ├── BranchSubjectsEditor.tsx
    │   │   ├── Dashboard.tsx
    │   │   ├── ReplacementHub.tsx
    │   │   ├── SessionsMonitor.tsx
    │   │   ├── SOSControl.tsx
    │   │   ├── TeachersManagement.tsx
    │   │   └── UsersManagement.tsx
    │   ├── student/     # Student dashboard pages
    │   │   ├── Dashboard.tsx
    │   │   ├── MyPacks.tsx
    │   │   ├── MySubjects.tsx
    │   │   ├── Sessions.tsx
    │   │   ├── SOS.tsx
    │   │   ├── TeacherProfile.tsx
    │   │   ├── TeachersList.tsx
    │   │   └── VideoCall.tsx
    │   └── teacher/     # Teacher dashboard pages
    │       ├── CreateSession.tsx
    │       ├── Dashboard.tsx
    │       ├── MyStudents.tsx
    │       ├── Planning.tsx
    │       ├── ReplacementRequests.tsx
    │       ├── SessionsList.tsx
    │       ├── SOSAlerts.tsx
    │       └── VideoCall.tsx
    ├── App.tsx          # Main application component
    └── main.tsx         # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support or questions, please contact the development team or use the contact form on the platform.
