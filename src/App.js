import React, { useState, useMemo } from 'react'
import CardFilter from './components/CardFilter';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/modal/Modal';
import { cardsList } from './data/cards';
import './style/App.css'
import Button from './UI/button/Button';

function App() {
  const [cards, setCards] = useState(cardsList)
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)



  const sortedCards = useMemo(() => {
    console.log('Sorted function did')
    if (filter.sort) {
      return [...cards].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]))
    }
    return cards;
  }, [filter.sort, cards])

  const sortedAndSearchedCards = useMemo(() => {
    return sortedCards.filter(card => card.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedCards])


  return (
    <div className="App">
      <Modal visible={modal} setVisible={setModal}>
        <h1>23</h1>
        <Button onClick={() => setModal(false)}>close</Button>
      </Modal>
      <Header />
      <Button onClick={() => setModal(true)}>account</Button>
      <CardFilter filter={filter} setFilter={setFilter} />
      <CardList cards={sortedAndSearchedCards} />
      <Footer />
    </div>
  );
}

export default App;
