'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

function CustomSelect({ label, options, value, onChange }: { label: string, options: { value: string, label: string }[], value: string, onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find(o => o.value === value)?.label || options[0].label;

  const filteredOptions = options.filter(opt => 
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`flex-1 min-w-[200px] relative ${isOpen ? 'z-50' : 'z-10'}`} ref={dropdownRef}>
      <label className="block text-sm text-white/50 mb-2 font-medium">{label}</label>
      <div className="relative">
        <div
          className={`bg-[#020b0d]/50 border ${isOpen ? 'border-[#27d6ff]' : 'border-[#27d6ff]/20'} text-white p-3 rounded-[2px] cursor-pointer flex justify-between items-center transition-colors hover:border-[#27d6ff]/50`}
          onClick={() => { setIsOpen(!isOpen); setSearchTerm(''); }}
        >
          <span className="text-sm truncate">{selectedLabel}</span>
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-[#27d6ff]' : 'text-white/50'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-[#020b0d] shadow-lg border border-[#27d6ff]/20 rounded-[2px] py-2 max-h-[300px] overflow-y-auto animate-fadeInDown">
            <div className="px-3 pb-2 sticky top-0 bg-[#020b0d] z-10 border-b border-[#27d6ff]/10">
              <input 
                type="text" 
                className="w-full bg-[#020b0d]/50 border border-[#27d6ff]/20 rounded-[2px] px-3 py-2 text-sm text-white focus:outline-none focus:border-[#27d6ff]"
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                autoFocus
              />
            </div>
            {filteredOptions.length > 0 ? filteredOptions.map((opt) => (
              <div
                key={opt.value}
                className={`px-4 py-2 text-sm cursor-pointer transition-colors ${value === opt.value ? 'bg-[#27d6ff]/10 text-[#27d6ff] font-medium' : 'text-white/80 hover:bg-white/5 hover:text-[#27d6ff]'}`}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                  setSearchTerm('');
                }}
              >
                {opt.label}
              </div>
            )) : (
              <div className="px-4 py-3 text-sm text-white/40 text-center">Không tìm thấy kết quả</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function DonViThietKePage() {
  const [segment, setSegment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [style, setStyle] = useState('');
  const [projectType, setProjectType] = useState('');
  
  const [allUnits, setAllUnits] = useState<any[]>([]);
  const [filteredUnits, setFilteredUnits] = useState<any[]>([]);

  const getCategoryDisplayName = (segment: string) => {
    if (!segment) return 'Cơ bản';
    if (segment.includes('cao-cap') || segment.includes('Cao cấp')) return 'Cao cấp';
    if (segment.includes('trung-cap') || segment.includes('Trung cấp')) return 'Trung cấp';
    if (segment.includes('co-ban') || segment.includes('Cơ bản')) return 'Cơ bản';
    return segment;
  };

  const getCategoryStyles = (category: string) => {
    const lower = category?.toLowerCase() || '';
    if (lower.includes('cao cấp') || lower.includes('cao-cap')) {
      return 'bg-gradient-to-r from-[#0a8ba8] to-[#27d6ff] text-[#010d0c] shadow-[0_0_15px_rgba(81,215,196,0.4)] luxury-glow font-bold';
    }
    if (lower.includes('trung cấp') || lower.includes('trung-cap')) {
      return 'bg-gradient-to-r from-[#004f47] to-[#0a8ba8] text-white shadow-[0_0_15px_rgba(0,143,130,0.4)] font-bold';
    }
    return 'bg-gradient-to-r from-[#021817] to-[#004f47] text-white/90 shadow-[0_0_15px_rgba(2,24,23,0.4)] border border-[#27d6ff]/20';
  };

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001/api/v1'}/units`);
        const data = await res.json();
        
        const getAvatarUrl = (avatar: any) => {
          if (Array.isArray(avatar) && avatar.length > 0) {
            return typeof avatar[0] === 'string' ? avatar[0] : avatar[0].url;
          }
          if (typeof avatar === 'string') {
            try {
              const parsed = JSON.parse(avatar);
              if (Array.isArray(parsed) && parsed.length > 0) {
                return typeof parsed[0] === 'string' ? parsed[0] : parsed[0].url;
              }
            } catch(e) { return avatar; }
          }
          return avatar?.url || avatar || null;
        };

          if (Array.isArray(data)) {
            // Map API data to the fields required by the UI
            const mappedUnits = data
              .filter((u: any) => u.projectType && (u.projectType.toLowerCase().includes('thiết kế') || u.projectType.toLowerCase().includes('thi công')))
              .map((u: any, idx: number) => ({
              id: u.id,
              name: u.name,
              category: getCategoryDisplayName(u.segment),
              projectType: u.projectType,
              strengths: u.style || 'Đa dạng',
              style: u.style || 'Hiện đại',
              location: u.location || 'Toàn quốc',
              description: u.shortDescription || u.description || 'Đơn vị đối tác chuyên nghiệp.',
              avatarUrl: getAvatarUrl(u.avatar),
              fanpage: u.fanpage || null,
              services: u.services || [],
              categories: u.categories || []
            }));
            setAllUnits(mappedUnits);
            setFilteredUnits(mappedUnits);
          }
        } catch (error) {
          console.error('Failed to fetch units:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchUnits();
    }, []);
  
    const segmentOptions = useMemo(() => {
      const allowedSegments = ['Cao cấp', 'Trung cấp', 'Cơ bản'];
      const segments = Array.from(new Set(allUnits.map(u => u.category))).filter(s => allowedSegments.includes(s));
      return [{ value: '', label: 'Tất cả phân khúc' }, ...segments.map(s => ({ value: s, label: s }))];
    }, [allUnits]);
  
    const projectTypeOptions = useMemo(() => {
      const types = Array.from(new Set(allUnits.map(u => u.strengths))).filter(Boolean);
      return [{ value: '', label: 'Tất cả hạng mục' }, ...types.map(t => ({ value: t, label: t }))];
    }, [allUnits]);

    const [styleOptions, setStyleOptions] = useState<{value: string, label: string}[]>([{ value: '', label: 'Tất cả lĩnh vực' }]);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001/api/v1'}/categories`);
          const data = await res.json();
          if (Array.isArray(data)) {
            const linhVuc = data.filter((c: any) => c.type === 'Lĩnh vực công trình');
            setStyleOptions([{ value: '', label: 'Tất cả lĩnh vực' }, ...linhVuc.map((c: any) => ({ value: c.name, label: c.name }))]);
          }
        } catch(e) {}
      };
      fetchCategories();
    }, []);
  
    useEffect(() => {
      let result = [...allUnits];
      if (segment) result = result.filter(u => u.category === segment);
      if (projectType) result = result.filter(u => u.strengths === projectType);
      if (style) result = result.filter(u => u.categories && u.categories.some((c: any) => c.name === style));
      if (searchQuery) {
        const lowerQ = searchQuery.toLowerCase();
        result = result.filter(u => 
          u.name.toLowerCase().includes(lowerQ) || 
          (u.description && u.description.toLowerCase().includes(lowerQ))
        );
      }
      setFilteredUnits(result);
    }, [segment, projectType, style, searchQuery, allUnits]);

  return (
    <div className="min-h-screen pt-[120px] pb-20 relative bg-transparent text-white">
      <div className="container mx-auto px-6 max-w-[1440px]">
        {/* Header */}
        <div className="text-center mb-16 relative overflow-hidden p-10 rounded-[4px] bg-[#020b0d]/40 backdrop-blur-md border border-[#27d6ff]/20 shadow-[0_15px_40px_rgba(81,215,196,0.05)]">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[2px] bg-gradient-to-r from-[#27d6ff]/20 to-transparent border-l-2 border-[#27d6ff] text-[#27d6ff] text-[11px] font-bold uppercase tracking-widest mb-4 drop-shadow-[0_0_8px_rgba(81,215,196,0.4)]">
              Đối tác thiết kế & thi công
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 uppercase">Hệ sinh thái đối tác</h1>
            <p className="text-white/70 max-w-3xl mx-auto text-lg">Các đơn vị được phân loại theo phân khúc, loại công trình, khu vực hoạt động, phong cách thiết kế và năng lực thi công. Khách hàng có thể tham khảo hồ sơ từng đơn vị hoặc gửi nhu cầu để được tư vấn đơn vị phù hợp nhất.</p>
          </div>
        </div>

        {/* Filters Scaffold */}
        <div id="phan-khuc" className="bg-[#020b0d]/40 backdrop-blur-md p-6 rounded-[4px] mb-12 border border-[#27d6ff]/20 flex flex-wrap gap-4 items-end relative z-[60]">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm text-white/50 mb-2 font-medium">Tìm kiếm</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Tên đơn vị, mô tả..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#020b0d]/50 border border-[#27d6ff]/20 text-white p-3 rounded-[2px] focus:outline-none focus:border-[#27d6ff] transition-colors text-sm h-[46px]"
              />
              <svg className="absolute right-3 top-3.5 w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
          <CustomSelect
            label="Phân khúc"
            value={segment}
            onChange={setSegment}
            options={segmentOptions}
          />
          <CustomSelect
            label="Hạng mục"
            value={projectType}
            onChange={setProjectType}
            options={projectTypeOptions}
          />
          <CustomSelect
            label="Lĩnh vực hoạt động"
            value={style}
            onChange={setStyle}
            options={styleOptions}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-3 text-center text-white/50 py-10">Đang tải danh sách đơn vị...</div>
          ) : filteredUnits.length === 0 ? (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#020b0d]/40 backdrop-blur-md border border-[#27d6ff]/15 rounded-[4px] p-16 text-center flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-24 h-24 bg-[#27d6ff]/10 text-[#27d6ff] rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_30px_rgba(81,215,196,0.15)]">
                <i className="fa fa-building"></i>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Chưa có đối tác nào</h3>
              <p className="text-white/60 max-w-md mx-auto text-lg">Không tìm thấy đơn vị nào phù hợp với bộ lọc hiện tại của bạn.</p>
            </div>
          ) : filteredUnits.map((unit) => (
            <div key={unit.id} className="bg-[#020b0d]/40 backdrop-blur-md rounded-[4px] overflow-hidden group border border-[#27d6ff]/10 hover:border-[#27d6ff]/40 hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(81,215,196,0.05)] hover:shadow-[0_0_30px_rgba(81,215,196,0.15)] relative">
              <Link href={`/don-vi-thiet-ke/${unit.id}`} className="absolute inset-0 z-40" aria-label={`Xem chi tiết hồ sơ ${unit.name}`}></Link>
              <div className="h-[240px] relative overflow-hidden flex items-center justify-center bg-[#020b0d]/40 border-b border-[#27d6ff]/10">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-[url('/images/common/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
                
                {/* Luxury Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#27d6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#27d6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"></div>
                
                {/* Avatar Display */}
                {unit.avatarUrl ? (
                  <div className="w-[180px] h-[120px] md:w-[220px] md:h-[140px] bg-[#020b0d]/60 backdrop-blur-sm rounded-[4px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center p-4 relative z-20 group-hover:scale-105 transition-transform duration-500 border border-[#27d6ff]/10">
                    <img src={unit.avatarUrl} alt={unit.name} className="max-w-full max-h-full object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="w-[180px] h-[120px] md:w-[220px] md:h-[140px] bg-gradient-to-br from-[#021817] to-[#004f47] rounded-[4px] shadow-lg flex items-center justify-center p-6 relative z-20 group-hover:scale-105 transition-transform duration-500 border border-[#27d6ff]/15">
                    <span className="text-5xl font-heading font-bold text-[#27d6ff] tracking-widest">{unit.name.substring(0, 2).toUpperCase()}</span>
                  </div>
                )}
                
                <div className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1.5 rounded-[2px] uppercase tracking-widest z-40 shadow-md ${getCategoryStyles(unit.category)}`}>
                  {unit.category}
                </div>
                {unit.projectType && (
                  <div className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1.5 rounded-[2px] uppercase tracking-widest z-40 shadow-md ${unit.projectType.toLowerCase().includes('thi công') ? 'bg-[#020b0d] text-white border border-[#27d6ff]/20' : 'bg-[#0a8ba8] text-white'}`}>
                    {unit.projectType.toLowerCase().includes('thiết kế') && unit.projectType.toLowerCase().includes('thi công') ? 'Thiết kế & Thi công' : unit.projectType.toLowerCase().includes('thi công') ? 'Thi công' : 'Thiết kế'}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">{unit.name}</h3>
                </div>
                <div className="text-sm text-white/60 mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: unit.description }} />

                <div className="space-y-2 mb-6 text-sm text-white/80">
                  <div className="flex items-start">
                    <i className="fa fa-building mt-1 w-5 text-[#27d6ff]"></i>
                    <span><strong>Hạng mục:</strong> {unit.strengths}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fa fa-paint-brush mt-1 w-5 text-[#27d6ff]"></i>
                    <span><strong>Lĩnh vực:</strong> {unit.style}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fa fa-map-marker-alt mt-1 w-5 text-[#27d6ff]"></i>
                    <span><strong>Khu vực:</strong> {unit.location}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 relative z-50">
                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`/don-vi-thiet-ke/so-sanh?ids=${unit.id}`);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-[#27d6ff]/30 hover:bg-[#27d6ff] hover:border-[#27d6ff] text-[#27d6ff] hover:text-[#010d0c] font-bold py-3 px-4 rounded-[2px] transition-all duration-300 uppercase tracking-wider text-xs group/cb shadow-[0_4px_15px_rgba(81,215,196,0.05)] hover:shadow-[0_4px_15px_rgba(81,215,196,0.3)]"
                    >
                      <svg className="w-4 h-4 text-[#27d6ff] group-hover/cb:text-[#010d0c] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                      So sánh
                    </button>
                    {unit.fanpage && (
                      <a href={unit.fanpage} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-[#3b5998] hover:bg-[#2d4373] text-white px-4 rounded-[2px] transition-colors" title="Facebook Fanpage">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </a>
                    )}
                  </div>
                  <Link href={`/tu-van?unit=${unit.id}`} className="text-center block w-full bg-[#27d6ff] hover:bg-[#0a8ba8] text-[#010d0c] font-black py-3 px-4 rounded-[2px] transition-colors uppercase tracking-wider text-xs shadow-[0_0_15px_rgba(81,215,196,0.2)]">
                    Nhận tư vấn
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
