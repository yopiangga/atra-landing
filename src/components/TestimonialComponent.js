import Slider from "react-slick";

import img1 from "src/assets/img/testimonials/testi-1.png";
import img2 from "src/assets/img/testimonials/testi-2.png";
import img3 from "src/assets/img/testimonials/testi-3.png";

import tutus from "src/assets/img/testimonials/tutus.jpeg";
import atung from "src/assets/img/testimonials/atung.jpeg";
import garry from "src/assets/img/testimonials/garry.jpeg";

import imgUser from "src/assets/img/testimonials/user.png";
import { FaQuoteLeft } from "react-icons/fa";

export function TestimonialComponent() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      name: "Afif Husain Rasyidi ",
      title: "Mahasiswa Universitas Brawijaya, Penyandang Low Vision",
      desc: "Setelah saya coba, aplikasi ini simple dan mudah digunakan. Jadi, dapat membantu tunanetra low vision untuk menerima informasi tercetak. Pilihan warna dan ukuran kontrasnya bagus. Lebih baik menambahkan lebih banyak panduan audio di seluruh menu.",
      img: img1,
    },
    {
      name: "Sinarsih S.Pd",
      title: "Guru di SMA Negeri 1 Sampang",
      desc: "ATRA praktis, praktis, dan inovatif sehingga dapat membantu penyandang tunanetra dan low vision.",
      img: img2,
    },
    {
      name: "Aprial Iqbal Lubis",
      desc: "Aplikasi ini tidak sulit untuk membantu penyandang low vision dalam memperoleh informasi lebih cepat.",
      title:
        "Mahasiswa Institut Teknologi Sepuluh Nopember, Sahabat Low Vision",
      img: img3,
    },
    {
      name: "Gery Akbar",
      title: "Mahasiswa Universitas Brawijaya, Penyandang Low Vision",
      desc: "Aplikasi ini menjawab kesulitan saya yang tidak bisa membaca tulisan pada gambar. Saran dari saya bisa lebih bagus jika terdapat tampilan dark mode.",
      img: garry,
    },
    {
      name: "Pak Atung",
      title:
        "Guru Bahasa Indonesia Sekolah Luar Biasa - Tunanetra, penyandang tunanetra",
      desc: "Aplikasi yang bagus, saya sangat mendukung pengembangan aplikasi seperti ini. Akan lebih bagus jika aplikasi bisa free terus untuk digunakan.",
      img: atung,
    },
    {
      name: "Pak Tutus",
      title:
        "Guru Matematika Sekolah Luar Biasa - Tunanetra, penyandang tunanetra",
      desc: "Sudah banyak aplikasi untuk tunanetra. Namun, aplikasi ini beda dari yang lain karena mudah digunakan. Dengan adanya auto capture mempermudah pengguna untuk menangkap gambar secara otomatis.",
      img: tutus,
    },
  ];

  return (
    <div className="text-center lg:px-20 px-8 py-20" id="Testimonial">
      <div className="mt-16"></div>
      <div className="header-title text-center">
        <h2 className="text-4xl font-medium">Apa Kata Pengguna Kami</h2>
        <p className="text-sm mt-5 text-gray-600">
          Lihat apa yang dikatakan pelanggan kami tentang aplikasi. Kami bangga
          memiliki mereka
        </p>
      </div>
      <div className="lg:w-3/4 w-full mx-auto mt-8 bg-white h-full">
        <Slider {...settings}>
          {testimonials.map((el, idx) => {
            return (
              <div
                key={idx}
                className="bg-white w-full h-full lg:px-20 flex flex-col justify-center items-center"
              >
                <FaQuoteLeft className="text-gray-300 text-4xl mx-auto" />
                <p className="mt-8 text-lg text-gray-600">{el.desc}</p>
                <div className="img w-20 h-20 mx-auto mt-10 rounded-full overflow-hidden">
                  <img
                    src={el.img ?? imgUser}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                <h4 className="text-lg text-gray-900 mt-4 font-medium">
                  {el.name}
                </h4>
                <h4 className="text-md text-gray-600 mt-0">{el.title}</h4>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
