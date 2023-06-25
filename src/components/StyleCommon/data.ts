type DataClipboardType = {
  name: string;
  title: string;
  code: string;
};

const dataClipboard: DataClipboardType[] = [
  {
    name: 'container',
    title: 'Container',
    code: '<div class="w-full max-w-[116rem] mx-auto px-[1.6rem]"></div>',
  },
  {
    name: 'text_gradient',
    title: 'Text gradient color',
    code: `
      .text-gradient {
        color: transparent;
        background-image: linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6);
        background-clip: text;
        -webkit-background-clip: text;
      }
    `,
  },
  {
    name: 'text_truncation',
    title: 'Text truncation',
    code: `
      .text-truncate {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
  },
  {
    name: 'multiple_text_truncation',
    title: 'Multiple Line Text Truncation',
    code: `
      .text-truncate {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `,
  },
  {
    name: 'card_vertical',
    title: 'Vertical card',
    code: `
      <a href="#" class="card__item">
        <div class="card__thumbnail">
          <figure class="card__image">
            <img src="https://images.pexels.com/photos/17211591/pexels-photo-17211591/free-photo-of-bicycle-parked-under-building-painted-blue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" loading="lazy">
          </figure>
        </div>
        <div class="card__desc">
          <h4>Lorem ipsum dolor sit amet consectetur</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi atque ab exercitationem doloremque architecto deleniti vitae odit animi possimus, quidem, obcaecati ea veniam corrupti quos minima nam facilis suscipit rem!</p>
        </div>
      </a>

      .card__item {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        overflow: hidden;
        cursor: pointer;
        border-radius: 6px;
        border: 1px solid grey;
      }

      .card__thumbnail {
        flex-shrink: 0;
        width: 100%;
        height: auto;
        text-align: center;
        position: relative;
      }

      .card__image {
        position: relative;
        width: 100%;
        padding-bottom: 100%;
      }

      .card__image img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .card__desc {
        width: 100%;
        padding: 8px 12px;
      }

      .card__desc h4 {
        color: #000;
        font-size: 18px;
        margin-bottom: 12px;
      }

      .card__desc p {
        font-size: 14px;
        color: #000;
      }
    `,
  },
  {
    name: 'card_horizontal',
    title: 'Horizontal card',
    code: `
      <a href="#" class="card__item">
        <figure class="card__image">
          <img src="https://e0.365dm.com/23/06/768x432/skysports-man-utd-fixtures_6186976.jpg?20230614104325" alt="" loading="lazy">
        </figure>
        <div class="card__desc">
          <h4>Lorem ipsum dolor sit amet consectetur</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi atque ab exercitationem doloremque architecto deleniti vitae odit animi possimus, quidem, obcaecati ea veniam corrupti quos minima nam facilis suscipit rem!</p>
        </div>
      </a>

      img {
        max-width: 100%;
        height: auto;
      }

      .card__item {
        display: flex;
        overflow: hidden;
      }

      .card__image {
        position: relative;
        overflow: hidden;
        width: 300px;
        flex-shrink: 0;
        border-radius: 7px;
      }

      .card__image::before {
        content: "";
        display: block;
        padding-top: 56.25%; // 16:9
      }

      .card__image img {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center center;
        background-size: cover;
        z-index: 1;
      }

      .card__desc {
        flex: 1;
        width: 100%;
        margin-left: 30px;
      }

      .card__desc h4 {
        font-size: 20px;
        color: #000;
        font-weight: 600;
        margin-bottom: 12px;
      }

      .card__desc p {
        display: block;
        font-size: 14px;
        color: #000;
        line-height: 1.4;
      }

      @media screen and (max-width: 639px) {
        .card__item {
          flex-direction: column;
        }

        .card__image {
          width: 100%;
        }

        .card__desc {
          margin-left: 0;
          margin-top: 20px;
        }

        .card__desc h4 {
          margin-bottom: 6px;
        }
      }
    `,
  },
];

export default dataClipboard;
