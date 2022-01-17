import { useEffect, useCallback, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useDispatch, useSelector } from 'react-redux'

import { heroCreated } from '../../actions'

import Spinner from '../spinner/Spinner'

import { v4 as uuidv4 } from 'uuid'

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
  // Состояния для контроля формы
  const [heroName, setHeroName] = useState('')
  const [heroDescr, setHeroDescr] = useState('')
  const [heroElement, setHeroElement] = useState('')

  const { filters, filtersLoadingStatus } = useSelector((state) => state.filters)
  const { request } = useHttp()
  const dispatch = useDispatch()

  if (filtersLoadingStatus === 'loading') {
    return <Spinner />
  } else if (filtersLoadingStatus === 'error') {
    return <h5 className='text-center mt-5'>Ошибка загрузки</h5>
  }

  const renderFiltersList = (arr) => {
    if (arr.length === 0 || !arr) {
      return <h5 className='text-center mt-5'>Фильтров пока нет</h5>
    }

    return arr.map(({ name }) => {
      if (name === 'all') return

      return <option key={name}>{name}</option>
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const newHero = {
      id: uuidv4(),
      name: heroName,
      description: heroDescr,
      element: heroElement,
    }

    // Отправляем данные на сервер в формате JSON
    // ТОЛЬКО если запрос успешен - отправляем персонажа в store
    request('http://localhost:3001/heroes', 'POST', JSON.stringify(newHero))
      .then((res) => console.log(res, 'Отправка успешна'))
      .then(dispatch(heroCreated(newHero)))
      .catch((err) => console.log(err))

    // Очищаем форму после отправки
    setHeroName('')
    setHeroDescr('')
    setHeroElement('')
  }

  const filtersList = renderFiltersList(filters)

  return (
    <form
      className='border p-4 shadow-lg rounded'
      onSubmit={(event) => onSubmit(event)}
    >
      <div className='mb-3'>
        <label htmlFor='name' className='form-label fs-4'>
          Имя нового героя
        </label>
        <input
          required
          type='text'
          name='name'
          className='form-control'
          id='name'
          placeholder='Как меня зовут?'
          value={heroName}
          onChange={(event) => setHeroName(event.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='text' className='form-label fs-4'>
          Описание
        </label>
        <textarea
          required
          name='text'
          className='form-control'
          id='text'
          placeholder='Что я умею?'
          style={{ height: '130px' }}
          value={heroDescr}
          onChange={(event) => setHeroDescr(event.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='element' className='form-label'>
          Выбрать элемент героя
        </label>
        <select
          required
          className='form-select'
          id='element'
          name='element'
          value={heroElement}
          onChange={(e) => setHeroElement(e.target.value)}
        >
          <option value=''>Я владею элементом...</option>
          {filtersList}
        </select>
      </div>

      <button type='submit' className='btn btn-primary'>
        Создать
      </button>
    </form>
  )
}

export default HeroesAddForm
