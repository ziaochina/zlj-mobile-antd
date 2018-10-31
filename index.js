import { actionMixin, registerComponent } from 'maka'
import pkgJson from './package.json'
import * as components from './component'
import './style.less'

const name = pkgJson.name

registerComponent('antdMobile', components)

const view = {
    component: 'div',
    style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 'auto',
        width: 300,
        height: 200
    },
    children: [{
        component: 'h1',
        children: 'ant design mobile component'
    }, {
        component: 'antdMobile.Button',
        type: 'primary',
        children: 'Button'
    }]
}

const state = { data: {} }

@actionMixin('base')
class action { }

export {
    name,
    view,
    state,
    action
}