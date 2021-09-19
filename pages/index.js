import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div>
      <div className="cover-display">
        <div className="cover-navbar">
          <div className="cover-title-navbar">
            <img src="/hand.png" width="30px" height="30px" />
            PeduliSesama
          </div>
          <div className="cover-menu-navbar">
            <div>Beranda</div>
            <div>Riwayat</div>
            <div>Informasi</div>
            <div>Tentang</div>
          </div>
        </div>
        <nav className="mobile-nav">
          <div className="heading-mobile">
            <img src="/hand.png" width="30px" height="30px" />
            PeduliSesama
          </div>
          <button onClick={() => setShowMobileNav(!showMobileNav)}>=</button>
          <div
            className={`mobile-nav-content ${showMobileNav ? "visible" : ""}`}
          >
            <a>Beranda</a>
            <a>Riwayat</a>
            <a>Informasi</a>
            <a>Tentang</a>
          </div>
        </nav>
        <div className="cover-content">
          <div>
            <div className="cover-content-title">
              Sejuta Masker Untuk Pejuang Jalanan!
            </div>
            <div className="cover-content-desc">
              Inisiatif berbagi masker kepada pejuang jalanan, dikala pandemi
              Covid-19.
            </div>
            <div className="cover-content-desc">
              #SemuaTerlindungiSemuaSehat
            </div>
            <button className="cover-content-btn">LAINNYA</button>
          </div>
        </div>
      </div>

      <div className="section">
        <img src="/pemulung.jpeg" />
        <div className="section-content">
          <h1>Gerakan Berbagi Masker Untuk Pejuang Jalanan</h1>
          <div>
            Menjaga kesehatan di masa pandemi Covid-19 menjadi tantangan
            tersendiri bagi masyarakat yang tinggal di permukiman pemulung di
            <span> Tanah Merah, Koja, Jakarta Utara.</span>
          </div>
          <div>
            Lokasi yang dipenuhi barang-barang bekas. Masih banyak masyarakat
            yang belum menerapkan protokol kesehatan untuk mencegah penyebaran
            virus corona.
          </div>
          <button className="section-content-btn">Lihat Selengkapnya</button>
        </div>
      </div>
      <div className="section1">
        <div className="section1-card">
          <h2>
            <img src="/donasi.png" width="50px" height="50px" />
            Berdonasi
          </h2>
          <div>
            Berdonasi masker kepada pejuang jalanan, dan peduli terhadap
            lingkungan.
          </div>
          <button className="section1-card-btn">BERDONASI</button>
        </div>
        <div className="section2-card">
          <h2>
            <img src="/team.png" width="50px" height="50px" />
            Bergabung
          </h2>
          <div>
            Bergabung dengan komunitas jalanan, dan peduli terhadap sesama.
          </div>
          <button className="section1-card-btn">GABUNG</button>
        </div>
      </div>
      <div className="section2">
        <div className="section2-content">
          <h1>Dokumentasi Komunitas Pejuang Jalanan</h1>
          <div className="section2-subcontent-mobile">
            Komunitas yang peduli terhapad pejuang jalanan, yang menjadikan
            jalanan sebagai tempatnya mencari nafkah di tengah kondisi pandemi
            seperti ini.
          </div>
          <div className="section2-subcontent">
            Komunitas yang peduli terhadap pejuang jalanan, yang menjadikan
            jalanan sebagai tempatnya mencari nafkah. Di tengah pandemi seperti
            ini yang diharuskan untuk memakai masker untuk mengurang penyebaran
            virus corona, maka komunitas kami berinisiatif menyalurkan bantuan
            masker kepada pejuang jalanan.
          </div>
        </div>
        <div className="section2-img">
          <img src="/pemulung7.jpg" />
          <img src="/pemulung4.jpeg" />
          <img src="/pemulung6.jpg" />
          <img src="/pemulung7.jpg" />
        </div>
      </div>
      <div className="footer">
        <h4>
          <img className="footer-icon" src="/hand.png" />
          PeduliSesama
        </h4>
        <div className="footer-content-information-mobile">
          <h4>Informasi</h4>
          <div>Blog</div>
          <div>Event</div>
          <div>Tentang</div>
          <div>Pendukung</div>
        </div>
        <div>
          <h4>Didukung oleh</h4>
          <div>Sahabat Indonesia Berbagi</div>
          <div>Gerakan Seribu Sehari Indonesia</div>
          <div>Koalisi Pemuda Hijau Indonesia</div>
          <div>Komunitas Jendela</div>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="footer-contact">
            <img src="/email.png" width="20px" height="20px" />
            <div>pedulisesama@gmail.com</div>
          </div>
          <div className="footer-contact">
            <img src="/phone-call.png" width="20px" height="20px" />
            <div>+6281933601121</div>
          </div>
          <div className="footer-contact">
            <img src="/twitter.png" width="20px" height="20px" />
            <div>@pedulisesama</div>
          </div>
          <div className="footer-contact">
            <img src="/youtube.png" width="20px" height="20px" />
            <div>Peduli Sesama</div>
          </div>
        </div>
      </div>
      <div className="footer-end">© 2021 Copyright: PeduliSesama.com</div>
    </div>
  );
}
