
const cardv = [
    {
        id: reebok,
        title: 'Starter',
        icon: '/images/pp.jpg',
//        redirectTo: 'https://www.example.com',
        price: 1200,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam distinctio ut reprehenderit velit! Ullam dicta ipsum libero veritatis repellendus necessitatibus?'
    
    },
    {
        id: adidas,
        title: 'Regular',
        icon: '/images/pp.jpg',
        redirectTo: 'https://www.example.com',
        price: 3000,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam distinctio ut reprehenderit velit! Ullam dicta ipsum libero veritatis repellendus necessitatibus?'
    },
    {
        id: pumba,
        title: 'third',
        icon: '/images/pp.jpg',
   //     redirectTo: 'https://www.example.com',
        price: 4000,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam distinctio ut reprehenderit velit! Ullam dicta ipsum libero veritatis repellendus necessitatibus?'
    },
]

const $template = document.getElementById("cardItemTemplate");
const $outputBox = document.getElementById("outputRenderbox");
const renderItemList = [];
const templateHtml = $template.innerHTML;

for (const key in cardv) {
    let listHtml = ""
    listHtml += templateHtml.replace(/{{my-id}}/g, cardv[key].id || '')
        .replace(/{{my-title}}/g, cardv[key].title || '')
        .replace(/{{my-img}}/g, cardv[key].icon || '')
        .replace(/{{my-description}}/g, cardv[key].description || '')
        .replace(/{{my-redirectTo}}/g, cardv[key].redirectTo || '')
        .replace(/{{my-price}}/g, cardv[key].price || '');

    renderItemList.push(listHtml);
}

$outputBox.innerHTML = renderItemList.join('');
console.log(templateHtml);


$template.remove();

