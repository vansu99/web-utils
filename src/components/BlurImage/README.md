# The blur image component

## How to use?

### JSX

```
import BlurImage from '@/components/BlurImage';
import { placeholderBlurhash } from '@/helpers';

<figure className='group relative mx-auto aspect-video h-full w-full overflow-hidden rounded-2xl'>
  <BlurImage
    src={
      topic.imageURL ??
      'https://images.pexels.com/photos/707571/pexels-photo-707571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
    className='h-full w-full object-cover object-center group-hover:scale-105 group-hover:duration-300'
    placeholder='blur'
    width={0}
    height={0}
    sizes='100vw'
    blurDataURL={placeholderBlurhash}
    alt={topic.title ?? 'demo image'}
  />
</figure>
```

---

### Attributes

| Attribute | Default | Type   | Accepted Values | Description                                                |
| --------- | ------- | ------ | --------------- | ---------------------------------------------------------- |
| className | -       | String | -               | Additional CSS classes to customize the modal's appearance |
