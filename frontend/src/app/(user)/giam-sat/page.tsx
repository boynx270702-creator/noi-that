'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function GiamSatPage() {
  const [packages, setPackages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const hardcodedPackages = [
      {
        id: 1,
        packageName: 'Dịch vụ thiết yếu',
        shortDescription: 'Kiểm soát các công đoạn quan trọng nhất của công trình.',
        targetAudience: 'Khách hàng muốn tiết kiệm chi phí\nKhách hàng đã có kinh nghiệm cơ bản\nCông trình quy mô nhỏ',
        scopeOfWork: 'Kiểm tra vật liệu đầu vào\nGiám sát các giai đoạn thi công chính\nNghiệm thu hạng mục khuất lấp'
      },
      {
        id: 2,
        packageName: 'Full combo (Trọn gói)',
        shortDescription: 'Giám sát toàn diện từ đầu đến cuối, an tâm tuyệt đối.',
        targetAudience: 'Khách hàng bận rộn, không có thời gian\nKhách hàng lần đầu làm nhà\nCông trình quy mô lớn, phức tạp',
        scopeOfWork: 'Kiểm tra vật liệu đầu vào toàn diện\nGiám sát thi công hàng ngày\nBáo cáo tiến độ định kỳ\nNghiệm thu toàn bộ công trình\nHỗ trợ xử lý sự cố phát sinh'
      }
    ];
    setPackages(hardcodedPackages);
    setIsLoading(false);
  }, []);

  return (
    <div className="overflow-hidden relative pt-[120px] pb-20 min-h-screen bg-transparent text-white">
      <div className="container mx-auto px-6 max-w-[1440px]">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Dịch vụ giám sát thi công nội thất</h1>
          <p className="text-white/70 text-lg">Giúp khách hàng kiểm soát chất lượng, tiến độ và rủi ro. Dành cho khách hàng muốn có thêm một bên độc lập hỗ trợ kiểm tra quá trình thi công, hạn chế lỗi phát sinh và đảm bảo công trình được triển khai đúng theo kế hoạch.</p>
        </div>

        {/* Dynamic Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {isLoading ? (
            <div className="col-span-2 text-center text-gray-400 text-white/50">Đang tải các gói dịch vụ...</div>
          ) : packages.length > 0 ? packages.map((pkg, idx) => (
            <div key={pkg.id} className={`rounded-[4px] border p-8 flex flex-col relative overflow-hidden transition-colors ${idx % 2 !== 0 ? 'bg-[#27d6ff]/5 border-[#27d6ff]/30 hover:border-[#27d6ff] shadow-[0_0_20px_rgba(81,215,196,0.05)]' : 'bg-[#020b0d]/40 backdrop-blur-md border-[#27d6ff]/15 hover:border-[#27d6ff]/40'}`}>
              {idx % 2 !== 0 && (
                <div className="absolute top-0 right-0 bg-[#27d6ff] text-[#010d0c] text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
                  Khuyên dùng
                </div>
              )}
              <div className="mb-6 pb-6 border-b border-[#27d6ff]/10 mt-2">
                <h2 className="font-heading text-2xl font-bold mb-3 text-[#27d6ff]">{pkg.packageName}</h2>
                <p className="text-white/70 text-sm">{pkg.shortDescription || 'Mô tả ngắn gọn về dịch vụ.'}</p>
              </div>

              <div className="mb-8 flex-1">
                <h3 className="font-heading font-bold mb-4">Phù hợp với:</h3>
                <ul className="space-y-2 text-sm text-white/80 mb-8">
                  {(pkg.targetAudience?.split('\n') || ['Khách hàng cá nhân']).map((item: string, i: number) => (
                    <li key={i}><i className="fa fa-check text-[#27d6ff] w-5"></i> {item}</li>
                  ))}
                </ul>

                <h3 className="font-heading font-bold mb-4">Phạm vi công việc:</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  {(pkg.scopeOfWork?.split('\n') || ['Giám sát thi công nội thất']).map((item: string, i: number) => (
                    <li key={i}><i className="fa fa-arrow-right text-[#27d6ff]/50 w-5"></i> {item}</li>
                  ))}
                </ul>
              </div>

              <Link href={`/tu-van?service=${pkg.packageName}`} className={`text-center block w-full font-bold py-4 px-6 rounded-[4px] transition-colors uppercase tracking-wider text-sm ${idx % 2 !== 0 ? 'bg-[#27d6ff] hover:bg-[#0a8ba8] text-[#010d0c] shadow-[0_0_15px_rgba(81,215,196,0.2)]' : 'bg-white/10 hover:bg-[#27d6ff] hover:text-[#010d0c] text-white border border-white/10'}`}>
                Đăng ký tư vấn
              </Link>
            </div>
          )) : (
            <div className="col-span-2 text-center text-gray-400 text-white/50">Hiện tại chưa có gói dịch vụ nào.</div>
          )}
        </div>


        {/* Values */}
        <div className="bg-[#020b0d]/40 backdrop-blur-md rounded-[4px] p-10 border border-[#27d6ff]/15 text-center">
          <h2 className="font-heading text-2xl font-bold mb-10 text-white">Giá trị mang lại cho khách hàng</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="w-16 h-16 rounded-full bg-[#27d6ff]/10 text-[#27d6ff] flex items-center justify-center text-2xl mx-auto mb-4 border border-[#27d6ff]/20 shadow-[0_0_15px_rgba(81,215,196,0.1)]">
                <i className="fa fa-shield-alt"></i>
              </div>
              <p className="font-semibold text-sm">Hạn chế lỗi thi công<br />& rủi ro nghiệm thu</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#27d6ff]/10 text-[#27d6ff] flex items-center justify-center text-2xl mx-auto mb-4 border border-[#27d6ff]/20 shadow-[0_0_15px_rgba(81,215,196,0.1)]">
                <i className="fa fa-heart"></i>
              </div>
              <p className="font-semibold text-sm">Yên tâm hơn nhờ<br />bên kiểm tra độc lập</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#27d6ff]/10 text-[#27d6ff] flex items-center justify-center text-2xl mx-auto mb-4 border border-[#27d6ff]/20 shadow-[0_0_15px_rgba(81,215,196,0.1)]">
                <i className="fa fa-clock"></i>
              </div>
              <p className="font-semibold text-sm">Giảm tải việc quản lý<br />& tối ưu thời gian</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#27d6ff]/10 text-[#27d6ff] flex items-center justify-center text-2xl mx-auto mb-4 border border-[#27d6ff]/20 shadow-[0_0_15px_rgba(81,215,196,0.1)]">
                <i className="fa fa-cogs"></i>
              </div>
              <p className="font-semibold text-sm">Đảm bảo công trình<br />triển khai đồng bộ</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
