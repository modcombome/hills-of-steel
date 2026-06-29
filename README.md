# Hack Hills Of Steel - GitHub Pages Static Page

Bộ code này được rút gọn từ HTML WordPress/Flatsome thành bản static sạch để đưa lên GitHub Pages.

## Cấu trúc

```text
.
├── index.html
├── SEO_AUDIT.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
└── README.md
```

## Điểm đã tối ưu

- Xóa CSS/JS WordPress, Flatsome, Dashicons, Emoji, jQuery, wpDiscuz.
- Dùng HTML semantic: `header`, `main`, `article`, `section`, `aside`, `footer`.
- Tối ưu title còn 51 ký tự: `Tải Hack Hills Of Steel v8.7.2 Full Tiền, Kim Cương`.
- Meta description 131 ký tự, rõ keyword chính và intent tìm kiếm.
- Có Open Graph, Twitter Card, canonical, robots.
- Có JSON-LD sạch: Organization, WebSite, WebPage, Article, SoftwareApplication, FAQPage, BreadcrumbList.
- CSS tách riêng, mobile-first, không dùng framework ngoài.
- JS nhẹ, chỉ dùng để highlight mục lục.
- Ảnh có `width`, `height`, `alt`, `loading="lazy"` để tốt hơn cho Core Web Vitals.

## Cách đăng lên GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload toàn bộ file trong thư mục này.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/root`.
6. Bấm **Save** và chờ GitHub tạo link Pages.

## Lưu ý canonical

Canonical hiện đang trỏ về bài gốc:

```html
<link rel="canonical" href="https://modcombo.me/hills-of-steel/">
```

Nếu đây là bản mirror/entity để hỗ trợ bài chính thì giữ canonical về MODCOMBO. Nếu muốn GitHub Pages index độc lập, hãy đổi canonical sang URL GitHub Pages.
