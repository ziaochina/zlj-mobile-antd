
zlj-mobile-antd application for registering the antd-mobile component.

## Usage
Your application can use antd mobile components by add zlj-mboile-antd dependency.

1. Add dependency
```bash
$ maka add zlj-mobile-antd
```

2. Modify the view
```javascript
const view = {
    component: 'div',
    children: [{
        component: 'antdMobile.Button',
        children: 'submit'
    }]
}
```

3. Modify the index.html
```html
<script>
    window.main = function (maka) {
        maka.load(['zlj-mobile-antd']).then(()=>{
            maka.render('yourApp','app')
        })
    }
<script>
```

## Download and run

1. Download
2. Decompress
3. Enter decompress directory
4. Run
```bash
$ yarn start
```

## License

MIT

