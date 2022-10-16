const activeLinks = document.querySelectorAll("nav ul li a");

function setActiveLink(index) {
  for (const activeLink of activeLinks) {
    if (activeLink.getAttribute("class")) {
      activeLink.setAttribute("class", "");
    }
  }
  activeLinks[index - 1].setAttribute("class", "active__link");
}

const header = document.querySelector("header");

const headerPos = header.getBoundingClientRect().top;

const main = document.querySelector("main");

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > headerPos) {
    header.classList.add("sticky");
    main.classList.add("sticky__active");
  } else {
    header.classList.remove("sticky");
    main.classList.remove("sticky__active");
  }
});

document.onload = loadBlog();

const imgUrl = [
  "",
  "https://media.suara.com/pictures/653x366/2021/08/02/81387-ilustrasi-makanan-cepat-saji-freepik.jpg",
  "https://wallpaperaccess.com/full/2390200.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30xpOhrwHMVPYXSD4bW-1L-KQGOKkGwL7Ww&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXausYfDXVVHFu2MqQN9PyHHW0GMISHjoQNw&usqp=CAU",
];

async function loadBlog() {
  const blogsContainer = document.querySelector(".blogs");
  const articles = document.querySelectorAll("article");
  const blogsData = [
    {
      title: "Bahaya Junkfood",
      imgUrl:
        "https://asset.kompas.com/crops/fQVOtLSPe9n2ymE8jOG6fNCf0xQ=/0x0:1000x667/750x500/data/photo/2021/10/21/6170ffb140316.jpg",
      date: "Sabtu, 22 Juli 2022",
      body: `Banyak yang telah mengetahui bahwa junk food ataupun fast food adalah makanan yang kurang nilai gizi atau tidak sehat. Hal ini dikarenakan makanan tersebut tidak memiliki cukup serat, vitamin dan mineral. Bahan makanan yang terkandung dalam junk food atau fast food ini tinggi lemak, tinggi garam dan tinggi gula sehinga bisa berakibat gangguan kesehatan.

          Namun meski bukan healthy food makanan junk food dan fast food ini masih menjadi favorit untuk di konsumsi oleh banyak masyarakat. Kebanyakan alasan mengonsumsi makanan ini adalah rasanya yang cenderung gurih dan terasa serta makanan tersebut mudah didapatkan secara instan.

          dr. Brain Gantoro, SpGK selaku Dokter Spesialis Gizi Klinik Rumah Sakit Awal Bros Batam menjelaskan bahwa dampak dari seringnya mengonsumsi junk food bisa mengakibatkan peningkatan lemak badan tidak seimbang, sehingga bisa terjadi penuaan dini, peningkatan penyakit degeneratif seperti diabetes mellitus, hipertensi, penyakit jantung koroner dan kanker. “Junk food ini berbahaya karena zero calories,”ujarnya.

          Karena praktis dan murahnya makanan junk food dan fast food maka masyarakat cenderung menyukai makanan ini ditambah rasanya yang menggugah selera. Junk food merupakan makanan yang tinggi lemak, garam, gula kurang serat, vitamin dan mineral. Sedangkan fast food adalah makanan cepat saji, makanan olahan, umumnya digoreng sehingga tinggi lemak.`,
    },
    {
      title: "Sejarah banten",
      imgUrl:
        "https://asset.kompas.com/crops/_i1RkpLoZ-G0TAXkDKoLf-9Gnp0=/23x11:964x639/750x500/data/photo/2022/03/12/622ca58e77830.jpg",
      date: "Senin, 18 Agustus 2022",
      body: `Kesultanan Banten berdiri sebagai manifestasi dari penyebaran Islam dan kemenangan pasukan Demak mengusir Portugis dari Sunda Kelapa. Sebelum menjadi daerah Islam, Banten merupakan bagian dari Kerajaan Pajajaran. Dalam catatan sejarah disebutkan, Pajajaran menjalin kerja sama dengan Portugis yang saat itu sudah berkuasa di Malaya. Dari kerja sama ini, Pajajran berharap dapat bantuan Portugis untuk membendung pengaruh Demak yang sudah mencapai Jawa bagian barat. Namun, usaha Pajajaran tersebut gagal. Portugis yang sudah berada di Sunda Kelapa berhasil diusir tentara gabungan Demak dan Cirebon yang dipimpin Fatahillah. Di Pelabuhan Banten juga demikian. Belum sempat Portugis bercokol di pelabuhan itu, Sunan Gunung Jati keburu menguasainya dari Pajajaran. Keberhasilan Sunan Gunung Jati merebut Banten tercatat pada periode tahun 1525-1526. Sunan Gunung Jati kemudian menetap beberapa saat di Banten dan membentuk suatu pemerintahan. Pada tahun 1552, Sunan Gunung Jati memilih kembali ke Cirebon, dan kekuasaan Banten diserahkan kepada anaknya, Maulana Hasanuddin. Maulana Hasanuddin lantas dinobatkan sebagai raja pertama Kesultanan Banten, dan mengembangkan Pelabuhan Banten menjadi pusat perdagangan internasional.`,
    },
  ];
  const blogsElement = renderBlog(blogsData);
  let i = 0;
  for (const article of articles) {
    article.innerHTML = blogsElement[i];
    article.classList.add("blog");
    i++;
  }
}

function renderBlog(blogs) {
  const blogsMap = blogs.map((e) => {
    return `
      <div class="blog__header">
        <h3>${e.title}</h3>
        <span>Robbany Chalif Arrahman</span>
        <span>${e.date}</span>
      </div>

      <section>
        <img src=${e.imgUrl} />
      </section>
      <section>
        <p>
          ${e.body}
        </p>
      </section>`;
  });

  return blogsMap;
}
