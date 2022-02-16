const hieu_ung_danh_chu = function(the_html_chua_chu, chu, thoiGianDoi) {
    this.the_html_chua_chu = the_html_chua_chu;
    this.chu = chu;
    this.tu = '';
    this.vi_tri_index_chu = 0;
    this.thoiGianDoi = parseInt(thoiGianDoi, 10);
    this.ham_danh_chu();
    this.dang_xoa_chu = false;
}

document.addEventListener('DOMContentLoaded', chay_ham);
function chay_ham() {
    const the_html_chua_chu = document.querySelector('.danh_chu');
    const chu = JSON.parse(the_html_chua_chu.getAttribute('data-chu'));
    const thoiGianDoi = the_html_chua_chu.getAttribute('data-thoiGianDoi');
    new hieu_ung_danh_chu(the_html_chua_chu, chu, thoiGianDoi);
}

// hieu_ung_danh_chu.prototype.ham_danh_chu = function () {
//     const index_chu_hien_tai = this.vi_tri_index_chu % this.chu.length;
//     const chu_hien_tai = this.chu[index_chu_hien_tai];
//     console.log(chu_hien_tai);
//     if(this.dang_xoa_chu) {
//         this.tu = chu_hien_tai.substring(0, this.tu.length - 1);
//     } else {
//         this.tu = chu_hien_tai.substring(0, this.tu.length + 1);
//     }
//    this.the_html_chua_chu.innerHTML = `<span class="tu">${this.tu}</span>`;
//     setTimeout(() => this.ham_danh_chu(), 500)
// }

hieu_ung_danh_chu.prototype.ham_danh_chu = function() {
    const index_chu_hien_tai = this.vi_tri_index_chu % this.chu.length;
    const chu_hien_tai = this.chu[index_chu_hien_tai];
    if(this.dang_xoa_chu) {
        this.tu = chu_hien_tai.substring(0, this.tu.length - 1);
    } else {
        this.tu = chu_hien_tai.substring(0, this.tu.length + 1);
    }
        this.the_html_chua_chu.innerHTML = `<span class="tu">${this.tu}</span>`
    let toc_do_danh_chu = 300;
    if(this.dang_xoa_chu) {
        toc_do_danh_chu = toc_do_danh_chu /2;
    }
   if(!this.dang_xoa_chu && this.tu === chu_hien_tai) {
        toc_do_danh_chu = this.thoiGianDoi;
        console.log(this.thoiGianDoi);
        this.dang_xoa_chu = true;
    } else if (this.dang_xoa_chu && this.tu === ''){
        this.dang_xoa_chu = false;
        this.vi_tri_index_chu++;
        toc_do_danh_chu = 200;
    }
   setTimeout(() => this.ham_danh_chu(), toc_do_danh_chu);
}