import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import AddPackage from './Pages/AddPackage/AddPackage';
import AddReview from './Pages/AddReview/AddReview';
import AllOrders from './Pages/AllOrders/AllOrders';
import BookPackage from './Pages/BookPackage/BookPackage';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import MyOrders from './Pages/Myorders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="app">
    <AuthProvider>
      <BrowserRouter>
      <div className="wrapper">
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/myOrders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path='/allOrders'>
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path='/addPackage'>
            <AddPackage></AddPackage>
          </PrivateRoute>
          <PrivateRoute path='/addReview'>
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path='/package/:id'>
            <BookPackage></BookPackage>
          </PrivateRoute>
          <Route path='/login'>
           <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
     </div>
     <Footer></Footer>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
