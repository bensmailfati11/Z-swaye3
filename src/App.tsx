import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// Public pages
import Home from './pages/assents/Home';
import About from './pages/assents/About';
import Contact from './pages/assents/Contact';
import Pricing from './pages/assents/Pricing';

// Auth pages
import ChooseBranch from './pages/auth/ChooseBranch';
import Login from './pages/auth/Login';
import OnboardingSubjects from './pages/auth/OnboardingSubjects';
import Register from './pages/auth/Register';

// Admin pages
import AdminAnalytics from './pages/admin/Analytics';
import AdminBranchSubjectsEditor from './pages/admin/BranchSubjectsEditor';
import AdminDashboard from './pages/admin/Dashboard';
import AdminReplacementHub from './pages/admin/ReplacementHub';
import AdminSessionsMonitor from './pages/admin/SessionsMonitor';
import AdminSOSControl from './pages/admin/SOSControl';
import AdminTeachersManagement from './pages/admin/TeachersManagement';
import AdminUsersManagement from './pages/admin/UsersManagement';

// Student pages
import StudentDashboard from './pages/student/Dashboard';
import StudentMyPacks from './pages/student/MyPacks';
import StudentMySubjects from './pages/student/MySubjects';
import StudentSessions from './pages/student/Sessions';
import StudentSOS from './pages/student/SOS';
import StudentTeacherProfile from './pages/student/TeacherProfile';
import StudentTeachersList from './pages/student/TeachersList';
import StudentVideoCall from './pages/student/VideoCall';

// Teacher pages
import TeacherCreateSession from './pages/teacher/CreateSession';
import TeacherDashboard from './pages/teacher/Dashboard';
import TeacherMyStudents from './pages/teacher/MyStudents';
import TeacherPlanning from './pages/teacher/Planning';
import TeacherReplacementRequests from './pages/teacher/ReplacementRequests';
import TeacherSessionsList from './pages/teacher/SessionsList';
import TeacherSOSAlerts from './pages/teacher/SOSAlerts';
import TeacherVideoCall from './pages/teacher/VideoCall';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
        {isAuthenticated && <Sidebar />}
        <div style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />

            {/* Auth routes */}
            <Route path="/auth/choose-branch" element={<ChooseBranch />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/onboarding-subjects" element={<OnboardingSubjects />} />
            <Route path="/auth/register" element={<Register />} />

            {/* Admin routes */}
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/branch-subjects-editor" element={<AdminBranchSubjectsEditor />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/replacement-hub" element={<AdminReplacementHub />} />
            <Route path="/admin/sessions-monitor" element={<AdminSessionsMonitor />} />
            <Route path="/admin/sos-control" element={<AdminSOSControl />} />
            <Route path="/admin/teachers-management" element={<AdminTeachersManagement />} />
            <Route path="/admin/users-management" element={<AdminUsersManagement />} />

            {/* Student routes */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/my-packs" element={<StudentMyPacks />} />
            <Route path="/student/my-subjects" element={<StudentMySubjects />} />
            <Route path="/student/sessions" element={<StudentSessions />} />
            <Route path="/student/sos" element={<StudentSOS />} />
            <Route path="/student/teacher-profile" element={<StudentTeacherProfile />} />
            <Route path="/student/teachers-list" element={<StudentTeachersList />} />
            <Route path="/student/video-call" element={<StudentVideoCall />} />

            {/* Teacher routes */}
            <Route path="/teacher/create-session" element={<TeacherCreateSession />} />
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
            <Route path="/teacher/my-students" element={<TeacherMyStudents />} />
            <Route path="/teacher/planning" element={<TeacherPlanning />} />
            <Route path="/teacher/replacement-requests" element={<TeacherReplacementRequests />} />
            <Route path="/teacher/sessions-list" element={<TeacherSessionsList />} />
            <Route path="/teacher/sos-alerts" element={<TeacherSOSAlerts />} />
            <Route path="/teacher/video-call" element={<TeacherVideoCall />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
