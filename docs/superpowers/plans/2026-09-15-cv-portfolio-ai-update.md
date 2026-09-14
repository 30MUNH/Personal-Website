# Cập nhật Portfolio & CV Chuẩn ATS (Fullstack & AI Engineer) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Cập nhật thông tin toàn diện trên website portfolio và tạo bản PDF CV tải về chuẩn ATS (công thức Google XYZ), tích hợp kỳ thực tập AI tại Vinsmart Future (VSF), chứng chỉ đồng cấp VinUni & Vingroup (chuẩn SFIA), và dự án flagship RoboPlanner.

**Architecture:** 
1. Cập nhật `src/data/portfolio.js` và các React components (`Hero.jsx`, `Education.jsx`, `Skills.jsx`, `Experience.jsx`) để tích hợp mảng AI và định vị kép Fullstack & AI.
2. Thiết kế mẫu CV in ấn A4 2 trang (`scripts/cv-template.html`) chuẩn ATS không watermark và script Python (`scripts/generate_cv.py`) gọi Headless Chrome/Edge xuất file vector PDF `public/CV_NguyenDinhTienManh.pdf`.
3. Kiểm thử với `oxlint`, `pypdf` trích xuất text, và `npm run build` kiểm tra bundle sản phẩm.

**Tech Stack:** React 19, Tailwind CSS 4, Framer Motion, Lucide React, Python 3.10+, Headless Microsoft Edge/Chrome, pypdf, oxlint, Vite.

## Global Constraints
- Mã nguồn React phải tuân thủ chuẩn oxlint, không có unused imports hoặc syntax warning.
- File PDF sinh ra phải là 2 trang A4 chuẩn (210mm × 297mm), text vector copy được tiếng Việt, không bị cắt dòng giữa chừng giữa trang 1 và trang 2.
- Bảo toàn toàn bộ liên kết mạng xã hội, thông tin liên lạc và dự án hiện có.

---

### Task 1: Cập nhật dữ liệu Portfolio (`src/data/portfolio.js`)

**Files:**
- Modify: `src/data/portfolio.js`

**Interfaces:**
- Consumes: Thông tin VSF, VinUni AI Thực chiến, RoboPlanner repo/demo.
- Produces: `portfolioData` đầy đủ các trường mới: `personalInfo.titles`, `about.objective`, `stats`, `skills`, `experience`, `education`, `certifications`, `projects`.

- [ ] **Step 1: Cập nhật nội dung trong `src/data/portfolio.js`**
  - Cập nhật `titles`: `["AI Software Engineer", "Fullstack & AI Developer Intern"]`.
  - Cập nhật `tagline`: `"Sinh viên năm 4 Kỹ thuật phần mềm – FPT University | Đam mê AI Agents, LLM Integration & Hệ thống Web Full-stack (ReactJS, NestJS)"`.
  - Cập nhật `about.objective`: Nhấn mạnh định vị Fullstack & AI Engineer, tự động hóa thông minh.
  - Cập nhật `stats`: `6+` Dự án, `5.5` Tháng thực tập, `12+` Công nghệ, `1` Chứng chỉ AI thực chiến.
  - Cập nhật `skills`: Thêm nhóm `AI & Agentic Systems` (LangGraph, Python, Evaluation) trước `Frontend`, `Backend & Bổ trợ`, `Công cụ & Khác`.
  - Cập nhật `experience`: Thêm Vinsmart Future (VSF) - AI Intern (Tháng 7/2026 – Tháng 8/2026) lên đầu.
  - Cập nhật `education`: Bổ sung cấu trúc chứa cả Trường Đại học FPT và Chứng chỉ Đào tạo Nhân tài AI Thực chiến (Vingroup & VinUni).
  - Cập nhật `projects`: Thêm `RoboPlanner` (`proj-roboplanner`) lên đầu với `featured: true`.

- [ ] **Step 2: Kiểm tra cú pháp dữ liệu**
  Run: `npm run lint`
  Expected: Không có lỗi cú pháp trong `src/data/portfolio.js`.

- [ ] **Step 3: Commit**
  ```bash
  git add src/data/portfolio.js
  git commit -m "feat(data): cập nhật dữ liệu portfolio với VSF, VinUni AI20K và RoboPlanner"
  ```

---

### Task 2: Nâng cấp các UI Component hiển thị AI & Chứng chỉ

**Files:**
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/Education.jsx`
- Modify: `src/components/Skills.jsx`
- Modify: `src/components/Experience.jsx`

**Interfaces:**
- Consumes: `portfolioData` từ Task 1.
- Produces: Giao diện web phong phú, hiện đại, hiển thị cả học vấn và chứng chỉ Vingroup, timeline 2 mốc kinh nghiệm, lưới 4 nhóm kỹ năng.

- [ ] **Step 1: Cập nhật `Hero.jsx`**
  - Thêm hoặc điều chỉnh floating badges hiển thị thẻ AI Agent / LangGraph bên cạnh ReactJS và NestJS.
  - Đảm bảo hiển thị danh xưng mới `Fullstack & AI Developer Intern`.

- [ ] **Step 2: Cập nhật `Education.jsx`**
  - Hiển thị danh mục Học vấn (Đại học FPT) và Chứng chỉ chuyên sâu (Chứng chỉ Đào tạo Nhân tài AI Thực chiến của Vingroup & VinUni đồng cấp) với huy hiệu (Badge) và icon nổi bật.

- [ ] **Step 3: Cập nhật `Skills.jsx`**
  - Điều chỉnh grid layout (`md:grid-cols-2 lg:grid-cols-4` hoặc `2x2`) để hiển thị trọn vẹn 4 nhóm kỹ năng gồm cả `AI & Agentic Systems`.

- [ ] **Step 4: Cập nhật `Experience.jsx`**
  - Kiểm tra timeline hiển thị mượt mà cả 2 mốc kinh nghiệm (VSF và FPT Software).

- [ ] **Step 5: Kiểm tra lint và build**
  Run: `npm run lint`
  Expected: PASS

- [ ] **Step 6: Commit**
  ```bash
  git add src/components/Hero.jsx src/components/Education.jsx src/components/Skills.jsx src/components/Experience.jsx
  git commit -m "feat(ui): nâng cấp components hiển thị mảng AI, chứng chỉ Vingroup và timeline VSF"
  ```

---

### Task 3: Xây dựng Template CV Chuẩn ATS và Script Render PDF

**Files:**
- Create: `scripts/cv-template.html`
- Create: `scripts/generate_cv.py`

**Interfaces:**
- Consumes: Nội dung chi tiết chuẩn công thức Google XYZ, định dạng in ấn A4.
- Produces: File `public/CV_NguyenDinhTienManh.pdf` chuẩn in ấn 2 trang, text vector copy được, không watermark.

- [ ] **Step 1: Tạo file `scripts/cv-template.html`**
  - Thiết lập CSS `@page { size: A4 portrait; margin: 0; }`.
  - Thiết kế trang 1:
    - Header đầy đủ họ tên, chức danh, liên hệ, links clickable.
    - Professional Summary súc tích, ấn tượng.
    - Technical Skills 4 nhóm rõ ràng (AI/Agentic, Frontend, Backend, Tools).
    - Work Experience: Vinsmart Future (VSF) và FPT Software (mô tả dạng bullet theo công thức Google XYZ).
  - Thiết kế trang 2:
    - Key Projects: RoboPlanner (AI20K-162), RailGo, OrbitTask, G4_TechnicalStore (kèm link GitHub/Demo, công nghệ, thành quả định lượng).
    - Education & Certifications: Đại học FPT và Chứng chỉ Đào tạo Nhân tài AI Thực chiến (Vingroup & VinUni đồng cấp, chuẩn SFIA).

- [ ] **Step 2: Tạo file `scripts/generate_cv.py`**
  - Script Python tự động tìm kiếm đường dẫn `msedge.exe` hoặc `chrome.exe`.
  - Thực thi lệnh headless print-to-pdf:
    `--headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="<dest_path>" --no-pdf-header-footer`
  - Ghi đè vào `public/CV_NguyenDinhTienManh.pdf`.

- [ ] **Step 3: Chạy script tạo file PDF**
  Run: `python scripts/generate_cv.py`
  Expected: File `public/CV_NguyenDinhTienManh.pdf` được tạo thành công.

- [ ] **Step 4: Commit**
  ```bash
  git add scripts/cv-template.html scripts/generate_cv.py
  git commit -m "feat(cv): thêm template HTML chuẩn ATS và script tự động render PDF"
  ```

---

### Task 4: Kiểm thử Xác minh File PDF & Website Build

**Files:**
- Test: `public/CV_NguyenDinhTienManh.pdf`
- Test: Website build `npm run build`

- [ ] **Step 1: Xác minh nội dung text và số trang PDF**
  Run script Python kiểm tra `pypdf`:
  - Số trang phải đúng bằng 2.
  - Các từ khóa trọng tâm có trong text: `Vinsmart Future`, `RoboPlanner`, `LangGraph`, `VinUni`, `Vingroup`, `SFIA`.

- [ ] **Step 2: Build website**
  Run: `npm run build`
  Expected: Vite build thành công, sinh ra `dist/` chứa `dist/CV_NguyenDinhTienManh.pdf` trùng khớp với `public/CV_NguyenDinhTienManh.pdf`.

- [ ] **Step 3: Commit cập nhật cuối**
  ```bash
  git add public/CV_NguyenDinhTienManh.pdf dist/
  git commit -m "chore: hoàn tất cập nhật CV PDF và build production"
  ```
