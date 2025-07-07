<template>
    <div class="courses-dropdown-wrapper">
        <div class="main-menu d-none d-xl-block">
            <nav>
                <ul>
                    <li class="menu-item-has-children has-droupdown courses-mega-menu">
                        <a href="javascript:void(0)">{{ $t('courses') }}</a>
                        <ul class="sub-menu mega-menu">
                            <li class="mega-menu-container">
                                <div class="row">
                                    <div 
                                        v-for="section in coursesData" 
                                        :key="section.id"
                                        class="col-lg-3 col-md-6 mb-4"
                                    >
                                        <div class="mega-menu-section">
                                            <h6 class="mega-menu-title">
                                                {{ getCurrentLangText(section) }}
                                            </h6>
                                            
                                            <!-- Direct courses (no departments) -->
                                            <ul v-if="section.courses && section.courses.length > 0" class="mega-menu-list">
                                                <li 
                                                    v-for="course in section.courses" 
                                                    :key="`course-${course.id}`"
                                                >
                                                    <NuxtLink :to="`/course/${course.id}`">
                                                        {{ getCurrentLangText(course) }}
                                                    </NuxtLink>
                                                </li>
                                            </ul>
                                            
                                            <!-- Departments with courses -->
                                            <div v-if="section.departments && section.departments.length > 0">
                                                <div 
                                                    v-for="department in section.departments" 
                                                    :key="`dept-${department.id}`"
                                                    class="mega-menu-department mb-3"
                                                >
                                                    <h7 class="department-title">
                                                        {{ getCurrentLangText(department) }}
                                                    </h7>
                                                    <ul class="mega-menu-list">
                                                        <li 
                                                            v-for="course in department.courses" 
                                                            :key="`dept-course-${course.id}`"
                                                        >
                                                            <NuxtLink :to="`/course/${course.id}`">
                                                                {{ getCurrentLangText(course) }}
                                                            </NuxtLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
    name: 'CoursesDropdown',
    
    setup() {
        const { locale } = useI18n();
        return {
            locale
        };
    },
    
    data() {
        return {
            coursesData: [
                {
                    "id": 1,
                    "en": "Quran Classes",
                    "ar": "دورات القرآن",
                    "departments": [
                        {
                            "id": 1,
                            "en": "Adults",
                            "ar": "البالغين",
                            "courses": [
                                {
                                    "id": 1,
                                    "en": "Learn Quran With Tajweed",
                                    "ar": "تعلم القرآن بالتجويد"
                                },
                                {
                                    "id": 2,
                                    "en": "Quran Recitation Course",
                                    "ar": "دورة تلاوة القرآن"
                                },
                                {
                                    "id": 3,
                                    "en": "Quran Reading Course",
                                    "ar": "دورة قراءة القرآن"
                                },
                                {
                                    "id": 4,
                                    "en": "Quran Classes For Beginners",
                                    "ar": "دورات القرآن للمبتدئين"
                                },
                                {
                                    "id": 5,
                                    "en": "Weekend Quran Classes",
                                    "ar": "دورات القرآن في عطلة نهاية الأسبوع"
                                },
                                {
                                    "id": 6,
                                    "en": "Sunni Quran Classes",
                                    "ar": "دورات القرآن السنية"
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "en": "Sisters",
                            "ar": "الأخوات",
                            "courses": [
                                {
                                    "id": 7,
                                    "en": "Learn Quran With Tajweed",
                                    "ar": "تعلم القرآن بالتجويد"
                                },
                                {
                                    "id": 8,
                                    "en": "Quran Recitation Course",
                                    "ar": "دورة تلاوة القرآن"
                                },
                                {
                                    "id": 9,
                                    "en": "Quran Reading Course",
                                    "ar": "دورة قراءة القرآن"
                                },
                                {
                                    "id": 10,
                                    "en": "Quran Classes For Beginners",
                                    "ar": "دورات القرآن للمبتدئين"
                                },
                                {
                                    "id": 11,
                                    "en": "Weekend Quran Classes",
                                    "ar": "دورات القرآن في عطلة نهاية الأسبوع"
                                },
                                {
                                    "id": 12,
                                    "en": "Sunni Quran Classes",
                                    "ar": "دورات القرآن السنية"
                                }
                            ]
                        },
                        {
                            "id": 3,
                            "en": "Kids",
                            "ar": "الأطفال",
                            "courses": [
                                {
                                    "id": 13,
                                    "en": "Learn Quran With Tajweed",
                                    "ar": "تعلم القرآن بالتجويد"
                                },
                                {
                                    "id": 14,
                                    "en": "Quran Recitation Course",
                                    "ar": "دورة تلاوة القرآن"
                                },
                                {
                                    "id": 15,
                                    "en": "Quran Reading Course",
                                    "ar": "دورة قراءة القرآن"
                                },
                                {
                                    "id": 16,
                                    "en": "Quran Classes For Beginners",
                                    "ar": "دورات القرآن للمبتدئين"
                                },
                                {
                                    "id": 17,
                                    "en": "Weekend Quran Classes",
                                    "ar": "دورات القرآن في عطلة نهاية الأسبوع"
                                },
                                {
                                    "id": 18,
                                    "en": "Sunni Quran Classes",
                                    "ar": "دورات القرآن السنية"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 2,
                    "en": "Quran Memorization",
                    "ar": "حفظ القرآن",
                    "courses": [
                        {
                            "id": 19,
                            "en": "Hifz Quran Course",
                            "ar": "دورة حفظ القرآن"
                        },
                        {
                            "id": 20,
                            "en": "Hifz class for beginners",
                            "ar": "دورة حفظ للمبتدئين"
                        },
                        {
                            "id": 21,
                            "en": "Intensive Hifz Course",
                            "ar": "دورة حفظ مكثفة"
                        },
                        {
                            "id": 22,
                            "en": "Weekend Hifz Classes",
                            "ar": "دورات حفظ في عطلة نهاية الأسبوع"
                        }
                    ]
                },
                {
                    "id": 3,
                    "en": "Tajweed",
                    "ar": "التجويد",
                    "departments": [
                        {
                            "id": 4,
                            "en": "Beginners",
                            "ar": "المبتدئين",
                            "courses": [
                                {
                                    "id": 23,
                                    "en": "The Noorani Qaida",
                                    "ar": "القاعدة النورانية"
                                },
                                {
                                    "id": 24,
                                    "en": "Second teacher",
                                    "ar": "معلم ثان"
                                },
                                {
                                    "id": 25,
                                    "en": "Simplified Judgment Course",
                                    "ar": "دورة احكام مبسطة"
                                }
                            ]
                        },
                        {
                            "id": 5,
                            "en": "Advanced Level",
                            "ar": "مستوى متقدم",
                            "courses": [
                                {
                                    "id": 26,
                                    "en": "(Useful Curriculum) book course",
                                    "ar": "دورة كتاب (المنهج المفيد)"
                                },
                                {
                                    "id": 27,
                                    "en": "Illustrated Tajweed Course",
                                    "ar": "دورة التجويد المصور"
                                }
                            ]
                        }
                    ],
                    "courses": [
                        {
                            "id": 28,
                            "en": "Correction of pronunciation course",
                            "ar": "دورة تصحيح المخارج"
                        },
                        {
                            "id": 29,
                            "en": "A course in drawing the Holy Quran",
                            "ar": "دورة فى رسم المصحف"
                        },
                        {
                            "id": 30,
                            "en": "The Ten Readings Course",
                            "ar": "دورة القراءات العشرة"
                        }
                    ]
                },
                {
                    "id": 4,
                    "en": "Islamic Studies",
                    "ar": "الدراسات الإسلامية",
                    "departments": [
                        {
                            "id": 6,
                            "en": "Kids",
                            "ar": "اطفال",
                            "courses": [
                                {
                                    "id": 31,
                                    "en": "Islamic Classes For Beginners",
                                    "ar": "دورات إسلامية للمبتدئين"
                                },
                                {
                                    "id": 32,
                                    "en": "New Muslim Convets Course",
                                    "ar": "دورة للمسلمين الجدد"
                                },
                                {
                                    "id": 33,
                                    "en": "Tafseer Quraan Course",
                                    "ar": "دورة تفسير القرآن"
                                },
                                {
                                    "id": 34,
                                    "en": "Fiqh Course",
                                    "ar": "دورة الفقه"
                                },
                                {
                                    "id": 35,
                                    "en": "Hadith Course",
                                    "ar": "دورة الحديث"
                                },
                                {
                                    "id": 36,
                                    "en": "Aqeedah Course",
                                    "ar": "دورة العقيدة"
                                }
                            ]
                        },
                        {
                            "id": 7,
                            "en": "Adults",
                            "ar": "بالغين",
                            "courses": [
                                {
                                    "id": 37,
                                    "en": "Islamic Classes For Beginners",
                                    "ar": "دورات إسلامية للمبتدئين"
                                },
                                {
                                    "id": 38,
                                    "en": "New Muslim Convets Course",
                                    "ar": "دورة للمسلمين الجدد"
                                },
                                {
                                    "id": 39,
                                    "en": "Tafseer Quraan Course",
                                    "ar": "دورة تفسير القرآن"
                                },
                                {
                                    "id": 40,
                                    "en": "Fiqh Course",
                                    "ar": "دورة الفقه"
                                },
                                {
                                    "id": 41,
                                    "en": "Hadith Course",
                                    "ar": "دورة الحديث"
                                },
                                {
                                    "id": 42,
                                    "en": "Aqeedah Course",
                                    "ar": "دورة العقيدة"
                                }
                            ]
                        },
                        {
                            "id": 8,
                            "en": "Sisters",
                            "ar": "الأخوات",
                            "courses": [
                                {
                                    "id": 43,
                                    "en": "Islamic Classes For Beginners",
                                    "ar": "دورات إسلامية للمبتدئين"
                                },
                                {
                                    "id": 44,
                                    "en": "New Muslim Convets Course",
                                    "ar": "دورة للمسلمين الجدد"
                                },
                                {
                                    "id": 45,
                                    "en": "Tafseer Quraan Course",
                                    "ar": "دورة تفسير القرآن"
                                },
                                {
                                    "id": 46,
                                    "en": "Fiqh Course",
                                    "ar": "دورة الفقه"
                                },
                                {
                                    "id": 47,
                                    "en": "Hadith Course",
                                    "ar": "دورة الحديث"
                                },
                                {
                                    "id": 48,
                                    "en": "Aqeedah Course",
                                    "ar": "دورة العقيدة"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 5,
                    "en": "Arabic Language",
                    "ar": "اللغة العربية",
                    "departments": [
                        {
                            "id": 9,
                            "en": "Language Study (Skills/Communication)",
                            "ar": "دراسة اللغة (المهارات/التواصل)",
                            "courses": [
                                {
                                    "id": 49,
                                    "en": "Arabic Between your hands",
                                    "ar": "العربية بين يديك"
                                }
                            ]
                        },
                        {
                            "id": 10,
                            "en": "Practical practice",
                            "ar": "الممارسة العملية",
                            "courses": [
                                {
                                    "id": 50,
                                    "en": "Listening and Speaking Skills Practice Course",
                                    "ar": "دورة ممارسة مهاراتي الاستماع والتحدث"
                                },
                                {
                                    "id": 51,
                                    "en": "Reading and Writing Skills Practice Course",
                                    "ar": "دورة ممارسة مهارات القراءة والكتابة"
                                }
                            ]
                        },
                        {
                            "id": 11,
                            "en": "Study of grammar",
                            "ar": "دراسة القواعد",
                            "courses": [
                                {
                                    "id": 52,
                                    "en": "Madina Book Course",
                                    "ar": "دورة كتاب المدينة"
                                },
                                {
                                    "id": 53,
                                    "en": "Arabic Grammar for Beginners",
                                    "ar": "دورة النحو للمبتدئين"
                                },
                                {
                                    "id": 54,
                                    "en": "Arabic Grammar Advanced Level",
                                    "ar": "دورة النحو مستوى متقدم"
                                }
                            ]
                        }
                    ],
                    "courses": [
                        {
                            "id": 55,
                            "en": "Intensive courses, integrated study program",
                            "ar": "دورات مكثفة برنامج دراسى متكامل"
                        }
                    ]
                }
            ]
        };
    },
    
    methods: {
        getCurrentLangText(item) {
            const currentLocale = this.locale.value || 'en';
            return item[currentLocale] || item.en;
        }
    }
};
</script>

<style scoped>
.courses-dropdown-wrapper {
    position: relative;
}

.courses-mega-menu .sub-menu.mega-menu {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100vw;
    max-width: 1200px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.3s ease;
    z-index: 999;
    padding: 30px;
}

.courses-mega-menu:hover .sub-menu.mega-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.mega-menu-container {
    width: 100%;
}

.mega-menu-section {
    padding: 0 15px;
}

.mega-menu-title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
    padding-bottom: 8px;
    border-bottom: 2px solid #007bff;
}

.department-title {
    font-size: 14px;
    font-weight: 500;
    color: #666;
    margin-bottom: 10px;
    display: block;
    padding-left: 10px;
}

.mega-menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.mega-menu-list li {
    margin-bottom: 8px;
    padding-left: 0;
}

.mega-menu-list li a {
    display: block;
    padding: 8px 12px;
    color: #555;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
    font-size: 14px;
    line-height: 1.4;
}

.mega-menu-list li a:hover {
    background-color: #f8f9fa;
    color: #007bff;
    transform: translateX(5px);
}

.mega-menu-department {
    border-left: 3px solid #e9ecef;
    padding-left: 15px;
    margin-bottom: 20px;
}

.mega-menu-department:last-child {
    margin-bottom: 0;
}

/* RTL Support */
[dir="rtl"] .courses-mega-menu .sub-menu.mega-menu {
    right: 0;
    left: auto;
}

[dir="rtl"] .mega-menu-list li a:hover {
    transform: translateX(-5px);
}

[dir="rtl"] .mega-menu-department {
    border-left: none;
    border-right: 3px solid #e9ecef;
    padding-left: 0;
    padding-right: 15px;
}

[dir="rtl"] .department-title {
    padding-left: 0;
    padding-right: 10px;
}

/* Responsive Design */
@media (max-width: 1199px) {
    .courses-mega-menu .sub-menu.mega-menu {
        max-width: 100vw;
        left: -50px;
    }
}

@media (max-width: 767px) {
    .courses-mega-menu .sub-menu.mega-menu {
        position: static;
        width: 100%;
        max-width: none;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        border: none;
        padding: 15px;
    }
    
    .mega-menu-section {
        padding: 0;
        margin-bottom: 20px;
    }
}
</style>