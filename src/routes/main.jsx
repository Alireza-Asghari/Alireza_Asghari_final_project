import HomePage from '../components/HomePage'
import BestSelling from '../components/BestSelling/BestSelling'
import NewTitle from '../components/NewTitle/NewTitle'
import  Criminal from '../components/criminal/criminal'
import  Social from '../components/Social/social'
import Fiction from '../components/fiction/fiction'

export const routes=[
    {path:'/Home-page', exact:'true', component:HomePage },
    {path:'/Bestselling', exact:'true', component:BestSelling},
    {path:'/Newtitle', exact:'true', component:NewTitle},
    {path:'/criminal', exact:'true', component:Criminal},
    {path:'/social', exact:'true', component:Social},
    {path:'/fiction', exact:'true', component:Fiction},
]