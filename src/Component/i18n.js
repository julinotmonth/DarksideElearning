import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {
            "courses": "My Courses",
            "change_language": "Change Language",
            "dashboard" : "Dashboard",
            "profile" : "Profile",
            "grades" : "Grades",
            "messages" : "Messages",
            "preferences" : "Preferences",
            "logout" : "Log out",
            "language" : "English (en)",
            "formspada" : "Form Registrasi Spada Indonesia",
            "deskripsi_1" : "Your email account",
            "deskripsi_2" : "not registered yet",
            "deskripsi_3" : "Do you want to register?? It is recommended that your email registered with this LMS is the same as the email you use at Spada Indonesia. If the email in this LMS does not match your email, you can",
            "deskripsi_4" : "change it here.",
            "deskripsi_5" : "Spada Indonesia.",
            "deskripsi_6" : "Contact the LMS administrator if you experience difficulties",
            "firstname" : "First Name",
            "lastname" : "Last Name",
            "email" : "Email",
            "daftaras" : "Register As",
            "nim" : "NIM",
            "programs" : "Study Program",
            "regspada" : "REGISTER TO SPADA INDONESIA",
            "enrolcode" : "Enrollment Code",
            "enroll" : "enroll",
            "calendar" : "Calendar",
            "badges" : "Badges",
            "allcourses" : "All courses"
          }
        },
        id: {
          translation: {
            "courses": "Kursus Saya",
            "change_language": "Ganti Bahasa",
            "dashboard" : "Dasbor",
            "profile" : "Profil",
            "grades" : "Nilai",
            "messages" : "Pesan",
            "preferences" : "Preferensi",
            "logout" : "Keluar",
            "language" : "Indonesian (id)",
            "formspada" : "Formulir Registrasi Spada Indonesia",
            "deskripsi_1" : "Akun email anda",
            "deskripsi_2" : "belum terdaftar di",
            "deskripsi_3" : "Apakah anda ingin mendaftar?? Disarankan email anda yang terdaftar di LMS ini sama dengan email yang anda gunakan di Spada Indonesia. Bila email di LMS ini tidak sesuai dengan email anda, anda bisa",
            "deskripsi_4" : "mengubahnya di sini.",
            "deskripsi_5" : "Spada Indonesia.",
            "deskripsi_6" : "Hubungi adminstrator LMS bila mengalami kesulitan",
            "firstname" : "Nama Depan",
            "lastname" : "Nama Akhir",
            "email" : "Surel",
            "daftaras" : "Mendaftar Sebagai",
            "nim" : "NIM",
            "programs" : "Program Studi",
            "regspada" : "DAFTAR KE SPADA INDONESIA",
            "enrolcode" : "Kode Pendaftaran",
            "enroll" : "Mendaftar",
            "calendar" : "Kalendar",
            "badges" : "lencana",
            "allcourses" : "Semua Kursus"
          }
        },
        ar: {
          translation: {
            "courses": "دوراتي",
            "change_language": "تغيير اللغة",
            "dashboard" : "لوحة القيادة",
            "profile" : "حساب تعريفي",
            "grades" : "درجات",
            "messages" : "رسائل",
            "preferences" : "التفضيلات",
            "logout" : "تسجيل خروج",
            "language" : "عربي (ar)",
            "formspada" : "استمارة التسجيل في سبادا إندونيسيا",
            "deskripsi_1" : "حساب البريد الإلكتروني الخاص بك",
            "deskripsi_2" : "لم يتم تسجيلة بعد",
            "deskripsi_3" : "هل ترغب في التسجيل؟؟ من المستحسن أن يكون بريدك الإلكتروني المسجل في نظام إدارة التعلم هذا هو نفس البريد الإلكتروني الذي تستخدمه في Spada Indonesia. إذا كان البريد الإلكتروني الموجود في LMS هذا لا يتطابق مع بريدك الإلكتروني، فيمكنك ذلك",
            "deskripsi_4" : "تغييره هنا.",
            "deskripsi_5" : "Spada Indonesia.",
            "deskripsi_6" : "اتصل بمسؤول LMS إذا واجهت صعوبات",
            "firstname" : "الاسم الأول",
            "lastname" : "اسم العائلة",
            "email" : "بريد إلكتروني",
            "daftaras" : "سجل ك",
            "nim" : "نيم",
            "programs" : "برنامج الدراسة",
            "regspada" : "قم بالتسجيل في سبادا إندونيسيا",
            "enrolcode" : "رمز التسجيل",
            "enroll" : "يتسجل، يلتحق",
            "calendar" : "تقويم",
            "badges" : "شارات",
            "allcourses" : "جميع الدورات"
          }
        }
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false
      }
    });
