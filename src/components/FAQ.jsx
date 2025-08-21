import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqItems = [
  {
    question: "Сколько стоит робот под ключ?",
    answer:
      "Стоимость зависит от задачи. Средний бюджет проекта — от 2 млн ₽, включая подбор, оборудование, внедрение и обучение.",
  },
  {
    question: "Что нужно, чтобы получить расчёт?",
    answer:
      "Чтобы получить расчёт, необходимо описать задачу и предоставить параметры проекта.",
  },
  {
    question: "Как быстро вы внедряете робота?",
    answer:
      "В среднем от 2 до 8 недель в зависимости от сложности и подготовки площадки.",
  },
  {
    question: "Может ли робот работать с моими деталями?",
    answer: "Да, мы адаптируем решение под ваши детали и требования.",
  },
  {
    question: "Что будет после запуска?",
    answer:
      "Мы сопровождаем проект, проводим обучение и техническую поддержку.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container1 py-24 mt-10 max-sm:py-10 border-t border-gray/10">
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 mb-16">
        <div>
          <motion.p
            className="text-xl font-inter-600"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            arcrobot
          </motion.p>
          <motion.p
            className="text-black/60 pr-3 mt-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Каждое решение, которое мы внедряем — это шаг к стабильному,
            предсказуемому и прибыльному производству.
          </motion.p>
        </div>
        <div className="col-span-3 pl-6 w-4/5 max-lg:w-full max-lg:col-span-4 max-lg:p-0">
          <motion.p
            className="text-[30px] font-inter-500 leading-9 max-xl:text-2xl max-xl:mt-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <span className="text-black/60">Наш подход прост:</span>{" "}
            функциональность, скорость и прозрачность. Мы фокусируемся на сути —
            решение должно выполнять задачу, быть надёжным и быстро приносить
            результат.
          </motion.p>
          <motion.p
            className="text-black/60 font-inter-600 mt-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            Мы не обещаем — мы считаем:
          </motion.p>
          <motion.p
            className="text-black/60"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            ROI, время цикла, экономию человеко-часов. Каждый проект начинается
            с 3D-модели, расчёта окупаемости и технико-коммерческого
            обоснования.
          </motion.p>
        </div>
      </div>

      <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-9xl max-lg:text-[60px] font-black text-black">FAQ.</h1>
          <p className="mt-6 text-black/60 text-lg md:w-[70%]">
            У вас есть вопросы — у нас есть ответы. Всё, что нужно знать о
            запуске проекта по роботизации.
          </p>
        </motion.div>

        <div className="flex flex-col gap-1.5">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white rounded-xl px-2 py-2 max-sm:p-1 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 max-sm:p-3 font-medium text-left"
              >
                <span className="flex-1 pr-2 max-sm:text-[15px]">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 360 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 pb-[3px] rounded-full text-white bg-black flex justify-center items-center text-sm font-semibold"
                >
                  +
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    layout
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden px-6 max-sm:px-3"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pb-6 max-sm:pb-4 text-black/60 text-base leading-relaxed max-sm:leading-5 max-sm:text-sm"
                    >
                      {item.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
