import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Chats from "./pages/Chats";
import Research from "./pages/Research";
import Groups from "./pages/Groups";
import Collaborations from "./pages/Collaborations";
import LiveSessions from "./pages/LiveSessions";
import Settings from "./pages/Settings";
import CourseDetail from "./features/courses/CourseDetail";
import CourseOutline from "./features/courses/CourseOutline";
import ApplicationForm from "./components/forms/ApplicationForm";
import ApplicationReceived from "./components/ApplicationReceived";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            {/* Homepage */}
            <Route index path="/" element={<LandingPage />} />

            {/* Dashboard */}
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to={"dashboard"} />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="courses" element={<Courses />} />
              <Route path="courses/:courseId" element={<CourseDetail />} />
              <Route
                path="courses/:courseId/learning-outline"
                element={<CourseOutline />}
              />
              <Route path="chats" element={<Chats />} />
              <Route path="research" element={<Research />} />
              <Route path="group" element={<Groups />} />
              <Route path="collaborations" element={<Collaborations />} />
              <Route path="livesessions" element={<LiveSessions />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Other pages */}
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="apply" element={<ApplicationForm />} />
            <Route path="apply/check" element={<ApplicationReceived />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
