import Vue from 'vue';
import VueRouter from 'vue-router';
import WelcomeComponent from "./components/WelcomeComponent";
import StarWarsPeopleComponent from "./components/StarWarsPeopleComponent";
import StarWarsPlanetsComponent from "./components/StarWarsPlanetsComponent";
import StarWarsStarshipsComponent from "./components/StarWarsStarshipsComponent";

Vue.use(VueRouter);

export default new VueRouter({

   routes: [
       { path: '/', component: WelcomeComponent },
       { path: '/people', component: StarWarsPeopleComponent },
       { path: '/planets', component: StarWarsPlanetsComponent },
       { path: '/starships', component: StarWarsStarshipsComponent }
   ],
   mode: 'history'  // will not work on older browsers

});
