# The modal component

## How to use?

### JSX

```
const [openModal, setOpenModal] = useState(false);

const handleOpenModal = () => {
  setOpenModal(true);
};

const handleCloseModal = () => {
  setOpenModal(false);
};

const handleSave = () => {
  // do something
}

const renderConfirmButtons = () => (
  <div className='flex items-center gap-4'>
    <button onClick={handleSave} className='btn btn-magic min-w-[7rem] p-3' type='button'>
      Save
    </button>
  </div>
);

<Modal
  modalOpen={openModal}
  onClose={handleCloseModal}
  modalConfirmButtons={renderConfirmButtons()}
  titleHeader='Modal Header'
>
  <p className='text-[1.4rem]'>Modal content</p>
</Modal>
```

---

### Attributes

| Attribute      | Default | Type    | Accepted Values |
| -------------- | ------- | ------- | --------------- |
| modalOpen      | True    | Boolean | True/False      |
| titleHeader    | -       | String  | -               |
| modalFooter    | True    | Boolean | True/False      |
| modalHeader    | True    | Boolean | True/False      |
| modalCloseIcon | True    | Boolean | True/False      |
| fullScreen     | False   | Boolean | True/False      |
| animate        | zoom    | String  | zoom/fade       |

---

### Modal Header Attributes

| Attribute  | Default | Type    | Accepted Values  |
| ---------- | ------- | ------- | ---------------- |
| title      | -       | String  | String/ReactNode |
| show       | True    | Boolean | True/False       |
| iconHeader | True    | Boolean | True/False       |

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
