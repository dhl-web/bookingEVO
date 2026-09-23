import { Star, Quote, CheckCircle2 } from 'lucide-react';

export function TestimonialsSection() {
  const reviews = [
    {
      name: 'Nguyễn Minh Quân',
      role: 'Project Manager tại Công ty Công nghệ',
      content: 'Trước đây mình rất ngại họp với khách hàng nước ngoài vì phản xạ chậm và phát âm không chuẩn. Sau khóa huấn luyện 1-1 cùng Ms My, mình đã tự tin lead các buổi demo tiếng Anh trôi chảy và nhận được nhiều lời khen từ sếp.',
      improvement: 'Tự tin thuyết trình & Đàm thoại quốc tế',
      avatarLetter: 'Q',
      avatarBg: 'bg-blue-600',
    },
    {
      name: 'Trần Thị Mai Phương',
      role: 'Chuyên viên Marketing & Xuất Nhập Khẩu',
      content: 'Mình từng học qua 3 trung tâm lớn nhưng đều bỏ dở vì lớp đông quá, giáo viên không sửa lỗi cho mình. Ở EVO, Ms My theo sát từng buổi, chỉnh khẩu hình từng âm đuôi. Phương pháp học thực tế giúp mình áp dụng được ngay vào công việc.',
      improvement: 'Chuẩn hóa phát âm IPA & Tăng vốn từ vựng',
      avatarLetter: 'P',
      avatarBg: 'bg-orange-500',
    },
    {
      name: 'Lê Hoàng Long',
      role: 'Sinh viên năm cuối Đại học Kinh Tế',
      content: 'Mất gốc tiếng Anh nhiều năm khiến mình sợ không ra được trường. Ms My đã lên lộ trình rất khoa học, kiên nhẫn động viên và không hề phán xét. Sau 3 tháng mình đã vượt qua kỳ thi phỏng vấn tiếng Anh đầu vào thành công.',
      improvement: 'Vượt qua mất gốc & Đạt chứng chỉ',
      avatarLetter: 'L',
      avatarBg: 'bg-emerald-600',
    },
  ];

  return (
    <section id="cam-nhan" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5 text-orange-500" />
            Cảm Nhận Thực Tế
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Học Viên Nói Gì Sau Khi Đồng Hành Cùng Ms My?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Hơn 1,200+ học viên đã vượt qua rào cản tiếng Anh nhờ phương pháp Huấn luyện viên 1-1 tận tâm tại EVO English.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:shadow-md transition duration-300"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs`}>
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      {rev.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{rev.role}</p>
                  </div>
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0A4D8C] bg-blue-50 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{rev.improvement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
