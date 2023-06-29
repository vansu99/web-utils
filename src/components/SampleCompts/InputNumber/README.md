# Input number component

## Prerequisites

- Install tailwindCSS

## How to use?

```
const [quantity, setQuantity] = useState(1)

const onChangeValue = value => {
  // do something
}

<InputNumber
  name="quantity"
  id="quantity"
  value={quantity}
  onChange={onChangeValue}
  placeholder="Enter quantity"
/>
```

## Input number attributes

| Name             | Default | Type    | Accepted Values |
| ---------------- | ------- | ------- | --------------- |
| id               | -       | String  | -               |
| name             | -       | String  | -               |
| min              | 0       | Number  | -               |
| max              | -       | Number  | -               |
| focus            | False   | Boolean | True/False      |
| rounded          | 4       | Number  | -               |
| placeholder      | -       | String  | -               |
| helperText       | -       | String  | -               |
| customClassInput | -       | String  | -               |

## Input number events

| Name          | Description                          | Type     |
| ------------- | ------------------------------------ | -------- |
| onChangeInput | triggers when the Input value change | Function |

## Thank and enjoy
