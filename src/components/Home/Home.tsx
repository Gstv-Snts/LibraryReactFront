import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Main from '../Main';
import Header from '../Header';
import { ReactComponent as Logo } from '../../images/CirclePlus.svg';
import { ReactComponent as Book } from '../../images/Book.svg';
import { ReactComponent as Pending } from '../../images/PendingAction.svg';

const data = {
  books: [
    {
      tittle: 'Mais Esperto que o Diabo',
      author: 'Napoleon Hill',
      genre: 'Autoajuda',
      status: {
        isActive: false,
        description: 'desativado porque estragou',
      },
      image: './assets/livro01.png',
      systemEntryDate: '02/01/2020',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [
        {
          studentName: 'Gustavo Kunde',
          class: 'T312',
          withdrawalDate: '29/05/2022',
          deliveryDate: '19/06/2022',
        },
        {
          studentName: 'Douglas Miller',
          class: 'T127',
          withdrawalDate: '25/06/2022',
          deliveryDate: '12/07/2022',
        },
      ],
    },
    {
      tittle: 'Hereges de Duna',
      author: 'Frank Herbert',
      genre: 'Ficção Cientifica',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro02.png',
      systemEntryDate: '02/01/2020',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'A revolução dos bichos',
      author: 'George Orwell',
      genre: 'Ficção Cientifica',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro03.png',
      systemEntryDate: '04/12/2019',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'O homem mais rico da Babilônia',
      author: 'George S Clason',
      genre: 'Historia',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro04.png',
      systemEntryDate: '06/12/2004',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'Pai Rico, Pai Pobre',
      author: 'Robert T. Kiyosaki',
      genre: 'Finanças',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro05.png',
      systemEntryDate: '02/04/2018',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'Trilogia da Fundação - Deluxe',
      author: 'Isaac Asimov',
      genre: 'Ficção Cientifica',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro06.png',
      systemEntryDate: '08/04/2019',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'Sapiens',
      author: 'Yuval Noah Harari',
      genre: 'Historia',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro07.png',
      systemEntryDate: '01/07/2021',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'Os segredos da mente milionária',
      author: 'T. Harv Eker',
      genre: 'Finanças',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro08.png',
      systemEntryDate: '20/01/2022',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'Quem pensa enriquece',
      author: 'Napoleon Hill',
      genre: 'Finanças',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro09.png',
      systemEntryDate: '12/06/2019',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'Ansiedade: Como enfrentar o mal do século',
      author: 'Augusto Cury',
      genre: 'Autoajuda',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro10.png',
      systemEntryDate: '13/02/2017',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'Gatilhos Mentais',
      author: 'Gustavo Ferreira',
      genre: 'Web Marketing',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro11.png',
      systemEntryDate: '29/12/2021',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'O poder da autorresponsabilidade',
      author: 'Paulo Vieira',
      genre: 'Autoajuda',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro12.png',
      systemEntryDate: '14/07/2020',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'Trabalhe 4 horas por semana',
      author: 'Timothy Ferriss',
      genre: 'Autoajuda',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro13.png',
      systemEntryDate: '12/04/2019',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'O milagre da manhã',
      author: 'Hal Elrod',
      genre: 'Autoajuda',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro14.png',
      systemEntryDate: '11/06/2017',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
    {
      tittle: 'Mindset',
      author: 'Carol S. Dweck',
      genre: 'Finanças',
      status: {
        isActive: true,
        description: '',
      },
      image: './assets/livro15.png',
      systemEntryDate: '22/09/2020',
      synopsis:
        'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
      rentHistory: [],
    },
  ],
};

function Home() {
  localStorage.setItem('dados', JSON.stringify(data));
  return (
    <>
      <Header />
      <Main>
        <div className="w-full flex flex-wrap gap-10 justify-center pt-48">
          <Link to="cadastro">
            <Card Icon={Logo} text="Cadastrar novo livro" />
          </Link>
          <Link to="biblioteca">
            <Card Icon={Book} text="Biblioteca" />
          </Link>
          <Link to="historico">
            <Card Icon={Pending} text="Histórico de empréstimos" />
          </Link>
        </div>
      </Main>
    </>
  );
}

export default Home;
