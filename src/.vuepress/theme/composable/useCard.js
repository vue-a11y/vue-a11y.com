import { ref } from '@vue/composition-api'

export default function useCard () {
  const up = ref(null)
  const down = ref(null)
  const wrapper = ref(null)
  const prevent = ref(null)

  function isRightClick (buttons) {
    return buttons === 2
  }

  function containsTarget (el, target) {
    return el.contains(target)
  }

  function preventClick (target) {
    if (!prevent.value) return
    if (Array.isArray(prevent.value)) return prevent.value.some(ref => ref && containsTarget(ref.$el, target))
    return containsTarget(prevent.value.$el, target)
  }

  function addCardElement (el) {
    wrapper.value = el
  }

  function addPreventElements (els) {
    prevent.value = els
  }

  function onMouseEvent ({ type, buttons, target }) {
    if (isRightClick(buttons) || preventClick(target)) return
    type === 'mousedown' ? onMouseDown() : onMouseUp()
  }

  function onMouseUp () {
    up.value = +new Date()
    if ((up.value - down.value) < 200) wrapper.value.$el.click()
  }

  function onMouseDown () {
    down.value = +new Date()
  }

  return {
    onMouseEvent,
    addCardElement,
    addPreventElements
  }
}
