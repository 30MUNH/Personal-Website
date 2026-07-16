export const portfolioData = {
  personalInfo: {
    fullName: "Nguyễn Đình Tiến Mạnh",
    titles: ["Intern Developer", "Fullstack Developer Intern"],
    tagline: "Sinh viên năm 4 Kỹ thuật phần mềm – FPT University, đam mê ReactJS & NestJS",
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
    objective: "Là sinh viên năm 4 chuyên ngành Công nghệ Thông tin, tôi mong muốn tham gia kỳ thực tập ở quý công ty để tiếp xúc với môi trường làm việc thực tế, rèn luyện kỹ năng lập trình, học hỏi quy trình làm việc chuyên nghiệp và đóng góp giá trị vào dự án cùng đội nhóm.",
    strengths: [
      {
        id: "strength-1",
        title: "Khả năng tự học nhanh",
        description: "Chủ động tự học qua F8, YouTube, nhanh chóng nắm bắt và làm quen với các công nghệ mới theo yêu cầu dự án."
      },
      {
        id: "strength-2",
        title: "Tư duy logic & xử lý vấn đề",
        description: "Có nền tảng giải quyết các logic phức tạp bằng JavaScript, Java, tối ưu hóa các giải pháp xử lý luồng dữ liệu."
      },
      {
        id: "strength-3",
        title: "Tinh thần trách nhiệm & ham học hỏi",
        description: "Hoàn thành công việc đúng tiến độ, phối hợp nhóm hiệu quả và không ngừng học hỏi từ những người đi trước."
      }
    ]
  },
  stats: [
    { value: "5+", label: "Dự án hoàn thành" },
    { value: "4", label: "Tháng thực tập" },
    { value: "10+", label: "Công nghệ sử dụng" },
    { value: "2", label: "Nền tảng quản lý mã" }
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "ReactJS", level: 85, details: "Component, Props, State, Hooks, React Router DOM, Context API, REST API integration" },
        { name: "JavaScript (ES6+)", level: 80, details: "Destructuring, spread/rest, arrow function, callback/promise/async-await" },
        { name: "HTML5 & CSS3", level: 80, details: "Flexbox, Grid, Responsive, Bootstrap, Tailwind CSS" }
      ]
    },
    {
      category: "Backend & Bổ trợ",
      items: [
        { name: "NestJS", level: 70, details: "Architecture, controllers, services, RESTful API design" },
        { name: "TypeScript", level: 75, details: "Static typing, Interfaces, Types, Generics" },
        { name: "Java (OOP)", level: 70, details: "Exception handling, collection framework, OOP principles" },
        { name: "PHP", level: 60, details: "Basic web programming, database integration" }
      ]
    },
    {
      category: "Công cụ & Khác",
      items: [
        { name: "Git & Version Control", level: 80, details: "Git CLI, branching, code merge, PR review, GitHub, GitLab" },
        { name: "Development Tools", level: 85, details: "VS Code, IntelliJ, Postman, npm/yarn" },
        { name: "Automation Testing", level: 50, details: "Tìm hiểu sơ bộ và nắm vững khái niệm kiểm thử tự động" }
      ]
    }
  ],
  experience: [
    {
      id: "exp-1",
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
    details: "Chương trình đào tạo chuyên sâu về Công nghệ thông tin, Quy trình phát triển phần mềm, kiến thức vững chắc về OOP, cấu trúc dữ liệu giải thuật, cơ sở dữ liệu."
  },
  projects: [
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
