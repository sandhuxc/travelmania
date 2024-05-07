import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// Components
import LandingPage from './components/Credentials/LandingPage';
import Login from './components/Credentials/Login';
import Signup from './components/Credentials/Signup';
import AuthSignUp from './components/Credentials/AuthSignUp';
import Verification from './components/Credentials/Verification';

import Inbox from './components/Inbox/Inbox';
import ChatDetails from './components/Inbox/ChatDetails';

import Payment from './components/Payment/Payment';

import TourGuideDashboard from './components/TourGuide/Dashboard';
import TourGuidePortfolio from './components/TourGuide/Portfolio';
import TourGuidePackageBuilder from './components/TourGuide/PackageBuilder/PackageBuilder';
import PortfolioDisplay from './components/TourGuide/PortfolioDisplay';

import TourOrgDashboard from './components/Organization/Dashboard';
import TourOrgPortfolio from './components/Organization/Portfolio';
import TourOrgPackageBuilder from './components/Organization/PackageBuilder/PackageBuilder';

import TravelerDashboard from './components/Traveler/Dashboard';
import TravelerPortfolio from './components/Traveler/Portfolio';
import { ShowPackage } from './components/Traveler/ShowPackage';
import PackageCreator from './components/PackageCard/PackageCreator';
import PackageDisplay from './components/Traveler/PackageDisplay';
import TourGuideDisplay from './components/Traveler/TourGuideDisplay';
import PackageDetails from './components/PackageCard/PackageDetails';
import ContactUs from './components/Credentials/ContactUs';
import TourOrganizationDisplay from './components/Traveler/TourOrganizationDisplay';
import OrganizationPortfolioDisplay from './components/Organization/PortfolioDisplay';

// admin pages
import Requests from './components/Admin/requests';
import ReqSpecificTourGuide from './components/Admin/reqSpecificTourGuide';
import ReqSpecificTourOrg from './components/Admin/reqSpecificTourOrg';
import HelpQueries from './components/Admin/HelpQueries';

// Layout TourGuide
import TourGuideLayout from './components/Layout/TourGuideLayout'; // for tour guide nav and sidenav
import TourOrgLayout from './components/Layout/TourOrganizationLayout'; // for tour organization nav and sidenav
import TravelerLayout from './components/Layout/TravellerLayout'; // for traveler nav and sidenav

// Location Based Searching page need to change design of it according to our application plus layout
import LocationBasedSearch from './components/LocationBasedSearch/LocationBasedSearch';

import Settings from './components/Credentials/Settings';
import Profile from './components/Credentials/Profile';

import OwnerFeedback from "./components/Credentials/OwnerFeedback"

import LineChartGraph from './components/Credentials/LineChartGraph';

// react-redux
import { Provider } from 'react-redux';
import store from './store';

// Higher order component

// Tour Guide
const TourGuideDashboardLayout = TourGuideLayout(TourGuideDashboard);
const TourGuidePortfolioLayout = TourGuideLayout(TourGuidePortfolio);
const TourGuidePackageBuilderLayout = TourGuideLayout(TourGuidePackageBuilder);
// Tour Organization
const TourOrganizationDashboardLayout = TourOrgLayout(TourOrgDashboard);
const TourOrganizationPortfolioLayout = TourOrgLayout(TourOrgPortfolio);
const TourOrgPackageBuilderLayout = TourOrgLayout(TourOrgPackageBuilder);
// Traveler
const TravelerDashboardLayout = TravelerLayout(TravelerDashboard);
const TravelerPortfolioLayout = TravelerLayout(TravelerPortfolio);
const persistir = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistir}>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/tour-guide' element={<TourGuideDashboardLayout />} />

            <Route path='/verification' element={<Verification />} />
            <Route path='/auth-signup' element={<AuthSignUp />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/profile' element={<Profile />} />

            <Route path='/owner-feedback' element={<OwnerFeedback />} />

            <Route
              path='/tour-guide-portfolio'
              element={<TourGuidePortfolioLayout />}
            />
            <Route
              path='/tour-guide-package'
              element={<TourGuidePackageBuilderLayout />}
            />
            <Route
              path='/tour-org'
              element={<TourOrganizationDashboardLayout />}
            />
            <Route
              path='/tour-org-portfolio'
              element={<TourOrganizationPortfolioLayout />}
            />
            <Route
              path='/tour-org-package'
              element={<TourOrgPackageBuilderLayout />}
            />
            <Route path='/traveler' element={<TravelerDashboardLayout />} />
            <Route
              path='/traveler-portfolio'
              element={<TravelerPortfolioLayout />}
            />

            <Route path='/inbox' element={<Inbox />} />
            <Route path='/chats' element={<ChatDetails />} />

            <Route path='/payment' element={<Payment />} />

            <Route path='/location-based' element={<LocationBasedSearch />} />
            <Route path='/package-view-all' element={<PackageDisplay />} />
            <Route path='/tour-guide-view-all' element={<TourGuideDisplay />} />
            <Route path='/verification' element={<Verification />} />
            <Route path='/auth-signup' element={<AuthSignUp />} />
            <Route
              path='/tour-org-view-all'
              element={<TourOrganizationDisplay />}
            />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route
              path='/tour-guide-portfolio/:id'
              element={<PortfolioDisplay />}
            />
            <Route
              path='/tour-org-portfolio/:id'
              element={<OrganizationPortfolioDisplay />}
            />
            <Route path='/package/:id' element={<PackageDetails />} />
            <Route path='/package/create' element={<PackageCreator />} />

            <Route path='/admin/requests' element={<Requests />} />
            <Route
              path='/admin/requests/tourguide/:id'
              element={<ReqSpecificTourGuide />}
            />
            <Route
              path='/admin/requests/tourorg/:id'
              element={<ReqSpecificTourOrg />}
            />
            <Route path='/admin/help/queries' element={<HelpQueries />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
