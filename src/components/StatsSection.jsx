// components/StatsSection.jsx
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 5,
    suffix: "+",
    title: "Отраслей,",
    description: "где мы уже внедрили роботов",
  },
  {
    value: 26,
    suffix: "+",
    title: "Проектов внедрено",
    description: "под ключ",
  },
  {
    value: 100,
    suffix: "%",
    title: "Проектов доведены до результата",
    description: "— от идеи до рабочего участка",
  },
  {
    value: 50,
    suffix: "k+ч",
    title: "Сэкономлено часов клиентами",
    description: "в год за счёт роботизации",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-50 pb-16">
      <div className="container1  grid grid-cols-1 md:grid-cols-4 gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-4">
            <div className="text-[85px] font-inter-600 text-black">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-black/60 w-1/2 text-start leading-5 font-inter-500">{stat.title} {stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
