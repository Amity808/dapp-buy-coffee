import React from 'react'
import Header from './Header'
import MinHeader from './MinHeader'
import AddCoffee from './AddCoffee'
import BuyCoffeeList from './BuyCoffeeList'
import Footer from './Footer'
// type Props = {}

const Home = () => {
  return (
    <div>
        <Header />
        <MinHeader />
        <AddCoffee />
        <BuyCoffeeList />
        <Footer />
    </div>
  )
}
export default Home;