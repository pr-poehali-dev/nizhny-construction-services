import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO_IMG = 'https://cdn.poehali.dev/projects/1ead2e5a-fade-4c8e-ae2a-0c562210258d/files/590c19ce-9eb2-415d-99e8-bdec98029984.jpg';
const FACADE_IMG = 'https://cdn.poehali.dev/projects/1ead2e5a-fade-4c8e-ae2a-0c562210258d/files/363aca26-5efb-47a2-a1e5-4b1d08525a1d.jpg';

const SERVICES = [
  { icon: 'TreePine', title: 'Беседки', desc: 'Деревянные и металлические беседки под ключ для дачи и сада', price: 'от 65 000 ₽' },
  { icon: 'Fence', title: 'Заборы', desc: 'Профнастил, евроштакетник, кованые и каменные ограждения', price: 'от 1 200 ₽/м' },
  { icon: 'Frame', title: 'Каркасы', desc: 'Каркасные дома и пристройки по технологии «под усадку»', price: 'от 9 500 ₽/м²' },
  { icon: 'LayoutPanelTop', title: 'Фасады', desc: 'Вентилируемые фасады, сайдинг, штукатурка и облицовка', price: 'от 1 800 ₽/м²' },
  { icon: 'Home', title: 'Кровля', desc: 'Металлочерепица, мягкая кровля, фальц с гарантией герметичности', price: 'от 950 ₽/м²' },
  { icon: 'PaintRoller', title: 'Внутренняя отделка', desc: 'Черновая и чистовая отделка помещений любой сложности', price: 'от 2 400 ₽/м²' },
];

const FACADE_1 = 'https://cdn.poehali.dev/projects/1ead2e5a-fade-4c8e-ae2a-0c562210258d/bucket/9c237a5d-802c-411c-9073-06b04a7cf5e3.jpg';
const FACADE_2 = 'https://cdn.poehali.dev/projects/1ead2e5a-fade-4c8e-ae2a-0c562210258d/bucket/77ef9ed0-2dad-483d-8099-afa32f348dd4.jpg';

const PORTFOLIO = [
  { img: HERO_IMG, title: 'Беседка 4×5 с мангалом', place: 'Бор', double: false },
  { img: FACADE_1, img2: FACADE_2, title: 'Фасад дома', place: 'Кстово', double: true },
  { img: HERO_IMG, title: 'Каркасный дом 120 м²', place: 'Дзержинск', double: false },
];

const REVIEWS = [
  { name: 'Андрей М.', city: 'Нижний Новгород', text: 'Построили беседку за 9 дней. Чисто, аккуратно, в смету уложились. Рекомендую!', rating: 5 },
  { name: 'Ольга К.', city: 'Бор', text: 'Делали фасад и кровлю. Бригада адекватная, всё объяснили, помогли с материалами.', rating: 5 },
  { name: 'Сергей В.', city: 'Кстово', text: 'Забор из евроштакетника поставили ровно и быстро. Цена честная, без накруток.', rating: 5 },
];

const STATS = [
  { value: '12', label: 'лет на рынке' },
  { value: '640+', label: 'объектов сдано' },
  { value: '38', label: 'районов области' },
  { value: '1 год', label: 'гарантии' },
];

const NAV = [
  { id: 'services', label: 'Услуги' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'about', label: 'О нас' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Index() {
  const [chatOpen, setChatOpen] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-background text-foreground grain overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary flex items-center justify-center rounded-sm">
              <Icon name="Hammer" className="text-primary-foreground" size={20} />
            </div>
            <span className="font-display font-bold text-xl tracking-wide uppercase">ТвойСтрой</span>
          </div>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide font-medium">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="font-display uppercase tracking-wide">
            Заказать
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 clip-slant overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/40 rounded-full mb-6 animate-float-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-primary">Нижегородская область</span>
            </div>
            <h1 className="font-display font-bold uppercase leading-[0.95] text-5xl sm:text-7xl lg:text-8xl mb-6 animate-float-up" style={{ animationDelay: '0.1s' }}>
              Строим то,<br />что <span className="text-primary">стоит веками</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-9 animate-float-up" style={{ animationDelay: '0.2s' }}>
              Беседки, заборы, каркасы, фасады, кровля и внутренняя отделка под ключ.
              Работаем по всей Нижегородской области с гарантией 1 год.
            </p>
            <div className="flex flex-wrap gap-4 animate-float-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" onClick={() => scrollTo('contacts')}
                className="font-display uppercase tracking-wide text-base h-14 px-8">
                <Icon name="Calculator" className="mr-2" size={20} /> Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('portfolio')}
                className="font-display uppercase tracking-wide text-base h-14 px-8 border-primary/40">
                Наши работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-primary text-primary-foreground py-4 overflow-hidden -mt-2 relative z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {['Беседки', 'Заборы', 'Каркасы', 'Фасады', 'Кровля', 'Отделка', 'Под ключ', 'Гарантия 1 год'].map((t) => (
                <span key={t} className="font-display uppercase tracking-widest text-lg mx-6 flex items-center gap-6">
                  {t} <Icon name="Plus" size={16} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="container py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {STATS.map((s) => (
            <div key={s.label} className="bg-card p-8 text-center hover:bg-secondary transition-colors">
              <div className="font-display font-bold text-4xl lg:text-5xl text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container py-16">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="text-primary uppercase tracking-widest text-sm font-medium">01 — Каталог</span>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-6xl mt-2">Услуги и проекты</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Полный цикл работ: от проекта и сметы до сдачи объекта под ключ.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title}
              className="group bg-card border border-border rounded-lg p-7 hover:border-primary transition-all hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-secondary group-hover:bg-primary transition-colors rounded-md flex items-center justify-center">
                  <Icon name={s.icon} className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                </div>
                <Icon name="ArrowUpRight" className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
              </div>
              <h3 className="font-display font-semibold uppercase text-2xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{s.desc}</p>
              <div className="font-display text-primary text-lg font-semibold">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="container py-16">
        <div className="mb-10">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">02 — Портфолио</span>
          <h2 className="font-display font-bold uppercase text-4xl sm:text-6xl mt-2">Выполненные работы</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {PORTFOLIO.map((p, i) =>
            p.double ? (
              <div key={i} className="group relative rounded-lg overflow-hidden aspect-[4/5] cursor-pointer flex flex-col gap-1">
                <div className="relative flex-1 overflow-hidden rounded-t-lg">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="relative flex-1 overflow-hidden rounded-b-lg">
                  <img src={p.img2} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <div className="text-primary text-sm uppercase tracking-wide mb-1 flex items-center gap-1">
                      <Icon name="MapPin" size={14} /> {p.place}
                    </div>
                    <h3 className="font-display font-semibold uppercase text-2xl">{p.title}</h3>
                  </div>
                </div>
              </div>
            ) : (
              <div key={i} className="group relative rounded-lg overflow-hidden aspect-[4/5] cursor-pointer">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="text-primary text-sm uppercase tracking-wide mb-1 flex items-center gap-1">
                    <Icon name="MapPin" size={14} /> {p.place}
                  </div>
                  <h3 className="font-display font-semibold uppercase text-2xl">{p.title}</h3>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="container py-16">
        <div className="mb-10">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">03 — Отзывы</span>
          <h2 className="font-display font-bold uppercase text-4xl sm:text-6xl mt-2">Что говорят клиенты</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-lg p-7 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-primary fill-primary" size={18} />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 flex-1">«{r.text}»</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center font-display font-semibold text-primary">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-card border border-border rounded-lg overflow-hidden">
          <div className="relative h-72 lg:h-full min-h-[320px]">
            <img src={FACADE_IMG} alt="О компании" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 lg:to-card" />
          </div>
          <div className="p-8 lg:p-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">04 — О компании</span>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-2 mb-5">Опыт, которому доверяют</h2>
            <p className="text-muted-foreground mb-6">
              С 2014 года «ТвойСтрой» строит надёжные объекты по всей Нижегородской области.
              Собственные бригады, своя техника и проверенные поставщики материалов.
              Работаем по договору, фиксируем смету и сроки.
            </p>
            <ul className="space-y-3">
              {['Договор и фиксированная смета', 'Собственные бригады без посредников', 'Гарантия на работы до 1 год', 'Бесплатный выезд замерщика'].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Icon name="Check" className="text-primary-foreground" size={14} />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="container py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <span className="text-primary uppercase tracking-widest text-sm font-medium">05 — Контакты</span>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-6xl mt-2 mb-6">Оставить заявку</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Заполните форму — менеджер свяжется в течение 15 минут, рассчитает смету и предложит решение.
            </p>
            <div className="space-y-4">
              {[
                { icon: 'Phone', label: '+7 904 917-57-46', sub: 'Ежедневно 8:00 — 21:00' },
                { icon: 'Mail', label: 'info@stroyvektor.ru', sub: 'Ответим в течение дня' },
                { icon: 'MapPin', label: 'Нижний Новгород', sub: 'Выезд по всей области' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-md flex items-center justify-center shrink-0">
                    <Icon name={c.icon} className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-semibold">{c.label}</div>
                    <div className="text-sm text-muted-foreground">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="bg-card border border-border rounded-lg p-7 space-y-4">
            <Input placeholder="Ваше имя" className="h-12 bg-secondary border-border" />
            <Input placeholder="Телефон" className="h-12 bg-secondary border-border" />
            <Input placeholder="Какая услуга интересует?" className="h-12 bg-secondary border-border" />
            <Textarea placeholder="Комментарий к заявке" className="bg-secondary border-border min-h-28" />
            <Button type="submit" size="lg" className="w-full font-display uppercase tracking-wide h-14 text-base">
              Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-8">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
              <Icon name="Hammer" className="text-primary-foreground" size={18} />
            </div>
            <span className="font-display font-bold uppercase tracking-wide">ТвойСтрой</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Строительство под ключ по Нижегородской области</p>
        </div>
      </footer>

      {/* CHAT WIDGET */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-float-up">
            <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Icon name="Headset" size={22} />
              </div>
              <div>
                <div className="font-display font-semibold uppercase">Менеджер онлайн</div>
                <div className="text-xs opacity-80">Обычно отвечаем за 2 минуты</div>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="bg-secondary rounded-lg rounded-tl-none p-3 text-sm">
                Здравствуйте! Подскажу по услугам, ценам и срокам. Что вас интересует?
              </div>
              <div className="flex gap-2">
                <Input placeholder="Ваше сообщение" className="bg-secondary border-border" />
                <Button size="icon" className="shrink-0">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>
        )}
        <button onClick={() => setChatOpen((v) => !v)}
          className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
          <Icon name={chatOpen ? 'X' : 'MessageCircle'} size={26} />
        </button>
      </div>
    </div>
  );
}