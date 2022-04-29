import React from 'react';
import './App.css';
import { UserContextProvider } from './Contexts/user_context';
import { Switch, Route } from 'wouter';
import { HomePage } from './Pages/Home/HomePage';
import Login from './Pages/Auth/login';
import ProPage from './Pages/PRO/ProPage';
import ProfilePage from './Pages/Users/profile_page';
import CategoriesPage from './Pages/Categories/CategoriesPage';
import DesignerPage from './Pages/Designers/DesignerPage';
import DetailsPage from './Pages/DetailProduct/DetailsPage';
import OrderPage from './Pages/Order/OrderPage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { ProductContextProvider } from './Contexts/products_context';
import Register from './Pages/Auth/register';
import LeftNavbar from './Components/left_navbar';

function App() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <div className='dashboard'>
        <LeftNavbar/>

          <div>
            <NavBar />
            <Switch >
              <Route  path="/">
                {params => <HomePage />}
              </Route>
              <Route path="/login" component={Login} /> 
              <Route path="/register" component={Register} /> 
              <Route path="/pro" component={ProPage} />
              <Route path="/profile/:id" >
                {params => <ProfilePage id={params.id}/>}
              </Route>
              <Route path="/category/:id" component={CategoriesPage} />
              <Route path="/designers" component={DesignerPage} />
              <Route path="/order" component={OrderPage} />
              <Route path="/:id">
                {params => <DetailsPage prodID={params.id}/>}
              </Route>
            </Switch>
            <Footer/>
          </div>

        </div>
      </ProductContextProvider>
    </UserContextProvider>
  );
}

export default App;
