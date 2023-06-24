# Accordion

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

| Attribute | Default      | Type        |
| --------- | ------------ | ----------- |
| open      | True         | Boolean     |
| name      | Empty string | String      |
| title     | Empty string | String      |
| icon      | Empty        | JSX.Element |
