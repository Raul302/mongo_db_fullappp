import Actor from "../components/Actor";
import Address from "../components/Address";
import Category from "../components/Category";
import City from "../components/City";
import Customer from "../components/Customer";
import Dashboard from "../components/Dashboard";
// import Film from "../components/Film";
import Film_Actor from "../components/Film_Actor";
import Film_Category from "../components/Film_Category";
import Film_Text from "../components/Film_Text";
import Inventory from "../components/Inventory";
import Language from "../components/Language";
import Payments from "../components/Payments";
import Rentals from "../components/Rentals";
import Staff from "../components/Staff";
import Store from "../components/Store";

 var routes = [

    

    // <Route path="/actor" element={<Actor/>} />
    //   <Route path="/film" element={<Film/>} />
    //   <Route path="/category" element={<Category/>} />
    //   <Route path="/city" element={<City/>} />
    //   <Route path="/address" element={<Address/>} />
    //   <Route path="/customer" element={<Customer/>} />
    //   <Route path="/film_actor" element={<Film_Actor/>} />
    //   <Route path="/film_category" element={<Film_Category/>} />
    //   <Route path="/film_text" element={<Film_Text/>} />
    //   <Route path="/Inventory" element={<Film_Text/>} />
    //   <Route exact path="/" element={<Dashboard/>} />



    {
        name : 'Dashboard',
        url : '/',
        component: Dashboard,
        icon: 'far fa-circle nav-icon"',
        who_can_look:['admin','supervisor']
    },

];
export default routes;