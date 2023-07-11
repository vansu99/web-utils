# Accordion

The Accordion component is a versatile and customizable way to display collapsible content sections. It provides a user-friendly interface for organizing and presenting the information. By using the provided attributes and examples, you can easily incorporate the Accordion component into your React application.

## How to use?

### JSX

```
<Accordion open={visible} onClick={setVisible}>
  <Accordion.List name='ratio' title='Ratio'>
    <Accordion.Item>
      <CustomCompt />
    </Accordion.Item>
  </Accordion.List>
  <Accordion.List name='topic' title='Topics'>
    <Accordion.Item>
      <CustomCompt />
    </Accordion.Item>
  </Accordion.List>
</Accordion>
```

### Attributes

| Attribute | Default      | Type      | Description                                                 |
| --------- | ------------ | --------- | ----------------------------------------------------------- |
| open      | True         | Boolean   | Specifies whether the accordion is initially open or closed |
| name      | Empty string | String    | An optional name or identifier for the accordion            |
| title     | Empty string | String    | The title or heading for the accordion section              |
| icon      | Empty        | ReactNode | An optional icon to display alongside the title             |
