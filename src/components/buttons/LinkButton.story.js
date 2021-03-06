import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import LinkButton from './LinkButton.vue'

storiesOf('Link Button', module)
    .add('Basic Example', () => {
        return {
            components: { LinkButton },
            template: '<LinkButton textColor="text-black" text="Click me" href="/interstella"/>'
        }
    })