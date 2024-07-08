window.addEventListener("load", function () {
    fetch("https://raw.githubusercontent.com/vtrung111203/promotion_info/main/promotion_info.json")
    .then(function(response) {
        response.json()
        .then(function(json){
            const promotion = document.getElementById("promotion_list");
            promotion.innerHTML= '';
            for (let index = 0; index < json.length; index++){
                promotion.innerHTML += `
                <div class = "promotion_1">
                    <img src=${json[index].picture}></img>
                    <div class="promotion_detail">
                        <h3>${json[index].promotion_name}</h3>
                        <p>${json[index].promotion_info}</p>
                    </div>
                    <button type="button" class="sign_up_promo" onclick="togglePopup1()">Đăng ký khuyến mãi</button>
                </div>

                <div>
                        <h3>${json[index].title}</h3>
                        
                </div>

            `;}
        });
    });
})




// window.addEventListener("load", function () {
//     fetch("https://raw.githubusercontent.com/vtrung111203/promotion_info/main/promotion_info.json")
//     .then(function(response) {
//         response.text()
//         .then(function(text) {
//             // Parse JSON từ dữ liệu text
//             const json = JSON.parse(text);
//             const promotion = document.getElementById("promotion");
//             promotion.innerHTML = '';
//             for (let index = 0; index < json.length; index++) {
//                 promotion.innerHTML += `
//                 <div class="promotion_1">
//                     <img src="${json[index].picture}">
//                     <div class="promotion_detail">
//                         <h3>${json[index].promotion_name}</h3>
//                         <p>${json[index].promotion_info}</p>
//                     </div>
//                     <button type="button" class="sign_up_promo" onclick="togglePopup1()">Đăng ký khuyến mãi</button>
//                 </div>
//                 `;
//             }
//         })
//         .catch(function(error) {
//             console.log('Fetch error: ', error);
//         });
//     })
//     .catch(function(error) {
//         console.log('Fetch error: ', error);
//     });
// });
