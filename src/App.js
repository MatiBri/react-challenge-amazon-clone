import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//ERROR PAGE 404
import ErrorPage from "./Components/error404";
//
//PUNTO - 2
import InfoProducto from "./Components/infoProducto";
//
//PUNTO - 3
import Profile from "./Components/profilePage";
//
//PUNTO - 4
import Footer from "./Components/Footer";
import Formulario from "./Components/formContact";
//

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          {/* PRODUCTOS VAN ACÁ - Punto 2 */}
          <Route path="/Product/:id">
            <Header />
            <InfoProducto />
            <Footer />
          </Route>
          {/* PROFILE PAGE - Punto 3 */}
          <Route path="/Profile">
            <Header />
            <Profile />
            <Footer />
          </Route>
          {/* FOOTER - Punto 4 */}
          <Route path="/Formulario">
            <Header />
            <Formulario />
            <Footer />
          </Route>
          {/* Si la ruta no está bien puesta, te envía al error 404 - Punto 1 */}
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          {/* En el parametro del Home, si no le ponemos exact, no nos permite poner la ruta * para errores 404. El exact desactiva el partial matching */}
          <Route path="*">
            <Header />
            <ErrorPage />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
