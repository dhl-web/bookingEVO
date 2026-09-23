import { MessageCircle, ExternalLink, Heart, Shield, Award } from 'lucide-react';
import { EvoLogo } from './EvoLogo';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/90 pt-12 pb-8 text-slate-600 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-100">
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-3">
            <EvoLogo size="md" />
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              Trung tâm tiếng Anh <strong>EVO English</strong> &mdash; Khơi nguồn đam mê, xây dựng nền tảng vững chắc và đồng hành cùng bạn trên con đường làm chủ tiếng Anh tự tin.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1 text-emerald-600">
                <Shield className="w-4 h-4" /> Cam kết bảo mật
              </span>
              <span className="flex items-center gap-1 text-[#0A4D8C]">
                <Award className="w-4 h-4" /> Đào tạo chuẩn 1-1
              </span>
            </div>
          </div>

          {/* Col 2: Program info */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Chương Trình Đào Tạo
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>&bull; Huấn Luyện Viên Tiếng Anh 1-1 (Personal Coaching)</li>
              <li>&bull; Lộ trình cá nhân hóa theo mục tiêu và năng lực</li>
              <li>&bull; Phương pháp phản xạ tự nhiên & chuẩn hóa phát âm</li>
              <li>&bull; Founder: <strong>Tiểu My Na</strong> (8+ năm kinh nghiệm)</li>
            </ul>
          </div>

          {/* Col 3: Quick Contact */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Kênh Tư Vấn Trực Tuyến
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://evoenglish.vn/zalo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-blue-50 text-[#0068FF] font-bold text-xs hover:bg-blue-100 transition border border-blue-200"
              >
                <span>Tư Vấn Qua Zalo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://evoenglish.vn/messenger/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-purple-50 text-purple-700 font-bold text-xs hover:bg-purple-100 transition border border-purple-200"
              >
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Qua Messenger</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} EVO English &bull; All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Đồng hành cùng học viên Việt Nam chinh phục tiếng Anh <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
