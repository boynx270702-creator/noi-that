import React from 'react';
import Link from 'next/link';

export default function QuyTrinhPage() {
  const steps = [
    {
      number: '01',
      title: 'Khách hàng gửi nhu cầu',
      desc: 'Khách hàng cung cấp thông tin cơ bản về công trình: loại hình, diện tích, ngân sách, phong cách mong muốn, khu vực và thời gian dự kiến triển khai.'
    },
    {
      number: '02',
      title: 'Tư vấn phân khúc phù hợp',
      desc: 'Dựa trên thông tin khách hàng cung cấp, đội ngũ tư vấn sẽ xác định nhóm đơn vị phù hợp: cơ bản, trung cấp hoặc cao cấp.'
    },
    {
      number: '03',
      title: 'Đề xuất đơn vị trong hệ sinh thái',
      desc: 'Khách hàng được gợi ý một số đơn vị phù hợp nhất trong hệ sinh thái hơn 30 đối tác thiết kế – thi công nội thất.'
    },
    {
      number: '04',
      title: 'Xem hồ sơ và so sánh',
      desc: 'Khách hàng xem thông tin chi tiết của từng đơn vị: dịch vụ, dự án tiêu biểu, phong cách, thế mạnh, quy trình và ngân sách tham khảo.'
    },
    {
      number: '05',
      title: 'Kết nối và nhận báo giá',
      desc: 'Website hỗ trợ kết nối khách hàng với đơn vị phù hợp để trao đổi chi tiết, khảo sát nếu cần và nhận báo giá cụ thể.'
    },
    {
      number: '06',
      title: 'Triển khai thiết kế – thi công',
      desc: 'Sau khi thống nhất phương án, khách hàng làm việc với đơn vị được chọn để triển khai thiết kế, thi công hoặc thi công trọn gói.'
    },
    {
      number: '07',
      title: 'Giám sát thi công (Tùy chọn)',
      desc: 'Khách hàng có thể chọn thêm gói giám sát hạng mục thiết yếu hoặc gói quản lý toàn bộ dự án để kiểm soát quá trình thi công tốt hơn.'
    }
  ];

  return (
    <div className="overflow-hidden relative pt-[120px] pb-20 min-h-screen bg-transparent text-white">
      <div className="container mx-auto px-6 max-w-[1400px]">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Quy trình kết nối rõ ràng từ nhu cầu đến triển khai</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Chúng tôi đồng hành cùng bạn trong từng bước để tìm ra đơn vị thi công phù hợp nhất và đảm bảo dự án thành công.</p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#51d7c4]/50 via-[#51d7c4]/10 to-transparent md:-translate-x-1/2"></div>

          <div className="relative z-10 space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'} pt-2 md:pt-0`}>
                    <div className="bg-[#021817]/40 backdrop-blur-md p-6 md:p-8 rounded-[4px] border border-[#51d7c4]/15 hover:border-[#51d7c4]/40 transition-colors relative group shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                      <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-left-3' : '-right-3'} w-6 h-6 rotate-45 bg-[#021817] border border-[#51d7c4]/15 group-hover:border-[#51d7c4]/40 hidden md:block border-t-0 border-l-0 ${isEven ? 'border-b-0 border-r-0 border-l border-t' : ''}`}></div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-[#51d7c4]">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed text-sm md:text-base">{step.desc}</p>
                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className="absolute left-[24px] md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-[#021817] border-2 border-[#51d7c4] rounded-full flex items-center justify-center font-bold text-[#51d7c4] text-sm md:text-lg shadow-[0_0_20px_rgba(81,215,196,0.3)] z-20">
                    {step.number}
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link href="/tu-van" className="inline-block bg-[#51d7c4] hover:bg-[#008f82] text-[#010d0c] font-black py-4 px-10 rounded-[2px] transition-colors uppercase tracking-wider shadow-[0_0_20px_rgba(81,215,196,0.3)]">
            Gửi nhu cầu công trình ngay
          </Link>
        </div>

      </div>
    </div>
  );
}
