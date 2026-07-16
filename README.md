# Nguyễn Đình Tiến Mạnh - Personal Portfolio Website

Đây là trang web portfolio cá nhân giới thiệu về **Nguyễn Đình Tiến Mạnh** — sinh viên năm 4 chuyên ngành Kỹ thuật phần mềm tại FPT University, với kinh nghiệm thực tập Fullstack tại FPT Software (dự án RailGo). 

Website được xây dựng theo phong cách **Minimalist Modern (Bold Accent)**, hiển thị kỹ năng, kinh nghiệm làm việc, học vấn và các dự án cá nhân nổi bật (RailGo, G4_TechnicalStore, OrbitTask).

## 🧱 Tech Stack Bắt Buộc

- **Core**: ReactJS (Vite)
- **Styling**: Tailwind CSS (v4) với `@tailwindcss/vite` plugin
- **Animations**: Framer Motion (Entrance animations, floating elements, rotating ring...)
- **Component Styling**: `class-variance-authority` (cva) & `tailwind-merge`
- **Icons**: Lucide React & Custom SVG brand logos
- **Fonts**: Google Fonts - Inter, Calistoga, JetBrains Mono

## ✨ Các Tính Năng Nổi Bật

1. **Hiệu ứng mượt mà & Responsive**: Giao diện mobile-first, hoàn hảo trên mọi kích thước màn hình.
2. **Animation Tinh Tế**: Sử dụng Framer Motion cho các chuyển động mượt, tự động tắt khi người dùng bật chế độ giảm chuyển động (`prefers-reduced-motion`).
3. **Featured Card**: Dự án chính **RailGo** được hiển thị nổi bật với viền gradient 2px bằng double-nested divs.
4. **Dark Inverted Section**: Section thống kê số liệu (Stats) và biểu ngữ CTA sử dụng tông màu tối (`#0F172A`) với dot-pattern texture nổi bật trên nền sáng chủ đạo.
5. **Contact Form Fallback**: Form liên hệ thông minh hoạt động client-side, tự động chuyển đổi thông tin thành liên kết `mailto:` gửi trực tiếp đến email cá nhân.

## 🛠️ Hướng Dẫn Chạy Local

### 1. Cài đặt các thư viện
Yêu cầu đã cài đặt NodeJS (v18 trở lên). Chạy lệnh sau để cài đặt dependencies:
```bash
npm install
```

### 2. Chạy ứng dụng ở chế độ Development
Chạy dev server để xem trực tiếp thay đổi:
```bash
npm run dev
```
Mặc định ứng dụng chạy tại: `http://localhost:5173/`

### 3. Build ứng dụng cho Production
Tạo bản build tối ưu hóa sẵn sàng deploy:
```bash
npm run build
```
Thư mục đầu ra sẽ là `/dist`.

## 🚀 Hướng Dẫn Deploy

### Cách 1: Deploy lên Vercel (Khuyến nghị)
1. Kết nối kho lưu trữ GitHub của bạn với Vercel.
2. Vercel sẽ tự động phát hiện project chạy bằng Vite.
3. Nhấn **Deploy** mà không cần thay đổi cấu hình nào khác. Dự án đã có sẵn cấu hình `vercel.json` phục vụ điều hướng SPA.

### Cách 2: Deploy lên Netlify
1. Đăng nhập Netlify và chọn "Import from Git".
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Nhấn deploy.
