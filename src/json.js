export const surveyJson = {
  "locale": "id",
  "title": "Survey Pengguna Mobile Banking",
  "description": {
   "default": "Survey pengguna mobile banking untuk mempelajari efektifitas penggunaannya.",
   "id": "Survey pengguna mobile banking untuk mempelajari efektifitas penggunaannya."
  },
  "completedHtml": "<h3>Terima Kasih!</h3> <p>Kami sangat menghargai waktu dan kontribusi berharga Anda dalam penelitian ini. Tanggapan Anda akan membantu kami mendapatkan wawasan yang berharga tentang penggunaan aplikasi m-banking dan berkontribusi pada pemahaman lebih lanjut dalam bidang ini.</p> <p>Kami juga ingin mengingatkan Anda untuk mengecek email atau WhatsApp, karena kami akan mengirimkan informasi responden terbaik melalui platform tersebut.</p> <p>Terima kasih sekali lagi atas partisipasi Anda dalam penelitian ini. Semoga Anda memiliki hari yang baik!</p>",
  "completedHtmlOnCondition": [
   {
    "html": "<h3>Terima Kasih!</h3> <h4>Your ideas and suggestions will help us make it even better.</h4>"
   },
   {
    "html": "<h3>Terima Kasih!</h3> <h4>We are glad that you shared your ideas with us.</h4>"
   }
  ],
  "loadingHtml": {
   "id": "<h3>Memuat kuesioner...</h3>"
  },
  "pages": [
   {
    "name": "persetujuan",
    "elements": [
      {
        "type": "html",
        "name": "informasi",
        "html": {
         "id": "Dear Responden yang Terhormat,<br><br>Saya, M. Cahyo Priambodo, ingin memperkenalkan diri sebagai peneliti yang sedang menjalankan survei terkait penggunaan layanan mobile banking. Jika Anda berusia antara 17 hingga 63 tahun dan aktif menggunakan layanan mobile banking, seperti BCA (BCA Mobile), Mandiri (Livin by Mandiri), BNI (BNI Mobile Banking), BSI (BSI Mobile), BRI (BRImo), CIMB (Octo Mobile), Permata (Permata Mobile X), atau lainnya, saya ingin meminta kesediaan Anda untuk berpartisipasi dalam pengisian kuesioner penelitian ini.<br><br>Berikut adalah panduan untuk mengisi kuesioner ini:<br>- Perkiraan waktu pengisian kuesioner adalah sekitar 10-15 menit.<br>- Tidak ada jawaban yang benar atau salah. Kami sangat menghargai kejujuran dan kebenaran dalam jawaban Anda.<br><br>Seluruh informasi yang Anda berikan dalam kuesioner ini akan dijaga kerahasiaannya. Data yang kami kumpulkan hanya akan digunakan untuk tujuan penelitian dan publikasi. Dengan berpartisipasi dalam survei ini, Anda turut serta dalam perkembangan ilmu pengetahuan dan membantu penyedia layanan perbankan digital dalam memahami kebutuhan penggunanya.<br><br>Terima kasih atas perhatian, kerjasama, dan kesediaan Anda untuk berkontribusi dalam penelitian ini.<br><br>Salam hormat,<br>M. Cahyo Priambodo<br>(Tim Riset ACTC UCN 2023)<br><br>"
        }
       },
     {
      "type": "boolean",
      "name": "boolean_persetujuan",
      "title": "Sebelum kita memulai, kami ingin menekankan bahwa tanggapan Anda akan dijaga kerahasiaannya dan hanya digunakan untuk tujuan penelitian. Apakah Anda setuju untuk berpartisipasi dalam kuesioner ini?",
      "valueName": "boolean_persetujuan",
      "defaultValue": "true",
      "isRequired": true,
      "labelTrue": "Ya",
      "labelFalse": "Tidak"
     }
    ],
    "title": {
     "default": "Konfirmasi",
     "id": "Persetujuan"
    }
   },
   {
    "name": "identitas",
    "elements": [
     {
      "type": "text",
      "name": "nama_lengkap",
      "title": "Nama Lengkap",
      "valueName": "nama_lengkap",
      "isRequired": true,
      "autocomplete": "name"
     },
     {
      "type": "text",
      "name": "email",
      "title": "Email",
      "valueName": "email",
      "isRequired": true,
      "inputType": "email",
      "autocomplete": "email",
      "placeholder": {
       "id": "nama@email.com"
      }
     },
     {
      "type": "radiogroup",
      "name": "jenis_kelamin",
      "title": "Jenis Kelamin",
      "valueName": "jenis_kelamin",
      "isRequired": true,
      "choices": [
       {
        "value": "Laki-laki",
        "text": "Laki-laki"
       },
       {
        "value": "Perempuan",
        "text": "Perempuan"
       }
      ]
     },
     {
      "type": "text",
      "name": "ttl",
      "title": "Tanggal Lahir",
      "valueName": "ttl",
      "isRequired": true,
      "inputType": "date",
      "autocomplete": "bday"
     },
     {
      "type": "radiogroup",
      "name": "pendidikan",
      "title": "Pendidikan Terakhir",
      "valueName": "pendidikan",
      "isRequired": true,
      "choices": [
       {
        "value": "SD/SMP/SMA",
        "text": "SD/SMP/SMA"
       },
       {
        "value": "D1/D2/D3",
        "text": "D1/D2/D3"
       },
       {
        "value": "D4/S1",
        "text": "D4/S1"
       },
       {
        "value": "Pascasarjana (S2/S3)",
        "text": "Pascasarjana (S2/S3)"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "pekerjaan",
      "title": "Apa pekerjaan Anda saat ini?",
      "valueName": "pekerjaan",
      "isRequired": true,
      "choices": [
       {
        "value": "Pelajar/Mahasiswa",
        "text": "Pelajar/Mahasiswa"
       },
       {
        "value": "Akademisi/Peneliti",
        "text": "Akademisi/Peneliti"
       },
       {
        "value": "PNS/BUMN",
        "text": "PNS/BUMN"
       },
       {
        "value": "Pegawai Swasta",
        "text": "Pegawai Swasta"
       },
       {
        "value": "Wirausaha",
        "text": "Wirausaha"
       },
       {
        "value": "Wiraswasta/Freelancer",
        "text": "Wiraswasta/Freelancer"
       },
       {
        "value": "Bapak/Ibu Rumah Tangga",
        "text": "Bapak/Ibu Rumah Tangga"
       },
       {
        "value": "Tenaga kesehatan",
        "text": "Tenaga kesehatan"
       },
       {
        "value": "Freshgraduate/Dalam Proses Pencarian Kerja",
        "text": "Freshgraduate/Dalam Proses Pencarian Kerja"
       }
      ],
      "showOtherItem": true,
      "otherText": "Lainnya"
     },
     {
      "type": "radiogroup",
      "name": "pendapatan",
      "title": {
       "id": "Rata-rata pendapatan bulanan?"
      },
      "valueName": "pendapatan",
      "isRequired": true,
      "choices": [
       {
        "value": "< Rp 1.000.000",
        "text": {
         "id": "< Rp 1.000.000"
        }
       },
       {
        "value": "Rp 1.000.001 - Rp 4.000.000",
        "text": {
         "id": "Rp 1.000.001 - Rp 4.000.000"
        }
       },
       {
        "value": "Rp 4.000.001 - Rp 7.000.000",
        "text": {
         "id": "Rp 4.000.001 - Rp 7.000.000"
        }
       },
       {
        "value": "Rp 7.000.001 - Rp 10.000.000",
        "text": {
         "id": "Rp 7.000.001 - Rp 10.000.000"
        }
       },
       {
        "value": "> Rp 10.000.000",
        "text": {
         "id": "> Rp 10.000.000"
        }
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "pengeluaran",
      "title": {
       "id": "Rata-rata pengeluaran bulanan dengan mobile banking?"
      },
      "valueName": "pengeluaran",
      "isRequired": true,
      "choices": [
       {
        "value": "< Rp 1.000.000",
        "text": {
         "id": "< Rp 1.000.000"
        }
       },
       {
        "value": "Rp 1.000.001 - Rp 4.000.000",
        "text": {
         "id": "Rp 1.000.001 - Rp 4.000.000"
        }
       },
       {
        "value": "Rp 4.000.001 - Rp 7.000.000",
        "text": {
         "id": "Rp 4.000.001 - Rp 7.000.000"
        }
       },
       {
        "value": "Rp 7.000.001 - Rp 10.000.000",
        "text": {
         "id": "Rp 7.000.001 - Rp 10.000.000"
        }
       },
       {
        "value": "> Rp 10.000.000",
        "text": {
         "id": "> Rp 10.000.000"
        }
       }
      ]
     },
     {
      "type": "text",
      "name": "postal_code",
      "title": {
       "id": "Kode Pos"
      },
      "description": {
       "id": "Kode pos kami gunakan untuk keperluan demografi responden."
      },
      "valueName": "postal_code",
      "isRequired": true,
      "inputType": "number",
      "autocomplete": "postal-code",
      "placeholder": {
       "id": "17214"
      }
     }
    ],
    "visibleIf": "{boolean_persetujuan} = true",
    "title": "Identitas"
   },
   {
    "name": "kuesioner_1",
    "elements": [
     {
      "type": "rating",
      "name": "question1",
      "title": {
       "id": "Cara menampilkan layanan yang ditawarkan menarik"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question2",
      "title": {
       "id": "Saya menyukai tampilan aplikasi mobile banking yang saya gunakan"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question3",
      "title": {
       "id": "Saya menikmati melakukan transaksi perbankan melalui aplikasi yang saya gunakan"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question4",
      "title": {
       "id": "Keluarga dan teman saya menghargai penggunaan aplikasi mobile banking"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question5",
      "title": {
       "id": "Saya merasa penggunaan aplikasi mobile banking sedang tren saat ini"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question6",
      "title": {
       "id": "Menggunakan aplikasi mobile banking memuat saya terlihat lebih profesional"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question7",
      "title": {
       "id": "Teman dan keluarga mempengaruhi saya untuk menggunakan aplikasi mobile banking"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question8",
      "title": {
       "id": "Pada Aplikasi yang saya gunakan, terdapat petunjuk atau tutorial yang mudah dipahami"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question9",
      "title": {
       "id": "Pada Aplikasi yang saya gunakan, Ikon/Gambar yang disediakan jelas dan sesuai dengan maksud dan tujuannya"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question10",
      "title": {
       "id": "Pada Aplikasi yang saya gunakan, Mudah untuk berpindah antara satu halaman ke halaman lainnya"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     }
    ],
    "visibleIf": "{boolean_persetujuan} = true",
    "title": {
     "id": "Kuesioner"
    },
    "description": {
     "id": "Pada bagian ini, Anda akan ditanyakan pendapat Anda terkait visualisasi dan fungsi dari setiap fitur yang disajikan oleh aplikasi mobile banking yang Anda gunakan. Skala: 1 = Sangat tidak setuju, 5 = Sangat setuju"
    }
   },
   {
    "name": "kuesioner_2",
    "elements": [
     {
      "type": "rating",
      "name": "question11",
      "title": {
       "id": "Pengguna yang baru pertama kali menggunakan aplikasi dapat melakukan transaksi dengan mudah tanpa memerlukan banyak bantuan"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question12",
      "title": {
       "id": "Secara keseluruhan, aplikasi mobile banking yang saya gunakan mudah digunakan"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question13",
      "title": {
       "id": "Ketika menggunakan aplikasi mobile banking, saya dapat mengontrol aktivitas sesuai pilihan saya"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question14",
      "title": {
       "id": "Saat menggunakan aplikasi mobile banking, saya merasa semuanya terkendali dan diputuskan oleh saya"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question15",
      "title": {
       "id": "Saya sangat tertarik dengan layanan dan pilihan yang diberikan saat menggunakan aplikasi mobile banking ini"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question16",
      "title": {
       "id": "Saya sangat fokus pada layanan yang diberikan saat menggunakan aplikasi mobile banking"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question17",
      "title": {
       "id": "Saat menggunakan aplikasi mobile banking, saya merasa sangat asyik dengan aktivitas yang saya lakukan"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question18",
      "title": {
       "id": "Menurut saya, pengalaman saat menggunakan aplikasi mobile banking bukan hanya transaksi online namun juga sebagai hiburan"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question19",
      "title": {
       "id": "Karakter, ikon, dan gambar yang digunakan pada aplikasi mobile banking menarik perhatian saya"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question20",
      "title": {
       "id": "Menggunakan aplikasi mobile banking ini membuat saya merasa senang karena mudah digunakan"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     }
    ],
    "visibleIf": "{boolean_persetujuan} = true",
    "title": {
     "id": "Kuesioner"
    },
    "description": {
     "id": "Pada bagian ini, Anda akan ditanyakan pendapat Anda terkait visualisasi dan fungsi dari setiap fitur yang disajikan oleh aplikasi mobile banking yang Anda gunakan. Skala: 1 = Sangat tidak setuju, 5 = Sangat setuju"
    }
   },
   {
    "name": "kuesioner_3",
    "elements": [
     {
      "type": "rating",
      "name": "question21",
      "title": {
       "id": "Secara keseluruhan, saya merasa senang dengan pengalaman menggunakan aplikasi mobile banking ini"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question22",
      "title": {
       "id": "Aplikasi mobile banking mudah digunakan"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question23",
      "title": {
       "id": "Saya puas dengan keseluruhan kinerja aplikasi mobile banking ini"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question24",
      "title": {
       "id": "Keputusan saya untuk menggunakan aplikasi mobile banking ini merupakan keputusan yang bijak"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question25",
      "title": {
       "id": "Saya berniat untuk terus menggunakan aplikasi mobile banking dari pada menghentikan penggunaannya"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question26",
      "title": {
       "id": "Saya akan merekomendasikan orang lain untuk menggunakan aplikasi mobile banking"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question27",
      "title": {
       "id": "Saya akan tetap menggunakan aplikasi mobile banking secara teratur seperti yang saya lakukan sekarang"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     },
     {
      "type": "rating",
      "name": "question28",
      "title": {
       "id": "Saya akan selalu mencoba menggunakan aplikasi mobile banking dalam kehidupan sehari-hari"
      },
      "isRequired": true,
      "minRateDescription": {
       "id": "Sangat Tidak Setuju"
      },
      "maxRateDescription": {
       "id": "Sangat Setuju"
      }
     }
    ],
    "visibleIf": "{boolean_persetujuan} = true",
    "title": {
     "id": "Kuesioner"
    },
    "description": {
     "id": "Pada bagian ini, Anda akan ditanyakan pendapat Anda terkait visualisasi dan fungsi dari setiap fitur yang disajikan oleh aplikasi mobile banking yang Anda gunakan. Skala: 1 = Sangat tidak setuju, 5 = Sangat setuju"
    }
   },
   {
    "name": "kuesioner_4",
    "elements": [
     {
      "type": "comment",
      "name": "saran_peningkatan_fitur",
      "title": {
       "id": "Apakah anda memiliki saran terkait peningkatan fitur pada aplikasi mobile banking yang Anda gunakan?"
      },
      "placeholder": {
       "id": "Masukkan saran Anda"
      }
     },
     {
      "type": "comment",
      "name": "penggunaan_mobile_banking",
      "title": {
       "id": "Apakah Anda cenderung menggunakan aplikasi mobile banking lebih sering dari pada bertransaksi secara fisik? Jika ya, mengapa Anda lebih memilih aplikasi mobile banking?"
      },
      "placeholder": {
       "id": "Masukkan pengalaman Anda"
      }
     },
     {
      "type": "comment",
      "name": "question29",
      "title": {
       "id": "Dalam situasi tertentu, apakah Anda merasa ragu untuk menggunakan aplikasi mobile banking? Jika ya, apa yang menyebabkan Anda ragu?"
      },
      "placeholder": {
       "id": "Masukkan jawaban Anda"
      }
     }
    ],
    "visibleIf": "{boolean_persetujuan} = true",
    "title": {
     "id": "Pendapat"
    },
    "description": {
     "id": "Jawaban terbaik berkesempatan mendapatkan hadiah berupa uang tunai senilai Rp100.000 untuk 5 orang yang beruntung."
    }
   },
   {
    "name": "hadiah",
    "elements": [
     {
      "type": "text",
      "name": "no_telepon",
      "title": {
       "id": "No. Telepon"
      },
      "description": {
       "id": "Masukkan nomor telepon Anda untuk berpartisipasi dalam mendapatkan hadiah uang tunai."
      },
      "valueName": "no_telepon",
      "isRequired": true,
      "inputType": "number",
      "autocomplete": "tel"
     },
     {
      "type": "text",
      "name": "no_rekening",
      "title": {
       "id": "No. Rekening"
      },
      "description": {
       "id": "No. Rekening dibutuhkan jika kami tidak dapat mengirim uang tunai melalui dompet digital."
      },
      "valueName": "no_rekening",
      "placeholder": {
       "id": "No. Rekening - Nama Bank"
      }
     },
     {
      "type": "text",
      "name": "alamat",
      "title": {
       "id": "Jalan/Nomor Rumah"
      },
      "description": {
       "id": "Raih kesempatan mendapatkan tumbler unik dari salah satu mobile banking."
      },
      "valueName": "alamat",
      "autocomplete": "street-address",
      "placeholder": {
       "id": "Jl. Kebangkitan Nasional, No. 34"
      }
     }
    ],
    "visibleIf": "{boolean_persetujuan} = true",
    "title": {
     "id": "Kesempatan Menangkan Hadiah"
    },
    "description": {
     "id": "Kami menyediakan hadiah berupa uang tunai senilai Rp100.000 untuk 5 orang yang beruntung. Anda dapat mengikutinya dengan mengisi informasi berikut."
    }
   },
   {
    "name": "finish",
    "title": {
     "id": "Terima Kasih!"
    },
    "description": {
     "id": "Terima kasih atas kontribusi Anda dalam penelitian kami! Kami sangat menghargai waktu dan kontribusi berharga Anda dalam penelitian ini. Tanggapan Anda akan membantu kami mendapatkan wawasan yang berharga tentang penggunaan aplikasi mobile banking dan berkontribusi pada pemahaman lebih lanjut dalam bidang ini. Kami juga ingin mengingatkan Anda untuk mengecek email atau WhatsApp, karena kami akan mengirimkan informasi responden terbaik melalui platform tersebut. Salam hormat, M Cahyo Priambodo (Tim Riset ACTC UCN 2023)."
    }
   }
  ],
  "showQuestionNumbers": "off",
  "checkErrorsMode": "onValueChanged",
  "startSurveyText": {
   "id": "Mulai"
  },
  "pagePrevText": {
   "id": "Sebelumnya"
  },
  "pageNextText": {
   "id": "Selanjutnya"
  },
  "completeText": {
   "id": "Submit"
  },
  "previewText": {
   "id": "Pratinjau"
  },
  "editText": {
    "id": "Ubah"
  },
  "widthMode": "responsive",
  "fitToContainer": true
  }