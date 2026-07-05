import React from 'react';
import Link from 'next/link';

export default function HeroConcept() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden">
      
      {/* Background blobs removed as requested */}

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Content */}
          <div className="lg:w-[55%] relative z-10">
            
            {/* Animated Label with Sci-Fi Line and Border */}
            <div className="mb-10 flex items-center relative w-full">
              {/* Animated line extending to the right */}
              <div className="absolute top-1/2 left-0 w-[150%] max-w-[800px] h-[1px] bg-gradient-to-r from-[#51d7c4]/20 via-transparent to-transparent -z-10"></div>
              <div className="absolute top-1/2 left-0 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#51d7c4] to-transparent -z-10 animate-[shimmer_3s_infinite_alternate]"></div>
              
              <div className="relative inline-flex items-center p-[1px] rounded-sm overflow-hidden group">
                {/* Rotating border */}
                <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#51d7c4_80%,transparent_100%)] animate-[spin_10s_linear_infinite]"></div>
                
                <div className="relative px-6 py-2.5 bg-[#021817]/50 backdrop-blur-md flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#51d7c4] mr-3 animate-pulse shadow-[0_0_8px_#51d7c4]"></div>
                  <div className="overflow-hidden whitespace-nowrap animate-[typing_4s_steps(40,end)_infinite_alternate,blink-caret_.75s_step-end_infinite] border-r-2 border-[#51d7c4] pr-1">
                    <span className="text-white drop-shadow-[0_0_8px_rgba(81,215,196,0.8)] text-[11px] md:text-[13px] font-bold tracking-[0.15em] uppercase">
                      Kiến tạo không gian sống thông minh & bền vững
                    </span>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#51d7c4]"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#51d7c4]"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#51d7c4]"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#51d7c4]"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              KẾT NỐI ĐÚNG<br />
              <span className="inline-block text-transparent bg-clip-text bg-[linear-gradient(90deg,#008f82_0%,#51d7c4_50%,#008f82_100%)] bg-[length:200%_auto] animate-[gradientFlow_3s_linear_infinite] drop-shadow-none">
                HỆ SINH THÁI NỘI THẤT
              </span><br />
              CHO CÔNG TRÌNH CỦA BẠN
            </h1>
            
            <p className="text-gray-300 text-[15px] md:text-[16px] max-w-lg mb-10 leading-[1.8] font-medium drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
              ARCVIET Living Nexus quy tụ những thương hiệu nội thất hàng đầu 
              và giải pháp công nghệ tiên tiến, mang đến trải nghiệm sống tinh tế, 
              thông minh và bền vững cho mọi không gian.
            </p>
            
            <div className="flex flex-wrap gap-5 items-center">
              {/* Button with running border */}
              <div className="relative p-[2px] rounded-sm overflow-hidden group cursor-pointer inline-flex">
                {/* Rotating conic gradient for the border */}
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#51d7c4_30%,transparent_100%)] animate-[spin_2s_linear_infinite]"></div>
                
                <Link href="#he-sinh-thai" className="relative flex items-center gap-4 bg-[#012624] hover:bg-[#011a18] text-white pl-8 pr-2 py-2 transition-all duration-300 shadow-[0_0_20px_rgba(81,215,196,0.2)] rounded-[1px] h-[52px]">
                  <span className="text-sm font-bold tracking-widest uppercase">KHÁM PHÁ HỆ SINH THÁI</span>
                  
                  {/* Icon with dark teal bg and cyan border */}
                  <div className="w-9 h-9 rounded-sm bg-[#00100f] border border-[#51d7c4]/50 flex items-center justify-center text-[#51d7c4] group-hover:bg-[#51d7c4] group-hover:text-[#00100f] transition-all">
                    <svg className="transform group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </Link>
              </div>
              
              <Link href="#du-an" className="flex items-center gap-3 bg-white/40 hover:bg-white text-[#013533] h-[52px] px-8 border border-[#013533]/20 transition-all duration-300 backdrop-blur-md rounded-sm group shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                <div className="w-5 h-5 rounded-full border-2 border-[#013533] flex items-center justify-center group-hover:border-[#008f82] transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#013533] group-hover:bg-[#008f82] group-hover:scale-110 transition-all"></div>
                </div>
                <span className="text-sm font-bold tracking-widest uppercase group-hover:text-[#008f82] transition-colors">XEM DỰ ÁN TIÊU BIỂU</span>
              </Link>
            </div>
          </div>

          {/* Right Floating Elements (Sci-Fi Glass effect with running borders) */}
          <div className="lg:w-[45%] mt-12 lg:mt-0 relative h-[500px] w-full hidden md:block">
            
            {/* Floating UI: Smart Living */}
            <div className="absolute top-[20%] left-[10%] animate-[float_4s_ease-in-out_infinite] z-20">
              <div className="relative">
                {/* Connector line */}
                <svg className="absolute -left-16 bottom-5 w-16 h-16 pointer-events-none" viewBox="0 0 64 64" fill="none">
                  <path d="M64 45 L20 45 L0 60" stroke="#51d7c4" strokeWidth="1.5" />
                  <circle cx="2" cy="60" r="3" fill="#51d7c4" className="animate-pulse"/>
                </svg>
                
                {/* Sci-Fi Card Wrapper */}
                <div className="relative p-[1.5px] rounded-lg overflow-hidden w-[280px]">
                  {/* Rotating conic gradient border */}
                  <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0%,rgba(81,215,196,1)_20%,transparent_40%,transparent_60%,rgba(81,215,196,1)_80%,transparent_100%)] animate-[spin_10s_linear_infinite]"></div>
                  
                  {/* Inner Glass Box */}
                  <div className="relative flex items-center justify-between bg-gradient-to-br from-[#021d1b]/70 to-[#063330]/80 backdrop-blur-xl px-5 py-4 rounded-lg shadow-[inset_0_0_20px_rgba(81,215,196,0.1),0_10px_40px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col">
                      <span className="text-white text-[15px] font-bold tracking-widest mb-1 font-mono">SMART_LIVING</span>
                      <span className="text-[#51d7c4] text-[11px] font-medium tracking-wide uppercase">Cá nhân hóa</span>
                      <span className="text-gray-300 text-[11px] font-medium tracking-wide uppercase">trải nghiệm sống</span>
                    </div>
                    
                    {/* Sci-Fi Radar Icon */}
                    <div className="w-12 h-12 rounded-full border border-[#51d7c4]/40 flex items-center justify-center relative bg-[#00100f]/50">
                      {/* Spinning dashed ring */}
                      <div className="absolute inset-0 border-2 border-[#51d7c4] border-dashed rounded-full opacity-60 animate-[spin_8s_linear_infinite]"></div>
                      {/* Inner scanning effect */}
                      <div className="absolute inset-1 rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(81,215,196,0.3)_100%)] animate-[spin_2s_linear_infinite]"></div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#51d7c4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI: Sustainable Design */}
            <div className="absolute bottom-[20%] right-[0%] animate-[float_5s_ease-in-out_infinite_1s] z-20">
              <div className="relative">
                {/* Connector line */}
                <svg className="absolute -left-16 -top-12 w-16 h-16 pointer-events-none" viewBox="0 0 64 64" fill="none">
                  <path d="M64 60 L30 60 L0 30" stroke="#51d7c4" strokeWidth="1.5" />
                  <circle cx="2" cy="28" r="3" fill="#51d7c4" className="animate-pulse"/>
                </svg>

                {/* Sci-Fi Card Wrapper */}
                <div className="relative p-[1.5px] rounded-lg overflow-hidden w-[310px]">
                  {/* Rotating conic gradient border */}
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(81,215,196,1)_20%,transparent_40%,transparent_60%,rgba(81,215,196,1)_80%,transparent_100%)] animate-[spin_5s_linear_infinite]"></div>
                  
                  {/* Inner Glass Box */}
                  <div className="relative flex items-center justify-between bg-gradient-to-br from-[#021d1b]/70 to-[#063330]/80 backdrop-blur-xl px-5 py-4 rounded-lg shadow-[inset_0_0_20px_rgba(81,215,196,0.1),0_10px_40px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col text-right">
                      <span className="text-white text-[15px] font-bold tracking-widest mb-1 font-mono">SUSTAINABLE</span>
                      <span className="text-[#51d7c4] text-[11px] font-medium tracking-wide uppercase">Vật liệu xanh</span>
                      <span className="text-gray-300 text-[11px] font-medium tracking-wide uppercase">Bền vững tương lai</span>
                    </div>
                    
                    {/* Sci-Fi Progress Ring */}
                    <div className="relative w-14 h-14 flex items-center justify-center ml-4">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-full border border-[#51d7c4]/20 shadow-[0_0_15px_rgba(81,215,196,0.3)]"></div>
                      <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 36 36">
                        <path className="text-[#51d7c4]/10" stroke="currentColor" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path className="text-[#51d7c4] animate-[dash_2s_ease-out_forwards]" stroke="currentColor" strokeWidth="3" strokeDasharray="89, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      </svg>
                      <div className="absolute text-white text-[13px] font-bold font-mono tracking-tighter">89%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes dash {
          from { stroke-dasharray: 0, 100; }
          to { stroke-dasharray: 89, 100; }
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #51d7c4; }
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}} />
    </section>
  );
}
