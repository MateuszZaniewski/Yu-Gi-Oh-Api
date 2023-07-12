import { createRouter, createWebHistory } from "vue-router";
import MainView from "../components/HelloWorld.vue";
import Register from "../components/Register.vue";
import SignIn from "../components/SignIn.vue";
import DetailsPage from "../components/DetailsPage.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainView,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/signin",
    name: "Signin",
    component: SignIn,
  },
  {
    path: "/Search",
    name: "Search",
    component: MainView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/:cardName',
    name: 'name',
    component: DetailsPage,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    component: MainView
  }
  
  // Add more routes here if needed
];

const router = createRouter({
  history: createWebHistory('/Yu-Gi-Oh-Api/'),
  mode: 'hash',
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
        console.log(getAuth().currentUser);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      console.log("You dont have acces");
      next("/signin");
    }
  } else {
    next();
  }
});

export default router;
