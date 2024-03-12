import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'

export default defineComponent({
  name: 'KButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    console.log(props, '====')
    const { type } = toRefs(props)
    return () => {
      return (
        <button class={`k-btn k-btn--${type.value}`}>
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  }
})
