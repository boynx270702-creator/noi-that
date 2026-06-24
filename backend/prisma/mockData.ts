export const mockDashboardStats = {
  totalUnits: 34,
  totalLeads: 128,
  totalSupervisions: 15,
  totalArticles: 42,
  activeUnits: 30,
  pendingUnits: 3,
  hiddenUnits: 1,
  pendingLeads: 12,
  processingLeads: 45,
  leadsToday: 5,
  leadsThisWeek: 28,
  leadsThisMonth: 105,
  conversionRate: '15.5%',
  publishedArticles: 38,
  indexedSeoPages: 45,
  processingProjects: 18,
};

export const mockDashboardChartData = [
  { date: '01/06', leads: 5, supervisions: 1 },
  { date: '02/06', leads: 8, supervisions: 0 },
  { date: '03/06', leads: 12, supervisions: 2 },
  { date: '04/06', leads: 7, supervisions: 1 },
  { date: '05/06', leads: 15, supervisions: 3 },
  { date: '06/06', leads: 10, supervisions: 0 },
  { date: '07/06', leads: 22, supervisions: 4 },
];

export const mockUnits = [
  {
    id: 1,
    name: 'Công ty Kiến trúc Xanh',
    segment: 'trung-cap',
    location: 'Hà Nội',
    projectType: 'Chung cư, Nhà phố',
    style: 'Hiện đại, Tối giản',
    experience: 5,
    status: 'ACTIVE',
    createdAt: new Date(Date.now() - 86400000 * 30).toISOString()
  },
  {
    id: 2,
    name: 'Luxury Design Vietnam',
    segment: 'cao-cap',
    location: 'TP.HCM',
    projectType: 'Villa, Biệt thự, Penthouse',
    style: 'Luxury, Indochine',
    experience: 12,
    status: 'ACTIVE',
    createdAt: new Date(Date.now() - 86400000 * 45).toISOString()
  },
  {
    id: 3,
    name: 'Nội thất Mộc Gia',
    segment: 'co-ban',
    location: 'Đà Nẵng',
    projectType: 'Chung cư',
    style: 'Bắc Âu, Wabi-sabi',
    experience: 3,
    status: 'PENDING',
    createdAt: new Date().toISOString()
  }
];

export const mockLeads = [
  {
    id: 1,
    customerName: 'Nguyễn Văn Nam',
    phone: '0901234567',
    email: 'nam.nguyen@example.com',
    location: 'Hà Nội',
    source: 'Website Form',
    assignee: 'Sale Minh',
    projectType: 'Chung cư',
    area: 75,
    projectLocation: 'Vinhomes Smart City, Hà Nội',
    currentStatus: 'Đã nhận bàn giao thô',
    budget: '200-500',
    timeline: '1-thang',
    style: 'Hiện đại',
    priority: 'HIGH',
    needs: 'Thiết kế & Thi công trọn gói',
    needSupervision: false,
    needProjectManagement: false,
    notes: 'Khách hàng cần làm gấp để kịp vào ở trước Tết.',
    status: 'NEW', // NEW, CONTACTED, CONSULTING, CHOSEN_UNIT, QUOTED, NEGOTIATING, WON, LOST, CANCELLED
    leadClassification: 'HOT',
    proposedUnits: ['Công ty Kiến trúc Xanh', 'Nội thất Mộc Gia'],
    connectedUnit: '',
    callNotes: 'Đã gọi trao đổi sơ bộ, khách khá gấp.',
    chatNotes: 'Đã gửi qua Zalo các mẫu tham khảo.',
    followUpDate: new Date(Date.now() + 86400000 * 2).toISOString(),
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    customerName: 'Trần Thị Thu',
    phone: '0987654321',
    email: 'thu.tran@example.com',
    location: 'TP.HCM',
    source: 'Facebook Ads',
    assignee: 'Sale Lan',
    projectType: 'Villa',
    area: 300,
    projectLocation: 'Thảo Điền, Quận 2, TP.HCM',
    currentStatus: 'Đất trống, đang xin phép XD',
    budget: 'tren-3ty',
    timeline: '3-thang',
    style: 'Luxury, Tân cổ điển',
    priority: 'MEDIUM',
    needs: 'Thiết kế',
    needSupervision: true,
    needProjectManagement: true,
    notes: 'Yêu cầu kiến trúc sư có kinh nghiệm lâu năm.',
    status: 'CONSULTING',
    leadClassification: 'WARM',
    proposedUnits: ['Luxury Design Vietnam'],
    connectedUnit: 'Luxury Design Vietnam',
    callNotes: 'Khách yêu cầu gặp mặt trực tiếp KTS.',
    chatNotes: '',
    followUpDate: new Date(Date.now() + 86400000).toISOString(),
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: 3,
    customerName: 'Lê Hoàng',
    phone: '0933334444',
    email: '',
    location: 'Đà Nẵng',
    source: 'Tiktok',
    assignee: 'Sale Hùng',
    projectType: 'Nhà phố',
    area: 120,
    projectLocation: 'Hải Châu, Đà Nẵng',
    currentStatus: 'Nhà cũ cần cải tạo',
    budget: '500-1ty',
    timeline: 'ngay',
    style: 'Tối giản',
    priority: 'LOW',
    needs: 'Cải tạo trọn gói',
    needSupervision: false,
    needProjectManagement: false,
    notes: 'Muốn giữ lại một số đồ gỗ cũ.',
    status: 'WON',
    leadClassification: 'HOT',
    proposedUnits: ['Nội thất Mộc Gia'],
    connectedUnit: 'Nội thất Mộc Gia',
    callNotes: 'Đã chốt thiết kế, đang chờ thi công.',
    chatNotes: '',
    followUpDate: '',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
  }
];

export const mockSupervisions = [
  {
    id: 1,
    packageName: 'Giám sát Toàn diện',
    packageType: 'Trọn gói',
    shortDescription: 'Quản lý và giám sát toàn bộ quá trình thi công từ A-Z',
    targetAudience: 'Chủ nhà không có thời gian, cần người đại diện quản lý chất lượng.',
    scopeOfWork: 'Kiểm tra vật tư, giám sát kỹ thuật, nghiệm thu từng giai đoạn, báo cáo tiến độ.',
    duration: 'Theo tiến độ công trình (tối đa 6 tháng)',
    feeStructure: 'Theo % giá trị hợp đồng thi công hoặc m2',
    status: 'ACTIVE',
    inspectionItems: ['Kết cấu', 'Điện nước', 'Hoàn thiện', 'Lắp đặt nội thất'],
    inspectionFrequency: 'Hàng ngày',
    reportFrequency: 'Cuối mỗi tuần & Sau mỗi giai đoạn',
    reportFormat: 'File PDF kèm hình ảnh/video thực tế',
    acceptanceChecklist: 'Áp dụng bộ tiêu chuẩn TCVN và tiêu chuẩn nội bộ',
    responsibility: 'Chịu trách nhiệm 100% về chất lượng và tiến độ theo hợp đồng',
    conditions: 'Công trình từ 100m2 trở lên',
    limitations: 'Không áp dụng cho công trình cải tạo nhỏ lẻ',
    metaTitle: 'Dịch vụ Giám sát Thi công Toàn diện | Nền Tảng Nội Thất',
    metaDescription: 'Dịch vụ quản lý dự án và giám sát thi công chuyên nghiệp giúp chủ nhà an tâm tuyệt đối.',
    keyword: 'giám sát thi công, quản lý dự án nội thất',
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString()
  },
  {
    id: 2,
    packageName: 'Giám sát Thiết yếu (Theo giai đoạn)',
    packageType: 'Theo hạn mức',
    shortDescription: 'Kiểm tra các hạng mục quan trọng nhất để phòng ngừa rủi ro.',
    targetAudience: 'Chủ nhà có kinh nghiệm nhưng cần chuyên gia nghiệm thu điểm mù.',
    scopeOfWork: 'Nghiệm thu điện nước âm, chống thấm, kết cấu trước khi đóng trần.',
    duration: 'Tối đa 10 buổi kiểm tra',
    feeStructure: 'Gói cố định hoặc theo số buổi',
    status: 'ACTIVE',
    inspectionItems: ['Điện nước âm', 'Chống thấm', 'Kích thước tủ bếp'],
    inspectionFrequency: 'Chỉ khi chủ nhà yêu cầu',
    reportFrequency: 'Ngay sau mỗi buổi kiểm tra',
    reportFormat: 'Biên bản nghiệm thu tại công trình',
    acceptanceChecklist: 'Checklist rút gọn cho các hạng mục thiết yếu',
    responsibility: 'Chỉ chịu trách nhiệm trên các điểm đã kiểm tra',
    conditions: 'Áp dụng mọi công trình',
    limitations: 'Không bảo lãnh tiến độ tổng thể',
    metaTitle: 'Giám sát Thi công Theo Giai Đoạn - Tiết kiệm chi phí',
    metaDescription: 'Kiểm tra các hạng mục quan trọng giúp bạn an tâm với chi phí thấp nhất.',
    keyword: 'giám sát thiết yếu, nghiệm thu nội thất',
    createdAt: new Date(Date.now() - 86400000 * 40).toISOString()
  }
];

export const mockArticles = [
  {
    id: 1,
    title: '5 sai lầm thường gặp khi tự thuê thi công nội thất',
    slug: '5-sai-lam-thuong-gap-khi-tu-thue-thi-cong-noi-that',
    category: 'Kinh nghiệm thi công',
    author: 'Chuyên gia NoiThat',
    summary: 'Bài viết tổng hợp những rủi ro và sai lầm phổ biến khiến gia chủ tốn kém chi phí và thời gian khi tự đứng ra quản lý thi công.',
    content: '<p>Nội dung chi tiết của bài viết...</p>',
    thumbnail: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600&auto=format&fit=crop',
    views: 1250,
    status: 'PUBLISHED',
    metaTitle: '5 Sai Lầm Thường Gặp Khi Tự Thuê Thi Công Nội Thất | NoiThat',
    metaDescription: 'Khám phá 5 sai lầm tai hại khi tự thuê thợ thi công nội thất và cách phòng tránh để tiết kiệm chi phí, thời gian cho gia đình bạn.',
    keyword: 'sai lầm thi công nội thất, tự thuê thợ thi công',
    faqSchema: true,
    publishedAt: new Date(Date.now() - 86400000 * 15).toISOString(),
    createdAt: new Date(Date.now() - 86400000 * 16).toISOString()
  },
  {
    id: 2,
    title: 'Làm nội thất chung cư 200 triệu cần ưu tiên gì?',
    slug: 'lam-noi-that-chung-cu-200-trieu-can-uu-tien-gi',
    category: 'Theo ngân sách',
    author: 'Admin',
    summary: 'Hướng dẫn cách phân bổ ngân sách 200 triệu đồng cho nội thất chung cư một cách thông minh và tối ưu nhất.',
    content: '<p>Nội dung chi tiết của bài viết...</p>',
    thumbnail: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop',
    views: 840,
    status: 'PUBLISHED',
    metaTitle: 'Tư Vấn Làm Nội Thất Chung Cư 200 Triệu Đồng Tối Ưu',
    metaDescription: 'Với 200 triệu, bạn nên đầu tư nội thất chung cư như thế nào? Cùng xem hướng dẫn chi tiết cách tối ưu chi phí từ chuyên gia.',
    keyword: 'nội thất chung cư 200 triệu',
    faqSchema: false,
    publishedAt: new Date(Date.now() - 86400000 * 20).toISOString(),
    createdAt: new Date(Date.now() - 86400000 * 22).toISOString()
  },
  {
    id: 3,
    title: 'Phân biệt phong cách Indochine và Wabi-sabi',
    slug: 'phan-biet-phong-cach-indochine-va-wabi-sabi',
    category: 'Cẩm nang phong cách',
    author: 'KTS. Lê Văn',
    summary: 'Phân tích chi tiết sự khác biệt về triết lý, chất liệu và màu sắc giữa hai phong cách thiết kế đang làm mưa làm gió hiện nay.',
    content: '<p>Nội dung chi tiết của bài viết...</p>',
    thumbnail: '',
    views: 0,
    status: 'DRAFT',
    metaTitle: '',
    metaDescription: '',
    keyword: '',
    faqSchema: false,
    publishedAt: '',
    createdAt: new Date().toISOString()
  }
];

export const mockSeoPages = [
  {
    id: 1,
    title: 'Thiết kế nội thất chung cư trọn gói',
    slug: 'thiet-ke-noi-that-chung-cu',
    keyword: 'thiết kế nội thất chung cư',
    lsiKeywords: 'thi công chung cư, nội thất căn hộ, báo giá nội thất chung cư',
    content: '<p>Nội dung landing page thiết kế nội thất chung cư...</p>',
    status: 'PUBLISHED',
    metaTitle: 'Thiết Kế Nội Thất Chung Cư Trọn Gói | Báo Giá Mới Nhất 2026',
    metaDescription: 'Dịch vụ thiết kế và thi công nội thất chung cư trọn gói uy tín, chuyên nghiệp. Nhận báo giá chi tiết và ưu đãi mới nhất 2026.',
    schemaType: 'LocalBusiness',
    views: 3450,
    conversionRate: '4.5%',
    createdAt: new Date(Date.now() - 86400000 * 60).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: 2,
    title: 'Công ty thiết kế nội thất biệt thự cao cấp',
    slug: 'thiet-ke-noi-that-biet-thu',
    keyword: 'thiết kế nội thất biệt thự',
    lsiKeywords: 'nội thất villa, thi công biệt thự tân cổ điển',
    content: '<p>Nội dung landing page biệt thự...</p>',
    status: 'PUBLISHED',
    metaTitle: 'Thiết Kế Nội Thất Biệt Thự Cao Cấp | Báo Giá & Mẫu Đẹp',
    metaDescription: 'Tổng hợp các mẫu thiết kế nội thất biệt thự siêu sang trọng, đẳng cấp. Đơn vị thi công villa uy tín hàng đầu.',
    schemaType: 'Article',
    views: 1200,
    conversionRate: '2.1%',
    createdAt: new Date(Date.now() - 86400000 * 45).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 10).toISOString()
  }
];

export const mockTestimonials: any[] = [];

export const mockCustomers = [
  {
    id: 1,
    fullName: 'Nguyễn Văn Nam',
    phoneNumber: '0901234567',
    email: 'nam.nguyen@example.com',
    address: 'Hà Nội',
    totalLeads: 1,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    fullName: 'Trần Thị Thu',
    phoneNumber: '0987654321',
    email: 'thu.tran@example.com',
    address: 'Hồ Chí Minh',
    totalLeads: 1,
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  }
];

export const mockSettings = {
  storeName: "Nền Tảng Nội Thất",
  address: "Quận 1, TP.HCM",
  phone: "0900 111 222",
  zalo: "0900 111 222",
  email: "contact@noithat.vn"
};

export const mockProjects = [
  {
    id: 1,
    name: "ModernLife™ Bồn cầu hai khối xả nước 3/4,5L chế độ xả kép (K-78799K-0)",
    unitName: "Kohler Vietnam",
    projectType: "Bồn cầu",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "ModernLife™ kết hợp thiết kế tối giản hiện đại với công nghệ xả không vành tiên tiến, mang đến hiệu suất vệ sinh vượt trội và thẩm mỹ sạch sẽ cho không gian phòng tắm đương đại.",
    scopeOfWork: "ModernLife™ thể hiện triết lý thiết kế sạch sẽ, dễ lau chùi của Kohler. Bồn cầu hai khối với vành xả không vành loại bỏ nơi trú ẩn của vi khuẩn, dòng xả 360° toàn diện. Thiết kế skirted trapway tối giản, nắp mỏng tháo nhanh, phù hợp cho nhà ở, khách sạn và công trình cao cấp hiện đại.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Công nghệ xả không vành Revolution 360°; Tâm thoát sàn 305mm; Skirted trapway; Nắp quick-release",
    startDate: "2026-06-24T23:15:03.479Z",
    createdAt: "2026-06-24T23:15:03.479Z"
  },
  {
    id: 2,
    name: "Veil™ Bồn cầu thông minh (K-5401KR-0)",
    unitName: "Kohler Vietnam",
    projectType: "Bồn cầu thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Veil™ nâng tầm trải nghiệm vệ sinh cá nhân với thiết kế tối giản tinh tế kết hợp công nghệ bidet thông minh, mang đến sự sạch sẽ và thoải mái vượt trội cho phòng tắm cao cấp.",
    scopeOfWork: "Veil™ là biểu tượng của sự tối giản và công nghệ hiện đại. Bồn cầu thông minh tích hợp nhiều chế độ rửa, sấy ấm, khử mùi, đèn đêm và nắp kháng khuẩn. Thiết kế ghép sát, phù hợp cho gia đình hiện đại, biệt thự và khách sạn sang trọng quan tâm đến sức khỏe.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Que rửa thép không gỉ 316 với 24 lỗ phun; Rửa trước/sau, sấy ấm, khử mùi; Điều khiển từ xa; Nắp kháng khuẩn",
    startDate: "2026-06-24T23:15:03.479Z",
    createdAt: "2026-06-24T23:15:03.479Z"
  },
  {
    id: 3,
    name: "Veil™ Bồn cầu một khối 3/4.5L (K-1381T-S-0)",
    unitName: "Kohler Vietnam",
    projectType: "Bồn cầu",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Veil™ tái định nghĩa sự tinh tế với thiết kế một khối skirted kín đáo, mang đến vẻ đẹp tối giản và hiệu suất vệ sinh cao cho không gian phòng tắm hiện đại.",
    scopeOfWork: "Với thiết kế đương đại một khối phủ yếm, Veil™ nổi bật bởi đường nét mềm mại, dễ lau chùi và hiệu suất xả mạnh mẽ. Phù hợp phối hợp với nắp thông minh, lý tưởng cho các công trình nhà ở cao cấp và không gian tối giản.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Xả kép 3/4.5L; Thiết kế skirted trapway; Tâm thoát 305mm; Tương thích nắp C3",
    startDate: "2026-06-24T23:15:03.479Z",
    createdAt: "2026-06-24T23:15:03.479Z"
  },
  {
    id: 4,
    name: "Taut™ Single control lavatory faucet (K-74013T-4-CP)",
    unitName: "Kohler Vietnam",
    projectType: "Vòi lavabo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Taut™ mang thiết kế tối giản tinh tế, linh hoạt và bền vững, tạo nên vẻ đẹp chuyển tiếp hoàn hảo cho phòng tắm hiện đại.",
    scopeOfWork: "Taut™ nổi bật với form tối giản, tay gạt đơn điều khiển mượt mà nhiệt độ và lưu lượng. Lớp hoàn thiện chống ăn mòn, giới hạn nhiệt độ an toàn, dễ phối hợp với các dòng sen tắm khác, phù hợp cho gia đình và khách sạn.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Spout reach 100mm; Lưu lượng 4.5 L/min; Tay gạt đơn; Deck-mount",
    startDate: "2026-06-24T23:15:03.479Z",
    createdAt: "2026-06-24T23:15:03.479Z"
  },
  {
    id: 5,
    name: "Fluence™ Bộ sen cây 3 chiều (K-36410T-4-CP)",
    unitName: "Kohler Vietnam",
    projectType: "Sen tắm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Fluence™ mang đến sự linh hoạt đa chiều trong trải nghiệm tắm với thiết kế hiện đại và hiệu suất nước mạnh mẽ, nâng tầm khoảnh khắc thư giãn hàng ngày.",
    scopeOfWork: "Bộ sen cây Fluence™ bao gồm đầu sen mưa công nghệ Katalyst™, sen cầm tay 3 chức năng (WaterMind, massage, phun sương) và van trộn tối giản. Hoàn thiện Chrome bền đẹp, phù hợp cho phòng tắm gia đình và resort tìm kiếm sự tiện nghi cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "3 chức năng; Lưu lượng 9.5 L/min; Đầu sen mưa Katalyst™; Sen cầm tay Rainduet™ 3 chế độ",
    startDate: "2026-06-24T23:15:03.479Z",
    createdAt: "2026-06-24T23:15:03.479Z"
  },
  {
    id: 6,
    name: "Reach™ Bồn tắm drop-in 1700 x 750 mm (K-72800X-0)",
    unitName: "Kohler Vietnam",
    projectType: "Bồn tắm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Reach™ mang đến không gian ngâm mình rộng rãi và thoải mái với thiết kế nhân văn, tạo nên trải nghiệm tắm thư giãn đẳng cấp trong phòng tắm gia đình.",
    scopeOfWork: "Bồn tắm acrylic Reach™ kích thước trung bình, thiết kế ergonomics tối ưu tư thế thư giãn. Dễ lắp đặt drop-in, chất liệu bền bỉ, phù hợp làm điểm nhấn sang trọng cho nhà ở và khách sạn.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước 1700 x 750 mm; Chất liệu Acrylic; Lắp đặt drop-in",
    startDate: "2026-06-24T23:15:03.479Z",
    createdAt: "2026-06-24T23:15:03.479Z"
  },
  {
    id: 7,
    name: "Artifacts™ Single-handle bathroom sink faucet (K-72762T-9M-CP)",
    unitName: "Kohler Vietnam",
    projectType: "Vòi lavabo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Artifacts™ gợi nhắc vẻ đẹp cổ điển thủ công tinh xảo, mang đến phong cách cá nhân hóa độc đáo và sang trọng cho không gian phòng tắm.",
    scopeOfWork: "Bộ sưu tập Artifacts™ lấy cảm hứng từ di sản Kohler, kết hợp van đĩa gốm bền bỉ, memory temperature và hoàn thiện cao cấp. Lý tưởng cho không gian kết hợp cổ điển - hiện đại, tạo điểm nhấn nghệ thuật.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Spout reach 144 mm; Lưu lượng khoảng 5.7 L/min; Van đĩa gốm; Deck-mount",
    startDate: "2026-06-24T23:15:03.479Z",
    createdAt: "2026-06-24T23:15:03.479Z"
  },
  {
    id: 8,
    name: "Statement™ Ceiling-mount rainhead arm (K-26320T-RGD)",
    unitName: "Kohler Vietnam",
    projectType: "Phụ kiện sen tắm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Statement™ nâng tầm trải nghiệm tắm mưa xa hoa với thiết kế tối giản mạnh mẽ và hoàn thiện sang trọng, mang lại cảm giác thư giãn như resort.",
    scopeOfWork: "Bộ tay sen gắn trần Statement™ hỗ trợ rainhead cao cấp, chất liệu đồng bền bỉ, hoàn thiện Rose Gold sang trọng. Dễ lắp đặt, phù hợp cho hệ thống sen tắm tùy chỉnh trong biệt thự và khách sạn luxury.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Tay sen gắn trần 152 mm; Kết nối G 1/2; Chất liệu Brass",
    startDate: "2026-06-24T23:15:03.479Z",
    createdAt: "2026-06-24T23:15:03.479Z"
  },
  {
    id: 9,
    name: "Span™ Chậu rửa gắn tường kèm chân (K-24560K-0)",
    unitName: "Kohler Vietnam",
    projectType: "Lavabo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Span™ kết hợp thiết kế gắn tường gọn gàng và chân đỡ chắc chắn, mang đến giải pháp tối ưu không gian với thẩm mỹ sạch sẽ hiện đại.",
    scopeOfWork: "Chậu rửa Span™ vitreous china bền bỉ, kiểu dáng tối giản dễ lau chùi. Phù hợp cho phòng tắm nhỏ, thiết kế hiện đại trong nhà ở và không gian công cộng cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Gắn tường với chân đỡ; Chất liệu Vitreous china",
    startDate: "2026-06-24T23:15:03.479Z",
    createdAt: "2026-06-24T23:15:03.479Z"
  },
  {
    id: 10,
    name: "C3™-130 Electronic Bidet Seat (K-4107T-0)",
    unitName: "Kohler Vietnam",
    projectType: "Nắp bồn cầu thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "C3™-130 nâng tầm vệ sinh cá nhân với công nghệ bidet điện tử hiện đại, mang lại sự sạch sẽ, thoải mái và tiện nghi vượt trội cho người dùng.",
    scopeOfWork: "Nắp bidet C3™ tích hợp các chức năng rửa tiên tiến, sấy ấm, điều khiển từ xa. Thiết kế gọn gàng, dễ lắp đặt, lý tưởng cho gia đình quan tâm đến sức khỏe và trải nghiệm vệ sinh cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Bidet điện tử; Điều khiển từ xa; Nắp đóng êm",
    startDate: "2026-06-24T23:15:03.479Z",
    createdAt: "2026-06-24T23:15:03.479Z"
  },
  {
    id: 11,
    name: "Bồn cầu 1 khối Grohe 100995SH00 Euro Ceramic 2.0",
    unitName: "Grohe Vietnam",
    projectType: "Bồn cầu một khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu một khối Grohe Euro Ceramic 2.0 kết hợp thiết kế tinh tế với công nghệ chống khuẩn tiên tiến, mang đến trải nghiệm vệ sinh sạch sẽ và sang trọng cho phòng tắm hiện đại.",
    scopeOfWork: "Bồn cầu Grohe 100995SH00 sở hữu thiết kế liền khối, men sứ HyperClean ion bạc chống khuẩn 99.9%, lòng bồn không vành hạn chế vi khuẩn tích tụ. Hệ thống xả Siphonic mạnh mẽ tiết kiệm nước, nắp đóng êm, phù hợp cho nhà ở cao cấp, khách sạn và biệt thự.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước: 729 x 386 x 665 mm; Tâm thoát: 305 mm; Xả kép 4L/6.5L; Không vành; Men HyperClean ion bạc",
    startDate: "2026-06-24T23:15:03.479Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 12,
    name: "Bồn Cầu Thông Minh Grohe 39354SH1 Sensia Arena",
    unitName: "Grohe Vietnam",
    projectType: "Bồn cầu thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu thông minh Grohe Sensia Arena nâng tầm vệ sinh cá nhân với công nghệ rửa tự động, khử mùi và thiết kế tinh tế, mang đến trải nghiệm cao cấp và hiện đại nhất.",
    scopeOfWork: "Sản phẩm tích hợp bề mặt AquaCeramic chống bám bẩn, Hyperclean ion bạc, xả Triple Vortex mạnh mẽ, vòi rửa kép thông minh, kết nối app và tự động hoàn toàn. Lý tưởng cho gia đình hiện đại, biệt thự và khách sạn luxury.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước: 600 x 375 x 459 mm; Treo tường; Xả 3-5L; Công nghệ AquaCeramic & PowerFlush; Điều khiển ứng dụng",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 13,
    name: "Sen Cây Nhiệt Độ Grohe 26250000 Rainshower SmartControl 360 Duo",
    unitName: "Grohe Vietnam",
    projectType: "Sen tắm cây nhiệt độ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sen cây Rainshower SmartControl 360 Duo mang đến trải nghiệm tắm mưa xa hoa linh hoạt với công nghệ điều khiển chính xác, kết hợp massage và tiết kiệm nước.",
    scopeOfWork: "Hệ thống sen cây cao cấp với nút SmartControl điều chỉnh lưu lượng và nhiệt độ mượt mà, lớp phủ StarLight bền sáng, EcoJoy tiết kiệm nước và TurboStat ổn định nhiệt độ. Phù hợp cho phòng tắm resort và biệt thự cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Chiều dài thân: 1006 mm; Bát sen 220 mm; Tay sen Ø115 mm; Công nghệ SilkMove, StarLight, EcoJoy, TurboStat",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 14,
    name: "Vòi Lavabo Gắn Tường Grohe 19309000",
    unitName: "Grohe Vietnam",
    projectType: "Vòi lavabo gắn tường",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Vòi lavabo gắn tường Grohe mang thiết kế hiện đại tinh tế, vận hành mượt mà và bền bỉ, tạo điểm nhấn sang trọng cho không gian lavabo.",
    scopeOfWork: "Sản phẩm chất lượng Đức với lớp mạ bền đẹp, tay gạt êm ái, tiết kiệm nước, dễ lắp đặt. Phù hợp phối hợp trong phòng tắm gia đình, khách sạn và công trình cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Mạ Chrome; Thiết kế tối giản; Công nghệ Grohe",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 15,
    name: "Bồn cầu 1 khối Grohe 39310000 Eurostyle",
    unitName: "Grohe Vietnam",
    projectType: "Bồn cầu một khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu Eurostyle Grohe kết hợp phong cách châu Âu tinh tế với hiệu suất xả mạnh mẽ, mang đến giải pháp vệ sinh hoàn hảo và thẩm mỹ cao.",
    scopeOfWork: "Thiết kế Eurostyle hiện đại, men sứ bền đẹp, hệ thống xả tiết kiệm nước, dễ lau chùi. Lý tưởng cho các không gian phòng tắm đương đại và dự án nhà ở.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Eurostyle design; Xả kép; Men sứ cao cấp",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 16,
    name: "Sen Cây Nhiệt Độ Grohe 26507000",
    unitName: "Grohe Vietnam",
    projectType: "Sen tắm cây nhiệt độ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sen cây Grohe 26507000 mang đến dòng nước ổn định và trải nghiệm tắm thư giãn với công nghệ kiểm soát nhiệt độ chính xác.",
    scopeOfWork: "Sản phẩm nổi bật với hệ thống ổn nhiệt TurboStat, lớp phủ StarLight bền sáng, đa chức năng tay sen. Phù hợp cho gia đình và khách sạn tìm kiếm sự tiện nghi cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Công nghệ ổn nhiệt; Thiết kế Đức; Mạ Chrome",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 17,
    name: "Bồn Cầu 1 khối Grohe 39119001 Eurosmart",
    unitName: "Grohe Vietnam",
    projectType: "Bồn cầu một khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu Eurosmart Grohe đại diện cho sự kết hợp hoàn hảo giữa thiết kế thông minh và công nghệ vệ sinh tiên tiến.",
    scopeOfWork: "Thiết kế gọn gàng, men sứ cao cấp chống bám bẩn, xả mạnh mẽ tiết kiệm nước. Phù hợp cho nhiều không gian phòng tắm từ gia đình đến thương mại.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Eurosmart series; Xả kép; Thiết kế hiện đại",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 18,
    name: "Vòi Lavabo Grohe (dòng gắn tường cao cấp)",
    unitName: "Grohe Vietnam",
    projectType: "Vòi lavabo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Vòi lavabo Grohe gắn tường mang phong cách tối giản Đức, vận hành êm ái và độ bền vượt trội cho không gian lavabo.",
    scopeOfWork: "Chất liệu cao cấp, công nghệ tiết kiệm nước, thiết kế tinh tế dễ phối hợp. Lý tưởng cho phòng tắm hiện đại và công trình cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Gắn tường; Mạ Chrome bền bỉ",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 19,
    name: "Bồn Cầu Thông Minh Grohe 39355SH0 Sensia",
    unitName: "Grohe Vietnam",
    projectType: "Bồn cầu thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu thông minh Sensia Grohe mang công nghệ vệ sinh điện tử hiện đại, mang lại sự sạch sẽ và thoải mái tối ưu.",
    scopeOfWork: "Tích hợp nhiều chế độ rửa, sấy, khử mùi và tự động hóa. Thiết kế sang trọng, phù hợp cho gia đình quan tâm đến sức khỏe và công nghệ.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Sensia series; Điện tử; Rửa đa chức năng",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 20,
    name: "Sen Cây Nhiệt Độ Grohe 26647000",
    unitName: "Grohe Vietnam",
    projectType: "Sen tắm cây",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sen cây Grohe 26647000 cung cấp trải nghiệm tắm linh hoạt với công nghệ tiết kiệm nước và thiết kế tinh tế.",
    scopeOfWork: "Hệ thống sen đa chức năng, ổn định nhiệt độ, chất lượng Đức bền bỉ. Phù hợp cho phòng tắm gia đình và resort.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Thiết kế gọn gàng; Công nghệ EcoJoy",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 21,
    name: "Máy lọc không khí BONECO P500",
    unitName: "Grohe Vietnam",
    projectType: "Máy lọc không khí",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy lọc không khí BONECO P500 mang công nghệ lọc 4 giai đoạn chuẩn Thụy Sĩ, loại bỏ 99,97% bụi mịn, vi khuẩn và mùi độc hại, mang đến không khí trong lành bảo vệ sức khỏe gia đình.",
    scopeOfWork: "BONECO P500 nổi bật với cảm biến chất lượng không khí tự động, màn hình cảm ứng, khay tinh dầu và thiết kế mỏng hiện đại đạt giải Red Dot. Phù hợp cho phòng ngủ, phòng khách gia đình có trẻ nhỏ, người dị ứng hoặc hút thuốc, vận hành êm ái, tiết kiệm điện.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Công nghệ lọc 4 giai đoạn (Thô + Đặc biệt + HEPA + Than hoạt tính); Diện tích: <50m²; CADR: 258 m³/h; Kích thước: 450x224x642 mm; Độ ồn: 30 dB",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 22,
    name: "Máy tạo ẩm BONECO U200",
    unitName: "Grohe Vietnam",
    projectType: "Máy tạo ẩm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy tạo ẩm BONECO U200 kết hợp công nghệ Ultrasonic siêu mịn với bộ lọc tinh khiết Ion bạc, mang đến độ ẩm lý tưởng và không khí trong lành cho gia đình, đặc biệt trẻ nhỏ.",
    scopeOfWork: "U200 nổi bật với thiết kế nhỏ gọn Red Dot Design, đèn ngủ LED, khay tinh dầu và vận hành cực êm. Giúp giảm khô da, khô mũi họng khi dùng điều hòa hoặc mùa hanh khô, an toàn cho trẻ sơ sinh và bảo vệ nội thất.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Công nghệ Ultrasonic; Sản lượng ẩm: 300 ml/h; Dung tích: 3,5 lít; Diện tích: 10-50m²; Bộ lọc Carbon + Ion bạc; Độ ồn: <25 dB",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 23,
    name: "Máy lọc không khí BONECO P710",
    unitName: "Grohe Vietnam",
    projectType: "Máy lọc không khí",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy lọc không khí cao cấp BONECO P710 xử lý không gian lớn với hiệu suất lọc 99,9%, lý tưởng cho văn phòng, biệt thự và khu vực ô nhiễm cao.",
    scopeOfWork: "P710 sở hữu bộ lọc mạnh mẽ, bánh xe di chuyển, cảm biến thông minh và thiết kế sang trọng. Loại bỏ bụi PM2.5, virus, khói thuốc hiệu quả, phù hợp cho gia đình lớn, văn phòng và không gian thương mại.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Lọc HEPA H13 + Than hoạt tính; Diện tích: >100m² (tới 200m²); Cảm biến chất lượng không khí; Màn hình cảm ứng; Độ ồn: 37-66 dB",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 24,
    name: "QUẠT ĐỐI LƯU BONECO F225",
    unitName: "Grohe Vietnam",
    projectType: "Quạt đối lưu không khí",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Quạt đối lưu BONECO F225 tạo luồng khí tự nhiên lưu thông mạnh mẽ, mang đến cảm giác mát mẻ thoải mái và tiết kiệm năng lượng cho không gian sống hiện đại.",
    scopeOfWork: "F225 nổi bật với thiết kế Thụy Sĩ linh hoạt (xoay 270°, thay đổi chiều cao), màn hình điều khiển và kết nối Bluetooth. Phù hợp phòng khách, văn phòng hoặc căn hộ trần cao, hỗ trợ lưu thông không khí kết hợp máy lạnh.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "32 tốc độ; Đầu xoay 270°; Lưu lượng: 1500 m³/h; Tiết kiệm điện; Chiều cao điều chỉnh; Độ ồn: 19,5-64 dB",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 25,
    name: "Máy lọc không khí kết hợp tạo ẩm BONECO HYBRID H300",
    unitName: "Grohe Vietnam",
    projectType: "Máy lọc không khí kết hợp tạo ẩm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy Hybrid BONECO H300 tích hợp lọc không khí và tạo ẩm tự nhiên, mang đến giải pháp toàn diện cho không khí sạch và ẩm lý tưởng trong một thiết bị.",
    scopeOfWork: "H300 sử dụng công nghệ thảm bay hơi và bộ lọc sinh học 4-in-1, dễ vệ sinh, có chế độ Baby/Sleep. Lý tưởng cho gia đình có trẻ nhỏ, người dị ứng, giúp giảm khô da và hô hấp khi dùng điều hòa.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Hybrid 3-in-1; Diện tích: 50m²; Sản lượng ẩm: 350 g/h; Bộ lọc HEPA + Than hoạt tính; Điều khiển app; Độ ồn: 28-51 dB",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 26,
    name: "Máy lọc không khí Boneco P130",
    unitName: "Grohe Vietnam",
    projectType: "Máy lọc không khí",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy lọc không khí BONECO P130 mang thiết kế nhỏ gọn, hiệu suất lọc cao, phù hợp cho không gian cá nhân và gia đình trẻ.",
    scopeOfWork: "P130 tập trung vào việc loại bỏ bụi mịn và dị ứng với vận hành êm ái, dễ sử dụng. Là lựa chọn lý tưởng cho phòng ngủ, phòng làm việc hoặc căn hộ nhỏ.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Lọc đa tầng; Diện tích nhỏ gọn; Thiết kế hiện đại; Cảm biến cơ bản",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 27,
    name: "Máy tạo ẩm BONECO U700",
    unitName: "Grohe Vietnam",
    projectType: "Máy tạo ẩm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy tạo ẩm BONECO U700 cung cấp độ ẩm mạnh mẽ cho không gian rộng, duy trì môi trường sống khỏe mạnh và thoải mái.",
    scopeOfWork: "Với dung tích lớn và hiệu suất cao, U700 phù hợp cho phòng khách hoặc biệt thự, tích hợp tính năng hiện đại của dòng tạo ẩm Boneco.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Công suất cao; Diện tích lớn; Công nghệ Ultrasonic",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 28,
    name: "Máy lọc không khí ô tô BONECO P50",
    unitName: "Grohe Vietnam",
    projectType: "Máy lọc không khí ô tô",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy lọc không khí ô tô BONECO P50 mang không khí sạch và khử mùi hiệu quả ngay trong khoang xe, bảo vệ sức khỏe khi di chuyển.",
    scopeOfWork: "P50 nhỏ gọn, dễ lắp đặt, loại bỏ bụi, khói và mùi khó chịu. Lý tưởng cho tài xế, gia đình có trẻ nhỏ thường xuyên di chuyển.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Thiết kế compact; Lọc khử mùi; Dành cho xe hơi",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 29,
    name: "Máy tạo ẩm cá nhân BONECO U50",
    unitName: "Grohe Vietnam",
    projectType: "Máy tạo ẩm cá nhân",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy tạo ẩm cá nhân BONECO U50 cung cấp độ ẩm cục bộ tiện lợi, phù hợp cho không gian cá nhân và văn phòng.",
    scopeOfWork: "Thiết kế mini, dễ mang theo, giúp giảm khô da và hô hấp cho người làm việc lâu với máy lạnh hoặc máy tính.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Siêu nhỏ gọn; Dành cho bàn làm việc",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 30,
    name: "Máy lọc không khí kết hợp tạo ẩm Boneco W200",
    unitName: "Grohe Vietnam",
    projectType: "Máy lọc không khí kết hợp tạo ẩm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy W200 kết hợp lọc và tạo ẩm tự nhiên, mang giải pháp toàn diện và dễ bảo dưỡng cho gia đình.",
    scopeOfWork: "Thiết kế hiện đại, tích hợp tinh dầu, phù hợp cho phòng ngủ và không gian sống hàng ngày.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Hybrid; Thảm bay hơi; Dễ vệ sinh",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 31,
    name: "QuickStep IMD8247 (Herringbone)",
    unitName: "QuickStep Vietnam",
    projectType: "Sàn gỗ xương cá Laminate",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "QuickStep IMD8247 mang thiết kế xương cá tinh tế với tông sồi vàng ấm áp, kết hợp công nghệ chống nước HydroSeal, tạo không gian sống sang trọng và bền bỉ cho phong cách hiện đại.",
    scopeOfWork: "Sàn gỗ QuickStep IMD8247 thuộc dòng Pattern Herringbone, vân gỗ sồi tự nhiên chân thực, vát cạnh Authentic Bevel tạo chiều sâu. Chống nước 100%, chịu xước cao, tương thích sưởi sàn, phù hợp phòng khách, phòng ngủ, bếp và không gian cao cấp với bảo hành trọn đời.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước: 655 x 131 x 8 mm; Diện tích/hộp: 1.201 m²; AC4 Class 32; Unizip lock; Chống nước HydroSeal; Xuất xứ Bỉ",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 32,
    name: "QuickStep IMU3106 (Impressive Ultra)",
    unitName: "QuickStep Vietnam",
    projectType: "Sàn gỗ Laminate cao cấp",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "QuickStep IMU3106 dòng Impressive Ultra dày 12mm mang vẻ đẹp gỗ sồi tự nhiên tông vàng nhạt, công nghệ cao cấp HydroSeal và Uniclic, mang đến sự sang trọng bền vững cho mọi không gian.",
    scopeOfWork: "Sản phẩm cao cấp với cốt HDF mật độ cao, bề mặt TitanX chống trầy vượt trội, vân gỗ chân thực. Chống nước toàn diện, lắp đặt nhanh không keo, phù hợp biệt thự, căn hộ cao cấp và công trình thương mại đòi hỏi độ bền cao.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước: 1380 x 190 x 12 mm; Diện tích/hộp: 1.311 m²; AC5 Class 33; Uniclic lock; HydroSeal chống nước; TitanX bề mặt; Bảo hành trọn đời",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 33,
    name: "QuickStep IMD8245 (Herringbone)",
    unitName: "QuickStep Vietnam",
    projectType: "Sàn gỗ xương cá Laminate",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "QuickStep IMD8245 thiết kế xương cá sang trọng với tông sồi trung tính ấm áp, kết hợp công nghệ châu Âu, mang đến vẻ đẹp tinh tế và khả năng chống nước vượt trội.",
    scopeOfWork: "Herringbone Pattern với vát cạnh Authentic Bevel, vân gỗ tự nhiên, dễ phối nội thất Scandinavian hay Japandi. Chống nước, chịu lực tốt, phù hợp khu vực ẩm và không gian sống hiện đại.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước: 655 x 131 x 8 mm; Diện tích/hộp: 1.201 m²; AC4 Class 32; Unizip; HydroSeal; Bảo hành trọn đời",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 34,
    name: "QuickStep IMU3105 (Impressive Ultra)",
    unitName: "QuickStep Vietnam",
    projectType: "Sàn gỗ Laminate",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "QuickStep IMU3105 thuộc dòng Impressive Ultra cao cấp, mang vân gỗ chân thực và công nghệ chống nước tiên tiến, tạo nền tảng bền đẹp cho không gian sống đẳng cấp.",
    scopeOfWork: "Dày 12mm, bề mặt chống xước mạnh, lắp đặt dễ dàng, phù hợp gia đình và công trình yêu cầu độ bền cao cùng thẩm mỹ tự nhiên.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước: 1380 x 190 x 12 mm; AC5 Class 33; Uniclic; HydroSeal; TitanX",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 35,
    name: "QuickStep CLM1381 (Classic)",
    unitName: "QuickStep Vietnam",
    projectType: "Sàn gỗ Laminate Classic",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "QuickStep CLM1381 dòng Classic mang vẻ đẹp truyền thống châu Âu, kết hợp độ bền và công nghệ chống nước, lý tưởng cho không gian ấm cúng.",
    scopeOfWork: "Thiết kế vân gỗ cổ điển, chất lượng Bỉ cao cấp, dễ lắp đặt, phù hợp nhà ở gia đình và căn hộ.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước tiêu chuẩn; AC4; Uniclic; HydroSeal",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 36,
    name: "QuickStep IMU1862 (Impressive)",
    unitName: "QuickStep Vietnam",
    projectType: "Sàn gỗ Laminate Impressive",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "QuickStep IMU1862 dòng Impressive nổi bật với vân gỗ sâu và công nghệ HydroSeal, mang lại sự sang trọng và khả năng chịu nước vượt trội.",
    scopeOfWork: "Bền bỉ, chống trầy, thiết kế hiện đại, phù hợp phòng khách và khu vực sinh hoạt cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước: 1380 x 190 x 10/12 mm; AC4/AC5; Uniclic; HydroSeal",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 37,
    name: "QuickStep EL1304 (Eligna)",
    unitName: "QuickStep Vietnam",
    projectType: "Sàn gỗ Laminate Eligna",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "QuickStep EL1304 dòng Eligna mang phong cách tinh tế, vân gỗ tự nhiên, kết hợp độ bền và dễ dàng lắp đặt cho không gian sống hiện đại.",
    scopeOfWork: "Thiết kế mỏng nhẹ nhưng chắc chắn, phù hợp căn hộ và nhà phố.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước tiêu chuẩn; AC4; Uniclic; HydroSeal",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 38,
    name: "QuickStep DIS (Disegno Parquet)",
    unitName: "QuickStep Vietnam",
    projectType: "Sàn gỗ Parquet",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "QuickStep Disegno Parquet mang vẻ đẹp gỗ tự nhiên chân thực, kỹ thuật châu Âu, tạo điểm nhấn sang trọng cho nội thất cao cấp.",
    scopeOfWork: "Dòng Parquet cao cấp, phù hợp biệt thự và không gian luxury.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước đa dạng; Thiết kế vân gỗ tự nhiên; Chất liệu cao cấp",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 39,
    name: "QuickStep INT (Intenso Parquet)",
    unitName: "QuickStep Vietnam",
    projectType: "Sàn gỗ Parquet Intenso",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "QuickStep Intenso Parquet nổi bật với vân gỗ sâu đậm, mang lại cảm giác ấm áp và đẳng cấp châu Âu.",
    scopeOfWork: "Phù hợp không gian cổ điển và hiện đại, chất lượng cao từ Bỉ.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước tiêu chuẩn; Vân gỗ mạnh mẽ; Độ bền cao",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 40,
    name: "QuickStep IMU1859 (Impressive)",
    unitName: "QuickStep Vietnam",
    projectType: "Sàn gỗ Laminate Impressive",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "QuickStep IMU1859 mang tông màu ấm áp, công nghệ chống nước và bề mặt bền bỉ, lý tưởng cho gia đình hiện đại.",
    scopeOfWork: "Thiết kế tinh tế, lắp đặt nhanh, bảo hành dài hạn.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước: 1380 x 190 mm; AC4/AC5; HydroSeal; Uniclic",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 41,
    name: "Thang máy gia đình Kleemann 200kg",
    unitName: "QuickStep Vietnam",
    projectType: "Thang máy gia đình thủy lực",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy Kleemann 200kg mang thiết kế châu Âu cao cấp, vận hành êm ái, an toàn tuyệt đối, nâng tầm không gian sống cho nhà phố và biệt thự hiện đại.",
    scopeOfWork: "Thang máy Kleemann thủy lực cao cấp, cabin kính toàn cảnh, khung nhôm hợp kim bền bỉ. Phù hợp lắp đặt không cần hố pit sâu, tiết kiệm diện tích, lý tưởng cho nhà 3-5 tầng.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Tải trọng 200kg; Cabin kính cường lực; Hố pit nông ~85mm; Nhập khẩu Đức/Hy Lạp",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 42,
    name: "Thang máy Kleemann Atlas RL 630kg",
    unitName: "QuickStep Vietnam",
    projectType: "Thang máy gia đình cáp kéo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Kleemann Atlas RL mang công nghệ cáp kéo hiện đại, cabin rộng rãi, thiết kế tinh tế, mang lại trải nghiệm di chuyển đẳng cấp.",
    scopeOfWork: "Dòng Atlas RL cao cấp với nội thất sang trọng, vận hành êm ái, an toàn châu Âu. Phù hợp biệt thự và khu đô thị luxury.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Tải trọng 630kg; Cabin sang trọng; Nhập khẩu đồng bộ",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 43,
    name: "Thang máy Huy Hoàng Signature 400kg",
    unitName: "QuickStep Vietnam",
    projectType: "Thang máy gia đình kính",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Huy Hoàng Signature kết hợp nghệ thuật và công nghệ, cabin kính sang trọng, mang đến giải pháp di chuyển tinh tế.",
    scopeOfWork: "Thiết kế nguyên khối, kính cường lực, hoàn thiện Rose Gold. Phù hợp nhà phố và KĐT cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Tải trọng 400kg; Cabin kính toàn cảnh; Khung nhôm Rose Gold",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 44,
    name: "Thang máy Huy Hoàng Luxury 200kg",
    unitName: "QuickStep Vietnam",
    projectType: "Thang máy gia đình kính",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Huy Hoàng Luxury mang vẻ đẹp kính toàn cảnh, vận hành êm ái, phù hợp nhà ống và không gian hạn chế.",
    scopeOfWork: "Thiết kế tối giản, động cơ không hộp số. Lý tưởng cho nhà phố chật hẹp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Tải trọng 200kg; Cabin kính Flatform; Hố pit ~85mm",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 45,
    name: "Thang máy cáp kéo Kleemann",
    unitName: "QuickStep Vietnam",
    projectType: "Thang máy gia đình cáp kéo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy cáp kéo Kleemann mang công nghệ tiên tiến, độ bền cao, thiết kế sang trọng châu Âu.",
    scopeOfWork: "Hiệu suất vượt trội, tiết kiệm điện, phù hợp nhà cao tầng và biệt thự.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Tải trọng 320-630kg; Nhập khẩu Châu Âu",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 46,
    name: "Thang máy thủy lực Kleemann",
    unitName: "QuickStep Vietnam",
    projectType: "Thang máy gia đình thủy lực",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy thủy lực Kleemann nổi bật với lắp đặt linh hoạt, vận hành êm ái.",
    scopeOfWork: "Thiết kế nguyên khối, kính cường lực, phù hợp nhà phố Việt Nam.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Tải trọng 200-450kg; Hố pit nông",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 47,
    name: "Thang máy trục vít Kleemann (Maison100 E)",
    unitName: "QuickStep Vietnam",
    projectType: "Thang máy gia đình trục vít",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy trục vít Maison100 E mang giải pháp thông minh, tiết kiệm không gian.",
    scopeOfWork: "Dễ lắp đặt, vận hành êm, phù hợp nhà ống nhỏ.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Thiết kế compact; Công nghệ châu Âu",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 48,
    name: "Thang máy Huy Hoàng Brilliant",
    unitName: "QuickStep Vietnam",
    projectType: "Thang máy gia đình liên doanh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Huy Hoàng Brilliant đại diện cho sự kết hợp công nghệ thông minh và thiết kế cao cấp.",
    scopeOfWork: "Sản phẩm liên doanh chất lượng cao, phù hợp đa dạng công trình.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Tải trọng đa dạng; Thiết kế tùy chỉnh",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 49,
    name: "Thang máy gia đình không hố pit",
    unitName: "QuickStep Vietnam",
    projectType: "Thang máy gia đình",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy không hố pit mang giải pháp lắp đặt nhanh, phù hợp nhà cải tạo.",
    scopeOfWork: "Tiết kiệm diện tích, an toàn cao.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Hố pit ~85mm; Cabin kính",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 50,
    name: "Thang máy gia đình 300kg",
    unitName: "QuickStep Vietnam",
    projectType: "Thang máy gia đình",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy 300kg tối ưu cho nhà nhỏ, mang lại tiện nghi và an toàn.",
    scopeOfWork: "Compact, phù hợp nhà ống và căn hộ.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Tải trọng 300kg; Kích thước nhỏ gọn",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 51,
    name: "Bàn cầu thông minh SETO-HI-END9999",
    unitName: "SETO Vietnam",
    projectType: "Bàn cầu thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bàn cầu thông minh SETO HI-END9999 mang công nghệ vệ sinh toàn diện Nhật Bản, thiết kế luxury, nâng tầm phòng tắm thượng lưu.",
    scopeOfWork: "Tích hợp rửa tự động, sấy ấm, khử mùi, nắp đóng êm và men Nano Glossy kháng khuẩn. Phù hợp biệt thự, khách sạn cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Liền khối; Rửa đa chức năng; Men Nano Glossy; Công nghệ Nhật Bản",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 52,
    name: "Bàn cầu thông minh SETO-BOSS1999",
    unitName: "SETO Vietnam",
    projectType: "Bàn cầu thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "SETO-BOSS1999 kết hợp thiết kế hiện đại và công nghệ bidet thông minh, mang lại trải nghiệm vệ sinh sạch sẽ, thoải mái đẳng cấp.",
    scopeOfWork: "Nhiều chế độ rửa, sấy, khử mùi, vật liệu cao cấp. Lý tưởng cho gia đình hiện đại và không gian cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Liền khối; Rửa ấm; Điều khiển từ xa; Kích thước chuẩn",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 53,
    name: "Sen cây cao cấp Gun-metal SETO-4OS0005",
    unitName: "SETO Vietnam",
    projectType: "Sen tắm cây",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sen cây Gun-metal SETO mang phong cách luxury tối giản, chất liệu inox 304 bền bỉ, mang đến trải nghiệm tắm mưa thư giãn cao cấp.",
    scopeOfWork: "Thiết kế mạnh mẽ, hoàn thiện Gun-metal sang trọng, lưu lượng mạnh. Phù hợp phòng tắm hiện đại.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "SUS 304; Hoàn thiện Gun-metal; Best Seller; Chức năng đa dạng",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 54,
    name: "Sen cây cao cấp Gun-metal SETO-4OS0004",
    unitName: "SETO Vietnam",
    projectType: "Sen tắm cây",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sen cây Gun-metal SETO-4OS0004 là phiên bản cao cấp, mang vẻ đẹp mạnh mẽ và công nghệ Nhật Bản bền đẹp theo thời gian.",
    scopeOfWork: "Hoàn thiện Gun-metal sang trọng, dễ lắp đặt, phù hợp biệt thự và resort.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "SUS 304; Gun-metal; Chức năng đa dạng",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 55,
    name: "Luxury Shower Panel SETO-4HBH6040B",
    unitName: "SETO Vietnam",
    projectType: "Shower Panel",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Shower Panel Luxury SETO nâng tầm khu vực tắm với hệ thống massage và rain shower toàn diện, thiết kế xa hoa.",
    scopeOfWork: "Bảng điều khiển cao cấp, nhiều chế độ massage, chất liệu inox bền bỉ. Phù hợp phòng tắm biệt thự.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "SUS 304; Tích hợp massage & rain shower; Luxury",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 56,
    name: "Bồn tắm High-end SETOKKR-2BOSS72",
    unitName: "SETO Vietnam",
    projectType: "Bồn tắm High-end",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn tắm High-end SETOKKR-2BOSS72 là kiệt tác sang trọng, mang đến không gian ngâm thư giãn đẳng cấp cho gia đình thượng lưu.",
    scopeOfWork: "Chất liệu Acrylic tinh khiết, thiết kế tinh tế, hoàn thiện cao cấp.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Pure Acrylic; Thiết kế luxury; Kích thước lớn",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 57,
    name: "Bồn SPA cho gia đình thượng lưu SETO-2ST099",
    unitName: "SETO Vietnam",
    projectType: "Bồn SPA Jacuzzi",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn SPA SETO dành cho gia đình thượng lưu với hệ thống massage mạnh mẽ, thiết kế sang trọng Nhật Bản.",
    scopeOfWork: "Tích hợp bọt khí, đèn LED, chức năng Jacuzzi hiện đại.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Kích thước lớn; Hệ thống massage; Thượng lưu",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 58,
    name: "Bồn tắm Pure Acrylic SETO-2H5231",
    unitName: "SETO Vietnam",
    projectType: "Bồn tắm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn tắm Pure Acrylic SETO-2H5231 mang vẻ đẹp tinh tế, hướng tới sự thịnh vượng, phù hợp không gian phòng tắm cao cấp.",
    scopeOfWork: "Chất liệu Acrylic cao cấp, bền đẹp, thiết kế hiện đại.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Pure Acrylic; Thiết kế phong thuỷ; Tiết kiệm không gian",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 59,
    name: "Bàn cầu thời trang Luxury SETO-1S1P",
    unitName: "SETO Vietnam",
    projectType: "Bàn cầu luxury",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bàn cầu Luxury SETO mang thiết kế hiện đại tinh tế, chất lượng Nhật Bản, điểm nhấn sang trọng cho phòng tắm.",
    scopeOfWork: "Dễ lau chùi, chống bám bẩn, phù hợp không gian tối giản.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Men cao cấp; Thiết kế thời trang; Tiết kiệm nước",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
  {
    id: 60,
    name: "Sen cây cao cấp mạ màu SETO-4OS0003",
    unitName: "SETO Vietnam",
    projectType: "Sen tắm cây",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sen cây mạ màu SETO nổi bật với lớp hoàn thiện sang trọng, công nghệ Nhật Bản bền đẹp theo thời gian.",
    scopeOfWork: "Thiết kế luxury, lưu lượng nước mạnh, phù hợp phòng tắm hiện đại.",
    mainImage: [
      "/images/main/3.jpg"
    ],
    tags: "Mạ màu cao cấp; SUS 304; Chức năng đa dạng",
    startDate: "2026-06-24T23:15:03.480Z",
    createdAt: "2026-06-24T23:15:03.480Z"
  },
{
    id: 61,
    name: "Nệm foam Comfy Cloud 2.0 siêu đàn hồi dày 15cm",
    unitName: "Vua Nệm",
    projectType: "Nệm foam",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Nệm foam Comfy Cloud 2.0 mang đến sự êm ái đàn hồi vượt trội như cao su, hỗ trợ cột sống tối ưu cho giấc ngủ sâu và thoải mái.",
    scopeOfWork: "Nệm quốc dân bán chạy với công nghệ foam cao cấp, độ đàn hồi cao, thoáng khí tốt, phù hợp mọi lứa tuổi. Thiết kế hiện đại, nằm thử 120 đêm.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Dày 15cm; 6 kích thước; Siêu đàn hồi; Nâng đỡ cột sống",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 62,
    name: "Nệm cao su thiên nhiên Gummi Classic thế hệ mới",
    unitName: "Vua Nệm",
    projectType: "Nệm cao su thiên nhiên",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Nệm cao su Gummi Classic mang chất liệu thiên nhiên 100%, thoáng mát, đàn hồi vượt trội, mang lại giấc ngủ sâu và bảo vệ sức khỏe.",
    scopeOfWork: "Best seller lâu năm, công nghệ lỗ thoáng khí, kháng khuẩn tự nhiên. Phù hợp người đau lưng, gia đình có trẻ nhỏ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Dày 5/10/15cm; 6 kích thước; Lỗ thoáng khí; Kháng khuẩn",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 63,
    name: "Nệm foam iComfy Coolax Massage siêu thoáng mát",
    unitName: "Vua Nệm",
    projectType: "Nệm foam làm mát",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "iComfy Coolax mang công nghệ làm mát và massage, điều hòa thân nhiệt, tạo cảm giác thư giãn êm ái cho giấc ngủ mát mẻ.",
    scopeOfWork: "Thuộc BST Ngủ Mát, foam đa tầng thoáng khí cao, giảm áp lực, phù hợp mùa hè và người hay nóng bức.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Dày 15cm; 5 kích thước; Đa tầng; Massage thư giãn",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 64,
    name: "Nệm lò xo Amando Elite Original túi độc lập dày 23cm",
    unitName: "Vua Nệm",
    projectType: "Nệm lò xo túi độc lập",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Nệm lò xo Amando Elite Original mang công nghệ túi độc lập cao cấp, giảm tiếng ồn, nâng đỡ từng điểm tiếp xúc hoàn hảo.",
    scopeOfWork: "Thiết kế chuẩn khách sạn 5 sao, êm ái và chắc chắn, phù hợp cặp đôi và gia đình.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Dày 23cm; 6 kích thước; Túi độc lập; Tiêu chuẩn 5 sao",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 65,
    name: "Nệm cao su thiên nhiên Gummi Signature",
    unitName: "Vua Nệm",
    projectType: "Nệm cao su thiên nhiên",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Nệm Gummi Signature kết hợp công nghệ cao cấp, nâng đỡ vượt trội và kháng khuẩn mạnh mẽ cho giấc ngủ an toàn.",
    scopeOfWork: "Dòng cao cấp với tinh chất trà xanh, đàn hồi tốt, phù hợp gia đình hiện đại quan tâm sức khỏe.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công nghệ kép; 5 kích thước; Kháng khuẩn tối đa",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 66,
    name: "Nệm foam Kikoo Mát Lạnh Goodnight Active Hybrid",
    unitName: "Vua Nệm",
    projectType: "Nệm foam Hybrid",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Kikoo Active Hybrid mang công nghệ Đức, mát lạnh vượt trội, kết hợp foam và lò xo cho trải nghiệm ngủ đẳng cấp.",
    scopeOfWork: "Hybrid thoáng khí cao, giảm nhiệt hiệu quả, bán chạy mạnh trong BST Ngủ Mát.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công nghệ KIKOO từ Đức; Siêu làm mát; 5 kích thước",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 67,
    name: "Gối cao su Gummi Contour Massage",
    unitName: "Vua Nệm",
    projectType: "Gối cao su",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Gối Gummi Contour giảm nhức mỏi vai gáy hiệu quả với thiết kế công thái học và chất liệu cao su thiên nhiên.",
    scopeOfWork: "Hỗ trợ định hình cổ, thoáng khí, phù hợp người làm việc văn phòng hoặc hay đau cổ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thiết kế contour; Massage cổ vai gáy; Cao su thiên nhiên",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 68,
    name: "Bộ ga chun Tencel cao cấp Goodnight Airsilk",
    unitName: "Vua Nệm",
    projectType: "Bộ ga chun Tencel",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bộ ga chun Goodnight Airsilk từ sợi Tencel cao cấp, mềm mại, thoáng khí, mang lại cảm giác sang trọng và mát mẻ.",
    scopeOfWork: "Dễ giặt, bền màu, phù hợp mọi mùa.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "5 kích thước; 9 màu sắc; Thoáng mát",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 69,
    name: "Chăn Tencel cao cấp Goodnight Airsilk",
    unitName: "Vua Nệm",
    projectType: "Chăn Tencel",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Chăn Goodnight Airsilk mang công nghệ Tencel, mềm mại, thoáng mát, nâng niu giấc ngủ suốt năm.",
    scopeOfWork: "Sang trọng, dễ chịu, phù hợp mọi mùa.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Mỏng nhẹ; Thoáng khí; Nhiều kích thước",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 70,
    name: "Nệm lò xo Amando Elite Plus túi độc lập",
    unitName: "Vua Nệm",
    projectType: "Nệm lò xo túi độc lập",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Amando Elite Plus nâng đỡ cột sống tối ưu với công nghệ túi độc lập hiện đại, mang lại sự êm ái và thoáng mát vượt trội.",
    scopeOfWork: "Dòng cao cấp, bền bỉ, phù hợp gia đình và căn hộ hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Túi độc lập 3 vùng; Thoáng khí cao; Dày cao cấp",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 71,
    name: "Bồn cầu COTTO hai khối Harmony C167507",
    unitName: "Cotto Vietnam",
    projectType: "Bồn cầu hai khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu COTTO Harmony mang thiết kế tinh tế, đường nét mềm mại, kết hợp hiệu suất xả mạnh mẽ và dễ lau chùi cho phòng tắm hiện đại.",
    scopeOfWork: "Bồn cầu hai khối cao cấp với men sứ chất lượng Thái Lan, xả tiết kiệm nước, nắp đóng êm. Thiết kế Harmony sang trọng, phù hợp nhà ở gia đình và công trình cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 395 x 705 x 790 mm; Xả kép; S-Trap 305mm; Nắp đóng êm",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 72,
    name: "Bồn cầu tự động hoàn toàn COTTO Verzo C10207",
    unitName: "Cotto Vietnam",
    projectType: "Bồn cầu thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu thông minh Verzo C10207 mang công nghệ tự động hoàn toàn hiện đại, mang đến trải nghiệm vệ sinh tiện nghi và cao cấp cho phòng tắm.",
    scopeOfWork: "Tích hợp nắp rửa điện tử, tự động xả, tự động đóng/mở nắp. Men sứ cao cấp, thiết kế sang trọng, phù hợp biệt thự, căn hộ cao cấp và khách sạn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thân dài; S-Trap 305mm; Nắp rửa điện tử; Xả Siphonic Jet 3.8L; Tự động đóng/mở và xả",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 73,
    name: "Lavabo đặt bàn đá Geo Round C003807 FR",
    unitName: "Cotto Vietnam",
    projectType: "Lavabo đặt bàn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Lavabo Geo Round C003807 FR mang thiết kế tròn tinh tế, hiện đại, tạo điểm nhấn nghệ thuật sang trọng cho mặt bàn đá phòng tắm.",
    scopeOfWork: "Chất liệu sứ cao cấp, dễ vệ sinh, đường nét mềm mại. Phù hợp phong cách tối giản và hiện đại, dễ phối hợp với nhiều loại vòi.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 450 x 450 x 170 mm; Hình tròn; Men sứ cao cấp",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 74,
    name: "Vòi lavabo nóng lạnh tay dài Enna CT300A(HM)",
    unitName: "Cotto Vietnam",
    projectType: "Vòi lavabo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Vòi lavabo Enna CT300A mang thiết kế tinh tế, vận hành mượt mà, kết hợp công năng và thẩm mỹ cao cho không gian lavabo.",
    scopeOfWork: "Thân đồng thau nguyên khối, bề mặt Chrome bền đẹp, tiết kiệm nước. Phù hợp lavabo đặt bàn hoặc treo tường trong phòng tắm gia đình và cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Nóng lạnh; Tay dài; Thân đồng thau; Hoàn thiện Chrome",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 75,
    name: "Lavabo treo tường Viva C0156",
    unitName: "Cotto Vietnam",
    projectType: "Lavabo treo tường",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Lavabo Viva C0156 mang thiết kế tối giản hiện đại, chất liệu sứ bền đẹp, tạo điểm nhấn thanh lịch cho phòng tắm.",
    scopeOfWork: "Lavabo treo tường gọn gàng, dễ lau chùi, phù hợp không gian nhỏ và thiết kế tối giản.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 550 x 460 x 170 mm; 1 lỗ vòi; Men sứ cao cấp",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 76,
    name: "Củ sen tắm nóng lạnh âm tường NIQUE CT2249AV",
    unitName: "Cotto Vietnam",
    projectType: "Sen tắm âm tường",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Củ sen tắm NIQUE mang công nghệ hiện đại, thiết kế tối giản, mang đến trải nghiệm tắm thư giãn và sang trọng.",
    scopeOfWork: "Chất liệu cao cấp bền bỉ, điều chỉnh nhiệt độ mượt mà, phù hợp phòng tắm cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Nóng lạnh; Âm tường; Thiết kế NIQUE",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 77,
    name: "Cột sen cây COTTO CT6216#BL",
    unitName: "Cotto Vietnam",
    projectType: "Sen tắm cây",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sen cây CT6216 mang phong cách hiện đại mạnh mẽ, hoàn thiện Black sang trọng, nâng tầm khu vực tắm.",
    scopeOfWork: "Thiết kế chắc chắn, lưu lượng nước tốt, phù hợp biệt thự và phòng tắm luxury.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Hoàn thiện Black; Chức năng đa dạng",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 78,
    name: "Bàn cầu đặt sàn Oval SC19507(F)",
    unitName: "Cotto Vietnam",
    projectType: "Bồn cầu một khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bàn cầu Oval SC19507 mang thiết kế hiện đại bo tròn, vận hành êm ái và tiết kiệm nước, điểm nhấn sang trọng cho không gian phòng tắm.",
    scopeOfWork: "Thiết kế đặt sàn gọn gàng, men sứ cao cấp chống bám bẩn, phù hợp gia đình và căn hộ hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thoát ngang 190mm; Xả 3/4.5L; Nắp đóng êm",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 79,
    name: "Lavabo dương bàn Quado 45 C0901",
    unitName: "Cotto Vietnam",
    projectType: "Lavabo đặt bàn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Lavabo Quado 45 mang thiết kế vuông hiện đại, chất liệu sứ bền đẹp, phù hợp mặt bàn đá và không gian tối giản.",
    scopeOfWork: "Dễ lắp đặt, dễ vệ sinh, là lựa chọn phổ biến cho phòng tắm gia đình.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 450 x 460 x 193 mm; Dương bàn",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 80,
    name: "Vòi lavabo nóng lạnh CUBIG CT2200A",
    unitName: "Cotto Vietnam",
    projectType: "Vòi lavabo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Vòi lavabo CUBIG CT2200A mang thiết kế gọn gàng, vận hành êm ái, là giải pháp hoàn hảo cho lavabo hiện đại.",
    scopeOfWork: "Chất liệu đồng thau cao cấp, bền đẹp theo thời gian, phù hợp nhiều kiểu lavabo.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Nóng lạnh; Thân đồng thau; Hoàn thiện Chrome",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 81,
    name: "Bàn cầu một khối nắp êm CD1391",
    unitName: "Caesar Vietnam",
    projectType: "Bồn cầu một khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bàn cầu Caesar CD1391 mang thiết kế hiện đại tinh tế, hệ thống xả mạnh mẽ Aqua-Jet, kết hợp nắp êm ái, mang đến sự tiện nghi và sang trọng cho phòng tắm.",
    scopeOfWork: "Sứ cao cấp nano kháng khuẩn, xả xoáy mạnh, tiết kiệm nước, dễ lau chùi. Phù hợp gia đình hiện đại, căn hộ và nhà phố cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Xả 3-4.8L; Aqua-Jet; Tâm thoát 300mm; KT: 665x370x755mm; Nắp êm",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 82,
    name: "Bàn cầu hai khối nắp êm CD1320",
    unitName: "Caesar Vietnam",
    projectType: "Bồn cầu hai khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bàn cầu Caesar CD1320 kết hợp thiết kế cổ điển và công nghệ xả hiện đại, mang lại hiệu suất vệ sinh vượt trội cùng vẻ ngoài thanh lịch.",
    scopeOfWork: "Men sứ nano Tect diệt khuẩn, xả mạnh tiết kiệm nước, nắp đóng êm. Lý tưởng cho công trình nhà ở và khách sạn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Xả 3-4.8L; Aqua-Jet; Tâm thoát 300mm; Nắp êm",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 83,
    name: "Bàn cầu hai khối kết hợp nắp thông minh CD1342 + TAF710H",
    unitName: "Caesar Vietnam",
    projectType: "Bồn cầu thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bàn cầu thông minh Caesar CD1342 kết hợp nắp TAF710H mang công nghệ vệ sinh cao cấp, nâng tầm trải nghiệm sử dụng hàng ngày.",
    scopeOfWork: "Tích hợp rửa tự động, sấy, khử mùi, nắp đóng êm. Phù hợp gia đình quan tâm sức khỏe và không gian cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Nắp điện tử; Rửa đa chức năng; Xả tiết kiệm nước",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 84,
    name: "Lavabo treo tường / đặt bàn LF5384",
    unitName: "Caesar Vietnam",
    projectType: "Lavabo treo tường",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Lavabo LF5384 Caesar mang thiết kế linh hoạt (treo tường hoặc đặt bàn), đường nét tối giản, tạo điểm nhấn thanh lịch cho phòng tắm hiện đại.",
    scopeOfWork: "Chất liệu sứ bền đẹp, bề mặt nhẵn mịn dễ vệ sinh. Phù hợp nhiều phong cách nội thất.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "KT: 500x800x100 mm; Men sứ cao cấp",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 85,
    name: "Lavabo âm bàn LF5128",
    unitName: "Caesar Vietnam",
    projectType: "Lavabo âm bàn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Lavabo âm bàn LF5128 Caesar mang thiết kế tinh tế, bề mặt kháng khuẩn, tạo sự sang trọng và gọn gàng cho mặt bàn đá.",
    scopeOfWork: "Bề mặt nhẵn mịn, hạn chế bám bẩn, phù hợp phòng tắm gia đình và cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "KT: 450 x 450 x 165 mm; Men nano Tect",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 86,
    name: "Vòi lavabo nóng lạnh B530CU",
    unitName: "Caesar Vietnam",
    projectType: "Vòi lavabo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Vòi lavabo B530CU Caesar mang thiết kế hiện đại, vận hành mượt mà, kết hợp công năng và thẩm mỹ cao cấp.",
    scopeOfWork: "Chất liệu đồng thau bền bỉ, tiết kiệm nước, phù hợp lavabo đặt bàn hoặc treo tường.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Nóng lạnh; Thân đồng thau; Hoàn thiện Chrome",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 87,
    name: "Vòi sen gạt nóng lạnh S573C",
    unitName: "Caesar Vietnam",
    projectType: "Sen tắm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sen tắm S573C Caesar mang công nghệ ổn nhiệt và thiết kế tinh tế, mang đến trải nghiệm tắm thư giãn đẳng cấp.",
    scopeOfWork: "Lưu lượng nước tốt, bền đẹp, phù hợp phòng tắm gia đình và biệt thự.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Nóng lạnh; Tay sen 03 chế độ; Chất liệu cao cấp",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 88,
    name: "Bồn tắm massage đơn lập MT0660C",
    unitName: "Caesar Vietnam",
    projectType: "Bồn tắm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn tắm Caesar MT0660C mang đến không gian thư giãn spa tại nhà với thiết kế sang trọng và hệ thống massage hiện đại.",
    scopeOfWork: "Chất liệu acrylic bền đẹp, phù hợp phòng tắm master biệt thự.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Acrylic cao cấp; Hệ thống massage; Đèn LED",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 89,
    name: "Lavabo kết hợp tủ treo LF5028 + EH15028DDRW7V",
    unitName: "Caesar Vietnam",
    projectType: "Lavabo + tủ treo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bộ lavabo tủ treo LF5028 Caesar là giải pháp hoàn chỉnh, sang trọng và tiện nghi cho phòng tắm hiện đại.",
    scopeOfWork: "Tích hợp lavabo và tủ lưu trữ, chất liệu cao cấp, phù hợp không gian tối giản.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kết hợp tủ; Thiết kế cao cấp; Nhiều màu",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 90,
    name: "Vòi bếp diệt khuẩn Plasma KP1035SA",
    unitName: "Caesar Vietnam",
    projectType: "Vòi bếp",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Vòi bếp KP1035SA Caesar tích hợp công nghệ diệt khuẩn Plasma tiên tiến, mang đến nước sạch an toàn cho gian bếp.",
    scopeOfWork: "Công nghệ Plasma diệt khuẩn, tiện lợi dây rút, phù hợp nhà bếp hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Diệt khuẩn Plasma; Dây rút; Nóng lạnh",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 91,
    name: "Thùng rác âm tủ bốn khoang 72 lít BRD600-72W",
    unitName: "Flexhouse VN",
    projectType: "Thùng rác âm tủ bếp",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thùng rác âm tủ BRD600-72W mang giải pháp lưu trữ thông minh, gọn gàng, giúp giữ vệ sinh tủ bếp tối ưu.",
    scopeOfWork: "Thiết kế 4 khoang phân loại rác, dung tích lớn, lắp âm tủ tiện lợi. Phù hợp tủ bếp hiện đại, gia đình và công trình cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Dung tích 72 lít (4 khoang); Âm tủ; Chất liệu cao cấp",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 92,
    name: "Thùng gạo thông minh âm tủ bếp Taura NM2312",
    unitName: "Flexhouse VN",
    projectType: "Thùng gạo âm tủ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thùng gạo thông minh Taura NM2312 mang giải pháp lưu trữ gạo sạch sẽ, tiện lợi và hiện đại cho tủ bếp.",
    scopeOfWork: "Hệ thống lấy gạo dễ dàng, chống ẩm mốc, lắp âm tủ tiết kiệm không gian. Lý tưởng cho gia đình Việt Nam.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Dung tích lớn; Âm tủ bếp; Thiết kế thông minh Taura",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 93,
    name: "Kệ để giày âm tủ áo xoay 180° cao cấp Taura RA20",
    unitName: "Flexhouse VN",
    projectType: "Kệ giày âm tủ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Kệ giày âm tủ Taura RA20 mang thiết kế xoay thông minh, tối ưu không gian lưu trữ giày dép trong tủ quần áo.",
    scopeOfWork: "Xoay linh hoạt 180°, chất liệu bền bỉ, lắp âm tủ gọn gàng. Phù hợp tủ áo hiện đại và biệt thự.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Xoay 180°; Âm tủ áo; Cao cấp Taura",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 94,
    name: "Thảm trang trí phòng khách hiện đại YN-SJ17",
    unitName: "Flexhouse VN",
    projectType: "Thảm trải sàn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thảm YN-SJ17 mang họa tiết hiện đại tinh tế, tạo điểm nhấn sang trọng cho phòng khách.",
    scopeOfWork: "Chất liệu cao cấp, dễ vệ sinh, phù hợp phong cách tối giản và hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Họa tiết hiện đại; Chống trượt; Màu xám",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 95,
    name: "Suốt treo quần áo nâng hạ Taura 10019",
    unitName: "Flexhouse VN",
    projectType: "Phụ kiện tủ quần áo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Suốt treo quần áo nâng hạ Taura mang giải pháp lưu trữ thông minh, dễ dàng lấy đồ ở độ cao.",
    scopeOfWork: "Hệ thống nâng hạ êm ái, chịu tải tốt, tối ưu không gian tủ áo.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Nâng hạ; Nhiều kích thước; Taura",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 96,
    name: "Khóa âm cửa lùa trượt cao cấp 829-2A",
    unitName: "Flexhouse VN",
    projectType: "Khóa cửa lùa",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Khóa âm cửa lùa 829-2A mang thiết kế tối giản, vận hành êm ái và bền bỉ cho cửa trượt.",
    scopeOfWork: "Chất liệu cao cấp, lắp âm gọn gàng, phù hợp cửa gỗ và nhôm.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Âm cửa; Nhiều màu; Cao cấp",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 97,
    name: "Đèn thả bàn ăn hiện đại FH25/40-W/B/Y",
    unitName: "Flexhouse VN",
    projectType: "Đèn thả bàn ăn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn thả FH25/40 mang thiết kế Bắc Âu tinh tế, tạo không khí ấm cúng cho bàn ăn.",
    scopeOfWork: "Ánh sáng đẹp, chất liệu cao cấp, phù hợp phòng khách và khu vực ăn uống.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Phong cách Bắc Âu; Nhiều màu; Hiện đại",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 98,
    name: "Ray âm giảm chấn tải trọng 35kg Taura S32-18",
    unitName: "Flexhouse VN",
    projectType: "Ray tủ âm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Ray âm giảm chấn Taura S32-18 mang chuyển động êm ái, bền bỉ cho ngăn kéo tủ bếp và tủ áo.",
    scopeOfWork: "Công nghệ giảm chấn cao cấp, chịu lực tốt, lắp đặt dễ dàng.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Giảm chấn; Tải trọng 35kg; Taura",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 99,
    name: "Hộp an toàn khóa mật mã và vân tay Taura HS031",
    unitName: "Flexhouse VN",
    projectType: "Hộp an toàn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Hộp an toàn Taura HS031 mang giải pháp bảo vệ tài sản thông minh với công nghệ vân tay và mật mã.",
    scopeOfWork: "Thiết kế chắc chắn, dễ sử dụng, phù hợp tủ quần áo và nhà ở.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Khóa mật mã + vân tay; Âm tủ hoặc độc lập",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 100,
    name: "Giá đựng đồ khô nâng hạ đa năng Taura MG616",
    unitName: "Flexhouse VN",
    projectType: "Giá nâng hạ tủ bếp",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giá đựng đồ khô nâng hạ Taura MG616 tối ưu không gian tủ bếp, dễ dàng lấy đồ ở chiều cao khác nhau.",
    scopeOfWork: "Thiết kế thông minh, chịu tải tốt, phù hợp tủ bếp hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Nâng hạ đa năng; Taura",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 101,
    name: "Sofa Fenway 4710 END LEFT",
    unitName: "Gỗ Trường Thành (TTF)",
    projectType: "Sofa gỗ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sofa Fenway 4710 END LEFT mang thiết kế hiện đại sang trọng từ gỗ solid cao cấp, tạo điểm nhấn đẳng cấp cho phòng khách.",
    scopeOfWork: "Chất liệu gỗ tự nhiên bền đẹp, đệm êm ái, hoàn thiện tinh tế. Phù hợp không gian nội thất cao cấp và khách sạn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: W980xD960xH660 mm; Gỗ solid; Màu Tự Nhiên",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 102,
    name: "Ghế Sandbar Counter Stool",
    unitName: "Gỗ Trường Thành (TTF)",
    projectType: "Ghế quầy bar",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Ghế Sandbar Counter Stool mang thiết kế tối giản hiện đại, chất liệu gỗ solid chắc chắn, phù hợp quầy bar và khu vực ăn uống.",
    scopeOfWork: "Thiết kế ergonomics, bền bỉ, hoàn thiện tinh tế, lý tưởng cho nội thất nhà hàng và gia đình.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 508x533x934 mm; Gỗ solid",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 103,
    name: "Ray trượt âm 3T GC mở TP (chốt âm) L400mm",
    unitName: "Gỗ Trường Thành (TTF)",
    projectType: "Phụ kiện tủ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Ray trượt âm Taura/TTF mang chuyển động êm ái, chịu tải tốt, tối ưu không gian tủ bếp và tủ áo.",
    scopeOfWork: "Công nghệ giảm chấn cao cấp, lắp đặt dễ dàng, bền bỉ theo thời gian.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Ray trượt âm 3 tầng; Chiều dài 400mm; Giảm chấn",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 104,
    name: "Khung Inox ốp cánh cửa 1.2x42x250x2402",
    unitName: "Gỗ Trường Thành (TTF)",
    projectType: "Phụ kiện cửa",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Khung Inox ốp cánh cửa TTF mang độ bền cao, hoàn thiện tinh tế, nâng tầm thẩm mỹ cho cửa gỗ.",
    scopeOfWork: "Chất liệu inox chống gỉ, lắp đặt chắc chắn, phù hợp cửa nội thất cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Inox cao cấp; Kích thước 1.2x42x250x2402 mm",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 105,
    name: "Chi Tiết BTP Mê gỗ Tràm 16x300x300mm",
    unitName: "Gỗ Trường Thành (TTF)",
    projectType: "Chi tiết gỗ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Chi tiết gỗ Tràm TTF mang vân gỗ tự nhiên đẹp, chất lượng cao, dùng cho trang trí và nội thất.",
    scopeOfWork: "Gỗ tự nhiên bền đẹp, phù hợp sản xuất đồ gỗ nội thất và ván sàn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Gỗ Tràm; Kích thước 16x300x300 mm",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 106,
    name: "Tu Media Cao TCSICA053A Màu Đen",
    unitName: "Gỗ Trường Thành (TTF)",
    projectType: "Tủ media",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Tủ media TCSICA053A mang thiết kế hiện đại, lưu trữ thông minh, điểm nhấn sang trọng cho phòng khách.",
    scopeOfWork: "Chất liệu gỗ cao cấp, hoàn thiện bền đẹp, phù hợp nội thất hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 1778x457x813 mm; Màu đen bit vân gỗ",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 107,
    name: "Ván gỗ ghép Cao Su BC 15x1220x2440",
    unitName: "Gỗ Trường Thành (TTF)",
    projectType: "Ván gỗ ghép",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Ván gỗ ghép Cao Su BC mang chất lượng cao, vân gỗ tự nhiên, là nguyên liệu lý tưởng cho sản xuất nội thất và đồ gỗ.",
    scopeOfWork: "Gỗ Cao Su bền chắc, bề mặt phẳng, phù hợp làm tủ, bàn ghế và các sản phẩm nội thất cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 15x1220x2440 mm; Gỗ Cao Su; BC",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 108,
    name: "Sofa 3 chỗ U118-009",
    unitName: "Gỗ Trường Thành (TTF)",
    projectType: "Sofa gỗ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sofa 3 chỗ U118-009 mang thiết kế sang trọng, chất liệu gỗ solid kết hợp da cao cấp, tạo không gian phòng khách đẳng cấp.",
    scopeOfWork: "Hoàn thiện tinh xảo, đệm êm ái, bền đẹp theo thời gian. Phù hợp biệt thự và khách sạn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 2220x940x870 mm; Da A0BL-CRA0BL; Gỗ solid",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 109,
    name: "Ván gỗ ghép Cao Su BC 20x1220x2440",
    unitName: "Gỗ Trường Thành (TTF)",
    projectType: "Ván gỗ ghép",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Ván gỗ ghép Cao Su dày 20mm mang độ bền cao, bề mặt phẳng mịn, là lựa chọn ưu việt cho sản xuất đồ nội thất.",
    scopeOfWork: "Độ dày lớn, chịu lực tốt, vân gỗ đẹp, phù hợp làm bàn ghế, tủ và các sản phẩm đòi hỏi độ chắc chắn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 20x1220x2440 mm; Gỗ Cao Su; BC",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 110,
    name: "Cục hít nam châm hình chữ nhật nhựa nâu 15x18x46",
    unitName: "Gỗ Trường Thành (TTF)",
    projectType: "Phụ kiện tủ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Cục hít nam châm TTF mang thiết kế nhỏ gọn, lực hút mạnh, giúp cánh tủ đóng êm ái và chắc chắn.",
    scopeOfWork: "Chất liệu nhựa cao cấp, nam châm bền, dễ lắp đặt, phù hợp tủ bếp, tủ áo và nội thất gỗ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 15x18x46 mm; Nam châm; Nhựa nâu",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 111,
    name: "Đèn LED âm trần 6W/9W/12W/15W/18W DN Series Panasonic",
    unitName: "Elmall",
    projectType: "Đèn LED âm trần",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn LED âm trần DN Series Panasonic mang thiết kế gọn nhẹ, ánh sáng đều, tiết kiệm điện, phù hợp mọi không gian nội thất hiện đại.",
    scopeOfWork: "Dòng đèn bán chạy với nhiều mức công suất, 3 màu ánh sáng (vàng/trung tính/trắng), chất liệu nhựa cao cấp, tuổi thọ cao, dễ lắp đặt.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công suất 6-18W; Ø144mm; Lỗ khoét Ø125mm; 3 màu ánh sáng; 1080lm",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 112,
    name: "Đèn âm trần Philips 600x600 CR488B LED75 NW W60L60 PSU LED",
    unitName: "Elmall",
    projectType: "Đèn panel âm trần",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn panel âm trần Philips CR488B mang ánh sáng mạnh, đều, đạt chuẩn phòng sạch, lý tưởng cho văn phòng, bệnh viện và khu công nghiệp.",
    scopeOfWork: "Thiết kế mỏng, chất lượng cao, quang thông lớn, phù hợp không gian yêu cầu độ sạch và ánh sáng chuyên nghiệp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "600x600mm; 69W; 7500lm; 4000K; Tiêu chuẩn phòng sạch",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 113,
    name: "Đèn LED âm trần đổi màu Meson SSW 125 13W WH Recessed Philips",
    unitName: "Elmall",
    projectType: "Đèn LED âm trần đổi màu",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn Meson SSW 125 13W Philips cho phép đổi 3 màu ánh sáng chỉ bằng công tắc, mang lại sự linh hoạt và sang trọng cho không gian.",
    scopeOfWork: "Thiết kế mỏng gọn, độ hoàn màu cao, dễ lắp đặt, phù hợp phòng khách, showroom và nhà ở hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "13W; Lỗ khoét 125mm; 3 màu (2700K/4000K/6500K); 900lm",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 114,
    name: "Đèn LED âm trần 12W Marcasite 59522 Philips",
    unitName: "Elmall",
    projectType: "Đèn LED âm trần",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn Marcasite 59522 Philips mang thiết kế tinh tế, ánh sáng đều, chất lượng cao cấp từ Philips.",
    scopeOfWork: "Bền bỉ, tiết kiệm điện, phù hợp phòng ngủ, hành lang và văn phòng.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "12W; D90; Ánh sáng trung tính/trắng",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 115,
    name: "Đèn LED âm trần 9W DL190B Eridani Philips D90",
    unitName: "Elmall",
    projectType: "Đèn LED âm trần",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn Eridani DL190B Philips nhỏ gọn, ánh sáng đẹp, dễ dàng lắp đặt cho không gian hiện đại.",
    scopeOfWork: "Thiết kế tối giản, hiệu suất cao, phù hợp phòng khách và phòng làm việc.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "9W; D90; Ánh sáng đa dạng",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 116,
    name: "Đèn đường CityStar BRP331 R5N PC PSU S1 SPD VN EX Philips",
    unitName: "Elmall",
    projectType: "Đèn đường LED",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn đường CityStar BRP331 Philips mang hiệu suất chiếu sáng mạnh, bền bỉ ngoài trời, tiết kiệm điện vượt trội.",
    scopeOfWork: "Thiết kế chuyên dụng cho đường phố, khu công nghiệp và khu dân cư.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công suất cao; Chống sét; IP cao",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 117,
    name: "Đèn pha LED Tango BVP361 Philips 155W",
    unitName: "Elmall",
    projectType: "Đèn pha LED",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn pha Tango BVP361 Philips mạnh mẽ, chiếu sáng rộng, phù hợp sân thể thao, nhà xưởng và khu vực ngoài trời lớn.",
    scopeOfWork: "Độ bền cao, tiết kiệm điện, ánh sáng mạnh và đều.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "155W; Công suất lớn; Chiếu xa",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 118,
    name: "Quạt trần Royal Lotus không đèn 5 cánh gỗ hình hoa sen",
    unitName: "Elmall",
    projectType: "Quạt trần",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Quạt trần Royal Lotus mang thiết kế hoa sen tinh tế, gió mạnh, êm ái, tạo điểm nhấn sang trọng cho phòng khách.",
    scopeOfWork: "Cánh gỗ cao cấp, vận hành êm, phù hợp không gian nội thất Việt Nam.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "5 cánh gỗ; Không đèn; Kiểu dáng sang trọng",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 119,
    name: "Đèn LED âm trần 5W Pomeron 59775 Philips",
    unitName: "Elmall",
    projectType: "Đèn LED âm trần",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn Pomeron 59775 Philips nhỏ gọn, ánh sáng ấm, phù hợp hành lang, cầu thang và không gian phụ.",
    scopeOfWork: "Thiết kế hiện đại, chất lượng Philips, tiết kiệm điện.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "5W; Pomeron series; Ánh sáng đẹp",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 120,
    name: "Đèn LED Downlight 3 màu DLT 5W",
    unitName: "Elmall",
    projectType: "Đèn LED Downlight",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn Downlight DLT 5W linh hoạt đổi màu, ánh sáng đều, dễ lắp đặt cho nhiều không gian.",
    scopeOfWork: "Giải pháp chiếu sáng thông minh, giá tốt, phù hợp nhà ở và văn phòng.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "5W; 3 màu ánh sáng; D90",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 121,
    name: "Thang máy gia đình tải trọng 250kg",
    unitName: "Thang máy Thái Bình",
    projectType: "Thang máy gia đình",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy gia đình 250kg mang thiết kế hiện đại, vận hành êm ái, tiết kiệm diện tích, là giải pháp hoàn hảo cho nhà phố và biệt thự.",
    scopeOfWork: "Thiết kế cabin kính sang trọng, an toàn, phù hợp nhà cải tạo hoặc không gian hạn chế. Nhập khẩu và liên doanh, bảo hành dài hạn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Tải trọng 250kg; Cabin kính; Thủy lực hoặc trục vít; Phù hợp nhà 3-5 tầng",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 122,
    name: "Thang máy tải hàng 1000kg - 3000kg",
    unitName: "Thang máy Thái Bình",
    projectType: "Thang máy tải hàng",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy tải hàng Thái Bình được thiết kế chắc chắn, chịu tải lớn, phù hợp nhà máy sản xuất và kho hàng.",
    scopeOfWork: "Thành vách bền vững, sàn chống trượt, vận hành an toàn. Đáp ứng đa dạng tải trọng cho công nghiệp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Tải trọng 1000-3000kg; Sàn thép gân chống trượt; Thành chắc chắn",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 123,
    name: "Thang máy lồng kính (Thang quan sát)",
    unitName: "Thang máy Thái Bình",
    projectType: "Thang máy lồng kính",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy lồng kính mang vẻ đẹp hiện đại, lấy sáng tự nhiên, tạo điểm nhấn đẳng cấp cho công trình.",
    scopeOfWork: "Thiết kế kính toàn phần, an toàn, phù hợp cao ốc, trung tâm thương mại và biệt thự cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Cabin kính cường lực; Inox cao cấp; Sang trọng",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 124,
    name: "Thang máy tải khách liên doanh & nhập khẩu",
    unitName: "Thang máy Thái Bình",
    projectType: "Thang máy tải khách",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy tải khách Thái Bình mang thiết kế sang trọng, vận hành tự động thông minh, phù hợp nhà cao tầng và công trình dân dụng.",
    scopeOfWork: "Tự động hóa cao, an toàn, nhiều lựa chọn liên doanh hoặc nhập khẩu nguyên chiếc.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Tải trọng từ 450kg; Cửa lùa tự động; Đa dạng model",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 125,
    name: "Thang máy gia đình nhập khẩu",
    unitName: "Thang máy Thái Bình",
    projectType: "Thang máy gia đình",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy gia đình nhập khẩu mang công nghệ hiện đại, cabin kính sang trọng, vận hành êm ái và tiết kiệm điện.",
    scopeOfWork: "Xuất xứ rõ ràng từ các hãng lớn, phù hợp nhà phố, biệt thự và công trình cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Tải trọng 200-400kg; Kính cường lực; Nhập khẩu",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 126,
    name: "Thang máy bệnh viện",
    unitName: "Thang máy Thái Bình",
    projectType: "Thang máy bệnh viện",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy bệnh viện được thiết kế rộng rãi, an toàn, chuyên chở bệnh nhân và thiết bị y tế.",
    scopeOfWork: "Cửa lùa một bên rộng, cabin đủ chỗ cho giường bệnh, phù hợp các bệnh viện và cơ sở y tế.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Tải trọng lớn; Cửa mở rộng; Chở băng ca",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 127,
    name: "Thang máy tải ô tô",
    unitName: "Thang máy Thái Bình",
    projectType: "Thang máy tải ô tô",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy tải ô tô chuyên dùng vận chuyển xe hơi trong showroom và tầng hầm.",
    scopeOfWork: "Thiết kế 2 cửa đối diện tiện lợi, cabin chắc chắn, phù hợp trung tâm thương mại cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Tải trọng lớn; 2 cửa đối diện; Cabin chắc chắn",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 128,
    name: "Thang máy tải thực phẩm",
    unitName: "Thang máy Thái Bình",
    projectType: "Thang máy tải thực phẩm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang máy tải thực phẩm nhỏ gọn, nhanh chóng, chuyên chở đồ ăn và hàng hóa nhẹ.",
    scopeOfWork: "Thiết kế tiện lợi cho nhà hàng, khách sạn và khu bếp công nghiệp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Tải trọng 100-200kg; Cửa mở lên xuống; Nhỏ gọn",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 129,
    name: "Thang cuốn nhập khẩu",
    unitName: "Thang máy Thái Bình",
    projectType: "Thang cuốn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thang cuốn nhập khẩu vận chuyển người hiệu quả, phù hợp trung tâm thương mại, ga tàu và sân bay.",
    scopeOfWork: "Bậc thang chắc chắn, tay vịn an toàn, vận hành liên tục.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Nhập khẩu; 2 làn lên xuống; Công cộng",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 130,
    name: "Linh kiện thang máy (Tủ điện PLC, Nippon Nice3000)",
    unitName: "Thang máy Thái Bình",
    projectType: "Linh kiện thang máy",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Linh kiện thang máy Thái Bình bao gồm tủ điện, động cơ và phụ kiện cao cấp, đảm bảo chất lượng và thay thế kịp thời.",
    scopeOfWork: "Xuất xứ rõ ràng, hỗ trợ bảo trì lâu dài cho mọi hệ thống thang máy.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Tủ điện PLC; Tủ điện nhập khẩu; Phụ kiện chính hãng",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 131,
    name: "Robot hút bụi lau nhà Roborock Saros 20 Sonic",
    unitName: "O-Tech",
    projectType: "Robot hút bụi lau nhà",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Roborock Saros 20 Sonic mang công nghệ lau rung Sonic tiên tiến, hút bụi mạnh mẽ và lau sạch sâu, mang đến ngôi nhà sạch sẽ tự động.",
    scopeOfWork: "Dòng flagship mới với công nghệ Sonic lau mạnh, tránh va chạm thông minh, tự động đổ rác và sấy giẻ. Phù hợp gia đình hiện đại, biệt thự và căn hộ cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Lực hút mạnh; Lau rung Sonic; Trạm sạc tự động; App điều khiển",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 132,
    name: "Robot hút bụi lau nhà Roborock Saros 20",
    unitName: "O-Tech",
    projectType: "Robot hút bụi lau nhà",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Roborock Saros 20 là robot hút bụi lau nhà thông minh cao cấp, kết hợp hút và lau hiệu quả, vận hành êm ái và tự động hóa tối đa.",
    scopeOfWork: "Thiết kế hiện đại, trạm sạc tự động, bản đồ chính xác, phù hợp gia đình có trẻ nhỏ và thú cưng.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Lực hút cao; Trạm sạc đa năng; Điều hướng LiDAR",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 133,
    name: "Robot hút bụi lau nhà Roborock Qrevo Curv 2 Pro",
    unitName: "O-Tech",
    projectType: "Robot hút bụi lau nhà",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Roborock Qrevo Curv 2 Pro mang thiết kế vượt trội, lau sạch sâu và hút bụi mạnh mẽ, là lựa chọn cao cấp cho không gian sống hiện đại.",
    scopeOfWork: "Công nghệ mới nhất với trạm sạc thông minh, tránh thảm ướt, phù hợp biệt thự và căn hộ lớn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Trạm sạc nóng; Lau kép; Lực hút 5500Pa+",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 134,
    name: "Máy hút bụi cầm tay Roborock F25 ACE Combo",
    unitName: "O-Tech",
    projectType: "Máy hút bụi cầm tay",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Roborock F25 ACE Combo là máy hút bụi cầm tay đa năng, kết hợp hút bụi và lau sàn, tiện lợi cho vệ sinh nhanh hàng ngày.",
    scopeOfWork: "Thiết kế nhẹ, pin lâu, nhiều đầu hút, phù hợp nhà có trẻ em và thú cưng.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Không dây; Combo lau nhà; Lực hút mạnh",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 135,
    name: "Máy lọc không khí Levoit Core 300S",
    unitName: "O-Tech",
    projectType: "Máy lọc không khí",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Levoit Core 300S mang công nghệ lọc 3 tầng cao cấp, loại bỏ bụi mịn, vi khuẩn và mùi hiệu quả, bảo vệ sức khỏe gia đình.",
    scopeOfWork: "Thiết kế nhỏ gọn, vận hành êm, kết nối thông minh, bán chạy nhất phân khúc.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Diện tích 20-60m²; True HEPA; App điều khiển",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 136,
    name: "Máy lọc không khí Levoit Vital 100S",
    unitName: "O-Tech",
    projectType: "Máy lọc không khí",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Levoit Vital 100S là máy lọc không khí thông minh, lọc sạch nhanh, phù hợp phòng ngủ và phòng khách.",
    scopeOfWork: "Công nghệ lọc cao cấp, theo dõi chất lượng không khí thời gian thực qua app.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Phòng vừa; True HEPA; Kết nối WiFi",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 137,
    name: "Máy lọc nước ANJIER T4",
    unitName: "O-Tech",
    projectType: "Máy lọc nước",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy lọc nước ANJIER T4 mang thiết kế hiện đại, cung cấp nước nóng lạnh sạch, tiện lợi cho gia đình.",
    scopeOfWork: "Công nghệ RO tiên tiến, bù khoáng tự nhiên, phù hợp sử dụng hàng ngày.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Nóng lạnh; Bù khoáng; Để bàn",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 138,
    name: "Quạt tháp Levoit Classic 42-Inch",
    unitName: "O-Tech",
    projectType: "Quạt tháp",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Quạt tháp Levoit Classic 42-Inch mang gió mạnh, êm ái và thiết kế sang trọng cho không gian sống.",
    scopeOfWork: "Tích hợp WiFi, nhiều chế độ gió, phù hợp phòng khách và phòng ngủ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Cao 42 inch; Điều khiển thông minh; WiFi",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 139,
    name: "Máy lọc không khí Levoit Core 200S",
    unitName: "O-Tech",
    projectType: "Máy lọc không khí",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Levoit Core 200S là máy lọc không khí compact, hiệu suất cao, dễ dàng sử dụng cho phòng nhỏ.",
    scopeOfWork: "Thiết kế tối giản, lọc sạch nhanh, phù hợp phòng ngủ và phòng làm việc.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Phòng nhỏ-vừa; True HEPA; App điều khiển",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 140,
    name: "Robot hút bụi lau nhà Roborock Qrevo Slim",
    unitName: "O-Tech",
    projectType: "Robot hút bụi lau nhà",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Roborock Qrevo Slim nổi bật với thiết kế siêu mỏng, dễ dàng lau dưới gầm đồ nội thất thấp.",
    scopeOfWork: "Giải pháp hoàn hảo cho nhà có nhiều đồ đạc thấp, công nghệ hiện đại từ Roborock.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thiết kế mỏng; Lau kép; Trạm sạc thông minh",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 141,
    name: "Máy cấp khí tươi hồi nhiệt Ventra VEN68-MS",
    unitName: "CleanAir",
    projectType: "Máy cấp khí tươi",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Ventra VEN68-MS mang giải pháp cấp khí tươi giàu oxy, giảm CO₂ hiệu quả cho phòng kín, giúp ngủ ngon và không khí thoáng đãng hơn khi dùng điều hòa.",
    scopeOfWork: "Máy cấp khí tươi hồi nhiệt cao cấp, lọc bụi mịn HEPA H13, tiết kiệm điện, dễ lắp đặt. Phù hợp phòng ngủ, căn hộ chung cư và nhà phố hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công suất 68 m³/h; Hồi nhiệt 75%; Lọc HEPA H13; Độ ồn <40 dB; Công suất 2-7W",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 142,
    name: "Máy cấp khí tươi hồi nhiệt VT501-WF",
    unitName: "CleanAir",
    projectType: "Máy cấp khí tươi",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "VT501-WF là dòng máy cấp khí tươi thông minh, kiểm soát chất lượng không khí qua app, mang đến không gian sống trong lành và tiện nghi.",
    scopeOfWork: "Hồi nhiệt hiệu quả, lọc sạch bụi mịn, phù hợp căn hộ lớn và biệt thự.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công suất cao hơn; Hồi nhiệt; Kết nối WiFi; Lọc HEPA",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 143,
    name: "Máy lọc không khí Cuckoo CAC-D2410FW",
    unitName: "CleanAir",
    projectType: "Máy lọc không khí",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy lọc không khí Cuckoo CAC-D2410FW lọc sạch bụi mịn, khử mùi hiệu quả, phù hợp không gian lớn như phòng khách và căn hộ.",
    scopeOfWork: "Công nghệ Hàn Quốc, vận hành êm, màn hình hiển thị, bán chạy cho gia đình.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Diện tích 85m²; 3-4 lớp lọc; Cảm biến thông minh",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 144,
    name: "Máy lọc không khí Cuckoo CAC-CH0910FW",
    unitName: "CleanAir",
    projectType: "Máy lọc không khí tạo ẩm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Cuckoo CAC-CH0910FW kết hợp lọc không khí và tạo ẩm, duy trì độ ẩm lý tưởng, bảo vệ da và hô hấp.",
    scopeOfWork: "Thiết kế nhỏ gọn, phù hợp phòng ngủ và phòng trẻ em.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Diện tích 30m²; Tạo ẩm; Lọc HEPA",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 145,
    name: "Máy lọc không khí Cuckoo CAC-G0910FN",
    unitName: "CleanAir",
    projectType: "Máy lọc không khí",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Cuckoo CAC-G0910FN mang công nghệ lọc mạnh mẽ, loại bỏ bụi mịn và mùi hôi nhanh chóng.",
    scopeOfWork: "Màn hình LED, chế độ im lặng, phù hợp phòng nhỏ và văn phòng.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Diện tích 30m²; Chế độ Turbo; Cảm biến",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 146,
    name: "Máy lọc không khí Cuckoo CAC-C1220FW",
    unitName: "CleanAir",
    projectType: "Máy lọc không khí",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Cuckoo CAC-C1220FW lọc sạch vi khuẩn, nấm mốc và mùi khó chịu, mang lại không khí trong lành.",
    scopeOfWork: "Công suất mạnh, phù hợp phòng khách và không gian rộng.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Diện tích lớn; 3 lớp lọc; Khử mùi",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 147,
    name: "Máy lọc không khí để bàn KCvents",
    unitName: "CleanAir",
    projectType: "Máy lọc không khí để bàn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "KCvents là máy lọc không khí để bàn thông minh, lọc sạch bụi mịn và khử mùi cho không gian cá nhân.",
    scopeOfWork: "Thiết kế hiện đại, phù hợp văn phòng, bàn làm việc và phòng ngủ nhỏ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Ion oxy âm; Màn hình LED; Nhỏ gọn",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 148,
    name: "Máy lọc không khí tạo ẩm KC450-S8",
    unitName: "CleanAir",
    projectType: "Máy lọc không khí tạo ẩm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "KC450-S8 kết hợp lọc không khí và tạo ẩm, giữ độ ẩm lý tưởng, giảm khô da và hô hấp.",
    scopeOfWork: "Lọc 99,97% bụi mịn, phù hợp gia đình có trẻ nhỏ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "True HEPA; Tạo ẩm; Diện tích vừa",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 149,
    name: "Bộ lọc tròn HEPA H13 Ventra",
    unitName: "CleanAir",
    projectType: "Bộ lọc thay thế",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bộ lọc HEPA H13 Ventra thay thế cho máy cấp khí tươi, lọc sạch 99,95% bụi mịn, vi khuẩn và virus.",
    scopeOfWork: "Dễ thay, hiệu suất cao, cần thiết cho bảo dưỡng định kỳ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "HEPA H13; Lọc bụi mịn 0.3 micron",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 150,
    name: "Máy lọc không khí Cuckoo AC-03V10W (Ô tô)",
    unitName: "CleanAir",
    projectType: "Máy lọc không khí ô tô",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Cuckoo AC-03V10W mang không khí sạch cho khoang xe, loại bỏ khí độc và mùi khó chịu.",
    scopeOfWork: "Thiết kế compact, phù hợp tài xế và gia đình thường xuyên di chuyển.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Dành cho xe hơi; Ion Plasma; Nhỏ gọn",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 151,
    name: "Công tắc cảm ứng Luto",
    unitName: "Lumi / Omaqua",
    projectType: "Công tắc thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Công tắc cảm ứng Luto là dòng cao cấp chống ẩm thế hệ mới của Lumi, thiết kế sang trọng, điều khiển linh hoạt qua app và giọng nói.",
    scopeOfWork: "Bề mặt kính phẳng dễ lau, bo mạch chống oxi hóa, ổn định ở độ ẩm cao. Tích hợp kịch bản sống, phù hợp mọi không gian đặc biệt phòng tắm, bếp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Điện áp: 100-240V AC; Bluetooth Mesh + Zigbee; Chống ẩm toàn diện; Kính cường lực; 1-4 nút; Nhiệt độ hoạt động: 0-50°C",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 152,
    name: "Công tắc cơ thông minh Lumes",
    unitName: "Lumi / Omaqua",
    projectType: "Công tắc cơ thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Công tắc Lumes kết hợp chức năng cơ truyền thống và công nghệ thông minh, mang lại sự tiện lợi cho mọi lứa tuổi.",
    scopeOfWork: "Dễ sử dụng, tương thích hệ sinh thái Lumi, phù hợp nhà ở và công trình cần sự linh hoạt cao.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kết hợp cơ + thông minh; Tích hợp Lumi; Dễ lắp đặt; Bluetooth Mesh",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 153,
    name: "Công tắc WiFi Lumi IoT",
    unitName: "Lumi / Omaqua",
    projectType: "Công tắc WiFi",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Công tắc WiFi Lumi IoT cho phép điều khiển từ xa qua internet, không cần thiết bị trung tâm.",
    scopeOfWork: "Hỗ trợ voice control, lịch trình tự động, tiện lợi cho căn hộ và nhà phố.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kết nối WiFi trực tiếp; Điều khiển từ xa; Không cần hub; App Lumi Life Plus",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 154,
    name: "Đèn LED thông minh Lumi",
    unitName: "Lumi / Omaqua",
    projectType: "Đèn thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn thông minh Lumi cho phép tùy chỉnh ánh sáng theo từng khoảnh khắc, tạo không gian sống đẳng cấp.",
    scopeOfWork: "Hỗ trợ hàng trăm kịch bản, tiết kiệm điện, phù hợp phòng khách, phòng ngủ và khu vực giải trí.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Điều chỉnh màu sắc (RGB) & độ sáng; Công suất đa dạng; Zigbee; Tích hợp kịch bản",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 155,
    name: "Khóa vân tay thông minh Lumi",
    unitName: "Lumi / Omaqua",
    projectType: "Khóa cửa thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Khóa vân tay Lumi mang công nghệ nhận diện nhanh chóng, an toàn và tiện lợi, bảo vệ ngôi nhà toàn diện.",
    scopeOfWork: "Thiết kế hiện đại, ghi log ra vào, phù hợp cửa chính biệt thự và căn hộ cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Vân tay + mã số + app + thẻ từ; Pin dự phòng; Chống trộm; Kết nối Zigbee",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 156,
    name: "Động cơ rèm thông minh Lumi",
    unitName: "Lumi / Omaqua",
    projectType: "Động cơ rèm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Động cơ rèm Lumi tự động mở đóng rèm theo lịch trình hoặc kịch bản, mang lại sự tiện nghi tối đa.",
    scopeOfWork: "Vận hành êm, tích hợp kịch bản, phù hợp phòng khách và phòng ngủ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Vận hành êm ái; Điều khiển app & giọng nói; Zigbee; Chịu tải cao",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 157,
    name: "Cảm biến chuyển động Lumi",
    unitName: "Lumi / Omaqua",
    projectType: "Cảm biến an ninh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Cảm biến chuyển động Lumi giám sát thông minh, kích hoạt kịch bản ánh sáng hoặc cảnh báo an ninh.",
    scopeOfWork: "Độ nhạy cao, dễ lắp đặt, phù hợp hệ thống an ninh nhà thông minh.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Phát hiện chuyển động; Tích hợp báo động; Zigbee; Phạm vi rộng",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 158,
    name: "Bộ điều khiển trung tâm (Hub) Lumi",
    unitName: "Lumi / Omaqua",
    projectType: "Hub điều khiển",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bộ điều khiển trung tâm Lumi là “bộ não” của hệ thống, kết nối và điều khiển tất cả thiết bị thông minh.",
    scopeOfWork: "Hỗ trợ mở rộng lớn, giao diện thân thiện.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kết nối Zigbee; Hỗ trợ hàng trăm thiết bị; App Lumi Life Plus",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 159,
    name: "Module điều khiển điều hòa IR Lumi",
    unitName: "Lumi / Omaqua",
    projectType: "Module IR",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Module IR Lumi biến điều hòa cũ thành thông minh, điều khiển qua app và kịch bản.",
    scopeOfWork: "Tiết kiệm năng lượng, tương thích hầu hết điều hòa.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Hồng ngoại IR; Tích hợp app; Tự động hóa; Zigbee",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 160,
    name: "Cảm biến cửa mở Lumi",
    unitName: "Lumi / Omaqua",
    projectType: "Cảm biến cửa",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Cảm biến cửa Lumi giám sát cửa ra vào, gửi thông báo khi có sự cố.",
    scopeOfWork: "An ninh đa lớp, dễ lắp đặt, phù hợp nhà thông minh.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Phát hiện mở/đóng cửa; Báo động ngay lập tức; Zigbee",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 161,
    name: "Tấm pin TCL 615W 2 mặt kính",
    unitName: "DAT Solar",
    projectType: "Tấm pin mặt trời",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Tấm pin TCL 615W 2 mặt kính là giải pháp cao cấp, thu năng lượng từ cả hai mặt, tối ưu sản lượng điện cho hệ thống gia đình và công nghiệp.",
    scopeOfWork: "Công nghệ Half-cut, chống PID, chịu tải cơ học cao. Phù hợp mái nhà hướng Nam hoặc hệ thống lớn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "615W; 2 mặt kính; Hiệu suất cao; Topcon; Bảo hành 30 năm",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 162,
    name: "Tấm pin Astronergy 550W",
    unitName: "DAT Solar",
    projectType: "Tấm pin mặt trời",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Tấm pin Astronergy 550W thuộc Tier 1, công nghệ MBB hiện đại, mang lại hiệu suất cao và độ bền vượt trội.",
    scopeOfWork: "Vân tế bào tối ưu, chịu lực tốt, bảo hành dài hạn. Lý tưởng cho hộ gia đình và dự án.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "550W; Multi-Busbar (MBB); Tier 1 toàn cầu",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 163,
    name: "Tấm pin Canadian Solar 620W 2 mặt kính",
    unitName: "DAT Solar",
    projectType: "Tấm pin mặt trời",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Tấm pin Canadian Solar 620W 2 mặt kính là lựa chọn kinh tế - hiệu quả, tăng sản lượng điện đáng kể.",
    scopeOfWork: "Độ bền cao, chịu tải gió và tuyết tốt, phù hợp khí hậu Việt Nam.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "620W; 2 mặt kính; Hiệu suất 21.1%; Tier 1",
    startDate: "2026-06-24T23:19:28.170Z",
    createdAt: "2026-06-24T23:19:28.170Z"
  },
  {
    id: 164,
    name: "Inverter Hybrid SolaX",
    unitName: "DAT Solar",
    projectType: "Inverter hybrid",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Inverter Hybrid SolaX là giải pháp thông minh, kết hợp hòa lưới và lưu trữ, quản lý năng lượng tối ưu.",
    scopeOfWork: "Hỗ trợ pin lưu trữ, bảo hành dài, phù hợp hệ thống gia đình dùng điện ban đêm.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Hybrid; Tích hợp lưu trữ; AIoT; Công suất đa dạng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 165,
    name: "Inverter Hòa Lưới Sungrow",
    unitName: "DAT Solar",
    projectType: "Inverter hòa lưới",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Inverter Sungrow hòa lưới mang hiệu suất cao nhất, vận hành ổn định cho hệ thống điện mặt trời.",
    scopeOfWork: "Độ tin cậy cao, giám sát thông minh, phù hợp gia đình và công nghiệp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Hiệu suất >98%; Top 1 toàn cầu; Công suất cao",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 166,
    name: "Pin lưu trữ Lithium Valley",
    unitName: "DAT Solar",
    projectType: "Pin lưu trữ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Pin Lithium Valley mang công nghệ an toàn cao, dung lượng lớn, phù hợp tích hợp inverter hybrid.",
    scopeOfWork: "Độ sâu xả lớn, tuổi thọ cao, bảo hành dài hạn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Cell top 5 thế giới; IP65; Bảo hiểm 2 triệu USD",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 167,
    name: "Pin lưu trữ Pylontech",
    unitName: "DAT Solar",
    projectType: "Pin lưu trữ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Pin Pylontech là dòng cao cấp, thiết kế modular, dễ mở rộng theo nhu cầu.",
    scopeOfWork: "Tích hợp BMS thông minh, tương thích nhiều inverter.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Modular; Mở rộng dễ dàng; An toàn cao",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 168,
    name: "Đèn năng lượng mặt trời DAT",
    unitName: "DAT Solar",
    projectType: "Đèn năng lượng mặt trời",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn năng lượng mặt trời DAT tự động sáng khi trời tối, tiết kiệm điện, dễ lắp đặt.",
    scopeOfWork: "Thiết kế chống nước, phù hợp sân vườn, đường đi, cổng.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công suất đa dạng; Cảm biến chuyển động; Chống nước",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 169,
    name: "Inverter Hybrid GoodWe",
    unitName: "DAT Solar",
    projectType: "Inverter hybrid",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Inverter Hybrid GoodWe mang công nghệ hiện đại, hỗ trợ lưu trữ năng lượng.",
    scopeOfWork: "Bảo hành dài, phù hợp giải pháp Sunpro và SunLuxury.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Hiệu suất cao; Tích hợp pin; Giám sát app",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 170,
    name: "Hệ thống ESS (Energy Storage System)",
    unitName: "DAT Solar",
    projectType: "Hệ thống lưu trữ năng lượng",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Hệ thống ESS DAT Group cung cấp điện ổn định ngay cả khi mất điện lưới.",
    scopeOfWork: "Công nghệ cao, an toàn, phù hợp biệt thự và công trình yêu cầu điện liên tục.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Tích hợp inverter + pin; AIoT; Cao cấp",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 171,
    name: "Công tắc cảm ứng A78 Kính vàng",
    unitName: "DAT Solar",
    projectType: "Công tắc cảm ứng",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Công tắc cảm ứng A78 kính vàng mang thiết kế sang trọng, bề mặt kính phẳng, điều khiển dễ dàng bằng chạm nhẹ, phù hợp không gian hiện đại.",
    scopeOfWork: "Chất liệu kính cao cấp, bo mạch bền bỉ, tương thích hệ sinh thái Vconnex. Dễ lau chùi, thẩm mỹ cao.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kính cường lực; 1-4 nút; Màu vàng; Tích hợp thông minh",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 172,
    name: "Công tắc ba A78",
    unitName: "DAT Solar",
    projectType: "Công tắc cảm ứng",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Công tắc ba A78 là lựa chọn phổ biến, cho phép điều khiển nhiều thiết bị cùng lúc với thiết kế tinh tế.",
    scopeOfWork: "Bền đẹp, vận hành mượt mà, tích hợp công nghệ thông minh Vconnex.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "3 nút; Kính cường lực; Màu vàng/trắng; Thông minh",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 173,
    name: "Công tắc A66 nhôm vàng",
    unitName: "DAT Solar",
    projectType: "Công tắc cơ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Công tắc A66 nhôm vàng mang phong cách cổ điển sang trọng, chất lượng cao, phù hợp nhà phố và biệt thự.",
    scopeOfWork: "Chất liệu nhôm bền bỉ, tiếp xúc tốt, nhiều biến thể công suất.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "1-3 chiều; Nhôm vàng; 20A/45A",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 174,
    name: "Đèn LED Downlight 12W âm trần đổi màu PRDMM157L12/CCT",
    unitName: "DAT Solar",
    projectType: "Đèn LED âm trần",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn Downlight PRDMM đổi màu linh hoạt, ánh sáng đều, tiết kiệm điện, nâng tầm không gian nội thất.",
    scopeOfWork: "Công suất 12W, thay đổi nhiệt độ màu dễ dàng, phù hợp phòng khách, phòng ngủ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "12W; Đổi màu (CCT); Âm trần; Paragon",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 175,
    name: "Đèn LED Downlight 12W gắn nổi PSDNN170L12",
    unitName: "DAT Solar",
    projectType: "Đèn LED gắn nổi",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn Downlight PSDNN gắn nổi tiện lợi, ánh sáng đẹp, dễ lắp đặt cho trần thạch cao.",
    scopeOfWork: "Thiết kế hiện đại, phù hợp hành lang, phòng làm việc.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "12W; Gắn nổi; Paragon",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 176,
    name: "Khóa điện tử thông minh dành cho cửa gỗ - Đen",
    unitName: "DAT Solar",
    projectType: "Khóa cửa thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Khóa điện tử thông minh dành cho cửa gỗ mang công nghệ an ninh cao, mở khóa đa dạng, thiết kế sang trọng.",
    scopeOfWork: "Tích hợp app, báo động, phù hợp cửa chính nhà phố và căn hộ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Vân tay + mã số + app; Dành cho cửa gỗ; Màu đen",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 177,
    name: "Bộ điều khiển cửa cuốn thông minh",
    unitName: "DAT Solar",
    projectType: "Bộ điều khiển cửa cuốn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bộ điều khiển cửa cuốn thông minh cho phép mở đóng cửa cuốn qua app hoặc remote, tiện lợi và an toàn.",
    scopeOfWork: "Tích hợp hệ thống nhà thông minh, phù hợp gara và cổng nhà.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Điều khiển từ xa; Tích hợp thông minh; An toàn",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 178,
    name: "Ổ cắm 2 chấu 16A với 2 lỗ",
    unitName: "DAT Solar",
    projectType: "Ổ cắm điện",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Ổ cắm 16A chất lượng cao, an toàn, phù hợp sử dụng cho các thiết bị điện gia dụng.",
    scopeOfWork: "Tiếp xúc tốt, bền bỉ, nhiều biến thể từ các hãng Sino, DoBo.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "16A; 2 lỗ; Thiết kế Sino/DoBo",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 179,
    name: "Hạt công tắc cỡ đại 1 chiều A80",
    unitName: "DAT Solar",
    projectType: "Hạt công tắc",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Hạt công tắc A80 cỡ đại chất lượng cao, dùng thay thế hoặc lắp mới cho hệ thống điện.",
    scopeOfWork: "Độ bền cao, tiếp xúc tốt, phù hợp công trình dân dụng.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Cỡ đại; 1 chiều; ArtDNA",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 180,
    name: "Công tắc thông minh cho cửa cuốn",
    unitName: "DAT Solar",
    projectType: "Công tắc thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Công tắc thông minh chuyên dụng cho cửa cuốn, điều khiển từ xa qua app Vconnex.",
    scopeOfWork: "Tích hợp nhà thông minh, vận hành tiện lợi và an toàn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Dành cho cửa cuốn; Không viền; Trắng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 181,
    name: "Công tắc xoay điều chỉnh độ sáng thông minh SmartV | Mặt Hợp kim nhôm | 2 kênh",
    unitName: "DAT Solar",
    projectType: "Công tắc dimmer xoay",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sự kết hợp hoàn hảo giữa thiết kế cao cấp mặt hợp kim nhôm và công nghệ Zigbee tiên tiến, mang đến khả năng điều chỉnh ánh sáng linh hoạt cùng trải nghiệm điều khiển thông minh đẳng cấp.",
    scopeOfWork: "Công tắc xoay thông minh SmartV nổi bật với mặt hợp kim nhôm bền bỉ, tản nhiệt tốt, hỗ trợ 2 kênh điều khiển dimming đèn và quạt. Kết nối Zigbee ổn định cho phép tích hợp hệ sinh thái nhà thông minh, điều khiển từ xa, tạo kịch bản. Thiết kế chuẩn 86mm dễ lắp đặt, phù hợp căn hộ, nhà phố, khách sạn cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 86 x 86 x 32 mm; Công suất tải tối đa: <500W; Điện áp: AC 220V ~ 50/60Hz; Giao thức: Zigbee 3.0; Chất liệu: Hợp kim nhôm",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 182,
    name: "Công tắc thông minh SmartV | Dòng M6GL (Mặt Kính Cường Lực)",
    unitName: "DAT Solar",
    projectType: "Công tắc cảm ứng thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế tinh tế với mặt kính cường lực sang trọng, kết hợp công nghệ Zigbee hiện đại, mang lại sự kiểm soát thông minh và thẩm mỹ cao cho không gian sống.",
    scopeOfWork: "Dòng M6GL sở hữu mặt kính cường lực bền đẹp, dễ vệ sinh, hỗ trợ điều khiển từ xa qua app, giọng nói (Google/Alexa). Dễ thay thế công tắc cơ, tích hợp kịch bản thông minh. Phù hợp đa dạng công trình từ căn hộ đến biệt thự, văn phòng.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 86 x 86 x 28 mm; Công suất tải: <500W/kênh; Giao thức: Zigbee 3.0; Chất liệu mặt: Kính cường lực; Số nút: 1-8 nút",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 183,
    name: "SV-SDL-AL02 | Khóa Cửa Nhôm Thông Minh 6 in 1, IP65",
    unitName: "DAT Solar",
    projectType: "Khóa cửa thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giải pháp an ninh cao cấp với đa phương thức truy cập và thiết kế chống nước IP65, mang đến sự an toàn và tiện lợi vượt trội cho cửa nhôm.",
    scopeOfWork: "Khóa dành cho cửa nhôm/trượt, hỗ trợ quản lý từ xa qua app, cấp mã tạm thời, lịch sử ra vào. Chống nước, nhận diện vân tay nhanh, mật mã ảo bảo mật. Lý tưởng cho nhà ở, căn hộ dịch vụ, khách sạn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chất liệu: Hợp kim nhôm; Phương thức mở: Vân tay, mật mã, thẻ, app, chìa cơ, khuôn mặt; Chống nước IP65; Pin: Lithium; Kết nối: Wi-Fi/Smart Life",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 184,
    name: "Bộ điều khiển trung tâm thông minh 4 inch – Tích hợp âm thanh đa vùng | SmartV SVCP4",
    unitName: "DAT Solar",
    projectType: "Bộ điều khiển trung tâm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Trung tâm điều khiển thông minh tích hợp âm thanh đa vùng, mang đến trải nghiệm quản lý toàn diện và giải trí cao cấp ngay trong không gian sống.",
    scopeOfWork: "SVCP4 kết hợp điều khiển nhà thông minh với hệ thống âm thanh đa vùng, màn hình cảm ứng kính cường lực. Hỗ trợ kịch bản, nghe nhạc, FM. Thiết kế gắn âm tường tinh tế, phù hợp biệt thự, khách sạn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Màn hình: 4 inch IPS; CPU: Quad-core 1.2GHz; Kết nối: WiFi, Bluetooth, Ethernet, RS485; Âm thanh: 2x10W; Kích thước: 86.6 x 86.6 x 35.3 mm",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 185,
    name: "Màn Hình Điều Khiển Trung Tâm Thông Minh 8-Inch | SV-F8",
    unitName: "DAT Solar",
    projectType: "Màn hình điều khiển trung tâm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Màn hình chỉ huy cao cấp với âm thanh Hi-Fi và Zigbee mạnh mẽ, tái định nghĩa trung tâm giải trí và điều khiển cho ngôi nhà thông minh đẳng cấp.",
    scopeOfWork: "SV-F8 tích hợp màn hình lớn, gateway Zigbee, núm xoay vật lý, relay điều khiển đèn. Hỗ trợ nhạc đa định dạng, giám sát an ninh. Phù hợp biệt thự và dự án cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Màn hình: 8 inch IPS 1280x800; CPU: Quad-core 1.5GHz, RAM 2GB/ROM 8GB; Zigbee Gateway (50+ thiết bị); Âm thanh Hi-Fi THD 0.03%; Kết nối: WiFi, Ethernet, RS485",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 186,
    name: "Công tắc xoay điều chỉnh độ sáng thông minh SmartV | Mặt Nhựa PC | 2 kênh",
    unitName: "DAT Solar",
    projectType: "Công tắc dimmer xoay",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế hiện đại, bền bỉ với mặt nhựa PC cao cấp, cung cấp điều khiển dimming linh hoạt và tích hợp thông minh dễ dàng.",
    scopeOfWork: "Phiên bản mặt PC tiết kiệm, hỗ trợ điều chỉnh độ sáng/nhiệt độ màu, kết nối ổn định. Dễ lắp đặt, phù hợp nhiều không gian dân dụng và thương mại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước: 86 x 86 x 32 mm; Công suất: <500W; Điện áp: AC 220V; Giao thức: Zigbee; Chất liệu: Nhựa PC",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 187,
    name: "Công Tắc Ngữ Cảnh Thông Minh SmartV | 4 Nút | Dòng M8-PRO",
    unitName: "DAT Solar",
    projectType: "Công tắc ngữ cảnh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Công tắc ngữ cảnh đa năng, cho phép kích hoạt nhiều kịch bản chỉ với một nút bấm, nâng tầm tiện nghi sống thông minh.",
    scopeOfWork: "Hỗ trợ 4 nút tùy chỉnh kịch bản (về nhà, đi ngủ...), kết nối Zigbee. Thiết kế sang trọng, dễ sử dụng trong gia đình và khách sạn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Kích thước chuẩn 86mm; Giao thức: Zigbee; Mặt: Hợp kim nhôm/PC; Hỗ trợ kịch bản thông minh",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 188,
    name: "Công tắc điều chỉnh độ sáng & quạt (SCR) thông minh SmartV",
    unitName: "DAT Solar",
    projectType: "Công tắc quạt & dimmer",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giải pháp 2 trong 1 kiểm soát ánh sáng và quạt mượt mà, mang lại sự thoải mái tối ưu cho không gian sinh hoạt.",
    scopeOfWork: "Kết hợp dimmer đèn và điều khiển quạt, tích hợp thông minh. Phù hợp phòng khách, phòng ngủ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Hỗ trợ SCR quạt; Zigbee; Công suất phù hợp đèn/quạt",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 189,
    name: "Màn hình công tắc thông minh SmartV SV-HCP-01 (Mini 3.5 Inch)",
    unitName: "DAT Solar",
    projectType: "Màn hình công tắc mini",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Màn hình nhỏ gọn đa năng, kiểm soát nhanh các thiết bị và kịch bản ngay tại chỗ.",
    scopeOfWork: "Thiết kế compact, tích hợp điều khiển, phù hợp không gian hạn chế hoặc điểm nhấn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Màn hình: 3.5 inch cảm ứng; Kết nối thông minh",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 190,
    name: "Module điều khiển đèn thông minh SmartV | 16 kênh + RS485 – SV-T16",
    unitName: "DAT Solar",
    projectType: "Module điều khiển",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Module mạnh mẽ hỗ trợ điều khiển hàng loạt thiết bị, lý tưởng cho hệ thống lớn và tòa nhà.",
    scopeOfWork: "Hỗ trợ mở rộng hệ thống, tích hợp RS485 cho dự án quy mô. Phù hợp Smart Building.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "16 kênh; RS485; Zigbee",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 191,
    name: "Globe Trotter Collection",
    unitName: "Hoang Nam Group",
    projectType: "Bộ sưu tập nội thất du hành",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sự kết hợp tinh tế giữa thiết kế phiêu lưu và thủ công đỉnh cao, mang đến không gian sống độc đáo, đầy cảm hứng từ những chuyến khám phá toàn cầu.",
    scopeOfWork: "Bộ sưu tập Globe Trotter lấy cảm hứng từ các nhà thám hiểm, kết hợp yếu tố văn hóa đa dạng với chất liệu cao cấp và chi tiết thủ công tinh xảo. Phù hợp cho biệt thự, căn hộ cao cấp tìm kiếm phong cách cá tính, sáng tạo.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thiết kế bởi Marcel Wanders; Chất liệu đa dạng (gỗ, kim loại, vải cao cấp); Phong cách khám phá văn hóa",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 192,
    name: "Echoes - Roche Bobois Collection",
    unitName: "Hoang Nam Group",
    projectType: "Bộ sưu tập bàn & nội thất",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế tối giản hiện đại với chất liệu cao cấp, tạo điểm nhấn sang trọng và bền bỉ cho không gian phòng khách hoặc ăn.",
    scopeOfWork: "Echoes nổi bật với chân bàn thép oblique và mặt bàn kính/ceramic giả đá cẩm thạch, kết hợp hoàn hảo giữa công nghệ và thẩm mỹ Ý. Lý tưởng cho công trình cao cấp, mang lại cảm giác tinh tế, hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chân U-shaped thép mạ chrome đen; Mặt bàn kính/ceramic bền vững; Thiết kế minimalist bởi Mauro Lipparini",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 193,
    name: "Kendo Collection - Natuzzi Italia",
    unitName: "Hoang Nam Group",
    projectType: "Bộ sưu tập sofa & ghế",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sự hòa quyện giữa truyền thống thủ công Ý và thiết kế đương đại, mang đến sự thoải mái và tinh tế vượt trội cho không gian sống.",
    scopeOfWork: "Kendo thể hiện tinh thần Nam Ý qua đường nét mềm mại, chất liệu tự nhiên bền vững. Phù hợp biệt thự, nhà phố cao cấp, tạo không gian thư giãn đẳng cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Cảm hứng vùng Puglia Nam Ý; Thủ công đỉnh cao; Chất liệu da & vải cao cấp",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 194,
    name: "Sofa Mah Jong",
    unitName: "Hoang Nam Group",
    projectType: "Sofa modular",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sofa modular biểu tượng, cho phép sắp xếp tự do, mang đến sự linh hoạt và thoải mái tối đa cho không gian giải trí gia đình.",
    scopeOfWork: "Mah Jong nổi tiếng với khả năng biến đổi đa dạng, kết hợp đệm êm ái và thiết kế Pháp tinh tế. Phù hợp phòng khách lớn, khách sạn boutique.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thiết kế linh hoạt modular; Chất liệu vải/da cao cấp; Đa dạng màu sắc",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 195,
    name: "Bàn ăn Astrolab 2.0",
    unitName: "Hoang Nam Group",
    projectType: "Bàn ăn cơ khí",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bàn ăn công nghệ cao với cơ chế mở tự động, kết hợp thiết kế hiện đại và tiện nghi vượt trội.",
    scopeOfWork: "Astrolab 2.0 sử dụng động cơ tiên tiến cho phép mở rộng dễ dàng, chất liệu cao cấp bền đẹp. Lý tưởng cho gia đình đa thế hệ hoặc tiệc tùng cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Cơ chế mở rộng động cơ; Thiết kế Studio Roche Bobois; Phiên bản đặc biệt",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 196,
    name: "Ghế ăn Pulp",
    unitName: "Hoang Nam Group",
    projectType: "Ghế ăn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Ghế ăn sáng tạo với hình dáng hữu cơ, mang lại sự thoải mái và phong cách nghệ thuật cho bàn ăn.",
    scopeOfWork: "Pulp gợi hình ảnh tế bào sinh học qua đệm phân chia, kết hợp thẩm mỹ đương đại. Phù hợp không gian ăn uống hiện đại, cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thiết kế tế bào phân chia; Đệm êm ái; Chất liệu composite/vải",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 197,
    name: "Tủ Capsule",
    unitName: "Hoang Nam Group",
    projectType: "Tủ lưu trữ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Tủ đa năng với vẻ ngoài hiện đại, tối ưu không gian lưu trữ và trang trí.",
    scopeOfWork: "Capsule sở hữu cấu tạo hoàn hảo, chân mảnh mai, dễ dàng kết hợp nhiều không gian. Đại diện cho phong cách tối giản tinh tế của Roche Bobois.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thiết kế linh hoạt; Chân thanh thoát; Chất liệu cao cấp",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 198,
    name: "Rays Collection",
    unitName: "Hoang Nam Group",
    projectType: "Bộ sưu tập đèn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bộ đèn mang ánh sáng tự nhiên, tạo không khí ấm áp và sang trọng cho toàn bộ không gian.",
    scopeOfWork: "Rays lấy cảm hứng từ mặt trời, lan tỏa ánh sáng dịu dàng. Phù hợp phòng khách, khu vực sinh hoạt cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Cảm hứng nguồn sáng mặt trời; Thiết kế lan tỏa; Chất liệu cao cấp",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 199,
    name: "Bubble Sofa",
    unitName: "Hoang Nam Group",
    projectType: "Sofa",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sofa biểu tượng với hình dáng bong bóng mềm mại, mang lại cảm giác thư giãn tuyệt đối và thẩm mỹ độc đáo.",
    scopeOfWork: "Bubble nổi bật với đường cong uyển chuyển, chất liệu cao cấp, tạo điểm nhấn nghệ thuật. Lý tưởng cho không gian sống hiện đại, sáng tạo.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thiết kế tròn mềm mại; Đệm êm ái; Phong cách Roche Bobois",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 200,
    name: "Giường Contre-Jour",
    unitName: "Hoang Nam Group",
    projectType: "Giường ngủ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giường ngủ cao cấp với thiết kế tinh xảo, mang đến giấc ngủ đẳng cấp và không gian nghỉ ngơi sang trọng.",
    scopeOfWork: "Contre-Jour kết hợp thẩm mỹ Pháp hiện đại, chất liệu bền đẹp. Phù hợp master bedroom biệt thự và căn hộ cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thiết kế Roche Bobois; Chất liệu cao cấp; Phong cách tinh tế",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 201,
    name: "Bộ SP 3M CB03 - Máy nóng lạnh để bàn và nấu ăn",
    unitName: "3M Vietnam",
    projectType: "Máy lọc nước nóng lạnh để bàn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sự kết hợp hoàn hảo giữa công nghệ lọc Activated Carbon Block 3M và máy nóng lạnh cao cấp, mang đến nước siêu sạch uống trực tiếp và phục vụ nấu ăn với trải nghiệm tiện nghi đẳng cấp.",
    scopeOfWork: "Bộ sản phẩm CB03 tích hợp máy nóng lạnh HCD-CS01 và bộ lọc Brew120-MS, loại bỏ clo, cặn bẩn, chì, vi khuẩn hiệu quả theo chuẩn NSF 42/53. Chống bám cặn, giữ khoáng chất, dễ thay lõi. Phù hợp căn hộ, nhà bếp hiện đại và gia đình quan tâm sức khỏe.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Máy nóng lạnh: 3 chế độ (nóng 85-97°C, lạnh 5-10°C); Bộ lọc Brew120-MS: Công suất 34.069 lít, lưu lượng 5.7 L/phút, 0.5 Micron; Kích thước máy nóng lạnh: 30x46x52 cm",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 202,
    name: "Máy lọc nước 3M HCD2 - Máy nóng lạnh để bàn",
    unitName: "3M Vietnam",
    projectType: "Máy lọc nước nóng lạnh để bàn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Công nghệ lọc 3M kết hợp tia UV tiên tiến, cung cấp nước nóng lạnh siêu sạch an toàn, bảo vệ sức khỏe tối ưu trong không gian bếp hiện đại.",
    scopeOfWork: "HCD2 nổi bật với đèn UV tiêu diệt vi khuẩn/virus, lõi carbon lọc clo, chì, tạp chất. Thiết kế nhỏ gọn, BPA free, dễ thay lõi. Lý tưởng cho gia đình, văn phòng cao cấp.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "3 chế độ (nóng, lạnh, thường); Công suất lọc 4.000 lít; Dung tích 8.2 lít; UV diệt khuẩn; Kích thước: 29x49.7x47.4 cm; Xuất xứ vỏ: Hàn Quốc",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 203,
    name: "Máy lọc nước nóng lạnh 2 vòi KR3",
    unitName: "3M Vietnam",
    projectType: "Máy lọc nước nóng lạnh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế 2 vòi chuyên biệt với công nghệ 3M Brew120-MS, mang đến nguồn nước nóng lạnh dồi dào, tinh khiết cho nhu cầu sử dụng hàng ngày cao cấp.",
    scopeOfWork: "KR3 sử dụng lõi HF20-MS Mỹ, chống bám cặn, loại bỏ clo, u nang theo NSF. Vỏ Hàn Quốc bền bỉ. Phù hợp nhà phố, căn hộ và không gian cần nước sạch liên tục.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "2 chế độ nóng (85-95°C)/lạnh (10-15°C); Công suất 34.069 lít; Lưu lượng 5.7 L/phút; Dung tích bình nóng 2.15 lít, lạnh 3.6 lít; Kích thước: 110x26x36 cm",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 204,
    name: "Bộ lọc sen tắm 3M SFKC01-CN1",
    unitName: "3M Vietnam",
    projectType: "Bộ lọc sen tắm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giải pháp lọc sen tắm cao cấp khử clo và tạp chất, bảo vệ da và tóc khỏi kích ứng, mang đến trải nghiệm tắm thư giãn an toàn.",
    scopeOfWork: "SFKC01-CN1 sử dụng KDF nhập Mỹ, giảm clo, kim loại nặng hiệu quả theo NSF 177. Thiết kế nhỏ gọn, dễ lắp. Phù hợp phòng tắm gia đình, đặc biệt nhà có trẻ nhỏ và da nhạy cảm.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công suất 50.000 lít; Lưu lượng 8 L/phút; Công nghệ KDF; Nhiệt độ 5-50°C; Tuổi thọ lõi 12 tháng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 205,
    name: "Bộ máy lọc nước 3M Brew120-MS",
    unitName: "3M Vietnam",
    projectType: "Hệ thống lọc nước uống",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Hệ thống lọc nước uống flagship 3M, loại bỏ tạp chất toàn diện, cung cấp nước sạch uống trực tiếp với công nghệ tiên tiến và dễ dàng lắp đặt.",
    scopeOfWork: "Brew120-MS sử dụng Activated Carbon Block, loại bỏ clo, chì, thuốc trừ sâu, u nang. Chống bám cặn bảo vệ thiết bị. Phù hợp dưới chậu rửa, nhà bếp gia đình và thương mại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công suất 34.069 lít; Lưu lượng 5.7 L/phút; 0.5 Micron; Áp suất 172-862 kPa; Công nghệ SQC & chống bám cặn; Sản xuất Mỹ",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 206,
    name: "Máy làm mềm nước 3M SGP124BN-T",
    unitName: "3M Vietnam",
    projectType: "Máy làm mềm nước",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giải pháp làm mềm nước hiệu quả với công nghệ trao đổi Ion 3M, giảm canxi, magiê và clo, bảo vệ thiết bị gia dụng và da tóc.",
    scopeOfWork: "SGP124BN-T loại bỏ độ cứng nước, khử mùi clo, không điện không thải. Dễ thay lõi. Lý tưởng cho khu vực nước cứng, nhà ở và bảo vệ máy nóng lạnh, đường ống.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công suất 1.601 lít (độ cứng 180ppm); Lưu lượng 1.9 L/phút; Công nghệ trao đổi Ion; Kích thước: 10.2x50.2 cm; Sản xuất Ba Lan",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 207,
    name: "Máy lọc nước 3M ICE140S-WOI",
    unitName: "3M Vietnam",
    projectType: "Máy lọc nước công suất lớn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy lọc nước chuyên biệt cho không gian thương mại, cung cấp nước sạch ổn định với hiệu suất cao và độ bền vượt trội.",
    scopeOfWork: "ICE140S-WOI tối ưu cho quán cafe, nhà hàng với khả năng lọc mạnh, chống bám cặn. Phù hợp dự án F&B và công trình cần nước sạch liên tục.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công suất lớn cho quán cafe; Thiết kế chuyên dụng; Tiêu chuẩn NSF",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 208,
    name: "Máy lọc nước để bàn 3M CTM-02",
    unitName: "3M Vietnam",
    projectType: "Máy lọc nước để bàn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Máy lọc nước để bàn tinh tế, tiện lợi, mang đến nước sạch mọi lúc cho không gian hạn chế.",
    scopeOfWork: "CTM-02 nhỏ gọn, dễ lắp, phù hợp bàn ăn, văn phòng. Công nghệ 3M đảm bảo nước tinh khiết, an toàn.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thiết kế nhỏ gọn; Lọc nhanh; Tiêu chuẩn NSF",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 209,
    name: "Bộ lọc tủ lạnh 3M",
    unitName: "3M Vietnam",
    projectType: "Bộ lọc tủ lạnh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bộ lọc chuyên dụng cho tủ lạnh, giữ nước sạch và bảo vệ thiết bị làm lạnh.",
    scopeOfWork: "Giảm clo, cặn bẩn cho nước đá và uống từ tủ lạnh. Tăng tuổi thọ thiết bị, phù hợp gia đình hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Thiết kế dành riêng tủ lạnh; Loại bỏ tạp chất; Dễ lắp",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 210,
    name: "Máy làm mềm nước 3M SGP195BN-T",
    unitName: "3M Vietnam",
    projectType: "Máy làm mềm nước",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Phiên bản làm mềm nước công suất lớn, lý tưởng cho gia đình hoặc công trình quy mô vừa.",
    scopeOfWork: "SGP195BN-T xử lý nước cứng hiệu quả, giảm tích tụ cặn, bảo vệ toàn bộ hệ thống nước. Phù hợp biệt thự và nhà có nhu cầu sử dụng cao.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Công suất cao hơn; Công nghệ trao đổi Ion; Tiêu chuẩn NSF",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 211,
    name: "Giường Ngủ Bay Gỗ Công Nghiệp Có Đèn Led Cao Cấp",
    unitName: "Nội Thất Anh Khoa",
    projectType: "Giường ngủ bay LED",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế bay lơ lửng hiện đại kết hợp đèn LED ấm áp, mang đến không gian phòng ngủ sang trọng, tiện nghi và mở rộng thị giác đẳng cấp.",
    scopeOfWork: "Giường ngủ bay nổi bật với khung giấu chân tạo hiệu ứng lơ lửng, hệ thống đèn LED dưới gầm và đầu giường thông minh, đầu giường tích hợp kệ tab và ổ cắm. Chất liệu MDF Melamine bền bỉ, chống trầy, mối mọt. Phù hợp căn hộ chung cư, nhà phố hiện đại tìm kiếm sự tối giản và công nghệ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chất liệu: Gỗ MDF phủ Melamine dày 17mm; Kích thước: 120-180 x 200 cm (các size khác); Màu theo yêu cầu; Bảo hành: 24 tháng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 212,
    name: "Tủ Quần Áo Hiện Đại Gỗ Công Nghiệp Cao Cấp",
    unitName: "Nội Thất Anh Khoa",
    projectType: "Tủ quần áo hiện đại",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế tối giản tinh tế với chi tiết mây đan độc đáo, tối ưu lưu trữ và nâng tầm thẩm mỹ cho phòng ngủ hiện đại.",
    scopeOfWork: "Tủ quần áo cao cấp với cánh phẳng và mây đan thông thoáng, ngăn treo đồ, ngăn kéo khoa học. Bề mặt Melamine chống trầy, ẩm, dễ vệ sinh. Dễ phối với nội thất khác, phù hợp biệt thự, căn hộ gia đình.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chất liệu: Gỗ MDF phủ Melamine dày 17mm; Kích thước: 1m4-2m4 x 2m; Màu vân gỗ; Phụ kiện: Ray bi, bản lề giảm chấn; Bảo hành: 24 tháng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 213,
    name: "Bàn Trang Điểm Gương Tròn Thiết Kế Hiện Đại",
    unitName: "Nội Thất Anh Khoa",
    projectType: "Bàn trang điểm gương tròn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế tối giản với gương tròn mềm mại, mang đến góc làm đẹp tiện nghi, sang trọng và tinh tế cho không gian phòng ngủ.",
    scopeOfWork: "Bàn tích hợp gương tròn, ngăn kéo lưu trữ mỹ phẩm, khung chắc chắn. Dễ phối màu, tối ưu không gian nhỏ. Phù hợp phòng ngủ hiện đại, nữ tính.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chất liệu: Gỗ MDF phủ Melamine; Kích thước: 60-100 x 40 x 116 cm; Màu xám chì; Bảo hành: 6-24 tháng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 214,
    name: "Tủ Quần Áo Chữ L Phong Cách Hiện Đại",
    unitName: "Nội Thất Anh Khoa",
    projectType: "Tủ quần áo chữ L",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giải pháp lưu trữ góc chữ L thông minh, tối đa hóa không gian và phong cách hiện đại cho phòng ngủ hoặc master.",
    scopeOfWork: "Thiết kế chữ L tận dụng góc phòng, nhiều khoang treo và ngăn kéo. Bền bỉ, tùy chỉnh kích thước. Lý tưởng căn hộ, nhà phố có diện tích hạn chế.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chất liệu: Gỗ MDF phủ Melamine; Kích thước: Ngang (120+100) x 55 x 210 cm; Màu theo yêu cầu; Bảo hành: 24 tháng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 215,
    name: "Bộ Bàn Ăn Thông Minh 4 Ghế Hiện Đại",
    unitName: "Nội Thất Anh Khoa",
    projectType: "Bộ bàn ăn 4 ghế",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sự kết hợp hài hòa giữa mặt đá Ceramic cao cấp và thiết kế chân V hiện đại, mang đến không gian ăn uống sang trọng, dễ vệ sinh.",
    scopeOfWork: "Bộ gồm bàn Ceramic chống thấm, chân sắt chắc chắn và ghế êm ái. Phù hợp gia đình 4 người, không gian bếp - phòng ăn hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chất liệu: Mặt Ceramic, chân sắt sơn tĩnh điện, ghế da PU; Kích thước bàn: 140 x 75 cm; Màu xám/trắng; Bảo hành: 12 tháng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 216,
    name: "Kệ Tivi Treo Tường Thông Minh Hiện Đại",
    unitName: "Nội Thất Anh Khoa",
    projectType: "Kệ TV treo tường",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế treo tường tối giản, tạo cảm giác lơ lửng và tối ưu không gian phòng khách đẳng cấp.",
    scopeOfWork: "Kệ treo tường với ngăn kéo tiện lợi, bo góc an toàn, dễ giấu dây. Phù hợp phòng khách chung cư, nhà phố phong cách hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chất liệu: Gỗ MDF phủ Melamine dày 17mm; Kích thước: 120-180 x 30 x 15 cm; Màu trắng/xám; Ngăn kéo ray bi; Bảo hành: 24 tháng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 217,
    name: "Tủ Giày Tân Cổ Điển Màu Trắng Đẹp Hiện Đại",
    unitName: "Nội Thất Anh Khoa",
    projectType: "Tủ giày tân cổ điển",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sự hòa quyện tinh tế giữa phong cách tân cổ điển và hiện đại, mang đến điểm nhấn sang trọng ngay từ cửa ra vào.",
    scopeOfWork: "Tủ với ngăn kéo trên, cánh vòm cong dưới, chân thon gọn. Lưu trữ 15-20 đôi giày, bề mặt dễ lau. Phù hợp không gian tân cổ điển, hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chất liệu: Gỗ MDF phủ Melamine dày 17mm; Kích thước: 80-140 x 35 x 120 cm; Màu trắng; Tay nắm mạ vàng; Bảo hành: 24 tháng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 218,
    name: "Tủ Áo Cho Bé Gỗ Phối Màu Đẹp",
    unitName: "Nội Thất Anh Khoa",
    projectType: "Tủ quần áo trẻ em",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế vui tươi, an toàn với màu sắc phối hợp tinh tế, tối ưu lưu trữ cho không gian phòng trẻ em hiện đại.",
    scopeOfWork: "Tủ dành riêng trẻ em, nhiều ngăn kéo và treo đồ. Bền bỉ, màu sắc bắt mắt. Lý tưởng phòng bé, gia đình có con nhỏ.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chất liệu: Gỗ MDF phủ Melamine; Kích thước theo mẫu; Màu phối; Bảo hành: 24 tháng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 219,
    name: "Tủ Giày Dép Gỗ MDF Kết Hợp Hệ Treo Đồ Thông Minh",
    unitName: "Nội Thất Anh Khoa",
    projectType: "Tủ giày kết hợp treo đồ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giải pháp đa năng kết hợp lưu trữ giày và treo đồ, mang lại sự gọn gàng và tiện lợi cho entryway.",
    scopeOfWork: "Tủ giày cao với hệ treo, nhiều ngăn. Tối ưu không gian hẹp. Phù hợp hành lang, cửa ra vào.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chất liệu: Gỗ MDF phủ Melamine; Kích thước theo mẫu; Hệ treo thông minh; Bảo hành: 24 tháng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
  {
    id: 220,
    name: "Tủ Cầu Thang Gỗ Công Nghiệp Thiết Kế Đẹp Sang Trọng",
    unitName: "Nội Thất Anh Khoa",
    projectType: "Tủ âm cầu thang",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế thông minh tận dụng không gian dưới cầu thang, biến góc chết thành khu lưu trữ sang trọng và tiện nghi.",
    scopeOfWork: "Tủ âm cầu thang tùy chỉnh, nhiều ngăn. Tối ưu diện tích nhà phố, cầu thang. Phù hợp công trình hiện đại.",
    mainImage: [
      "/images/main/4.jpg"
    ],
    tags: "Chất liệu: Gỗ MDF phủ Melamine; Thiết kế âm cầu thang; Màu theo yêu cầu; Bảo hành: 24 tháng",
    startDate: "2026-06-24T23:19:28.171Z",
    createdAt: "2026-06-24T23:19:28.171Z"
  },
{
    id: 221,
    name: "Bàn cầu một khối Viglacera V803",
    unitName: "Viglacera",
    projectType: "Bồn cầu một khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế hiện đại liền khối với công nghệ ViGuard kháng khuẩn và xả Washdown mạnh mẽ, mang đến không gian phòng tắm sạch sẽ, an toàn và tinh tế.",
    scopeOfWork: "Bồn cầu V803 sở hữu men sứ Nano ViGuard ức chế vi khuẩn, vành Box Rim dễ vệ sinh, xả thẳng hiệu quả. Nắp đóng êm, thiết kế công thái học. Phù hợp căn hộ, nhà phố và công trình cao cấp tìm kiếm sự bền bỉ, tiện nghi.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước: 688x392x695 mm; Xả Washdown 3/6L; Men ViGuard kháng khuẩn; Nắp rơi êm; Tâm thoát: 305 mm; Đặt sàn",
    startDate: "2026-06-24T23:24:28.751Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 222,
    name: "Chậu rửa đặt bàn Viglacera Platinum P.22.680",
    unitName: "Viglacera",
    projectType: "Lavabo đặt bàn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sang trọng và tinh tế với men sứ cao cấp kháng khuẩn, thiết kế đặt bàn hiện đại nâng tầm thẩm mỹ cho phòng tắm đẳng cấp.",
    scopeOfWork: "Lavabo Platinum P.22.680 sử dụng công nghệ men Nano Titan từ Italy, bề mặt chống bám bẩn, dễ lau chùi. Kích thước rộng rãi, phù hợp tủ lavabo cao cấp. Lý tưởng biệt thự, khách sạn và không gian hiện đại.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước: 800 x 500 x 60 mm; Men Nano Titan kháng khuẩn; Phụ kiện: Nút xả sứ; Công nghệ Italy; Màu trắng",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 223,
    name: "Sen tắm cây Viglacera Platinum P.58.326",
    unitName: "Viglacera",
    projectType: "Sen tắm cây nhiệt độ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế sang trọng màu đen PVD kết hợp công nghệ điều nhiệt Thermostat, mang đến trải nghiệm tắm thư giãn đẳng cấp và an toàn.",
    scopeOfWork: "Sen cây Platinum P.58.326 với thân đồng cao cấp, lớp mạ bền màu chống trầy, chống bám bẩn. Bát sen phun đều + massage, cách nhiệt chống bỏng. Phù hợp phòng tắm master cao cấp.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước: W300xD520xH1230 mm; Chất liệu: Đồng nguyên chất; Mạ đen PVD; Thermostat điều nhiệt; Bát sen massage",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 224,
    name: "Bồn cầu thông minh Viglacera V885",
    unitName: "Viglacera",
    projectType: "Bồn cầu thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu thông minh cao cấp với công nghệ xoáy mạnh mẽ và men kháng khuẩn, tái định nghĩa trải nghiệm vệ sinh hiện đại, tiện nghi.",
    scopeOfWork: "V885 tích hợp cảm ứng, rửa sấy, xả xoáy mạnh, men ViGuard. Thiết kế thân kín dễ vệ sinh. Phù hợp gia đình hiện đại, khách sạn 4-5 sao.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Xả xoáy Max Vortex; Men ViGuard; Tích hợp chức năng rửa sấy tự động; Nắp điện tử",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 225,
    name: "Lavabo treo tường Viglacera Platinum P.26.321",
    unitName: "Viglacera",
    projectType: "Lavabo treo tường",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giải pháp tối ưu không gian với thiết kế treo tường tinh tế, men sứ cao cấp kháng khuẩn cho phòng tắm hiện đại.",
    scopeOfWork: "Chậu treo Platinum sử dụng sứ cao cấp, bề mặt chống bám, dễ vệ sinh. Thiết kế gọn gàng, phù hợp căn hộ chung cư và không gian hạn chế.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước chuẩn Platinum; Men Nano Titan; Thiết kế Italy; Kèm chân hoặc treo",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 226,
    name: "Vòi lavabo Viglacera Platinum P.51.326",
    unitName: "Viglacera",
    projectType: "Vòi lavabo nóng lạnh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Vòi lavabo cao cấp mạ PVD sang trọng, kiểm soát nhiệt độ chính xác, nâng tầm tiện nghi sử dụng hàng ngày.",
    scopeOfWork: "Vòi Platinum đồng nguyên chất, mạ bền màu, chống bám bẩn. Tay gạt êm, phù hợp lavabo cao cấp. Lý tưởng phòng tắm master.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu: Đồng mạ PVD; Bộ trộn Ceramic; Thiết kế hiện đại",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 227,
    name: "Bồn cầu 1 khối Viglacera BL5",
    unitName: "Viglacera",
    projectType: "Bồn cầu một khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu bán chạy với xả mạnh mẽ và men kháng khuẩn, cân bằng hoàn hảo giữa chất lượng và giá trị.",
    scopeOfWork: "BL5 nổi bật xả tia đẩy mạnh, bề mặt sứ bền đẹp. Dễ lắp đặt, phù hợp đa dạng công trình dân dụng.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Xả Turbo Vortex; Men ViGuard; Thiết kế nhỏ gọn",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 228,
    name: "Sen tắm nóng lạnh Viglacera Platinum P.57.350",
    unitName: "Viglacera",
    projectType: "Sen tắm cây nóng lạnh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sen tắm Platinum mang đến trải nghiệm tắm massage thư giãn với công nghệ điều nhiệt ổn định và thiết kế tinh tế.",
    scopeOfWork: "Thân sen đồng cao cấp, nhiều chế độ phun, bề mặt sáng bóng bền màu. Phù hợp phòng tắm gia đình và cao cấp.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Đồng nguyên chất; Mạ Chrome/Niken; Bát sen massage; Thermostat",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 229,
    name: "Bồn tắm Viglacera Platinum P.61.356",
    unitName: "Viglacera",
    projectType: "Bồn tắm lập thể",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn tắm lập thể cao cấp từ đá nhân tạo Solid Surface, kết hợp thiết kế hiện đại tinh giản và độ bền vượt trội, mang đến không gian thư giãn spa đẳng cấp tại gia.",
    scopeOfWork: "Bồn tắm Platinum P.61.356 đúc nguyên khối đá nhân tạo Solid Surface chống thấm, chống xước, dễ tái tạo bề mặt và vệ sinh. Thiết kế lập thể mạnh mẽ với tone trắng-đen tương phản, lòng bồn sâu thoải mái, phong cách tối giản hiện đại. Phù hợp biệt thự, căn hộ cao cấp và resort.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước: 1760 x 917 x 525 mm; Chất liệu: Đá nhân tạo Solid Surface; Màu: Trắng - Đen; Thiết kế liền khối; Bảo hành: 2 năm",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 230,
    name: "Gương phòng tắm Viglacera VG835",
    unitName: "Viglacera",
    projectType: "Gương phòng tắm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Gương cao cấp hoàn thiện không gian phòng tắm, kết hợp chức năng hiện đại và thẩm mỹ tinh tế.",
    scopeOfWork: "Thiết kế mỏng nhẹ, sáng bóng, dễ lau. Phù hợp combo thiết bị vệ sinh Viglacera.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước chuẩn; Có thể tích hợp LED/sấy; Thiết kế đồng bộ",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 231,
    name: "Nệm cao su thiên nhiên than hoạt tính TATANA Cool Grey",
    unitName: "Thế Giới Nệm",
    projectType: "Nệm cao su thiên nhiên",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sự kết hợp hoàn hảo giữa cao su thiên nhiên và than hoạt tính kháng khuẩn, mang đến giấc ngủ mát mẻ, sạch sẽ và nâng đỡ tối ưu cho không gian phòng ngủ hiện đại.",
    scopeOfWork: "Nệm TATANA Cool Grey sử dụng cao su thiên nhiên kết hợp than hoạt tính khử mùi, kháng khuẩn hiệu quả. Thiết kế thoáng khí, đàn hồi cao, hỗ trợ cột sống. Phù hợp mọi lứa tuổi, đặc biệt gia đình quan tâm sức khỏe và vệ sinh.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Độ dày: 10-20cm; Chất liệu: Cao su thiên nhiên + than hoạt tính; Vỏ: Vải sợi lạnh; Bảo hành: 10 năm; Độ cứng: Mềm vừa",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 232,
    name: "Nệm foam đa tầng cao su Sleep Lux TATANA",
    unitName: "Thế Giới Nệm",
    projectType: "Nệm foam đa tầng",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Công nghệ foam đa tầng kết hợp cao su mang lại sự êm ái, mát lạnh và nâng đỡ khoa học, tái định nghĩa giấc ngủ sang trọng và thư giãn.",
    scopeOfWork: "Sleep Lux TATANA với 4 lớp (cao su, Memory Foam Gel mát, Foam PU D40 nâng đỡ), giảm áp lực, thông thoáng khí tối đa. Kháng khuẩn, hạn chế rung lắc. Lý tưởng cho căn hộ, nhà phố hiện đại.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Độ dày: 22cm; Cấu tạo: Cao su thiên nhiên + Foam Memory Gel + Foam PU D40; Vỏ: Vải gấm băng lạnh; Bảo hành: 10 năm; Độ cứng: Mềm vừa",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 233,
    name: "Nệm cao su thiên nhiên Vạn Thành Unique",
    unitName: "Thế Giới Nệm",
    projectType: "Nệm cao su thiên nhiên",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Nệm cao su nguyên chất 100% với thiết kế lỗ thoáng khí đặc biệt, mang đến sự nâng đỡ hoàn hảo và độ bền vượt trội cho giấc ngủ sâu.",
    scopeOfWork: "Vạn Thành Unique nổi bật với cao su thiên nhiên không pha tạp, hai mặt lỗ thông hơi, kháng khuẩn, khử mùi. Hỗ trợ cột sống, đàn hồi cao. Phù hợp người đau lưng và gia đình lâu dài.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Độ dày: 5-20cm; Chất liệu: 100% cao su thiên nhiên; Thiết kế 2 mặt lỗ tròn; Vỏ: Vải gấm Indonesia; Bảo hành: 15 năm; Độ cứng: Cứng vừa",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 234,
    name: "Nệm lò xo Dunlopillo Lifestyle Plush",
    unitName: "Thế Giới Nệm",
    projectType: "Nệm lò xo",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế lò xo liên kết cao cấp châu Âu kết hợp lớp êm ái, mang đến sự năng động, thoáng mát và bảo vệ tối đa cho giấc ngủ chất lượng.",
    scopeOfWork: "Dunlopillo Lifestyle Plush với lò xo Normablock, Tigh Top êm ái, công nghệ kháng khuẩn Triple Barrier. Thoáng khí, giảm tiếng ồn. Phù hợp gia đình trẻ, người năng động.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Độ dày: 25cm; Hệ lò xo Normablock Pikolin; Công nghệ Triple Barrier, Aquagard; Bảo hành: 10 năm; Độ cứng: Mềm vừa",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 235,
    name: "Nệm cao su thiên nhiên Kim Cương 5Zone AloeLux",
    unitName: "Thế Giới Nệm",
    projectType: "Nệm cao su thiên nhiên 5 vùng",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Hệ thống 5 vùng nâng đỡ chuyên biệt kết hợp tinh chất Aloe, mang đến sự thoải mái cá nhân hóa và chăm sóc da tối ưu.",
    scopeOfWork: "Nệm Kim Cương phân vùng hỗ trợ vai, lưng, hông khoa học, thoáng khí, kháng khuẩn. Phù hợp mọi đối tượng, đặc biệt người cần hỗ trợ cột sống.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Độ dày đa dạng; Công nghệ 5Zone; Chất liệu cao su thiên nhiên + Aloe; Bảo hành dài hạn",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 236,
    name: "Ga lạnh TATANA Cool Soft CS01",
    unitName: "Thế Giới Nệm",
    projectType: "Ga trải giường",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Ga mát lạnh cao cấp, mang lại cảm giác dễ chịu, thoáng khí suốt đêm cho giấc ngủ sâu và thư giãn.",
    scopeOfWork: "TATANA Cool Soft với vải lạnh kháng khuẩn, mềm mại, dễ giặt. Phù hợp mùa hè và khí hậu nóng ẩm, phối hợp hoàn hảo với nệm TATANA.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu: Vải lạnh cao cấp; Kích thước đa dạng; Thiết kế mát lạnh",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 237,
    name: "Gối cao su dợn sóng TATANA",
    unitName: "Thế Giới Nệm",
    projectType: "Gối cao su",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế gối dợn sóng massage hỗ trợ cổ vai, mang đến tư thế ngủ chuẩn và giảm đau mỏi hiệu quả.",
    scopeOfWork: "Gối TATANA với cấu trúc sóng đàn hồi, thoáng khí, kháng khuẩn. Hỗ trợ cột sống cổ, phù hợp mọi lứa tuổi.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước: Chuẩn; Chất liệu cao su thiên nhiên; Thiết kế dợn sóng công thái học; Bảo hành: Theo hãng",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 238,
    name: "Topper TATANA Premium",
    unitName: "Thế Giới Nệm",
    projectType: "Topper nệm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Lớp topper êm ái nâng cấp độ thoải mái cho nệm cũ hoặc mới, mang lại bề mặt mát mẻ và sang trọng.",
    scopeOfWork: "Topper TATANA Premium cải thiện độ êm, thoáng khí, dễ vệ sinh. Lý tưởng bổ sung cho nệm cứng hoặc làm mới giường ngủ.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu: Cao cấp Tencel; Độ dày chuẩn; Kháng khuẩn",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 239,
    name: "Nệm lò xo túi TATANA Hana Luxury",
    unitName: "Thế Giới Nệm",
    projectType: "Nệm lò xo túi",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Nệm lò xo túi cao cấp giảm rung lắc, mang đến sự riêng tư và nâng đỡ tối ưu cho từng cá nhân.",
    scopeOfWork: "Hana Luxury với lò xo túi độc lập, lớp êm ái, thoáng khí. Phù hợp cặp đôi và gia đình cần giấc ngủ yên tĩnh.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Độ dày đa dạng; Lò xo túi độc lập; Công nghệ cao cấp TATANA",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 240,
    name: "Nệm cao su em bé TATANA Baby Care",
    unitName: "Thế Giới Nệm",
    projectType: "Nệm cao su trẻ em",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Nệm cao su chuyên biệt cho trẻ em, an toàn, êm ái và hỗ trợ phát triển cột sống non nớt.",
    scopeOfWork: "TATANA Baby Care mềm mại, kháng khuẩn, thoáng khí, không độc hại. Lý tưởng phòng bé và gia đình có trẻ nhỏ.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước nhỏ; Chất liệu cao su an toàn; Thiết kế dành cho bé",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 241,
    name: "Đèn âm trần cảm biến hồng ngoại A2CB - BrightLux",
    unitName: "LED Xanh",
    projectType: "Đèn âm trần cảm biến",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn âm trần thông minh tích hợp cảm biến hồng ngoại tự động, kết hợp ánh sáng chất lượng cao CRI98, mang đến giải pháp chiếu sáng tiện nghi, tiết kiệm điện và thẩm mỹ cho không gian hiện đại.",
    scopeOfWork: "Đèn A2CB nổi bật với cảm biến hồng ngoại chìm tinh tế, tự động bật/tắt theo chuyển động và mức sáng môi trường. Chip BridgeLux, CRI98 tái tạo màu chân thực, UGR<19 chống chói, RG1 an toàn cho mắt. Thiết kế gọn, dễ lắp trần thạch cao. Phù hợp hành lang, cầu thang, nhà vệ sinh, văn phòng.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 5-12W; Khoét lỗ: D75mm; Kích thước: ø90×H57mm; CRI98; Hiệu suất: 80-90lm/W; Cảm biến hồng ngoại (2-5m); Bảo hành: 3 năm",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 242,
    name: "Đèn LED âm trần Spotlight IP65 chống ẩm FX3 - BrightLux",
    unitName: "LED Xanh",
    projectType: "Đèn âm trần spotlight chống nước",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Spotlight âm trần cao cấp chống ẩm IP65 với ánh sáng tập trung và chỉ số hoàn màu xuất sắc, mang đến trải nghiệm chiếu sáng chuyên nghiệp, bền bỉ trong môi trường ẩm ướt.",
    scopeOfWork: "FX3 series sử dụng chip BridgeLux, CRI98 tái tạo màu trung thực, chóa sâu chống chói mạnh. Chống bụi nước IP65 lý tưởng khu vực ẩm. Thiết kế tinh tế, tản nhiệt tốt. Phù hợp phòng tắm, bếp, ban công, showroom cao cấp.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 5-15W; Khoét lỗ: D55-D95mm; CRI98; IP65; Góc chiếu: 36-55°; UGR<13; Bảo hành: 3 năm",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 243,
    name: "Đèn âm trần A2R chống chói chóa sâu - BrightLux",
    unitName: "LED Xanh",
    projectType: "Đèn âm trần chống chói",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế chóa sâu chống chói vượt trội, ánh sáng tập trung chất lượng cao CRI98, mang đến sự thoải mái thị giác và tinh tế cho không gian nội thất.",
    scopeOfWork: "A2R với lens tinh tế, chóa sâu giảm lóa, CRI98 và RG1 bảo vệ mắt. Nhiều góc chiếu linh hoạt, thân nhôm tản nhiệt hiệu quả. Phù hợp phòng khách, văn phòng, showroom cần ánh sáng rõ nét mà không chói.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 5-20W; Khoét lỗ: D75-D110mm; CRI98; Góc chiếu: 24-50°; UGR<13; RG1; Bảo hành: 3 năm",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 244,
    name: "Đèn LED âm trần Spotlight Chống Chói X7 - BrightLux",
    unitName: "LED Xanh",
    projectType: "Đèn âm trần rọi spotlight",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Spotlight rọi cao cấp chống chói cực mạnh UGR<10, góc chiếu linh hoạt, mang đến khả năng tạo điểm nhấn nghệ thuật và chiếu sáng chính xác đẳng cấp.",
    scopeOfWork: "X7 sử dụng COB Bridgelux, CRI98, chóa sâu đa góc điều chỉnh 30°, UGR<10 giảm chói tối đa. Thiết kế hiện đại, bền bỉ. Lý tưởng trưng bày, phòng khách, gallery, không gian cần spotlight nổi bật.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 5-18W; Khoét lỗ: D55-D95mm; CRI98; Góc chiếu: 16-50°; UGR<10; Chip COB Bridgelux; Bảo hành: 3 năm",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 245,
    name: "Đèn LED âm trần ERIDANI - Philips",
    unitName: "LED Xanh",
    projectType: "Đèn âm trần downlight",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn âm trần Philips flagship chất lượng ánh sáng chuẩn châu Âu, độ bền cao, mang đến giải pháp chiếu sáng đáng tin cậy và tiết kiệm năng lượng.",
    scopeOfWork: "Sản phẩm Philips ERIDANI nổi tiếng với công nghệ LED tiên tiến, ánh sáng đồng đều, tuổi thọ dài. Thiết kế mỏng, dễ lắp. Phù hợp căn hộ, văn phòng, công trình dân dụng và thương mại.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 5-12W (tùy model); CRI cao; Thiết kế Philips; Bảo hành theo hãng",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 246,
    name: "Đèn LED dây dán COB 24V - Brightlux",
    unitName: "LED Xanh",
    projectType: "Đèn LED dây dán COB",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn dây LED dán linh hoạt COB cho ánh sáng liền mạch, sáng đều, lý tưởng tạo hiệu ứng hắt trần và trang trí hiện đại.",
    scopeOfWork: "Dây COB Brightlux sáng đều không chấm, CRI cao, dễ uốn cong, cắt theo nhu cầu. Chống nước một số phiên bản. Phù hợp tủ kệ, hắt trần, cầu thang, trang trí nội thất.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Điện áp: 24V; Chống nước IP67 (một số model); Cuộn 5m; CRI cao; Cắt theo mét",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 247,
    name: "Đèn chùm tay nến chao lụa N2201",
    unitName: "LED Xanh",
    projectType: "Đèn chùm tay nến",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn chùm sang trọng phong cách tân cổ điển, kết hợp ánh sáng ấm áp và chi tiết thủ công tinh xảo, nâng tầm không gian phòng khách đẳng cấp.",
    scopeOfWork: "Mẫu N2201 với chao lụa cao cấp, tay nến đồng, ánh sáng lan tỏa ấm áp. Thiết kế nghệ thuật. Phù hợp biệt thự, nhà phố tân cổ điển hoặc hiện đại cao cấp.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Số tay: Nhiều (tùy size); Chất liệu: Đồng/thủy tinh/lụa; Thiết kế nghệ thuật; Kích thước lớn",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 248,
    name: "Đèn LED pha V2 Maxben 10W-300W",
    unitName: "LED Xanh",
    projectType: "Đèn pha LED",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn pha LED đa năng công suất lớn, chiếu sáng mạnh mẽ bền bỉ, phù hợp chiếu sáng ngoài trời và công trình quy mô.",
    scopeOfWork: "Dòng V2 Maxben chắc chắn, tản nhiệt tốt, ánh sáng mạnh, nhiều công suất. Phù hợp sân vườn, sân thể thao, công trường, chiếu sáng kiến trúc.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 10-300W; Chip chất lượng; Góc chiếu rộng; Chống nước; Bảo hành hãng",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 249,
    name: "Đèn mâm pha lê CH-HT-M9225",
    unitName: "LED Xanh",
    projectType: "Đèn mâm ốp trần pha lê",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn mâm pha lê sang trọng, kết hợp ánh sáng LED và tinh thể lấp lánh, tạo điểm nhấn lộng lẫy cho không gian lớn.",
    scopeOfWork: "M9225 với pha lê cắt giác, khung chắc chắn, ánh sáng ấm. Thiết kế tinh tế. Phù hợp phòng khách biệt thự, sảnh khách sạn, không gian luxury.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước: D600x600mm; Pha lê cao cấp; Thiết kế hiện đại; Ánh sáng LED",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 250,
    name: "Đèn LED dây dán chống nước COB-24V-320P IP67 - Brightlux",
    unitName: "LED Xanh",
    projectType: "Đèn LED dây chống nước",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn dây LED ngoài trời cao cấp chống nước mạnh, ánh sáng đều COB, lý tưởng trang trí và chiếu sáng ngoại thất bền bỉ.",
    scopeOfWork: "Model COB IP67 chịu thời tiết, sáng đều, dễ lắp. Phù hợp sân vườn, hồ bơi, mặt dựng, trang trí ngoài trời.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "24V; IP67 chống nước; COB; Cuộn mét; CRI cao",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 251,
    name: "Tấm pin năng lượng mặt trời Mono GVA-100W",
    unitName: "GivaSolar",
    projectType: "Tấm pin Mono",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Tấm pin Mono cao cấp nhỏ gọn, hiệu suất vượt trội, mang đến giải pháp năng lượng sạch đáng tin cậy cho hệ thống mini và ứng dụng dân dụng.",
    scopeOfWork: "Tấm pin GVA-100W sử dụng cell Mono tinh khiết, khung nhôm chắc chắn, kính cường lực chống phản xạ. Hiệu suất cao ngay cả ánh sáng yếu, chịu nhiệt -45°C đến +80°C, IP65. Phù hợp RV, thuyền, đèn ngoài trời, hệ thống gia đình nhỏ.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 100W; Hiệu suất: 19.98%; Kích thước: 770×650×25 mm; Trọng lượng: 5.5 kg; Cell: Monocrystalline; Bảo hành: 5 năm (sản phẩm), 25 năm tuyến tính",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 252,
    name: "Panel năng lượng mặt trời Mini MONO MSP-60W",
    unitName: "GivaSolar",
    projectType: "Tấm pin Mini Mono",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Tấm pin mini Mono siêu gọn nhẹ, lý tưởng cho ứng dụng di động và hệ thống nhỏ, cung cấp năng lượng sạch tiện lợi mọi lúc.",
    scopeOfWork: "MSP-60W thiết kế nhỏ gọn, dễ mang theo, kính cường lực chống nước IP65, khung nhôm bền bỉ. Hỗ trợ sạc bình 12V/24V, phù hợp cắm trại, đèn năng lượng mặt trời, thiết bị di động.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 60W; Voc: 20.5V; Kích thước: 420×770×25 mm; Trọng lượng: 3.5 kg; Cell: Monocrystalline; Bảo hành: 5 năm",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 253,
    name: "Tấm pin năng lượng JinkoSolar Tiger 78M 465W",
    unitName: "GivaSolar",
    projectType: "Tấm pin Jinko Tiger Mono",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Tấm pin Jinko Tiger cao cấp half-cut, hiệu suất cao, bền bỉ, mang đến sản lượng điện tối ưu cho hệ thống dân dụng và thương mại.",
    scopeOfWork: "JKM465M-7RL3-V công nghệ TR, 9BB, kính cường lực AR, chịu tải gió 2400Pa/tuyết 5400Pa. Hiệu suất cao, suy giảm thấp. Phù hợp mái nhà, dự án lớn.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 465W; Hiệu suất: 20.71%; Kích thước: 2182×1029×35 mm; Cell: 156 (half-cut); Khung nhôm; IP67; Bảo hành: 12 năm sản phẩm, 25 năm tuyến tính",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 254,
    name: "Growatt SPE 6000 HVM-G2",
    unitName: "GivaSolar",
    projectType: "Inverter Hybrid 6kW",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Inverter hybrid Growatt cao cấp, linh hoạt kết hợp pin mặt trời - lưới - lưu trữ, mang đến nguồn điện ổn định và thông minh.",
    scopeOfWork: "SPE 6000 HVM-G2 hỗ trợ hybrid, giám sát từ xa, hiệu suất cao, bảo vệ chống quá tải/ngắn mạch. Phù hợp hộ gia đình, doanh nghiệp nhỏ cần hệ thống dự phòng.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 6000W; Điện áp pin: 48V; Hybrid (On/Off-Grid); Giám sát app; Bảo vệ toàn diện; Bảo hành: 5 năm",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 255,
    name: "Đầu kết nối tấm quang năng MC4 Staubli EVO-2",
    unitName: "GivaSolar",
    projectType: "Đầu nối MC4",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đầu nối MC4 Staubli cao cấp Thụy Sĩ, an toàn tối ưu, giảm thiểu mất mát công suất cho mọi hệ thống pin mặt trời.",
    scopeOfWork: "Staubli EVO-2 MULTILAM, tiếp xúc thấp <0.2mΩ, chống nước cao, tương thích cáp 2.5-10mm². Phù hợp lắp đặt chuyên nghiệp, bền bỉ ngoài trời.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Điện áp tối đa: 1500V; Dòng: 35-50A; IP65/IP68; MULTILAM; Nhiệt độ: -40°C đến +115°C; Tiêu chuẩn TUV/IEC",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 256,
    name: "Tấm pin năng lượng JinkoSolar Tiger Pro TR 78M 565W",
    unitName: "GivaSolar",
    projectType: "Tấm pin Jinko Tiger Pro",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Tấm pin flagship Jinko công suất lớn, hiệu suất vượt trội, tối ưu cho dự án quy mô và mái nhà lớn.",
    scopeOfWork: "Dòng Tiger Pro tiên tiến, giảm suy giảm, chịu lực tốt. Lý tưởng hệ thống thương mại, nhà máy, trang trại.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 565W; Hiệu suất cao; Half-cut; Kích thước lớn; Bảo hành dài hạn",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 257,
    name: "Đồng Hồ Thông Minh 1 pha SMART METER CHINT DDSU666",
    unitName: "GivaSolar",
    projectType: "Smart Meter 1 pha",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Smart meter CHINT chính xác, theo dõi tiêu thụ và sản xuất điện thời gian thực, hỗ trợ quản lý hệ thống năng lượng mặt trời.",
    scopeOfWork: "DDSU666 giám sát 1 pha, giao tiếp tốt với inverter, dễ lắp. Phù hợp hộ gia đình lắp solar.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "1 pha; Giám sát thông minh; Tích hợp hệ thống solar; Chất lượng CHINT",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 258,
    name: "Hệ thống điện năng lượng mặt trời cho hộ gia đình 5KW",
    unitName: "GivaSolar",
    projectType: "Hệ thống trọn gói 5kW",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giải pháp hệ thống 5kW hoàn chỉnh, tiết kiệm điện tối đa, phù hợp hộ gia đình hiện đại.",
    scopeOfWork: "Bao gồm tấm pin, inverter, phụ kiện, lắp đặt. Tiết kiệm 90% điện, bảo hành dài. Phù hợp nhà phố, căn hộ.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 5kW; Hòa lưới/bám tải; Tấm pin + Inverter; Lắp đặt chuyên nghiệp",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 259,
    name: "Quạt năng lượng mặt trời GV-DQ1800",
    unitName: "GivaSolar",
    projectType: "Quạt NLMT",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Quạt chạy năng lượng mặt trời tiện lợi, không cần điện lưới, mang đến giải pháp làm mát xanh sạch.",
    scopeOfWork: "GV-DQ1800 tích hợp pin, phù hợp ngoài trời, cắm trại, khu vực thiếu điện.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chạy hoàn toàn bằng pin mặt trời; Công suất quạt lớn; Thiết kế di động",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 260,
    name: "Đèn Led cầm tay năng lượng mặt trời GV-HL23",
    unitName: "GivaSolar",
    projectType: "Đèn LED cầm tay NLMT",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Đèn cầm tay đa năng chạy năng lượng mặt trời, nhỏ gọn với nhiều chế độ sáng và cổng sạc USB, mang đến giải pháp chiếu sáng di động tiện lợi, tiết kiệm và an toàn cho mọi hoạt động ngoài trời.",
    scopeOfWork: "Đèn GV-HL23 tích hợp tấm pin mặt trời, đèn COB siêu sáng, đèn pin phụ, đèn đỏ cảnh báo. Tay cầm linh hoạt, vỏ ABS bền bỉ, sạc qua USB. Phù hợp cắm trại, đi bộ đêm, sửa chữa, khẩn cấp khi mất điện. Thiết kế hiện đại, dễ mang theo.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước: 12.8 x 4.5 x 17.5 cm; LED: COB + 15 LED (trắng + đỏ); Pin: 1500mAh Lithium; Độ sáng: 2400lm; Thời gian sạc: 6-8h; Làm việc: 4h; Chất liệu: Nhựa ABS; Tấm pin mặt sau",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 261,
    name: "Động cơ rèm vải Famax Pro FM72EV",
    unitName: "Rèm IBC",
    projectType: "Động cơ rèm vải",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Động cơ rèm vải cao cấp Famax Pro, vận hành êm ái mạnh mẽ, tích hợp điều khiển thông minh, mang đến giải pháp che nắng tự động đẳng cấp cho không gian sống.",
    scopeOfWork: "Famax Pro FM72EV nổi bật với thiết kế bền bỉ, lực kéo mạnh, tích hợp RTS cho điều khiển từ xa và app. Phù hợp rèm vải lớn ở biệt thự, căn hộ cao cấp. Dễ lắp đặt, tích hợp smart home.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 72W; Lực kéo: Cao; Tích hợp RTS; Vận hành êm ái; Bảo hành chính hãng",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 262,
    name: "Động cơ rèm vải Somfy Glydea Ultra 35e RTS",
    unitName: "Rèm IBC",
    projectType: "Động cơ rèm vải",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Động cơ rèm vải flagship Somfy Glydea Ultra, vận hành cực êm và chính xác, nâng tầm trải nghiệm rèm tự động thông minh.",
    scopeOfWork: "Glydea Ultra 35e RTS sử dụng công nghệ Somfy cao cấp, êm ái gần như không tiếng ồn, tích hợp RTS. Lý tưởng rèm vải phòng khách, phòng ngủ cao cấp.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 35W; RTS tích hợp; Vận hành siêu êm; Bảo hành Somfy",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 263,
    name: "Động cơ cuốn Somfy Sonesse 40RTS",
    unitName: "Rèm IBC",
    projectType: "Động cơ rèm cuốn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Động cơ cuốn Somfy Sonesse 40RTS cao cấp, vận hành êm ái, bền bỉ, lý tưởng cho rèm cuốn tự động hiện đại.",
    scopeOfWork: "Sonesse 40RTS nổi bật công nghệ êm ái, tích hợp RTS, chịu tải tốt. Phù hợp rèm cuốn cửa sổ, ban công căn hộ và văn phòng.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 40W; RTS; Lực cuốn mạnh; Bảo hành Somfy",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 264,
    name: "Động cơ cuốn Somfy Altus 40RTS 3/30",
    unitName: "Rèm IBC",
    projectType: "Động cơ rèm cuốn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Động cơ cuốn mạnh mẽ Altus 40RTS, tốc độ tối ưu, phù hợp rèm cuốn lớn và ứng dụng đòi hỏi lực cuốn mạnh.",
    scopeOfWork: "Altus 40RTS 3/30 với lực kéo cao, vận hành ổn định, tích hợp smart. Phù hợp rèm cuốn ngoài trời hoặc kích thước lớn.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Công suất: 40W; Tốc độ 3/30; RTS; Chịu tải cao",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 265,
    name: "Động cơ cuốn Forest Tubular",
    unitName: "Rèm IBC",
    projectType: "Động cơ rèm cuốn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Động cơ cuốn Forest Tubular chất lượng châu Âu, bền bỉ và đáng tin cậy cho hệ thống rèm cuốn chuyên nghiệp.",
    scopeOfWork: "Forest Tubular nổi tiếng độ bền cao, phù hợp khí hậu Việt Nam. Dễ tích hợp, vận hành ổn định cho rèm cuốn dân dụng và thương mại.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Thương hiệu Forest Hà Lan; Ống cuốn; Bền bỉ cao; Tích hợp tự động",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 266,
    name: "Giàn phơi tự động IBC",
    unitName: "Rèm IBC",
    projectType: "Giàn phơi tự động",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giàn phơi thông minh tự động, tích hợp cảm biến, mang đến sự tiện nghi tối đa cho không gian phơi đồ hiện đại.",
    scopeOfWork: "Giàn phơi IBC với động cơ êm, cảm biến thông minh tự thu khi mưa, remote/app. Phù hợp ban công căn hộ, nhà phố.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Điều khiển remote/app; Cảm biến mưa nắng; Động cơ mạnh; Thiết kế âm trần hoặc lộ thiên",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 267,
    name: "Điều khiển từ xa cầm tay Somfy",
    unitName: "Rèm IBC",
    projectType: "Điều khiển từ xa rèm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Điều khiển cầm tay Somfy chính hãng, đa năng, dễ sử dụng cho toàn bộ hệ thống rèm tự động.",
    scopeOfWork: "Remote Somfy RTS điều khiển nhiều động cơ, tín hiệu ổn định. Phù hợp tích hợp smart home, tiện lợi cho gia đình.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Tần số RTS; Đa kênh; Thiết kế cầm tay gọn nhẹ; Tích hợp Somfy",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 268,
    name: "Phụ kiện động cơ rèm IBC",
    unitName: "Rèm IBC",
    projectType: "Phụ kiện động cơ rèm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bộ phụ kiện hoàn chỉnh hỗ trợ lắp đặt và vận hành tối ưu cho động cơ rèm tự động.",
    scopeOfWork: "Phụ kiện IBC chính hãng, bền bỉ, dễ lắp. Đảm bảo hệ thống rèm hoạt động mượt mà và an toàn.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Bộ bracket, adapter, dây cáp; Tương thích Somfy/Famax; Chất lượng cao",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 269,
    name: "Rèm cuốn tự động Somfy",
    unitName: "Rèm IBC",
    projectType: "Rèm cuốn tự động",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Rèm cuốn tự động cao cấp Somfy, che nắng hiệu quả, vận hành thông minh và thẩm mỹ cao.",
    scopeOfWork: "Hệ rèm cuốn Somfy với động cơ êm ái, vải cao cấp chống UV. Phù hợp ban công, cửa sổ biệt thự và căn hộ.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Động cơ Somfy tích hợp; Vải chống nắng; Kích thước theo yêu cầu",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 270,
    name: "Động cơ rèm chuyên dụng A-OK",
    unitName: "Rèm IBC",
    projectType: "Động cơ chuyên dụng",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Động cơ chuyên dụng A-OK linh hoạt, phù hợp các loại rèm đặc biệt và giải pháp che nắng ngoài trời.",
    scopeOfWork: "A-OK chất lượng cao, giá tốt, vận hành ổn định. Lý tưởng cho dự án lớn và rèm mái hiên.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Thương hiệu A-OK; Dành cho rèm đặc biệt; Tích hợp tự động",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 271,
    name: "Rèm Cầu Vồng Giá Rẻ Tại Hà Nội",
    unitName: "Thế Giới Rèm",
    projectType: "Rèm cầu vồng 2 lớp",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Rèm cầu vồng hiện đại với khả năng điều chỉnh ánh sáng linh hoạt, mang đến sự tiện nghi và thẩm mỹ cao cấp cho không gian sống hiện đại.",
    scopeOfWork: "Rèm cầu vồng 2 lớp kết hợp vải cản sáng và lưới xuyên sáng, dễ dàng điều chỉnh mức sáng từ mờ đến kín. Chất liệu Hàn Quốc bền màu, dễ vệ sinh. Phù hợp phòng khách, phòng ngủ, văn phòng căn hộ chung cư và nhà phố.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Đơn giá: theo m²; Xuất xứ: Korea; Bảo hành: 2 năm; Sản xuất theo kích thước; Cản sáng linh hoạt",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 272,
    name: "Rèm Vải Phòng Khách Đẹp Giá Rẻ",
    unitName: "Thế Giới Rèm",
    projectType: "Rèm vải phòng khách",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế sang trọng, cản nắng hiệu quả, nâng tầm thẩm mỹ cho phòng khách với chất liệu vải cao cấp và màu sắc tinh tế.",
    scopeOfWork: "Rèm vải phòng khách đa dạng họa tiết, màu sắc trung tính, khả năng cản nắng - cản sáng tốt. May đo theo kích thước, dễ phối nội thất. Phù hợp nhà phố, căn hộ hiện đại.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu vải cao cấp; Cản nắng, cản sáng; Giá theo m²; Miễn phí lắp đặt",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 273,
    name: "Rèm Cuốn Chống Nắng Cản Sáng",
    unitName: "Thế Giới Rèm",
    projectType: "Rèm cuốn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Rèm cuốn gọn gàng, chống nắng mạnh mẽ, mang đến giải pháp che chắn tiện lợi và hiện đại cho cửa sổ.",
    scopeOfWork: "Rèm cuốn cản sáng tốt, dễ thao tác, ít chiếm diện tích. Chất liệu bền bỉ, dễ vệ sinh. Lý tưởng cửa sổ, ban công, phòng làm việc.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu vải chống nắng; Giá theo m²; Không cần khoan tường (một số mẫu); Bảo hành dài hạn",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 274,
    name: "Rèm Sáo Nhôm Mã ST01",
    unitName: "Thế Giới Rèm",
    projectType: "Rèm sáo nhôm lá ngang",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Rèm sáo nhôm bền bỉ, điều chỉnh ánh sáng linh hoạt, mang đến vẻ đẹp hiện đại và dễ vệ sinh cho không gian.",
    scopeOfWork: "Rèm sáo nhôm ST01 chắc chắn, chống nắng tốt, dễ lau chùi. Thiết kế mỏng nhẹ, phù hợp văn phòng, phòng bếp, không gian cần sự gọn gàng.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu: 100% nhôm; Bản rộng: 25mm; Độ dày: 0.18mm; Xuất xứ: Trung Quốc; Giá theo m²",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 275,
    name: "Rèm Roman Chống Nắng",
    unitName: "Thế Giới Rèm",
    projectType: "Rèm Roman",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế xếp lớp sang trọng, kết hợp chức năng che nắng và trang trí tinh tế cho không gian.",
    scopeOfWork: "Rèm Roman tạo điểm nhấn nghệ thuật với kiểu xếp lớp mềm mại, cản nắng hiệu quả. Phù hợp phòng khách, phòng ngủ phong cách hiện đại hoặc tân cổ điển.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu vải cao cấp; Xếp lớp tinh tế; Cản nắng; Giá theo m²",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 276,
    name: "Rèm Cầu Vồng Padora Victor",
    unitName: "Thế Giới Rèm",
    projectType: "Rèm cầu vồng Padora",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Rèm cầu vồng cao cấp Padora với chất liệu Hàn Quốc, mang đến sự sang trọng và khả năng điều chỉnh ánh sáng vượt trội.",
    scopeOfWork: "Dòng Padora Victor nổi bật màu sắc hiện đại, vải dệt chắc chắn, cản sáng tốt. Phù hợp phòng ngủ, phòng khách biệt thự và căn hộ cao cấp.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Xuất xứ: Korea; Cản nắng cao; Giá theo m²; Màu sắc tinh tế",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 277,
    name: "Rèm Lá Dọc Vải Ánh Kim Chống Nắng",
    unitName: "Thế Giới Rèm",
    projectType: "Rèm lá dọc văn phòng",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Rèm lá dọc ánh kim sang trọng, chống nắng hiệu quả, lý tưởng cho văn phòng và không gian làm việc.",
    scopeOfWork: "Thiết kế lá dọc hiện đại, ánh kim bắt sáng tinh tế, dễ điều chỉnh. Chống UV, phù hợp văn phòng, showroom.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu vải ánh kim; Cản nắng; Giá theo m²",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 278,
    name: "Rèm Cuốn Không Cần Khoan Tường",
    unitName: "Thế Giới Rèm",
    projectType: "Rèm cuốn không khoan",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Giải pháp rèm cuốn tiện lợi không khoan tường, phù hợp căn hộ chung cư và không gian thuê.",
    scopeOfWork: "Thiết kế lắp đặt nhanh, không đục tường, vẫn đảm bảo cản nắng tốt. Dễ tháo lắp, phù hợp cửa sổ chung cư.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu vải cao cấp; Lắp đặt dễ dàng; Cản nắng; Giá theo m²",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 279,
    name: "Rèm Vải Cản Nắng Chống Cháy",
    unitName: "Thế Giới Rèm",
    projectType: "Rèm vải chống cháy",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Rèm vải an toàn chống cháy, cản nắng mạnh mẽ, phù hợp không gian công cộng và gia đình.",
    scopeOfWork: "Vải cao cấp kháng lửa, cản nhiệt tốt, bền màu. Lý tưởng khách sạn, nhà hàng, phòng khách gia đình.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu vải chống cháy; Cản nắng cao; Giá theo m²",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 280,
    name: "Rèm Sáo Nhôm Chống Nắng Chống Nóng",
    unitName: "Thế Giới Rèm",
    projectType: "Rèm sáo nhôm cao cấp",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Rèm sáo nhôm cao cấp chống nắng nóng hiệu quả, bền bỉ cho không gian hướng Tây hoặc khí hậu nóng.",
    scopeOfWork: "Thiết kế chắc chắn, khả năng chống nóng vượt trội, dễ vệ sinh. Phù hợp ban công, cửa sổ lớn, nhà phố.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu nhôm; Bản lớn; Cản nắng - cản nóng; Giá theo m²",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 281,
    name: "Sen tắm cây Viglacera Platinum P.58.326",
    unitName: "Hải Linh",
    projectType: "Sen tắm cây nhiệt độ",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Thiết kế sang trọng màu đen PVD cao cấp kết hợp công nghệ Thermostat, mang đến trải nghiệm tắm thư giãn đẳng cấp và an toàn cho phòng tắm hiện đại.",
    scopeOfWork: "Sen tắm Platinum P.58.326 sử dụng đồng nguyên chất mạ PVD bền màu, chống trầy, chống bám bẩn. Công nghệ Thermostat ổn định nhiệt độ nhanh, bề mặt cách nhiệt chống bỏng, bát sen phun đều + massage. Phù hợp phòng tắm master biệt thự, căn hộ cao cấp.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước: W300xD520xH1230 mm; Chất liệu: Đồng nguyên chất; Lớp mạ: Đen PVD; Thermostat điều nhiệt; Bát sen massage",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 282,
    name: "Bồn cầu một khối Viglacera BL5",
    unitName: "Hải Linh",
    projectType: "Bồn cầu một khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu bán chạy với công nghệ xả mạnh mẽ và men sứ kháng khuẩn, cân bằng hoàn hảo giữa chất lượng, thẩm mỹ và giá trị sử dụng.",
    scopeOfWork: "BL5 nổi bật men Nano Titan chống bám bẩn, xả lốc xoáy mạnh, dễ vệ sinh. Thiết kế hiện đại, phù hợp đa dạng công trình dân dụng từ căn hộ đến nhà phố.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Xả Turbo Vortex; Men Nano Titan kháng khuẩn; Thiết kế nhỏ gọn; Bảo hành sứ dài hạn",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 283,
    name: "Bồn cầu thông minh Viglacera (dòng cao cấp)",
    unitName: "Hải Linh",
    projectType: "Bồn cầu thông minh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu thông minh cao cấp tái định nghĩa trải nghiệm vệ sinh với công nghệ hiện đại, mang lại sự sạch sẽ và tiện nghi tối ưu.",
    scopeOfWork: "Tích hợp rửa sấy tự động, xả mạnh, men kháng khuẩn. Thiết kế thân kín dễ vệ sinh. Phù hợp gia đình hiện đại, khách sạn cao cấp.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Xả xoáy mạnh; Men ViGuard/Nano Titan; Nắp rửa sấy điện tử; Tích hợp cảm ứng",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 284,
    name: "Chậu rửa đặt bàn Viglacera Platinum",
    unitName: "Hải Linh",
    projectType: "Lavabo đặt bàn",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Lavabo cao cấp với men sứ kháng khuẩn, thiết kế tinh tế nâng tầm thẩm mỹ cho không gian phòng tắm sang trọng.",
    scopeOfWork: "Bề mặt chống bám bẩn, dễ lau chùi, kích thước rộng rãi. Phù hợp tủ lavabo cao cấp, biệt thự và khách sạn.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước đa dạng (ví dụ P.22.680); Men Nano Titan; Công nghệ Italy; Chống bám bẩn",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 285,
    name: "Vòi lavabo Viglacera Platinum",
    unitName: "Hải Linh",
    projectType: "Vòi lavabo nóng lạnh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Vòi lavabo cao cấp mạ bền màu, kiểm soát nước chính xác, mang đến sự tiện nghi và sang trọng hàng ngày.",
    scopeOfWork: "Đồng nguyên chất, tay gạt êm ái, chống bám bẩn. Phù hợp lavabo Platinum và không gian phòng tắm master.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu: Đồng mạ PVD/Chrome; Bộ trộn Ceramic; Thiết kế hiện đại",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 286,
    name: "Sen tắm Inax (dòng nóng lạnh)",
    unitName: "Hải Linh",
    projectType: "Sen tắm Inax",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sen tắm Inax chất lượng châu Âu, dòng chảy êm ái, tiết kiệm nước, mang đến trải nghiệm tắm thoải mái.",
    scopeOfWork: "Chất liệu bền bỉ, công nghệ hiện đại. Phù hợp gia đình và công trình cao cấp.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Đồng thau cao cấp; Công nghệ trộn bọt; Tiết kiệm nước; Mạ Cr/Ni",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 287,
    name: "Bồn tắm Viglacera Platinum (dòng Acrylic/Solid Surface)",
    unitName: "Hải Linh",
    projectType: "Bồn tắm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn tắm cao cấp giữ nhiệt tốt, thiết kế hiện đại, mang đến không gian thư giãn spa tại gia.",
    scopeOfWork: "Bền bỉ, dễ vệ sinh, nhiều kích thước. Phù hợp biệt thự, resort.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu Acrylic hoặc đá nhân tạo; Kích thước đa dạng; Thiết kế độc lập/âm",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 288,
    name: "Bồn cầu treo tường JOMOO",
    unitName: "Hải Linh",
    projectType: "Bồn cầu treo tường",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu treo tường tối ưu không gian, sang trọng và dễ vệ sinh cho phòng tắm hiện đại.",
    scopeOfWork: "Thiết kế gọn gàng, công nghệ xả tiên tiến. Phù hợp căn hộ chung cư.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Thiết kế âm tường; Men cao cấp; Tiết kiệm nước; Hiện đại",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 289,
    name: "Vòi sen tắm Caesar (dòng cao cấp)",
    unitName: "Hải Linh",
    projectType: "Vòi sen tắm",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Vòi sen Caesar bền đẹp, điều khiển nước mượt mà, nâng tầm tiện nghi phòng tắm.",
    scopeOfWork: "Chất liệu cao cấp, đa dạng mẫu. Phù hợp combo thiết bị vệ sinh.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Đồng mạ Chrome; Nóng lạnh; Thiết kế tinh tế",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 290,
    name: "Combo thiết bị vệ sinh Viglacera Platinum",
    unitName: "Hải Linh",
    projectType: "Combo thiết bị vệ sinh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Combo hoàn chỉnh cao cấp, đồng bộ thiết kế, mang đến giải pháp phòng tắm tiện nghi và thẩm mỹ tổng thể.",
    scopeOfWork: "Ưu đãi combo chính hãng, lắp đặt chuyên nghiệp. Phù hợp nhà phố, căn hộ.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Bộ đầy đủ (bồn cầu + lavabo + sen vòi); Men Nano Titan; Thiết kế đồng bộ",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 291,
    name: "Bồn cầu 1 khối Inax AC-2700VN",
    unitName: "Hùng Lan",
    projectType: "Bồn cầu một khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu một khối cao cấp Inax với công nghệ Aqua Ceramic chống bám bẩn và men kháng khuẩn, mang đến sự sạch sẽ, tiết kiệm nước và thẩm mỹ tinh tế cho phòng tắm hiện đại.",
    scopeOfWork: "Bồn cầu liền khối AC-2700VN sở hữu thiết kế sang trọng, xả thẳng mạnh mẽ, nắp đóng êm. Men sứ Aqua Ceramic giữ trắng sáng lâu dài, Hyperkilamic kháng khuẩn. Phù hợp căn hộ, nhà phố, khách sạn cao cấp.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước: 810 x 424 x 642 mm; Tâm thoát: 300 mm; Xả 2 mức 6.5L/4.5L; Men Aqua Ceramic + Hyperkilamic kháng khuẩn; Xuất xứ: Việt Nam (tiêu chuẩn Nhật)",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 292,
    name: "Sen tắm thường Inax BFV-1403S-7C",
    unitName: "Hùng Lan",
    projectType: "Sen tắm nóng lạnh",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sen tắm Inax tăng áp mạnh mẽ với tay sen Aqua Power, mang đến trải nghiệm tắm thư giãn, dòng nước căng khỏe ngay cả với nguồn nước yếu.",
    scopeOfWork: "BFV-1403S-7C nổi bật tay sen tăng áp tạo tia nước mạnh, củ sen đồng bền bỉ, van Ceramic êm ái. Thiết kế tối ưu cho phòng tắm nhỏ, khu vực áp lực nước thấp. Phù hợp nhà phố, căn hộ, khách sạn.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Chất liệu: Đồng nguyên chất mạ Crom/Niken; Tay sen Aqua Power 7C tăng áp; Van Ceramic; Áp lực: 0.05-0.75 MPa; Xuất xứ: Việt Nam",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 293,
    name: "Gạch Viglacera UZ-CM3304",
    unitName: "Hùng Lan",
    projectType: "Gạch ốp lát ceramic",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Gạch Viglacera vân đá sang trọng, bề mặt matt hiện đại, mang đến giải pháp ốp lát bền đẹp và dễ vệ sinh cho sàn & tường.",
    scopeOfWork: "Gạch UZ-CM3304 với họa tiết vân đá tự nhiên màu xám tinh tế, men matt chống trơn, dễ lau chùi. Độ bền cao, phù hợp phòng khách, bếp, hành lang nhà phố và căn hộ.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước: 30x30 cm; Xương: Ceramic; Bề mặt: Men matt; Họa tiết: Vân đá xám; Sản xuất: Việt Nam",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 294,
    name: "Sàn gỗ Baru 918",
    unitName: "Hùng Lan",
    projectType: "Sàn gỗ công nghiệp",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Sàn gỗ Baru chất lượng cao, vân gỗ tự nhiên, mang đến không gian ấm áp, sang trọng và bền bỉ cho nội thất hiện đại.",
    scopeOfWork: "Baru 918 nổi bật độ bền, chống trầy, dễ lắp đặt. Họa tiết vân gỗ đẹp mắt, phù hợp phòng khách, phòng ngủ nhà phố, căn hộ chung cư.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước chuẩn; Thương hiệu Baru Flooring; Họa tiết vân gỗ; Bảo hành theo hãng",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 295,
    name: "Bình nóng lạnh Ariston 30L SL2 30R 2.5 FE-MT",
    unitName: "Hùng Lan",
    projectType: "Bình nóng lạnh gián tiếp",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bình nóng lạnh Ariston dung tích lý tưởng cho gia đình, công nghệ Ion bạc diệt khuẩn và cách nhiệt vượt trội, mang đến nguồn nước nóng an toàn, tiết kiệm.",
    scopeOfWork: "Ariston SL2 30R với lớp cách nhiệt giữ nóng lâu, thanh đốt đồng chống cặn, rơ le an toàn. Thiết kế gọn, phù hợp nhà tắm gia đình 3-4 người.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Dung tích: 30L; Công suất: 2500W; Nhiệt độ max: 80°C; Kích thước: 757x341x331 mm; Ion bạc diệt khuẩn; Bảo hành: 2 năm linh kiện, 7 năm bình",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 296,
    name: "Bồn cầu 1 khối Inax AC-1035VN",
    unitName: "Hùng Lan",
    projectType: "Bồn cầu một khối",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn cầu Inax bán chạy với thiết kế tinh gọn, công nghệ men cao cấp, mang đến sự tiện nghi và sạch sẽ tối ưu.",
    scopeOfWork: "Thiết kế liền khối hiện đại, xả mạnh, dễ vệ sinh. Phù hợp đa dạng công trình dân dụng.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước chuẩn Inax; Xả 2 mức; Men Aqua Ceramic; Thiết kế Nhật Bản",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 297,
    name: "Chậu rửa bát Paul Schmitt PA82455-UD",
    unitName: "Hùng Lan",
    projectType: "Chậu rửa bát",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Chậu rửa bát Paul Schmitt cao cấp, bền đẹp, nâng tầm không gian nhà bếp hiện đại và tiện nghi.",
    scopeOfWork: "Chất liệu chống trầy, thiết kế sang trọng, dễ vệ sinh. Phù hợp bếp gia đình và công trình cao cấp.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước chuẩn; Chất liệu cao cấp; Thiết kế Paul Schmitt",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 298,
    name: "Gạch Viglacera DK5-GM3601",
    unitName: "Hùng Lan",
    projectType: "Gạch ốp lát",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Gạch Viglacera cao cấp, bề mặt bền đẹp, lý tưởng cho ốp lát sàn và tường không gian rộng.",
    scopeOfWork: "Thiết kế hiện đại, chịu lực tốt, dễ vệ sinh. Phù hợp phòng khách, khu vực chung.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước lớn; Men cao cấp; Họa tiết Viglacera",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 299,
    name: "Ngói sóng Fuji M5",
    unitName: "Hùng Lan",
    projectType: "Ngói lợp mái",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Ngói Fuji chất lượng cao, chống thấm, mang đến mái nhà bền đẹp và thẩm mỹ.",
    scopeOfWork: "Độ bền cao, chịu thời tiết tốt. Phù hợp nhà phố, biệt thự.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Kích thước chuẩn Fuji; Chất liệu bền; Thiết kế sóng",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  },
  {
    id: 300,
    name: "Bồn tiểu nam Inax U-440V",
    unitName: "Hùng Lan",
    projectType: "Bồn tiểu nam",
    budget: "Liên hệ",
    status: "ACTIVE",
    summary: "Bồn tiểu Inax hiện đại, tiết kiệm nước, phù hợp không gian vệ sinh nam công cộng và gia đình.",
    scopeOfWork: "Men sứ bền đẹp, dễ vệ sinh. Phù hợp công trình dân dụng và thương mại.",
    mainImage: [
      "/images/main/5.jpg"
    ],
    tags: "Thiết kế Inax; Men cao cấp; Tiết kiệm nước",
    startDate: "2026-06-24T23:24:28.752Z",
    createdAt: "2026-06-24T23:24:28.752Z"
  }
];

