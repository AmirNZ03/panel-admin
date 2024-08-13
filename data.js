let xAxisData=[
    {name:'Jan',
        "Sale":112_000

    },
    {name:'Feb',
        "Sale":99_000

    },
    {name:'Mar',
        "Sale":12_000

    },
    {name:'Apr',
        "Sale":100_000

    },{name:'May',
        "Sale":54_000

    },
    {name:'Jun',
        "Sale":24_000

    },
    {name:'Jul',
        "Sale":72_000

    },
    {name:'Agu',
        "Sale":16_000

    },
    {name:'Sep',
        "Sale":62_000

    },
    {name:'Oct',
        "Sale":42_000

    },
    {name:'Nov',
        "Sale":78_000

    },
    {name:'Dec',
        "Sale":90_000

    }
]
const newMembers=[
    {id:1,username:'Amir',
    title:'developer',
    img:'logo192.png'
    },
    {id:2,username:'Ali',
        title:'developer',
        img:'logo192.png'
        },
        {id:3,username:'Hasan',
            title:'engginer',
            img:'logo192.png'
            },
            {id:4,username:'Amin',
                title:'developer',
                img:'logo192.png'
                },
]
const transactions=[
    {id:1,
    customer:"amir",
    date:"22 mar 2022",
    amount:123,
    status:'declined',
    img:'logo192.png'
    },
    {id:2,
        customer:"ali",
        date:"22 mar 2023",
        amount:690,
        status:'approved',
        img:'logo192.png'
        },
        {id:3,
            customer:"milad",
            date:"22 mar 2011",
            amount:970,
            status:'declined',
            img:'logo192.png'
            },
            {id:4,
                customer:"hasan",
                date:"12 feb 2024",
                amount:430,
                status:'pending',
                img:'amir.jpg'
                }
]
let userRows=[
    {
        id:1,
        username:"amir",
        avatar:"logo192.png",
        status:"active",
        transaction:"$129",
        email:'amir2gmail.com'
    },
    {
        id:2,
        username:"hadi",
        avatar:"logo192.png",
        status:"non-active",
        transaction:"$67",
        email:'amir2gmail.com'
    },
    {
        id:3,
        username:"milad",
        avatar:"logo192.png",
        status:"active",
        transaction:"$111",
        email:'amir2gmail.com'
    },
    {
        id:4,
        username:"hasan",
        avatar:"logo192.png",
        status:"active",
        transaction:"$139",
        email:'amir2gmail.com'
    },
    {
        id:5,
        username:"ali",
        avatar:"logo192.png",
        status:"non-active",
        transaction:"$130",
        email:'amir2gmail.com'
    }
]
let products=[
    {
        id:1,
        title:'Asus',
        avatar:'asus.jfif',
        price:800
    },
    {
        id:2,
        title:'lenovo',
        avatar:'lenovo.jfif',
        price:800
    },
    {
        id:3,
        title:'Acer',
        avatar:'acer.jfif',
        price:800
    },
    {
        id:4,
        title:'hp',
        avatar:'hp.jfif',
        price:800
    },
]
const productsData=[
    {
        name:'Jan',
        sales:4000,
    },
    {
        name:'Feb',
        sales:3000,
    },
    {
        name:'Mar',
        sales:5000,
    },

]
export {xAxisData,newMembers,transactions,userRows,products,productsData}