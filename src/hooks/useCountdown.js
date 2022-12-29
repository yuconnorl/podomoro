import { ref } from 'vue'

import { useModeStore } from '@/stores/mode'

const useCountdown = () => {
  const mode = useModeStore()
  const localSecond = ref(mode.second)
  const intervalID = ref('')

  // count down start
  const startCountdown = () => {
    intervalID.value = setInterval(() => {
      console.log(localSecond.value)
      localSecond.value = localSecond.value - 1
    }, 1000)
  }

  // count down stop
  const stopCountdown = () => {
    clearInterval(intervalID.value)
    localSecond.value = mode.second
  }

  return {
    localSecond,
    startCountdown,
    stopCountdown,
  }
}

export default useCountdown
