const products = [
    {
        id: "1",
        nombre: "SALUD MENTAL Y FE",
        stock: 5,
        editorial: "E625",
        sku: "9781954149168",
        edicion: "2022",
        img: 'https://libreriapeniel.com/wp-content/uploads/2023/03/salud-mental-y-fe.jpg',
        valor: 4425.69,
        categoria: "libros"
    }
    ,
    {
        id: "2",
        nombre: "TIEMPO Y ETERNIDAD",
        stock: 5,
        editorial: "Peniel",
        sku: "9789875576841",
        edicion: "2022",
        img: 'https://libreriapeniel.com/wp-content/uploads/2022/07/tiempo-y-eternidad.jpg',
        valor: 3734.67,
        categoria: "libros"
    }
    ,
    {
        id: "3",
        nombre: "REALIDAD ESPIRITUAL U OBSESION",
        stock: 10,
        editorial: "Peniel",
        sku: "9781956959390",
        edicion: "2023",
        img: 'https://libreriapeniel.com/wp-content/uploads/2023/03/REALIDAD-ESPIRITUAL-U-OBSESION.jpg',
        valor: 3134.86,
        categoria: "libros"
    }
    ,
    {
        id: "4",
        nombre: "VICTORIAS ESPIRITUALES EN EL ALMA",
        stock: 10,
        editorial: "Hojas Del Sur",
        sku: "9789875576858",
        edicion: "2024",
        img: 'https://libreriapeniel.com/wp-content/uploads/2022/08/victorias-espirituales-en-el-alma-1.jpg',
        valor: 3163.36,
        categoria: "libros"
    }
    ,
    {
        id: "5",
        nombre: "EL DIA QUE MI ALMA LE BESO",
        stock: 15,
        editorial: "Hojas Del Sur",
        sku: "9789878916415",
        edicion: "2023",
        img: 'https://libreriapeniel.com/wp-content/uploads/2023/04/el-dia-que-mi-alma-le-beso.jpg',
        valor: 4500,
        categoria: "libros"
    },
    {
        id: "6",
        nombre: "Biblia Del Ministro, RV1960 -Piel Negra",
        stock: 15,
        editorial: "Holman",
        sku: "9781535985017",
        edicion: "2023",
        img: 'https://libreriapeniel.com/wp-content/uploads/2021/11/biblia-del-ministro-negra.jpg',
        valor: 7000,
        categoria: "biblias"
    },
    {
        id: "7",
        nombre: "Biblia, NVI, Letra Grande, Con Cierre -Piel Negra",
        stock: 15,
        editorial: "Peniel",
        sku: "9781949238938",
        edicion: "2023",
        img: 'https://libreriapeniel.com/wp-content/uploads/2022/06/BIBLIA-NVI-LETRA-GIGANTE-NEGRO-ZIPER-1.jpg',
        valor: 12000,
        categoria: "biblias"
    },
    {
        id: "8",
        nombre: "Biblia, Hispanoamericana -Piel Marron",
        stock: 15,
        editorial: "Hojas Del Sur",
        sku: "9788480833288",
        edicion: "2023",
        img: 'https://libreriapeniel.com/wp-content/uploads/2022/11/marron.webp',
        valor: 17500,
        categoria: "biblias"
    }
]

export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById = (itemId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id == itemId ))
        },500)        
    })
}

export const getProductByCategory = (categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod=> prod.categoria == categoryId))
        },500)
    })
}