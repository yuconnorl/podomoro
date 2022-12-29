import { storeToRefs } from 'pinia'

import { useModeStore } from '@/stores/mode'

export const timer = (time) => {
  const minutes = Math.floor(time / 60)
  const second = time % 60

  const zeroSecond = second > 10 ? second : `0${second}`

  return `${minutes}:${zeroSecond}`
}

export const countDown = (time) => {
  const mode = useModeStore()
  const { countDownTime, prompt, isTimerActive } = storeToRefs(mode)

  console.log(countDownTime.value)
  let remainTime = time
  const intervalID = setInterval(() => {
    remainTime = remainTime - 1
    console.log('sss')
  }, 1000)
}
