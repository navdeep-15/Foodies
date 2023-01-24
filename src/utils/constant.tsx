import localImages from "./localImages"

const MENU_DATA = [
    {
        title: 'starters',
        data: [
            {
                name: 'paneer tikka',
                price: '₹220',
                image: localImages?.PANEERTIKKA,
                type: 0
            },
            {
                name: 'mushroom tikka',
                price: '₹285',
                image: localImages?.MUSHROOMTIKKA,
                type: 0
            },
            {
                name: 'achari chaap',
                price: '₹115',
                image: localImages?.ACHARICHAAP,
                type: 0
            },
            {
                name: 'afghani chaap',
                price: '₹135',
                image: localImages?.AFGHANICHAAP,
                type: 0
            },
        ]
    },
    {
        title: 'main course',
        data: [
            {
                name: 'dal makhani',
                price: '₹154',
                image: localImages?.DALMAKHANI,
                type: 1
            },
            {
                name: 'yellow dal tadka',
                price: '₹143',
                image: localImages?.DALTADKA,
                type: 1
            },
            {
                name: 'kasmiri dum aloo',
                price: '₹225',
                image: localImages?.DUMALOO,
                type: 1
            },
            {
                name: 'matar mushroom',
                price: '₹267',
                image: localImages?.MATARMUSHROOM,
                type: 1
            },
        ]
    },
    {
        title: 'breads',
        data: [
            {
                name: 'tandoori roti',
                price: '₹15',
                image: localImages?.TANDOORIROTI,
                type: 2
            },
            {
                name: 'butter tandoori roti',
                price: '₹20',
                image: localImages?.BUTTERTANDOORIROTI,
                type: 2
            },
            {
                name: 'missi roti',
                price: '₹25',
                image: localImages?.MISSIROTI,
                type: 2
            },
            {
                name: 'butter naan',
                price: '₹35',
                image: localImages?.BUTTERNAAN,
                type: 2
            },
        ]
    },
    {
        title: 'rice and biryani',
        data: [
            {
                name: 'kasmiri pulao',
                price: '₹220',
                image: localImages?.KASHMIRIPULAO,
                type: 3
            },
            {
                name: 'plain rice',
                price: '₹85',
                image: localImages?.RICE,
                type: 3
            },
            {
                name: 'matar pulao',
                price: '₹125',
                image: localImages?.MATARPULAO,
                type: 3
            },
            {
                name: 'curd rice',
                price: '₹135',
                image: localImages?.CURDRICE,
                type: 3
            },
        ]
    },
]

export default {
    MENU_DATA
}