// creating an object take array [ ]
// we use cully braces in the array because each navlink has add on information to it,thne give it a path

import { Handshake } from "lucide-react";

// duplat shift,alt, down key
const K = {
 NAVLINKS: [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about-us"
    },
    {
        name: "Collection",
        path: "/collection"
    },
    {
        name: "Contact",
        path: "/contact-us"
    },
   
 ],

 SERVICES:[
    {
        title:"Amazing Deals",
        discription: "Far far away, behind the word mountains, far from the countries Vokalia.",
        bgColor: "#F5EBEB",
        iconBg: "#CB9696"
    },

        {
            title:"Quality Furniture",
        discription: "Far far away, behind the word mountains, far from the countries Vokalia.",
         bgColor: "#DCEBDD",
        iconBg: "#CB9696",
        },

        {
            title:"Modern Design",
        discription: "Far far away, behind the word mountains, far from the countries Vokalia.",
        bgColor: "#F5EFD8",
        iconBg: "#CB9696",
        },

        {
            title:"Best Support",
        discription: "Far far away, behind the word mountains, far from the countries Vokalia.",
        bgColor: "#F4E6D8",
        iconBg: "#CB9696",
        }
    
 ]
};

export default K;