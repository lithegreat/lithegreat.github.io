import { ref, computed } from 'vue'
import { cvData as cvEn } from '@/data/cv'
import { cvDataZh as cvZh } from '@/data/cv_zh'

const currentLang = ref('en')

export function useLanguage() {
  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'en' ? 'zh' : 'en'
  }

  const cvData = computed(() => {
    return currentLang.value === 'en' ? cvEn : cvZh
  })

  return {
    currentLang,
    cvData,
    toggleLanguage,
  }
}
