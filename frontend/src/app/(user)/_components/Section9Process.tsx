'use client';
import React from 'react';
import ScrollReveal from './ScrollReveal';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Khách hàng gửi nhu cầu',
    desc: 'Khách hàng cung cấp thông tin cơ bản về công trình: loại công trình, diện tích, ngân sách, phong cách mong muốn, khu vực và thời gian dự kiến triển khai.',
  },
  {
    num: '02',
    title: 'Tư vấn phân khúc phù hợp',
    desc: 'Dựa trên thông tin khách hàng cung cấp, đội ngũ tư vấn sẽ xác định nhóm đơn vị phù hợp: cơ bản, trung cấp hoặc cao cấp.',
  },
  {
    num: '03',
    title: 'Đề xuất đơn vị trong hệ sinh thái',
    desc: 'Khách hàng được gợi ý một số đơn vị phù hợp nhất trong hệ sinh thái hơn 30 đơn vị thiết kế – thi công.',
  },
  {
    num: '04',
    title: 'Xem hồ sơ và so sánh',
    desc: 'Khách hàng xem thông tin chi tiết của từng đơn vị: dịch vụ, dự án tiêu biểu, phong cách, thế mạnh, quy trình và ngân sách tham khảo.',
  },
  {
    num: '05',
    title: 'Kết nối và nhận báo giá',
    desc: 'Website hỗ trợ kết nối khách hàng với đơn vị phù hợp để trao đổi chi tiết, khảo sát nếu cần và nhận báo giá cụ thể.',
  },
  {
    num: '06',
    title: 'Triển khai thiết kế – thi công',
    desc: 'Sau khi thống nhất phương án, khách hàng làm việc với đơn vị được chọn để triển khai thiết kế, thi công hoặc thi công trọn gói.',
  },
  {
    num: '07',
    title: 'Giám sát thi công nếu khách hàng cần',
    desc: 'Khách hàng có thể chọn thêm gói giám sát hạng mục thiết yếu hoặc gói quản lý toàn bộ dự án để kiểm soát quá trình thi công tốt hơn.',
  }
];

export default function Section9Process() {
  return (
    <section id="Process" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center mb-20">
            <h6 className="text-[#D3AE3E] text-[13px] font-semibold tracking-[4px] uppercase mb-4 font-['Montserrat',_sans-serif]">
              Quy Trình Làm Việc
            </h6>
            <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat',_sans-serif] text-white mb-6">
              Quy trình kết nối <span className="text-[#D3AE3E]">rõ ràng</span><br className="hidden md:block"/> từ nhu cầu đến triển khai
            </h2>
            <div className="w-16 h-[2px] bg-[#D3AE3E] mx-auto mb-6" />
          </div>
        </ScrollReveal>

        {/* Vertical Timeline */}
        <div className="relative mt-12">
          {/* Central Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D3AE3E]/50 via-[#D3AE3E]/20 to-transparent md:-translate-x-1/2" />

          {PROCESS_STEPS.map((step, index) => {
            const isEven = index % 2 !== 0; // 0-indexed, so 0 is odd in visual
            return (
              <ScrollReveal 
                key={step.num} 
                animation={isEven ? "fade-left" : "fade-right"} 
                delay={200 + index * 100}
                className="relative mb-8 lg:mb-16 last:mb-0"
              >
                <div className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 md:text-right flex flex-col justify-center pt-2 md:pt-0">
                    <div className={`bg-[#131313] p-6 md:p-8 border border-white/5 hover:border-[#D3AE3E]/50 transition-colors group relative rounded-xl shadow-lg ${isEven ? 'md:ml-16 md:text-left' : ''}`}>
                      <div className={`hidden md:block absolute top-4 ${isEven ? 'right-4' : 'left-4'} text-[#D3AE3E] opacity-[0.03] text-7xl font-['Montserrat',_sans-serif] font-black group-hover:opacity-10 transition-opacity pointer-events-none`}>
                        {step.num}
                      </div>
                      <h3 className="text-[18px] md:text-[20px] font-bold font-['Montserrat',_sans-serif] text-white mb-3 group-hover:text-[#D3AE3E] transition-colors relative z-10">
                        {step.title}
                      </h3>
                      <p className="text-[#888] font-['Montserrat',_sans-serif] leading-relaxed text-[14px] md:text-[15px] relative z-10">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Step Number Circle (Line Dot) */}
                  <div className="absolute left-[24px] md:left-1/2 top-4 md:top-1/2 w-10 h-10 rounded-full bg-[#0a0a0a] border-2 border-[#D3AE3E] flex items-center justify-center text-[#D3AE3E] font-bold font-['Montserrat',_sans-serif] text-[15px] md:-translate-x-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_20px_rgba(206,158,81,0.3)] -translate-x-1/2">
                    {index + 1}
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="hidden md:block w-1/2" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
