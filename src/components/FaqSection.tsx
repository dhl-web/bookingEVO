import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Tôi bị mất gốc hoàn toàn hoặc rất lâu rồi không dùng tiếng Anh thì có theo được không?',
      a: 'Hoàn toàn phù hợp! Mô hình Huấn Luyện Viên 1-1 sinh ra là để dành cho bạn. Vì không phải học chung với ai nên bạn không lo bị so sánh hay ngại ngùng. Huấn luyện viên sẽ kiên nhẫn hướng dẫn bạn từ những âm tiết cơ bản nhất, tạo phản xạ từng bước vững chắc.',
    },
    {
      q: 'Lịch học có linh hoạt cho người đi làm bận rộn hoặc sinh viên không?',
      a: 'Lịch học được sắp xếp hoàn toàn dựa trên khung giờ rảnh của bạn (sáng, trưa, tối hoặc cuối tuần). Nếu có lịch công tác đột xuất, bạn có thể chủ động báo trước với Huấn luyện viên để đổi buổi học mà không lo bị mất bài.',
    },
    {
      q: 'Chương trình diễn ra theo hình thức nào (Online hay Trực tiếp)?',
      a: 'EVO English linh hoạt tổ chức cả hình thức Online 1-1 tương tác thời gian thực chất lượng cao (dành cho học viên trên toàn quốc hoặc nước ngoài) và hình thức Trực tiếp tại trung tâm.',
    },
    {
      q: 'Sau khi tôi bấm đăng ký tư vấn, quy trình tiếp theo sẽ như thế nào?',
      a: 'Sau khi bạn gửi thông tin, đội ngũ EVO English sẽ liên hệ với bạn trong vòng 15 - 30 phút qua Điện thoại, Zalo hoặc Messenger để xác nhận và sắp xếp 01 buổi kiểm tra trình độ 1-1 miễn phí cùng Huấn luyện viên.',
    },
    {
      q: 'Buổi kiểm tra trình độ và tư vấn ban đầu có mất phí không?',
      a: 'Buổi kiểm tra và phân tích lộ trình ban đầu hoàn toàn MIỄN PHÍ 100%. Bạn sẽ được phân tích rõ điểm mạnh, điểm yếu phát âm và nhận bản kế hoạch học tập chi tiết trước khi quyết định đồng hành cùng EVO.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#0A4D8C] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#F37021]" />
            Giải Đáp Thắc Mắc
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Những thông tin học viên thường quan tâm trước khi đăng ký tư vấn 1-1
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs transition duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-50 text-[#0A4D8C]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
