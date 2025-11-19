export const cvDataZh = {
  ui: {
    nav: {
      home: '首页',
      about: '关于',
      skills: '技能',
      projects: '项目',
    },
    hero: {
      greeting: '你好，我是',
      btnProject: '查看项目',
      btnContact: '联系我',
    },
    about: {
      title: '关于我',
      education: '教育经历',
      experience: '工作经历',
    },
    skills: {
      title: '专业技能',
    },
    projects: {
      title: '精选项目',
    },
    footer: {
      contact: '联系方式',
      connect: '社交网络',
      rights: '版权所有',
    },
  },
  name: '李恒晟',
  initials: '李',
  title: '电子与信息工程硕士',
  description: '慕尼黑工业大学研究生 | 英飞凌科技工读生。热衷于嵌入式系统、硬件设计和软件工程。',
  email: 'muzimichaed@gmail.com',
  location: '德国慕尼黑',
  socials: {
    linkedin: 'https://www.linkedin.com/in/hengsheng-li/',
    github: 'https://github.com/lithegreat',
  },
  education: [
    {
      date: '2025.04 – 至今',
      degree: '电子与信息工程硕士',
      institution: '慕尼黑工业大学 (TUM)',
    },
    {
      date: '2021.10 – 2025.03',
      degree: '电子与信息工程学士',
      institution: '慕尼黑工业大学 (TUM)',
      gpa: 'GPA: 2.1/1.0',
    },
  ],
  experience: [
    {
      date: '2025.06 - 至今',
      role: '工读生 - 硬件开发',
      company: '英飞凌科技 (Infineon Technologies AG)',
      description: '使用 Python, Git 和 Jenkins 改进硬件 CI/CD 工作流程。',
    },
  ],
  skills: [
    {
      category: '编程语言',
      items: ['Python', 'C', 'C++'],
      icon: 'fas fa-code',
    },
    {
      category: '工具与技术',
      items: ['Git', 'Bash', 'Linux', 'CI/CD', '单元测试'],
      icon: 'fas fa-tools',
    },
    {
      category: '硬件知识',
      items: ['数字电路设计', 'VHDL', 'RISC-V'],
      icon: 'fas fa-microchip',
    },
    {
      category: '语言能力',
      items: ['英语 (流利)', '德语 (C1)', '中文 (母语)'],
      icon: 'fas fa-language',
    },
  ],
  projects: [
    {
      title: 'CoreDSL 生态系统中 OpenASIP 自定义指令评估',
      type: '学士论文',
      tags: ['C', 'Python', 'Linux', 'RISC-V'],
      points: [
        '在 Linux 系统上使用 C 和 Python 扩展 RISC-V 指令集，实现自定义操作',
        '使用 Python 和 Bash 脚本自动化数据提取和分析工作流',
        '获得了嵌入式处理器仿真和基准测试的实践经验',
      ],
    },
    {
      title: '异步传输模式 (ATM) 实现',
      type: 'VHDL 实验',
      tags: ['VHDL', '硬件设计'],
      points: [
        '开发并仿真 ATM 组件，确保通过异步通信进行正确的数据传输',
        '将 VHDL 模型综合为门级网表，并在硬件环境中验证功能',
      ],
    },
    {
      title: '用于机器学习的嵌入式系统设计',
      type: '嵌入式 ML 项目',
      tags: ['TensorFlow', 'MicroTVM', 'ESP-IDF', 'Python', 'C++'],
      points: [
        '使用 TensorFlow/Keras 训练轻量级关键词识别 (KWS) 神经网络',
        '使用 MicroTVM 和 ESP-IDF 在嵌入式设备上量化和部署模型',
        '使用 Python 实现 ROM/RAM/MACs 估算工具和模型评估指标',
      ],
    },
    {
      title: '多维 IMU 数据分析与可视化',
      type: '研究实习',
      tags: ['Python', '数据分析', 'Matplotlib'],
      points: [
        '使用 Python 和科学库处理和分析高维 IMU 传感器数据',
        '开发自定义数据可视化工具以研究运动模式和传感器关系',
      ],
    },
    {
      title: '几何库维护',
      type: '软件工程实践',
      tags: ['C++', 'CI/CD', 'GitLab'],
      points: [
        '重构 C++ 几何计算库并集成自动化单元测试',
        '使用 GitLab 设置 CI/CD 管道以确保代码质量和持续集成',
      ],
    },
    {
      title: '音乐视频生成自动化',
      type: '个人项目',
      tags: ['Python', 'AI 模型', '自动化'],
      points: [
        '通过集成开源 AI 模型开发基于 Python 的自动化工具',
        '专注于自动化媒体处理任务并提高运营效率',
      ],
    },
  ],
}
