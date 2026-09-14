# Design Spec: Cập nhật Portfolio & CV Chuẩn ATS (Fullstack & AI Engineer)

- **Ngày tạo:** 15/09/2026
- **Tác giả:** Antigravity (Pair Programming with Nguyễn Đình Tiến Mạnh)
- **Mục tiêu:** Cập nhật thông tin website portfolio cá nhân và tạo bản PDF CV mới chuẩn quốc tế (ATS-friendly, công thức Google XYZ) tích hợp chương trình đào tạo Nhân tài AI Thực chiến của Vingroup, kỳ thực tập tại Vinsmart Future (VSF), chứng chỉ đồng cấp bởi VinUni & Vingroup, và dự án flagship RoboPlanner.

---

## 1. Định vị Nghề nghiệp & Chiến lược ATS

### 1.1 Định vị cốt lõi
- **Chức danh:** `Fullstack & AI Engineer Intern` / `AI Software Engineer`
- **Thông điệp:** Kỹ sư phần mềm sở hữu thế mạnh kép: Nền tảng kiến trúc web full-stack hiện đại (ReactJS, NestJS, TypeScript) kết hợp tư duy và năng lực phát triển AI Agent tự trị (LangGraph, Python, LLM Integration, Simulation & Evaluation).

### 1.2 Chiến lược vượt qua bộ lọc ATS (Applicant Tracking System)
- **Từ khóa kỹ thuật (Hard Keywords):** LangGraph, LangChain, AI Agent, Plan-and-Execute, ReAct, Claude API, Gemini API, PyBullet, MuJoCo, Python 3.11, FastAPI, WebSocket, ReactJS, NestJS, TypeScript, MongoDB, PostgreSQL, Tailwind CSS, Docker, Git, SFIA Framework, Automated Testing (pytest, Playwright), CI/CD.
- **Cấu trúc viết theo công thức Google XYZ:** "Accomplished [X], as measured by [Y], by doing [Z]" (Đạt được kết quả X, đo lường bởi chỉ số Y, bằng giải pháp kỹ thuật Z).
- **Định dạng file PDF:** Text vector chuẩn (selectable & searchable), phân cấp thẻ rõ ràng, không dùng đồ họa che khuất chữ, tối ưu hóa tỷ lệ chuyển đổi khi recruiter quét CV trong 6 giây đầu tiên.

---

## 2. Chi tiết Nội dung Cập nhật Portfolio Website

### 2.1 Cập nhật Dữ liệu (`src/data/portfolio.js`)
1. **`personalInfo`**:
   - `titles`: `["AI Software Engineer", "Fullstack & AI Developer Intern"]`
   - `tagline`: `"Sinh viên năm 4 Kỹ thuật phần mềm – FPT University | Đam mê AI Agents, LLM Integration & Hệ thống Web Full-stack (ReactJS, NestJS)"`
2. **`about`**:
   - `objective`: Cập nhật theo hướng tích hợp năng lực AI thực chiến và kiến trúc web full-stack giải quyết bài toán tự động hóa.
3. **`stats`**:
   - `value: "6+"`, `label: "Dự án hoàn thành"`
   - `value: "5.5"`, `label: "Tháng thực tập"`
   - `value: "12+"`, `label: "Công nghệ sử dụng"`
   - `value: "1"`, `label: "Chứng chỉ AI thực chiến"`
4. **`skills`**:
   - Bổ sung nhóm **AI & Agentic Systems**:
     - *AI Agents & Workflows (80%)*: LangGraph, LangChain, ReAct / Plan-and-Execute, Tool Calling.
     - *Python & AI Ecosystem (85%)*: Python 3.11, FastAPI, WebSocket, PyBullet, LLM APIs (Claude, Gemini).
     - *AI Evaluation & Testing (75%)*: Oracle Evaluation, Invariant Checking, Prompt Tuning, Guardrails.
   - Nhóm **Frontend**: ReactJS (85%), JavaScript (ES6+) (80%), HTML5 & CSS3/Tailwind (80%).
   - Nhóm **Backend & Bổ trợ**: NestJS (70%), TypeScript (75%), Java OOP (70%), PHP (60%).
   - Nhóm **Công cụ & Phương pháp**: Git/GitHub/GitLab (85%), Development Tools (85%), Automated Testing & CI/CD (70%).
5. **`experience`**:
   - Thêm mốc **Vinsmart Future (VSF)** (Tháng 7/2026 – Tháng 8/2026 | 6 tuần):
     - Role: *AI Intern*
     - Nhiệm vụ: Đánh giá chất lượng sản phẩm AI (AI Product Quality Assessment & Benchmarking), giải quyết các thử thách kỹ thuật (technical challenges) tối ưu hóa luồng AI và trải nghiệm tương tác thông minh.
   - Giữ mốc **FPT Software** (Tháng 1/2026 – Tháng 4/2026): *Fullstack Developer Intern* (Dự án RailGo).
6. **`education` & `certifications`**:
   - Học vấn: **Trường Đại học FPT** — Kỹ thuật phần mềm (2023 – Nay).
   - Chứng chỉ: **Chứng chỉ Đào tạo Nhân tài AI Thực chiến** — Cấp bởi **Tập đoàn Vingroup & Đại học VinUni đồng cấp** (2026), theo khung chuẩn SFIA quốc tế.
7. **`projects`**:
   - Thêm dự án Flagship lên đầu danh sách (`featured: true`):
     - **RoboPlanner (AI20K-162)**: Agent lập kế hoạch tác vụ robot kho bằng tiếng Việt.
     - Techs: `["LangGraph", "Python", "Claude API", "PyBullet", "FastAPI", "Three.js"]`
     - Links: GitHub Repo & Live Demo trên Render.

### 2.2 Cập nhật Giao diện Component
1. `Hero.jsx`: Cập nhật floating cards để phản ánh ReactJS, NestJS, và LangGraph/AI Agent.
2. `Education.jsx`: Bổ sung hiển thị thẻ chứng chỉ Vingroup & VinUni song hành cùng học vấn Đại học FPT.
3. `Skills.jsx`: Hiển thị 4 nhóm kỹ năng mượt mà, responsive trên mọi kích thước màn hình.
4. `Experience.jsx`: Hiển thị 2 mốc kinh nghiệm tại VSF và FPT Software.

---

## 3. Bản PDF CV Chuẩn ATS Quốc Tế

### 3.1 Bố cục & Typography
- **Khổ giấy:** A4 (210mm x 297mm), chuẩn in ấn 2 trang.
- **Màu sắc:** Primary: Deep Navy `#0F172A`, Accent: Royal Blue `#0052FF`, Neutral: Slate `#475569`, Background: White `#FFFFFF`.
- **Cấu trúc Trang 1:**
  - **Header:** Họ tên, Danh xưng kép (Fullstack & AI Engineer), Thông tin liên hệ, Links (Portfolio, GitHub, GitLab, Email, Phone).
  - **Tóm tắt chuyên môn (Professional Summary):** 3-4 dòng súc tích, định vị rõ giá trị đóng góp.
  - **Kỹ năng chuyên môn (Technical Skills):** Phân nhóm rõ ràng (AI/Agentic, Frontend, Backend, DevOps & Tools).
  - **Kinh nghiệm làm việc (Work Experience):**
    - Vinsmart Future (VSF) — AI Intern (Tháng 7/2026 – Tháng 8/2026).
    - FPT Software — Fullstack Developer Intern (Tháng 1/2026 – Tháng 4/2026).
- **Cấu trúc Trang 2:**
  - **Dự án tiêu biểu (Key Projects):**
    - *RoboPlanner (AI20K-162)* — AI Agent lập kế hoạch robot kho (LangGraph, Python, PyBullet).
    - *RailGo* — Hệ thống đặt vé tàu hỏa Full-stack (ReactJS, NestJS, MongoDB).
    - *OrbitTask* — Hệ thống quản lý công việc tích hợp Gemini API.
    - *G4_TechnicalStore* — E-commerce Microservices (NodeJS, TypeScript, React).
  - **Học vấn & Chứng chỉ (Education & Certifications):**
    - Đại học FPT: Cử nhân Kỹ thuật phần mềm.
    - Đại học VinUni & Tập đoàn Vingroup: Chứng chỉ Đào tạo Nhân tài AI Thực chiến.

### 3.2 Quy trình Render PDF
- Xây dựng template HTML/CSS chuyên nghiệp tại `scripts/cv-template.html`.
- Viết script Python `scripts/generate_cv.py` sử dụng Headless Microsoft Edge / Google Chrome với các flag:
  `--headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="public/CV_NguyenDinhTienManh.pdf" --no-pdf-header-footer`
- Kiểm thử file PDF sinh ra: Số trang đúng 2 trang, text sắc nét, copy được đầy đủ tiếng Việt có dấu.

---

## 4. Kế hoạch Kiểm thử & Xác minh (Verification Plan)
1. **Kiểm tra dữ liệu & code:**
   - Chạy `npm run lint` (`oxlint`) để đảm bảo code sạch, không có lỗi cú pháp.
   - Chạy `npm run build` để xác nhận bundle Vite thành công và file PDF được copy sang `dist/`.
2. **Kiểm tra trực quan website:**
   - Kiểm tra Hero, About, Skills, Experience, Education, Projects render chính xác, không vỡ layout.
3. **Kiểm tra file PDF:**
   - Sử dụng `pypdf` trích xuất text từ file PDF vừa tạo để kiểm tra đầy đủ các từ khóa (Vinsmart Future, VinUni, SFIA, RoboPlanner, LangGraph, v.v.).
