export const portfolioData = {
  personalInfo: {
    fullName: "Nguyễn Đình Tiến Mạnh",
    titles: ["AI Software Engineer", "Fullstack & AI Developer Intern"],
    tagline: "Sinh viên năm 4 Kỹ thuật phần mềm – FPT University | Đam mê AI Agents, LLM Integration & Hệ thống Web Full-stack (ReactJS, NestJS)",
    cvLink: "/CV_NguyenDinhTienManh.pdf", // Real downloadable CV file path
    socials: {
      github: "https://github.com/30MUNH",
      gitlab: "https://gitlab.com/30MUNH",
      facebook: "https://www.facebook.com/nguyen.inh.tien.manh",
      instagram: "https://www.instagram.com/manhndt_pqqq/",
      email: "dunguyendinh910@gmail.com",
      phone: "0373325643"
    }
  },
  about: {
    objective: "Kỹ sư phần mềm định hướng AI với nền tảng Full-stack vững chắc (ReactJS, NestJS) kết hợp kinh nghiệm thực chiến phát triển các hệ thống AI Agent tự trị (LangGraph, Python). Mong muốn áp dụng tư duy giải quyết vấn đề thực tế, quy trình đánh giá sản phẩm AI và kiến trúc phần mềm hiện đại để tạo ra các giải pháp tự động hóa thông minh, mang lại giá trị thiết thực cho doanh nghiệp.",
    strengths: [
      {
        id: "strength-1",
        title: "Khả năng tự học nhanh & làm chủ công nghệ mới",
        description: "Chủ động học hỏi từ tài liệu chính thức, nhanh chóng nắm bắt và triển khai các công nghệ AI Agent (LangGraph), Python cũng như các framework web hiện đại theo yêu cầu dự án."
      },
      {
        id: "strength-2",
        title: "Tư duy logic & giải quyết bài toán thực tế",
        description: "Có nền tảng vững chắc giải quyết logic phức tạp từ thuật toán A*, quy trình lập kế hoạch tác vụ tự động đến tối ưu hóa truy vấn dữ liệu web và microservices."
      },
      {
        id: "strength-3",
        title: "Tinh thần trách nhiệm & kỷ luật cao",
        description: "Hoàn thành công việc đúng tiến độ, phối hợp nhóm hiệu quả và không ngừng học hỏi từ các mentor giàu kinh nghiệm tại FPT Software, VinUni & Vinsmart Future."
      }
    ]
  },
  stats: [
    { value: "6+", label: "Dự án hoàn thành" },
    { value: "5.5", label: "Tháng thực tập" },
    { value: "12+", label: "Công nghệ sử dụng" },
    { value: "1", label: "Chứng chỉ AI thực chiến" }
  ],
  skills: [
    {
      category: "AI & Agentic Systems",
      items: [
        { name: "AI Agents & Workflows", level: 80, details: "LangGraph, LangChain, ReAct / Plan-and-Execute loop, Tool Calling, State Machine" },
        { name: "Python & AI Ecosystem", level: 85, details: "Python 3.11, FastAPI, WebSocket, PyBullet Simulation, LLM APIs (Claude, Gemini, Ollama)" },
        { name: "AI Evaluation & Guardrails", level: 75, details: "Oracle Evaluation, Invariant Checking, Prompt Tuning, Benchmarking" }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "ReactJS", level: 85, details: "Component, Props, State, Hooks, React Router DOM, Context API, REST API integration" },
        { name: "JavaScript (ES6+) & TypeScript", level: 80, details: "Destructuring, async-await, static typing, interfaces, generics" },
        { name: "HTML5, CSS3 & Tailwind CSS", level: 85, details: "Flexbox, Grid, Responsive Design, Tailwind CSS, Modern UI/UX" }
      ]
    },
    {
      category: "Backend & Bổ trợ",
      items: [
        { name: "NestJS", level: 75, details: "Architecture, controllers, services, RESTful API design, Dependency Injection" },
        { name: "Databases (MongoDB / PostgreSQL)", level: 75, details: "Data modeling, CRUD optimization, indexing, session management" },
        { name: "Java (OOP) & PHP", level: 65, details: "OOP principles, exception handling, collections framework, basic web development" }
      ]
    },
    {
      category: "Công cụ & Quy trình",
      items: [
        { name: "Git & Version Control", level: 85, details: "Git CLI, branching, code merge, PR review, GitHub, GitLab" },
        { name: "Development & Testing Tools", level: 85, details: "VS Code, Postman, pytest, Playwright E2E, Docker basics" },
        { name: "Phương pháp & Tiêu chuẩn", level: 80, details: "Agile/Scrum, Code Review, Linting, Khung năng lực SFIA" }
      ]
    }
  ],
  experience: [
    {
      id: "exp-vsf",
      company: "Vinsmart Future (VSF)",
      role: "AI Intern",
      period: "Tháng 7/2026 – Tháng 8/2026 (6 tuần)",
      project: {
        name: "Đánh giá chất lượng sản phẩm & AI Technical Challenges",
        details: [
          "Tham gia quy trình đánh giá chất lượng sản phẩm AI (AI Product Evaluation & Quality Assessment), đo lường độ chính xác và khả năng ứng dụng thực tế.",
          "Nghiên cứu, phân tích và thực hiện các thử thách kỹ thuật (technical challenges) chuyên sâu do Mentor đề ra, tối ưu hóa luồng xử lý và nâng cao hiệu năng mô hình.",
          "Phối hợp cùng đội ngũ kỹ sư tại VSF trong việc kiểm thử các kịch bản tương tác người dùng - AI và hoàn thiện tiêu chuẩn nghiệm thu sản phẩm."
        ]
      }
    },
    {
      id: "exp-fpt",
      company: "FPT Software",
      role: "Fullstack Developer Intern",
      period: "Tháng 1/2026 – Tháng 4/2026",
      project: {
        name: "RailGo (Hệ thống đặt vé tàu hỏa)",
        details: [
          "Frontend: Thiết kế UI theo phong cách tối giản hiện đại, tối ưu state management (React Hooks, Session Storage) cho quy trình đặt vé phức tạp.",
          "Backend: Kiến trúc hệ thống bằng NestJS + TypeScript, xây dựng RESTful API cho các module Trains, Carriages, Routes, Trips.",
          "Quản trị dữ liệu: Xây dựng Admin Dashboard với biểu đồ doanh thu, lưu lượng khách và tối ưu hóa các truy vấn dữ liệu MongoDB.",
          "Kết quả: Hoàn thiện sản phẩm từ ý tưởng đến vận hành ổn định, thành thạo quy trình Git, Code Review, Linting trong môi trường chuyên nghiệp."
        ]
      }
    }
  ],
  education: {
    institution: "Trường Đại học FPT (FPT University)",
    major: "Kỹ thuật phần mềm",
    period: "2023 – Nay",
    details: "Chương trình đào tạo chuyên sâu về Công nghệ thông tin, Quy trình phát triển phần mềm, kiến thức vững chắc về OOP, cấu trúc dữ liệu giải thuật, cơ sở dữ liệu.",
    certifications: [
      {
        id: "cert-ai20k",
        name: "Chứng chỉ Đào tạo Nhân tài AI Thực chiến",
        issuer: "Tập đoàn Vingroup & Trường Đại học VinUni đồng cấp",
        period: "2026",
        level: "Khung năng lực toàn cầu SFIA (Level 3 - 4)",
        details: "Chương trình đào tạo nhân tài 12 tuần full-time (6 tuần học tập chuyên sâu tại VinUni & 6 tuần thực chiến doanh nghiệp tại VSF) về AI Agents, ReAct loop, giải quyết bài toán thực tế với độ chính xác cao."
      }
    ]
  },
  projects: [
    {
      id: "proj-roboplanner",
      name: "RoboPlanner (AI20K-162)",
      role: "AI Agent Developer",
      tagline: "Agent lập kế hoạch tác vụ robot kho bằng tiếng Việt",
      featured: true,
      description: "Hệ thống AI Agent tự trị điều khiển robot kho dựa trên LangGraph với chu trình khép kín (parse → perceive → plan → act → observe → replan). Đọc trạng thái thật từ mô phỏng PyBullet 3D/MuJoCo/2D Grid, tool-calling chính xác, tự replan dưới 50ms khi gặp vật cản. Đạt 100% đúng cho các ca bất khả thi và 0% hallucinated done qua hệ thống oracle độc lập kiểm chứng, vượt qua 346 automated tests.",
      techs: ["LangGraph", "Python", "Claude API", "PyBullet", "FastAPI", "Three.js"],
      link: "https://github.com/AI20K-Build-Cohort-2/C2-App-022.git",
      demo: "https://ai20k-robot-planner.onrender.com"
    },
    {
      id: "proj-railgo",
      name: "RailGo",
      role: "Fullstack Developer",
      tagline: "Hệ thống đặt vé tàu hỏa",
      featured: true,
      description: "Nền tảng web full-stack cho phép tìm kiếm hành trình, chọn chỗ ngồi tương tác trên sơ đồ toa tàu, thanh toán online, kèm Admin Dashboard quản lý hạ tầng đường sắt, lịch trình, doanh thu, khuyến mãi.",
      techs: ["ReactJS", "NestJS", "TypeScript", "MongoDB"],
      link: "https://gitlab.com/30MUNH/railgo.git"
    },
    {
      id: "proj-g4store",
      name: "G4_TechnicalStore",
      role: "Fullstack Developer",
      tagline: "Technical Store Website",
      featured: false,
      description: "Hệ thống thương mại điện tử bán lẻ laptop, PC, phụ kiện công nghệ. Kiến trúc microservices, đa vai trò người dùng, tích hợp thanh toán online.",
      techs: ["NodeJS", "TypeScript", "ReactJS", "Tailwind CSS", "PostgreSQL"],
      link: "https://github.com/30MUNH/G4_TechnicalStore"
    },
    {
      id: "proj-orbittask",
      name: "OrbitTask",
      role: "Frontend Developer",
      tagline: "Task Management Website",
      featured: false,
      description: "Ứng dụng quản lý công việc và dự án hiện đại, tích hợp AI (Gemini API) để hỗ trợ phân tích và gợi ý quản lý dự án hiệu quả.",
      techs: ["ReactJS", "Ant Design", "Tailwind CSS", "Gemini API"],
      link: "https://github.com/phwnganh/task-management-website"
    },
    {
      id: "proj-pocketagencom",
      name: "Pocket Agencom",
      role: "Fullstack Developer",
      tagline: "Hệ thống liên lạc & quản lý đại lý",
      featured: false,
      description: "Hệ thống hỗ trợ truyền thông và quản lý thông tin đại lý thông minh. Tích hợp chức năng gửi thông báo real-time, lập báo cáo doanh thu tự động và giao diện tối ưu di động.",
      techs: ["ReactJS", "Tailwind CSS", "Vite", "NodeJS"],
      link: "https://github.com/30MUNH/pocket-agencom"
    },
    {
      id: "proj-noelsgift",
      name: "Noel's Gift",
      role: "Frontend Developer",
      tagline: "Interactive Christmas Gift",
      featured: false,
      description: "Trang web tương tác đặc biệt về chủ đề Giáng sinh với hiệu ứng tuyết rơi động, thiệp mở âm thanh sống động, được xây dựng như một món quà ý nghĩa.",
      techs: ["HTML5", "CSS3", "JavaScript"],
      link: "https://github.com/30MUNH/Noel-s-Gift"
    }
  ],
  contact: {
    email: "dunguyendinh910@gmail.com",
    phone: "0373325643",
    address: "Xã Trung Giã, huyện Sóc Sơn, thành phố Hà Nội",
    github: "https://github.com/30MUNH",
    gitlab: "https://gitlab.com/30MUNH",
    facebook: "https://www.facebook.com/nguyen.inh.tien.manh",
    instagram: "https://www.instagram.com/manhndt_pqqq/",
    web3FormsAccessKey: "YOUR_ACCESS_KEY_HERE" // Paste your Web3Forms access key here to enable email forwarding
  }
};
