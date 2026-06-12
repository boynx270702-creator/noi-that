'use client';
import React from 'react';
import Link from 'next/link';

export default function SanPhamPage() {
  return (
    <div className="pt-[120px] pb-20 bg-[#F9F8F6] dark:bg-[#0a0a0a] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Tất cả sản phẩm</h1>
          <p className="text-gray-600 dark:text-white/70 text-lg max-w-3xl mx-auto">
            Khám phá bộ sưu tập nội thất cao cấp của chúng tôi. Trang này hiện đang được cập nhật.
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/" className="bg-[#D3AE3E] text-white px-8 py-3 rounded-[8px] hover:bg-[#b59332] transition-colors">
            Quay về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
