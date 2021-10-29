import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Orders/Order';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import SingleProduct from './components/SingleProduct/SingleProduct';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/products/:id">
              <SingleProduct></SingleProduct>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <Manage></Manage>
            </PrivateRoute>
            <PrivateRoute path="/addProduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
