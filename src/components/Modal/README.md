# The modal component

## How to use?

### JSX

```
<Modal modalOpen={openModal} onClose={handleCloseModal} titleHeader='Modal Header'>
  <p className='text-[1.4rem]'>Modal content</p>
</Modal>
```

---

### Attributes

| Attribute            | Default | Type    | Accepted Values |
| -------------------- | ------- | ------- | --------------- |
| modalOpen            | True    | Boolean | True/False      |
| titleHeader          | -       | String  | -               |
| modalFooter          | True    | Boolean | True/False      |
| modalHeader          | True    | Boolean | True/False      |
| modalCloseIcon       | True    | Boolean | True/False      |
| modalBackgroundColor | White   | String  | -               |

---

### Modal Header Attributes

| Attribute | Default | Type    | Accepted Values  |
| --------- | ------- | ------- | ---------------- |
| title     | -       | String  | String/ReactNode |
| show      | True    | Boolean | True/False       |

---

### Modal Footer Attributes

| Attribute    | Default | Type    | Accepted Values  |
| ------------ | ------- | ------- | ---------------- |
| title        | -       | String  | String/ReactNode |
| show         | True    | Boolean | True/False       |
| hideCloseBtn | False   | Boolean | True/False       |
| children     | False   | Boolean | ReactNode        |

---

### Events

| Name    | Description                   | Type     |
| ------- | ----------------------------- | -------- |
| onClose | triggers when the modal close | Function |
