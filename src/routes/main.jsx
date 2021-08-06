import HomePage from '../components/HomePage'
import BestSelling from '../components/BestSelling/BestSelling'
import NewTitle from '../components/NewTitle/NewTitle'
import NewTitleSinglePage from '../components/NewTitle/NewTitleSinglePage'
import Criminal from '../components/criminal/criminal'
import Horror from '../components/horror/horror'
import HorrorSinglePage from '../components/horror/HorroSinglePage'
import Fiction from '../components/fiction/fiction'
import ItemContentPage from '../components/BestSelling/itemContentPage'
import LoginPage from '../pages/login'
import Basket from '../pages/basket'
import CriminalSinglePage from '../components/criminal/CriminalSinglePage'
import FictionSinglePage from '../components/fiction/FictionSinglePage'
import BuyBasket from '../components/BuyBasket/BuyBasket'

export const routes = [

    { path: '/Home-page', exact: true, component: HomePage },
    { path: '/best-selling/:id', exact: true, component: ItemContentPage },
    { path: '/best-selling/:id/basket', exact: true, component: BuyBasket },
    { path: '/best-selling', exact: true, component: BestSelling },
    { path: '/login/:id', exact: true, component: Basket },
    { path: '/new-title', exact: true, component: NewTitle },
    { path: '/new-title/:id', exact: true, component: NewTitleSinglePage },
    { path: '/criminal', exact: true, component: Criminal },
    { path: '/criminal/:id', exact: true, component: CriminalSinglePage },
    { path: '/horror', exact: true, component: Horror },
    { path: '/horror/:id', exact: true, component: HorrorSinglePage },
    { path: '/fiction', exact: true, component: Fiction },
    { path: '/fiction/:id', exact: true, component: FictionSinglePage },
    { path: '/login', exact: true, component: LoginPage },
    
]