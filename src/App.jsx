import React from "react";
import { ArrowRight, Globe2, Leaf, Recycle, Truck, Factory, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-400/30">
              <Recycle className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">Kangho Resources Co., Ltd.</div>
              <div className="text-xs text-neutral-400">Waste Paper · Scrap Metal · Non-ferrous Metal · Waste Recycling</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <a href="#about" className="hover:text-white">회사소개</a>
            <a href="#business" className="hover:text-white">사업영역</a>
            <a href="#process" className="hover:text-white">처리 프로세스</a>
            <a href="#contact" className="hover:text-white">문의</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-neutral-300 hover:bg-white/10 md:flex">
              <Globe2 className="h-4 w-4" /> KOR / ENG
            </button>
            <a href="#contact" className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-neutral-950 hover:bg-emerald-300">
              문의하기
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.25),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.18),transparent_25%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              폐지 · 고철 · 비철금속 · 폐기물 전문 자원순환 기업
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              버려지는 자원을
              <br /><span className="text-emerald-300">새로운 가치</span>로 바꿉니다.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300">
              Kangho Resources Co., Ltd.는 폐지, 고철, 비철금속, 폐기물 자원을 효율적으로 수거·선별·가공하여
              지속 가능한 순환경제 구축에 기여하는 자원순환 전문 기업입니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#business" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-neutral-950 hover:bg-neutral-200">
                사업영역 보기 <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10">
                전화 문의하기
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-neutral-900 p-6">
                <div className="grid grid-cols-2 gap-4">
                  <StatCard number="01" label="수거" icon={<Truck className="h-6 w-6" />} />
                  <StatCard number="02" label="선별" icon={<Recycle className="h-6 w-6" />} />
                  <StatCard number="03" label="가공" icon={<Factory className="h-6 w-6" />} />
                  <StatCard number="04" label="재자원화" icon={<Leaf className="h-6 w-6" />} />
                </div>
                <div className="mt-5 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                  <div className="text-sm text-emerald-200">Main Items</div>
                  <div className="mt-2 text-2xl font-bold">Waste Paper · Scrap Metal · Non-ferrous Metal · Waste</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">About Kangho Resources</p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                폐자원의 처음부터 끝까지,
                <br />책임 있게 관리합니다.
              </h2>
            </div>
            <p className="text-lg leading-8 text-neutral-300">
              Kangho Resources Co., Ltd.는 사업장에서 발생하는 폐지, 고철, 비철금속 및 각종 폐기물 자원을 체계적으로 관리하고,
              투명한 수거·선별·가공 프로세스를 통해 자원의 가치를 높입니다. 환경성과 경제성을 함께 고려한 맞춤형 재활용 솔루션을 제공합니다.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <Feature title="전문 품목 관리" desc="폐지, 고철, 비철금속, 폐기물 품목별 특성에 맞는 처리 체계를 운영합니다." />
            <Feature title="효율적인 수거" desc="사업장 상황과 발생량에 맞춰 안정적인 수거 및 처리 방안을 제안합니다." />
            <Feature title="지속 가능한 순환" desc="폐기물을 비용이 아닌 다시 쓰이는 자원으로 전환합니다." />
          </div>
        </div>
      </section>

      <section id="business" className="bg-white px-6 py-24 text-neutral-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Business</p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">주요 사업영역</h2>
            </div>
            <p className="max-w-2xl text-neutral-600">
              기업, 공장, 물류센터, 사업장에서 발생하는 폐지·고철·비철금속·폐기물 자원을 안정적으로 처리합니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <BusinessCard title="폐지" desc="박스, 종이류, 폐지 자원의 수거·선별·압축 처리" />
            <BusinessCard title="고철" desc="철 스크랩, 산업 현장 금속 부산물의 수거 및 재활용" />
            <BusinessCard title="비철금속" desc="알루미늄, 구리, 스테인리스 등 비철금속 자원 선별·유통" />
            <BusinessCard title="폐기물" desc="사업장 폐기물 특성에 맞춘 수거 계획 및 처리 연계" />
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Process</p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">처리 프로세스</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {["품목 및 발생량 확인", "수거 계획 수립", "선별·압축·가공", "재자원화 및 유통"].map((item, i) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-8 text-5xl font-black text-white/10">0{i + 1}</div>
                <h3 className="text-xl font-bold">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  현장 상황과 자원 특성에 맞춰 단계별로 안정적인 처리 체계를 설계합니다.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-emerald-400 p-8 text-neutral-950 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-4xl font-black md:text-5xl">폐지·고철·비철·폐기물 처리 문의</h2>
              <p className="mt-5 max-w-2xl text-lg text-neutral-800">
                품목, 발생량, 위치를 알려주시면 Kangho Resources Co., Ltd.가 적합한 수거 및 처리 방안을 안내해드립니다.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
                <Phone className="h-5 w-5 text-emerald-600" />
                <span className="font-semibold">031-351-4433</span>
              </div>
              <div className="flex items-start gap-3 pt-4">
                <MapPin className="mt-1 h-5 w-5 text-emerald-600" />
                <span className="font-semibold leading-6">589 Beodeul-ro, Ujeong-eup, Hwaseong-si, Gyeonggi-do</span>
              </div>
              <a href="tel:0313514433" className="mt-6 block w-full rounded-full bg-neutral-950 px-5 py-3 text-center font-bold text-white hover:bg-neutral-800">
                전화 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-neutral-500">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <div>© Kangho Resources Co., Ltd. All rights reserved.</div>
          <div>kanghorecycling.com</div>
        </div>
      </footer>
    </main>
  );
}

function StatCard({ number, label, icon }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-center justify-between text-emerald-300">
        <span className="text-sm font-bold">{number}</span>
        {icon}
      </div>
      <div className="mt-8 text-2xl font-bold">{label}</div>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
        <Leaf className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-4 leading-7 text-neutral-400">{desc}</p>
    </div>
  );
}

function BusinessCard({ title, desc }) {
  return (
    <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
        <Recycle className="h-7 w-7" />
      </div>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-neutral-600">{desc}</p>
      <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
        자세히 보기 <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}
