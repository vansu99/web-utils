# The modal component

## How to use?

### JSX

```ts
const [openModal, setOpenModal] = useState(false);

const handleOpenModal = () => {
  setOpenModal(true);
};

const handleCloseModal = () => {
  setOpenModal(false);
};

const handleSave = () => {
  // do something
};

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
</Modal>;
```

---

### Attributes

| Attribute           | Default | Type      | Accepted Values | Description                                                       |
| ------------------- | ------- | --------- | --------------- | ----------------------------------------------------------------- |
| modalOpen           | True    | Boolean   | True/False      | Set the visibility of the modal                                   |
| titleHeader         | -       | String    | -               | The header title of the modal                                     |
| classNames          | -       | String    | -               | Additional CSS classes to customize the modal's appearance        |
| modalFooter         | True    | Boolean   | True/False      | Specifies whether the modal footer is displayed or not            |
| modalHeader         | True    | Boolean   | True/False      | Specifies whether the modal header is displayed or not            |
| modalCloseIcon      | True    | Boolean   | True/False      | Specifies whether the close icon of the modal is displayed or not |
| modalConfirmButtons | -       | ReactNode | -               | Custom confirmation button(s) in the modal footer                 |
| fullScreen          | False   | Boolean   | True/False      | Specifies whether the modal occupies the entire screen            |
| animate             | zoom    | String    | zoom/fade       | The display animation of the modal                                |
| preventClickOutside | False   | Boolean   | True/False      | Specifies whether clicking outside the modal closes it or not     |

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

| Name    | Description                   | Type     | Description                        |
| ------- | ----------------------------- | -------- | ---------------------------------- |
| onClose | triggers when the modal close | Function | Triggered when the modal is closed |
