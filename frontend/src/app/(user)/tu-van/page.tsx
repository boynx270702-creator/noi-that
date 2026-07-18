'use client';
import React, { useState, useRef, useEffect, use } from 'react';
import { toast } from 'sonner';

function FormSelect({ label, options, value, onChange }: { label: string, options: { value: string, label: string }[], value: string, onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find(o => o.value === value)?.label || options[0].label;

  return (
    <div ref={dropdownRef} className={`relative ${isOpen ? 'z-[60]' : 'z-10'}`}>
      <label className="block text-sm text-white/70 mb-2">{label}</label>
      <div className="relative">
        <div
          className={`w-full bg-[#021817]/50 border ${isOpen ? 'border-[#51d7c4]' : 'border-[#51d7c4]/20'} text-white p-3 rounded-[4px] cursor-pointer flex justify-between items-center transition-colors hover:border-[#51d7c4]/50`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[15px]">{selectedLabel}</span>
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-[#51d7c4]' : 'text-white/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>

        {isOpen && (
          <div className="overflow-hidden absolute z-50 w-full mt-2 bg-[#021817] border border-[#51d7c4]/20 rounded-[4px] py-2 animate-fadeInDown">
            {options.map((opt) => (
              <div
                key={opt.value}
                className={`px-4 py-2.5 text-[15px] cursor-pointer transition-colors ${value === opt.value ? 'bg-[#51d7c4]/20 text-[#51d7c4]' : 'text-white/80 hover:bg-white/5 hover:text-[#51d7c4]'}`}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TuVanPage({ searchParams }: { searchParams: Promise<{ unit?: string }> }) {
  const resolvedSearchParams = use(searchParams);
  const unitId = resolvedSearchParams.unit;
  
  const [targetUnitName, setTargetUnitName] = useState<string>('');

  useEffect(() => {
    if (unitId) {
      const fetchUnit = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001/api/v1'}/units`);
          const data = await res.json();
          if (Array.isArray(data)) {
            const found = data.find((u: any) => u.id.toString() === unitId.toString());
            if (found) setTargetUnitName(found.name);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchUnit();
    }
  }, [unitId]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [buildingType, setBuildingType] = useState('');
  const [status, setStatus] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('ngay');
  const [style, setStyle] = useState('');
  const [serviceType, setServiceType] = useState('Thiết kế & thi công trọn gói');
  const [needSupervision, setNeedSupervision] = useState(false);
  const [needProjectManagement, setNeedProjectManagement] = useState(false);
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const payload = {
        customerName: name,
        phone,
        email,
        location: region,
        projectType: buildingType,
        currentStatus: status,
        budget,
        timeline,
        style,
        needs: serviceType,
        needSupervision,
        needProjectManagement,
        notes,
        status: 'NEW',
        source: 'Website'
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001/api/v1'}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        toast.success("Cảm ơn bạn! Yêu cầu của bạn đã được gửi đi thành công.");
        // Reset form or redirect
        setName(''); setPhone(''); setEmail(''); setNotes('');
      } else {
        toast.error("Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Không thể kết nối đến máy chủ.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative pt-[120px] pb-20 min-h-screen text-white overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#51d7c4] mb-6 drop-shadow-[0_0_8px_rgba(81,215,196,0.4)]">
            {targetUnitName ? 'Nhận tư vấn với đơn vị chỉ định' : 'Gửi nhu cầu để được tư vấn đơn vị phù hợp'}
          </h1>
          {targetUnitName ? (
            <div className="bg-[#51d7c4]/10 border border-[#51d7c4]/30 text-[#51d7c4] px-6 py-4 rounded-[4px] inline-flex items-center gap-3 text-lg font-bold mb-4 shadow-[0_0_15px_rgba(81,215,196,0.15)]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              <span>Đối tác: {targetUnitName}</span>
            </div>
          ) : (
            <p className="text-white/70 text-lg">Vui lòng cung cấp thông tin cơ bản về công trình. Dựa trên nhu cầu thực tế, chúng tôi sẽ tư vấn nhóm đơn vị phù hợp trong hệ sinh thái hơn 30 đối tác thiết kế – thi công nội thất.</p>
          )}
        </div>

        {/* Form Container */}
        <div className="bg-[#021817]/40 backdrop-blur-md p-8 md:p-12 rounded-[4px] border border-[#51d7c4]/20 shadow-[0_15px_40px_rgba(81,215,196,0.05)]">
          <form onSubmit={handleSubmit}>
            {/* Section 1: Thông tin khách hàng */}
            <div className="mb-10">
              <h2 className="font-heading text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#51d7c4] text-[#010d0c] flex items-center justify-center text-sm font-bold">1</span>
                Thông tin cá nhân
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Họ và tên *</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full bg-[#021817]/50 border border-[#51d7c4]/20 text-white p-3 rounded-[4px] focus:border-[#51d7c4] outline-none transition-colors hover:border-[#51d7c4]/50" placeholder="Nhập họ tên của bạn" required />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Số điện thoại *</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="w-full bg-[#021817]/50 border border-[#51d7c4]/20 text-white p-3 rounded-[4px] focus:border-[#51d7c4] outline-none transition-colors hover:border-[#51d7c4]/50" placeholder="Nhập số điện thoại" required />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Email (Nếu có)</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-[#021817]/50 border border-[#51d7c4]/20 text-white p-3 rounded-[4px] focus:border-[#51d7c4] outline-none transition-colors hover:border-[#51d7c4]/50" placeholder="Nhập email" />
                </div>
                <FormSelect
                  label="Khu vực công trình *"
                  value={region}
                  onChange={setRegion}
                  options={[
                    { value: '', label: 'Chọn khu vực' },
                    { value: 'HN', label: 'Hà Nội' },
                    { value: 'HCM', label: 'TP. Hồ Chí Minh' },
                    { value: 'DN', label: 'Đà Nẵng' },
                    { value: 'Other', label: 'Khu vực khác' }
                  ]}
                />
              </div>
            </div>

            {/* Section 2: Thông tin công trình */}
            <div className="mb-10">
              <h2 className="font-heading text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#51d7c4] text-[#010d0c] flex items-center justify-center text-sm font-bold">2</span>
                Thông tin công trình
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormSelect
                  label="Loại công trình *"
                  value={buildingType}
                  onChange={setBuildingType}
                  options={[
                    { value: '', label: 'Chọn loại công trình' },
                    { value: 'chung-cu', label: 'Chung cư' },
                    { value: 'nha-pho', label: 'Nhà phố' },
                    { value: 'villa', label: 'Villa / Biệt thự' },
                    { value: 'van-phong', label: 'Văn phòng / Showroom' },
                    { value: 'khac', label: 'Khác' }
                  ]}
                />
                <div>
                  <label className="block text-sm text-white/70 mb-2">Diện tích (m2) *</label>
                  <input type="number" className="w-full bg-[#021817]/50 border border-[#51d7c4]/20 text-white p-3 rounded-[4px] focus:border-[#51d7c4] outline-none transition-colors hover:border-[#51d7c4]/50" placeholder="VD: 100" required />
                </div>
                <FormSelect
                  label="Tình trạng hiện tại *"
                  value={status}
                  onChange={setStatus}
                  options={[
                    { value: '', label: 'Chọn tình trạng' },
                    { value: 'ban-giao-tho', label: 'Nhận bàn giao thô' },
                    { value: 'hoan-thien-co-ban', label: 'Đã hoàn thiện cơ bản' },
                    { value: 'cai-tao', label: 'Cải tạo lại nhà cũ' }
                  ]}
                />
                <FormSelect
                  label="Ngân sách dự kiến *"
                  value={budget}
                  onChange={setBudget}
                  options={[
                    { value: '', label: 'Chọn khoảng ngân sách' },
                    { value: 'duoi-200', label: 'Dưới 200 triệu' },
                    { value: '200-500', label: '200 - 500 triệu' },
                    { value: '500-1ty', label: '500 triệu - 1 tỷ' },
                    { value: '1ty-3ty', label: '1 tỷ - 3 tỷ' },
                    { value: 'tren-3ty', label: 'Trên 3 tỷ' }
                  ]}
                />
                <div>
                  <label className="block text-sm text-white/70 mb-2">Phong cách mong muốn</label>
                  <input type="text" value={style} onChange={e => setStyle(e.target.value)} className="w-full bg-[#021817]/50 border border-[#51d7c4]/20 text-white p-3 rounded-[4px] focus:border-[#51d7c4] outline-none transition-colors hover:border-[#51d7c4]/50" placeholder="VD: Hiện đại, Tối giản, Indochine..." />
                </div>
                <FormSelect
                  label="Thời gian muốn triển khai"
                  value={timeline}
                  onChange={setTimeline}
                  options={[
                    { value: 'ngay', label: 'Triển khai ngay' },
                    { value: '1-thang', label: 'Trong vòng 1 tháng tới' },
                    { value: '3-thang', label: 'Trong 3 tháng tới' },
                    { value: 'chua-ro', label: 'Chưa xác định' }
                  ]}
                />
              </div>
            </div>

            {/* Section 3: Nhu cầu cụ thể */}
            <div className="mb-10">
              <h2 className="font-heading text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#51d7c4] text-[#010d0c] flex items-center justify-center text-sm font-bold">3</span>
                Nhu cầu chi tiết
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white/70 mb-3">Bạn đang cần tìm đơn vị để: *</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="service_type" value="Thiết kế nội thất" checked={serviceType === 'Thiết kế nội thất'} onChange={e => setServiceType(e.target.value)} className="accent-[#51d7c4] w-4 h-4" /> <span>Thiết kế nội thất</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="service_type" value="Thi công nội thất" checked={serviceType === 'Thi công nội thất'} onChange={e => setServiceType(e.target.value)} className="accent-[#51d7c4] w-4 h-4" /> <span>Thi công nội thất</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="service_type" value="Thiết kế & thi công trọn gói" checked={serviceType === 'Thiết kế & thi công trọn gói'} onChange={e => setServiceType(e.target.value)} className="accent-[#51d7c4] w-4 h-4" /> <span>Thiết kế & thi công trọn gói</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <label className="block text-sm text-white/70 mb-3">Nhu cầu bổ sung (Có thể chọn nhiều):</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={needSupervision} onChange={e => setNeedSupervision(e.target.checked)} className="accent-[#51d7c4] w-4 h-4 rounded-[4px]" />
                      <span>Tôi cần thêm dịch vụ Giám sát thi công độc lập</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={needProjectManagement} onChange={e => setNeedProjectManagement(e.target.checked)} className="accent-[#51d7c4] w-4 h-4 rounded-[4px]" />
                      <span>Tôi cần gói Quản lý toàn bộ dự án thi công</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <label className="block text-sm text-white/70 mb-2">Ghi chú thêm</label>
                  <textarea rows={4} value={notes} onChange={e => setNotes(e.target.value)} className="w-full bg-[#021817]/50 border border-[#51d7c4]/20 text-white p-3 rounded-[4px] focus:border-[#51d7c4] outline-none transition-colors hover:border-[#51d7c4]/50" placeholder="Hãy mô tả chi tiết hơn về mong muốn của bạn (ví dụ: cần làm phòng ngủ cho bé, cần thi công nhanh trong 1 tháng...)"></textarea>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-6 border-t border-white/10">
              <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-[#51d7c4] hover:bg-[#008f82] disabled:bg-[#51d7c4]/50 text-[#010d0c] font-black py-4 px-12 rounded-[2px] transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2 mx-auto shadow-[0_0_20px_rgba(81,215,196,0.3)]">
                {isSubmitting ? (
                  <><svg className="animate-spin h-5 w-5 text-[#010d0c]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Đang xử lý...</>
                ) : 'Gửi nhu cầu tư vấn'}
              </button>
              <p className="text-white/40 text-xs mt-4">Thông tin của bạn sẽ được bảo mật và chỉ dùng để tư vấn đơn vị phù hợp.</p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
