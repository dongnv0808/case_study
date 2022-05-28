// function showProduct(){
//     let data = JSON.parse(localStorage.getItem('DataProduct'));
//     let showArr = "";
//     for (let i = 0; i < data.length; i++) {
//         showArr +=
//     `
//     <tr>
//         <td>${i + 1}</td>
//         <td>${data[i].idproduct}</td>
//         <td>${data[i].image}</td>
//         <td>${data[i].name}</td>
//         <td>${data[i].quantity}</td>
//         <td>${data[i].type}</td>
//         <td>${data[i].price}</td>
//         <td>
//             <button onclick="editProduct(${i})">Sửa</button>
//         </td>
//         <td>
//             <button onclick="deleteProduct(${i})">Xóa</button>
//         </td>
//     </tr>
//     `
//     }
//     document.getElementById("managent-product-table").innerHTML = showArr;
// }

function showProductDiv(){
    let data = JSON.parse(localStorage.getItem('DataProduct'));
    let showArr = "";
    for (let i = 0; i < data.length; i++) {
        showArr +=
    `
        <div>${i + 1}</div>
        <div>${data[i].idproduct}</div>
        <div style="width:100%">${data[i].image}</div>
        <div>${data[i].name}</div>
        <div>${data[i].type}</div>
        <div>${data[i].quantity}</div>
        <div>${data[i].price}</div>
        <div>
            <button onclick="editProduct(${i})">Sửa</button>
        </div>
        <div>
            <button onclick="deleteProduct(${i})">Xóa</button>
        </div>
    `
    }
    document.getElementById("managent-product-div").innerHTML = showArr;
}