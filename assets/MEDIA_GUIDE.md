# 📸 HƯỚNG DẪN THAY ẢNH & VIDEO

## 🎯 Mục tiêu
Thay thế tất cả ảnh stock bằng ảnh thật của Taya Food để tăng độ tin cậy và chuyên nghiệp.

---

## 📁 Cấu trúc thư mục

```
assets/
├── images/
│   ├── hero/
│   │   └── hero-bg.jpg          # Ảnh nền hero (1920x1080, tối)
│   ├── about/
│   │   └── factory.jpg          # Ảnh nhà máy (800x600)
│   ├── products/
│   │   ├── sauce-bbq.jpg        # Xốt BBQ (600x600)
│   │   ├── sauce-seafood.jpg    # Xốt hải sản
│   │   ├── powder-cheese.jpg    # Bột phô mai
│   │   ├── powder-soup.jpg      # Bột soup
│   │   ├── nuts-cashew.jpg      # Hạt điều
│   │   └── nuts-peanut.jpg      # Đậu phộng
│   ├── capacity/
│   │   ├── machine-powder.jpg   # Máy đóng gói bột
│   │   ├── machine-sauce.jpg    # Máy chiết rót xốt
│   │   └── lab-rd.jpg           # Phòng Lab R&D
│   ├── certificates/
│   │   └── iso-22000.jpg        # Giấy chứng nhận ISO
│   └── logo/
│       ├── logo.png             # Logo chính (PNG trong suốt)
│       ├── logo-white.png       # Logo trắng
│       └── favicon.png          # Favicon 32x32
├── videos/
│   └── hero-video.mp4           # Video hero (5-8s, 1080p)
└── docs/
    ├── TAYAFOOD_CATALOG.pdf     # Catalog sản phẩm
    └── TAYAFOOD_PROFILE.pdf     # Hồ sơ năng lực
```

---

## 🖼️ Yêu cầu kỹ thuật cho ảnh

### Hero Background
- **Kích thước:** 1920 x 1080 px (hoặc lớn hơn)
- **Định dạng:** JPG (chất lượng 80-90%)
- **Dung lượng:** < 500KB
- **Nội dung gợi ý:** 
  - Dây chuyền sản xuất đang chạy
  - Cảnh rưới xốt lên món ăn (slow-motion)
  - Team R&D đang làm việc

### Ảnh sản phẩm
- **Kích thước:** 600 x 600 px (vuông)
- **Định dạng:** JPG hoặc PNG (nền trong suốt tốt hơn)
- **Dung lượng:** < 100KB mỗi ảnh
- **Nội dung:**
  - Sản phẩm đặt trên nền trắng/sáng
  - Có thể thêm món ăn sử dụng sản phẩm

### Ảnh nhà máy/máy móc
- **Kích thước:** 800 x 600 px
- **Ánh sáng:** Sáng, sạch sẽ
- **Góc chụp:** Rộng, thể hiện quy mô

---

## 🎬 Yêu cầu cho Video Hero

### Thông số kỹ thuật
- **Độ dài:** 5-8 giây (loop)
- **Độ phân giải:** 1920 x 1080 (Full HD)
- **Định dạng:** MP4 (H.264)
- **Dung lượng:** < 5MB
- **Âm thanh:** Không cần (muted)

### Nội dung gợi ý (chọn 1)
1. **Slow-motion xốt:** Rưới xốt lên món ăn
2. **Dây chuyền:** Máy đóng gói đang chạy
3. **Nguyên liệu:** Ớt, tiêu, tỏi... đang rơi
4. **Team:** Nhân viên đang kiểm tra sản phẩm

### Cách quay bằng điện thoại
1. Dùng chế độ 60fps hoặc slow-motion
2. Đặt điện thoại cố định (tripod)
3. Đảm bảo ánh sáng đủ
4. Quay 10-15 giây, cắt lấy 5-8 giây đẹp nhất

---

## 🔄 Cách thay ảnh trong code

### 1. Hero Background
Mở `style.css`, tìm và thay đổi:

```css
.hero {
    background: url('assets/images/hero/hero-bg.jpg') center/cover;
}
```

### 2. Ảnh sản phẩm
Mở `index.html`, tìm các thẻ `<img>` trong section products:

```html
<!-- Thay đổi từ -->
<img src="https://images.unsplash.com/photo-xxx" alt="Xốt BBQ">

<!-- Thành -->
<img src="assets/images/products/sauce-bbq.jpg" alt="Xốt BBQ">
```

### 3. Video Hero
Mở `index.html`, tìm thẻ `<video>`:

```html
<video class="hero-video" autoplay muted loop playsinline 
       poster="assets/images/hero/hero-bg.jpg">
    <source src="assets/videos/hero-video.mp4" type="video/mp4">
</video>
```

---

## ✅ Checklist thay ảnh

### Bắt buộc
- [ ] Hero background (hoặc video)
- [ ] Ảnh nhà máy (About section)
- [ ] 6 ảnh sản phẩm chính
- [ ] Logo PNG trong suốt
- [ ] Favicon

### Khuyến khích
- [ ] Video hero 5-8s
- [ ] Ảnh máy móc (4 ảnh)
- [ ] Ảnh phòng Lab R&D
- [ ] Ảnh team/nhân sự
- [ ] Ảnh giấy chứng nhận ISO

---

## 🛠️ Công cụ tối ưu ảnh

### Online (Miễn phí)
- **TinyPNG:** https://tinypng.com/ (nén ảnh)
- **Squoosh:** https://squoosh.app/ (resize & nén)
- **Remove.bg:** https://remove.bg/ (xóa nền)

### Chuyển đổi video
- **HandBrake:** Nén video MP4
- **Canva:** Tạo video đơn giản

---

## 📞 Hỗ trợ

Nếu cần hỗ trợ chụp ảnh/quay video chuyên nghiệp, liên hệ studio nhiếp ảnh sản phẩm.
