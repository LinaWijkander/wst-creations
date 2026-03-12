import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {creationLoader} from "../loaders/loaders";
import {Crafters} from "../components/pages/crafters";
import {Crochet} from "../components/pages/crochet";
import Ceramics from "../components/pages/ceramics";
import RandomCreation, {postLoader} from "../components/pages/randomCreation";
import Creation from "../components/pages/creation";
import AddCreation from "../components/pages/addCreation";
import Home from "../components/pages/home";
import About from "../components/pages/About";


export const router = createBrowserRouter(
    [{
        path: "/",
        element: <App/>,
        children: [
            {path: "/", element: <Ceramics/> /*<Home/>*/},
            {path: "/home", element: <Home/> /*Ta bort när gjort en home*/},
            {path: "/crafters", element: <Crafters/>},
            {path: "/about", element: <About/>},
            {path: "/ceramics", element: <Ceramics/>, /*loader: tableLoader*/},
            {path: "/crochet", element: <Crochet/>},
            {path: "/creations/:creationId", element: <Creation/>, loader:  ({params}) => {return creationLoader(params.creationId)}},
            {path: "/post/:postId", element: <RandomCreation/>, loader: postLoader},
            {path: "/addCreation", element: <AddCreation/>},
        ]
    }
    ],
    { basename: import.meta.env.BASE_URL.replace(/\/$/, '') }
)