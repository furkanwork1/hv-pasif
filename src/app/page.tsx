import Image from "next/image";
import ConsultingSteps from "./consulting-steps";

const visas = [
  { country: "İspanya", title: "İspanya Pasif Gelir Vizesi", tone: "spain", duration: "2 Ay" },
  { country: "Portekiz", title: "Portekiz D7 Vizesi", tone: "portugal", duration: "6 Ay" },
  { country: "İtalya", title: "İtalya Pasif Gelir Vizesi", tone: "italy", duration: "6 Ay" },
  { country: "Bulgaristan", title: "Bulgaristan Emekli Vizesi", tone: "bulgaria", duration: "6 Ay" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="basla">
        <Image className="heroImage" src="/images/hero.png" alt="Şehir manzaralı yemyeşil park" fill priority sizes="100vw" />
        <div className="heroShade" />
        <nav className="nav shell" aria-label="Ana menü">
          <a className="brand brandImageLink brandOnDark" href="#basla"><Image src="/images/logo-web.png" alt="Pasif Gelir" width={160} height={52} className="brandLogo" priority /></a>
          <div className="navLinks">
            <a href="#vizeler">Vizeler</a><a href="#danismanlik">Danışmanlık</a><a href="/gorusme">Görüşme</a>
          </div>
          <a className="navCta" href="/gorusme">Ücretsiz Ön Değerlendirme <span>↗</span></a>
        </nav>

        <div className="heroContent shell">
          <div className="eyebrow"><span /> Yurt dışında yeni bir başlangıç</div>
          <h1>Pasif Gelir Vizesi ile<br />Yurt Dışında Yeni Bir Hayata Başlayın.</h1>
          <p>Size en uygun ülkeyi belirleyelim, uygunluğunuzu değerlendirelim ve başvuru sürecinizi uzman desteğiyle güvenle yönetelim.</p>
          <form className="heroForm" id="plan" action="/gorusme">
            <label className="srOnly" htmlFor="email">E-posta adresin</label>
            <input id="email" type="email" placeholder="E-posta adresin" required />
            <button type="submit">Ücretsiz Ön Değerlendirme Fırsatı <span>→</span></button>
          </form>
          <small>Kredi kartı gerekmez · 2 dakikada kişisel yol haritan</small>
        </div>
        <div className="heroFoot shell"><span>↓ Keşfetmek için kaydır</span><span>Bağımsızlık, küçük adımlarla başlar.</span></div>
      </section>

      <section className="visaSection section" id="vizeler">
        <div className="shell">
          <div className="visaHead">
            <div>
              <span className="sectionKicker">YENİ BİR HAYAT</span>
              <h2>Pasif Gelir Vizesi</h2>
            </div>
            <div className="visaIntro">
              <p>İster emekli ol ister pasif gelir üret, pasif gelirinle aileni yurt dışına taşı.</p>
              <a href="#visaGrid">Tüm Pasif Gelir Vizeleri <span>→</span></a>
            </div>
          </div>

          <div className="visaGrid" id="visaGrid">
            {visas.map((visa, index) => (
              <article className="visaCard" key={visa.country}>
                <div className={`visaCover ${visa.tone}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{visa.country}</strong>
                  <i>{visa.country}</i>
                </div>
                <div className="visaBody">
                  <h3>{visa.title}</h3>
                  <dl>
                    <div><dt>Geçerlilik:</dt><dd>1 Yıl</dd></div>
                    <div><dt>Kapsam:</dt><dd>Tüm Aile</dd></div>
                    <div><dt>Mülakat:</dt><dd>Yok</dd></div>
                    <div><dt>Süreç:</dt><dd>{visa.duration}</dd></div>
                  </dl>
                  <div className="visaActions">
                    <a href="/gorusme">Bilgi Al</a>
                    <a href="/gorusme">Teklif Al <span>→</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConsultingSteps />

      <section className="finalCta shell section">
        <span className="sectionKicker">SIRADAKİ ADIM</span>
        <h2>Hayatınızı değiştirecek<br/>ilk adımı bugün atın.</h2>
        <p>Uzman danışmanlarımızla size en uygun pasif gelir vizesini belirleyin ve başvuru sürecinizi güvenle yönetin.</p>
        <a href="/gorusme">Görüşme planla <span>↗</span></a>
      </section>

      <footer className="footer">
        <Image src="/images/footer-meeting.png" alt="Şehir parkında yeni bir başlangıç" fill sizes="100vw" className="footerImage" />
        <div className="footerShade" />
        <div className="footerContent shell">
          <div className="footerTop"><a className="brand brandImageLink brandOnDark" href="#basla"><Image src="/images/logo-web.png" alt="Pasif Gelir" width={160} height={52} className="brandLogo" /></a><p>Pasif Gelirinizle<br/>Yeni Bir Hayat Kurun.</p></div>
          <div className="footerBottom"><span>© 2026 Pasif</span><div><a href="#">Gizlilik</a><a href="#">Koşullar</a><a href="#">Instagram</a></div><a href="#basla">Yukarı dön ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
