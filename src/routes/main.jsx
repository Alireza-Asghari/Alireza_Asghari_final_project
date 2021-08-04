import HomePage from '../components/HomePage'
import BestSelling from '../components/BestSelling/BestSelling'
import NewTitle from '../components/NewTitle/NewTitle'
import Criminal from '../components/criminal/criminal'
import Horror from '../components/horror/horror'
import Fiction from '../components/fiction/fiction'
import ItemContentPage from '../components/BestSelling/itemContentPage'
import LoginPage from '../pages/login'
import Basket from '../pages/basket'
import CriminalSinglePage from '../components/criminal/CriminalSinglePage'

export const routes = [
    { path: '/Home-page', exact: true, component: HomePage },
    { path: '/best-selling/:id', exact: true, component: ItemContentPage },
    { path: '/best-selling', exact: true, component: BestSelling },
    { path: '/login/:id', exact: true, component: Basket },
    { path: '/Newtitle', exact: true, component: NewTitle },
    { path: '/criminal', exact: true, component: Criminal },
    { path: '/criminal/:id', exact: true, component: CriminalSinglePage },
    { path: '/horror', exact: true, component: Horror },
    { path: '/fiction', exact: true, component: Fiction },
    { path: '/login', exact: true, component: LoginPage },
]