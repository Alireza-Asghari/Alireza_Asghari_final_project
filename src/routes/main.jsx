import HomePage from '../components/HomePage'
import BestSelling from '../components/BestSelling/BestSelling'
import NewTitle from '../components/NewTitle/NewTitle'
import  Criminal from '../components/criminal/criminal'
import  Horror from '../components/horror/horror'
import Fiction from '../components/fiction/fiction'
import ItemContentPage from '../components/BestSelling/itemContentPage'

export const routes=[
    {path:'/Home-page', exact:true, component:HomePage },
    {path:'/Bestselling', exact:true, component:BestSelling},
    {path:'/Newtitle', exact:true, component:NewTitle},
    {path:'/criminal', exact:true, component:Criminal},
    {path:'/horror', exact:true, component:Horror},
    {path:'/fiction', exact:true, component:Fiction},
    {path:'/Bestselling/Itemcontentpage', exact:true, component:ItemContentPage},
]