import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";
import ScrollToTop from "./ScrollToTop";
import ErrorBoundary from "./component/ErrorBoundary";

const Hero = lazy(() => import("./component/pages/Hero"));
const Product_List = lazy(() => import("./component/pages/Product_List"));
const Product = lazy(() => import("./component/pages/Product"));
const Cart = lazy(() => import("./component/pages/Cart"));
const Wishlist = lazy(() => import("./component/pages/Wishlist"));
const UserProfile = lazy(() => import("./component/pages/UserProfile"));
const MenHero = lazy(() => import("./component/pages/MenHero"));
const WomenHero = lazy(() => import("./component/pages/WomenHero"));
const Login = lazy(() => import("./component/pages/Login"));
const SignUp = lazy(() => import("./component/pages/SignUp"));
const SingleBlog = lazy(() => import("./component/pages/SingleBlog"));
const Contact = lazy(() => import("./component/pages/Contact"));
const Features = lazy(() => import("./component/pages/Features"));
const About = lazy(() => import("./component/pages/About"));
const Instructions = lazy(() => import("./component/pages/Instructions"));
const TermsAndConditions = lazy(() => import("./component/pages/TermsAndConditions"));
const DeliveryDetails = lazy(() => import("./component/pages/DeliveryDetails"));
const NotFound = lazy(() => import("./component/pages/NotFound"));

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'var(--rw-bg)' }}><div className="rw-spinner" /></div>}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<Product_List />} />
            <Route path="/products/:category" element={<Product_List />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/blogs" element={<SingleBlog />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/delivery" element={<DeliveryDetails />} />
            <Route path="/Men" element={<MenHero />} />
            <Route path="/Women" element={<WomenHero />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={<ProtectedRoute><Cart /></ProtectedRoute>}
            />
            <Route
              path="/wishlist"
              element={<ProtectedRoute><Wishlist /></ProtectedRoute>}
            />
            <Route
              path="/userprofile"
              element={<ProtectedRoute><UserProfile /></ProtectedRoute>}
            />
            <Route
              path="/login"
              element={user ? <Navigate replace to="/" /> : <Login />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
