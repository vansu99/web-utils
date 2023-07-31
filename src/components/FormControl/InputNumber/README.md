# Input number component

## Prerequisites

- Install tailwindCSS

## How to use?

```ts
const [quantity, setQuantity] = useState(1);

const onChangeValue = (value) => {
  // do something
};

<InputNumber name='quantity' id='quantity' value={quantity} onChange={onChangeValue} placeholder='Enter quantity' />;
```

## Input number attributes

| Name             | Default | Type    | Accepted Values |
| ---------------- | ------- | ------- | --------------- |
| id               | -       | String  | -               |
| name             | -       | String  | -               |
| focus            | False   | Boolean | True/False      |
| rounded          | True    | Boolean | True/False      |
| placeholder      | -       | String  | -               |
| helperText       | -       | String  | -               |
| customClassInput | -       | String  | -               |
| error            | False   | Boolean | True/False      |
| errorText        | -       | String  | -               |

## Input number events

| Name          | Description                          | Type     |
| ------------- | ------------------------------------ | -------- |
| onChangeInput | triggers when the Input value change | Function |

## Thank and enjoy
