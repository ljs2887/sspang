import React, { useCallback, useState } from 'react'
import { searchGym } from 'api'
import "css/Main.css"

const GymSearch = () => {

  const [gym, setGym] = useState('')
  const [gymRes, setGymRes] = useState([])

  const onSubmitForm = useCallback(async (e) => {
    e.preventDefault()
      try {
        const { data } = await searchGym(gym)
        setGymRes([...data])
      } catch (error) {
        console.error(error);
        if (error.response.status === 400) {
          alert(error.response.data.message);
        }
      }
    }, [gym]
  )

  const onChangeGym = (e) => {
    setGym(e.target.value)
  }

  return (
    <>
      <div className="main_search">
        <form onSubmit={ onSubmitForm }>
          <input placeholder="체육관명을 검색해주세요!" value={ gym } onChange={ onChangeGym }/>
          <button type="submit">확인</button>
        </form>
      </div>

      {gymRes.map(v => (
        <>
          <div key={v._id}>{v.name}</div>
          <div className="main_line"></div>
        </>
      ))}
      
    </>
  )
}

export default GymSearch
