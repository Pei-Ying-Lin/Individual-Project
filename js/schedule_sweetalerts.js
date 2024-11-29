
// 綁定事件到圖片
document.querySelector('.schedule img').addEventListener('click',function(){
    Swal.fire({
        title: '<h3>課程名稱</h3>',
       
        html: `
        <div class="content">
            <img src="../img/Product page/Fruit Tart/fruit_tart3.jpg" class="pic" alt="pic">
            <p>Date: Wednesday, November XX - 11:00am - 1:30pm</p>
            <p>Address:台北市大安區忠孝東路四段101巷 </p>
            <p>費用: NT$ 2,800/人 </p>
        </div> 
        <div class="reservation">       
            <div class="link-1">
                <a href="product_info_1.html">課程內容 </a>
            </div>
            <div class="link-2">
                <a href="login.html">報名 </a>
            </div>
        </div>
        `,
        showConfirmButton: false,
        width: 480,   //跳出視窗大小
        customClass: {
          popup: 'popup1',      //幫彈出視窗命名class, 可用css 調整裡面
        }
    })
})

