import React from 'react';
import Link from 'next/link';

const HOT_PRODUCTS = [
  {
    id: 1,
    name: 'Sofa Da Thật Nhập Khẩu Italia',
    category: 'Sofa Cao Cấp',
    image: '/images/main/3.jpg',
    price: 'Liên hệ',
  },
  {
    id: 2,
    name: 'Bàn Ăn Mặt Đá Cẩm Thạch',
    category: 'Bàn Ghế Ăn',
    image: '/images/main/4.jpg',
    price: 'Liên hệ',
  },
  {
    id: 3,
    name: 'Tủ Bếp Gỗ Óc Chó Hiện Đại',
    category: 'Tủ Bếp',
    image: '/images/main/6.jpg',
    price: 'Liên hệ',
  },
  {
    id: 4,
    name: 'Giường Ngủ Bọc Da Hạng Sang',
    category: 'Phòng Ngủ',
    image: '/images/main/7.jpg',
    price: 'Liên hệ',
  }
];

export default function SectionHotProducts() {
  return (
    <section className="py-24 bg-[#FAF9F8] dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-[#D3AE3E]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D3AE3E]/10 border border-[#D3AE3E]/20 text-[#D3AE3E] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D3AE3E] animate-pulse"></span>
              Sản phẩm nổi bật
            </div>
            <h2 className="text-3xl md:text-5xl font-['Montserrat',_sans-serif] font-bold text-gray-900 dark:text-white leading-tight">
              Tuyệt Tác Nội Thất <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D3AE3E] to-[#F9E596]">Xứng Tầm Không Gian</span>
            </h2>
          </div>
          <Link 
            href="/san-pham?filter=noi-bat" 
            className="group flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-[#D3AE3E] uppercase tracking-widest transition-colors"
          >
            Xem tất cả
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOT_PRODUCTS.map((product) => (
            <div key={product.id} className="group relative rounded-xl overflow-hidden bg-[#FAF9F8] dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/20 hover:border-[#D3AE3E]/50 transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F8]/90 dark:from-[#0a0a0a]/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <Link href={`/san-pham/${product.id}`} className="bg-gray-200 dark:bg-white/10 backdrop-blur-md border border-white/20 text-gray-900 dark:text-white px-6 py-2 rounded-full font-semibold hover:bg-[#D3AE3E] hover:border-[#D3AE3E] hover:text-black transition-colors">
                    Chi tiết
                  </Link>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[#D3AE3E] text-xs font-bold uppercase tracking-widest mb-2">{product.category}</p>
                <h3 className="text-lg font-['Montserrat',_sans-serif] font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-500 dark:text-[#888] text-sm font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
