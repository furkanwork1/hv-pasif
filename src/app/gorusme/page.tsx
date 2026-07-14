import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Görüşme Planla — Pasif",
  description: "Pasif gelir ve yurt dışına yerleşim hedeflerin için ücretsiz ön görüşme planla.",
};

export default function MeetingPage() {
  return (
    <main className="meetingPage" id="top">
      <nav className="meetingNav shell">
        <Link className="brand brandImageLink" href="/"><Image src="/images/logo-web.png" alt="Pasif Gelir" width={160} height={52} className="brandLogo" priority /></Link>
        <div className="meetingNavLinks">
          <Link href="/#vizeler">Vizeler</Link>
          <Link href="/#danismanlik">Danışmanlık</Link>
          <Link href="/#basla">Ana Sayfa</Link>
        </div>
        <Link className="meetingBack" href="/">← Ana sayfa</Link>
      </nav>

      <section className="meetingHero shell">
        <div className="meetingIntro">
          <span className="sectionKicker">ÜCRETSİZ ÖN GÖRÜŞME</span>
          <h1>Bir sonraki adımı<br />birlikte netleştirelim.</h1>
          <p>Hedeflerini dinleyelim, sana uygun gelir ve yerleşim yolunu değerlendirelim. İlk görüşme yaklaşık 30 dakika sürer.</p>
        </div>

        <form className="meetingForm">
          <div className="formTop">
            <span>GÖRÜŞME TALEBİ</span>
            <i>30 dk · Online</i>
          </div>
          <h2>Seni biraz tanıyalım.</h2>
          <div className="formGrid">
            <label>Adın ve soyadın<input name="name" type="text" placeholder="Ad Soyad" required /></label>
            <label>E-posta adresin<input name="email" type="email" placeholder="ornek@email.com" required /></label>
            <label className="wide">Pasif gelirinden kısaca bahset<textarea name="passiveIncome" placeholder="Gelir kaynağın, yaklaşık tutarı ve ne zamandır devam ettiği..." rows={4} required /></label>
            <label className="wide">Hangi ülkeyle ilgileniyorsun?
              <select name="country" defaultValue="" required>
                <option value="" disabled>Bir ülke seç</option>
                <option>İspanya</option>
                <option>Portekiz</option>
                <option>İtalya</option>
                <option>Bulgaristan</option>
                <option>Henüz karar vermedim</option>
              </select>
            </label>
            <label>Tercih ettiğin gün <em>Opsiyonel</em><input name="date" type="date" /></label>
            <label>Tercih ettiğin saat
              <select name="time" defaultValue="">
                <option value="">Opsiyonel</option>
                <option>10:00 — 12:00</option>
                <option>13:00 — 15:00</option>
                <option>16:00 — 18:00</option>
              </select>
            </label>
          </div>
          <button type="submit">Görüşme talebimi gönder <span>→</span></button>
          <small>Bilgilerin yalnızca görüşmeni planlamak için kullanılacaktır.</small>
        </form>
      </section>

      <footer className="footer meetingFooter">
        <Image src="/images/footer-meeting.png" alt="Şehir parkında yeni bir başlangıç" fill sizes="100vw" className="footerImage" />
        <div className="footerShade" />
        <div className="footerContent shell">
          <div className="footerTop"><Link className="brand brandImageLink brandOnDark" href="/"><Image src="/images/logo-web.png" alt="Pasif Gelir" width={160} height={52} className="brandLogo" /></Link><p>Yeni hayatına<br/>güvenle başla.</p></div>
          <div className="footerBottom"><span>© 2026 Pasif</span><div><Link href="/">Ana Sayfa</Link><Link href="/#vizeler">Vizeler</Link><Link href="/#danismanlik">Danışmanlık</Link></div><Link href="#top">Yukarı dön ↑</Link></div>
        </div>
      </footer>
    </main>
  );
}
