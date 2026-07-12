import Image from "next/image";
import ConsultingSteps from "./consulting-steps";

const stories = [
  { tone: "peach", kicker: "Yeni", title: "Sana uygun pasif gelir planı" },
  { tone: "sunset", kicker: "Rehber", title: "Dijital varlıklarını büyüt" },
  { tone: "forest", kicker: "İlham", title: "Gelirini doğaya bırak" },
];

const paths = ["Dijital ürünler", "İçerik & topluluk", "Akıllı yatırımlar"];

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
            <a href="#yollar">Yollar</a><a href="#nasil">Nasıl çalışır?</a><a href="#hikayeler">İçgörüler</a>
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

      <section className="stories shell section" id="hikayeler">
        <div className="sectionHead">
          <div><span className="sectionKicker">GÜNCEL İÇGÖRÜLER</span><h2>Yeni bir gelir biçimiyle tanış.</h2></div>
          <p>Başlamak için ihtiyacın olan fikirler, araçlar ve sade yol haritaları.</p>
        </div>
        <div className="storyGrid">
          {stories.map((story, i) => (
            <article key={story.title} className="storyCard">
              <div className={`storyVisual ${story.tone}`}>
                <span>{story.kicker}</span><strong>{story.title}</strong><i>{String(i + 1).padStart(2, "0")}</i>
              </div>
              <h3>{story.title}</h3>
              <div className="meta"><span>Başlangıç</span><span>6 dk okuma</span><b>↗</b></div>
            </article>
          ))}
        </div>
      </section>

      <section className="paths shell section" id="yollar">
        <div className="pathPanel" id="nasil">
          <div className="pathTabs">
            <span className="selected"><i className="dot warm" /> Dijital Ürünler</span>
            <span><i className="dot blue" /> İçerik & Topluluk</span>
            <span><i className="dot green" /> Akıllı Yatırımlar</span>
          </div>
          <div className="pathShowcase">
            <i className="showOrb faded left" aria-hidden="true" />
            <div className="pathItem side"><i className="showOrb purple" /><h3>İçerik</h3><p>Bilgini faydalı içeriklere<br/>ve sadık bir kitleye dönüştür.</p></div>
            <button className="pathArrow" aria-label="Önceki">‹</button>
            <div className="pathItem main"><i className="showOrb coral"><span>▶</span></i><h3>Dijital ürünler <b>↗</b></h3><p>Bir kez üret, tekrar tekrar sat.<br/>Bilgini çalışan bir varlığa dönüştür.</p></div>
            <button className="pathArrow" aria-label="Sonraki">›</button>
            <div className="pathItem side"><i className="showOrb moss" /><h3>Topluluk</h3><p>Ortak bir ilgi etrafında<br/>sürdürülebilir değer oluştur.</p></div>
            <i className="showOrb faded right" aria-hidden="true" />
          </div>
          <div className="pathBottom">
            {paths.map((path, i) => <span key={path} className={i === 0 ? "active" : ""}>{path}</span>)}
            <b>Planını oluştur</b>
          </div>
        </div>
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
