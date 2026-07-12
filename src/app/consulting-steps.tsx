"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: "kesif",
    number: "01",
    label: "Keşif & Strateji",
    title: "Sana uygun yolu birlikte seçelim.",
    text: "Gelir modelini, hedef ülkeni ve aile planını aynı masada değerlendirip net bir yol haritası çıkarıyoruz.",
    services: ["Gelir modeli analizi", "Ülke ve vize eşleştirmesi", "Kişisel yol haritası"],
    tone: "consultPeach",
  },
  {
    id: "hazirlik",
    number: "02",
    label: "Hazırlık & Başvuru",
    title: "Belgeleri doğru sırayla hazırlayalım.",
    text: "Finansal kanıtlardan başvuru dosyasına kadar bütün süreci eksiksiz, takip edilebilir ve sade hale getiriyoruz.",
    services: ["Belge kontrolü", "Finansal dosya hazırlığı", "Başvuru koordinasyonu"],
    tone: "consultBlue",
  },
  {
    id: "yerlesim",
    number: "03",
    label: "Onay & Yerleşim",
    title: "Yeni hayatına güvenle yerleş.",
    text: "Onay sonrasında ailece taşınma, yerel kayıtlar ve ilk ayların planlamasında yanında olmaya devam ediyoruz.",
    services: ["Taşınma planlaması", "Yerel kayıt desteği", "Yerleşim danışmanlığı"],
    tone: "consultGreen",
  },
];

export default function ConsultingSteps() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number((visible.target as HTMLElement).dataset.step));
      },
      { rootMargin: "-28% 0px -42% 0px", threshold: [0.15, 0.35, 0.6] },
    );
    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="consultSection section" id="danismanlik">
      <div className="shell">
        <div className="consultIntro">
          <span className="sectionKicker">UÇTAN UCA DANIŞMANLIK</span>
          <h2>Her adımda aynı ekip,<br />tek bir net plan.</h2>
          <p>Gelir planından yerleşime kadar, karmaşık süreci üç anlaşılır adıma ayırdık.</p>
        </div>

        <div className="consultFlow">
          <div className="consultTabs" aria-label="Danışmanlık adımları">
            {steps.map((step, index) => (
              <button className={active === index ? "active" : ""} onClick={() => goTo(index)} key={step.id}>
                <span>{step.number}</span><i /><strong>{step.label}</strong>
              </button>
            ))}
          </div>

          <div className="consultPanels">
            {steps.map((step, index) => (
              <article
                className={`consultPanel ${step.tone}`}
                id={step.id}
                data-step={index}
                ref={(node) => { refs.current[index] = node; }}
                key={step.id}
              >
                <div className="consultPanelCopy">
                  <span>{step.number} / 03</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <a href="/gorusme">Bu adım için görüş <b>↗</b></a>
                </div>
                <div className="consultServices">
                  <span>BU ADIMDA</span>
                  {step.services.map((service, serviceIndex) => (
                    <div key={service}><i>{String(serviceIndex + 1).padStart(2, "0")}</i><strong>{service}</strong><b>→</b></div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
